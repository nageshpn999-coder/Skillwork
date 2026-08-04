// WorkPin service worker
// Strategy: NETWORK FIRST — ఎప్పుడూ కొత్త ఫైల్ ముందు try చేస్తుంది.
// నెట్ లేకపోతే మాత్రమే cache నుండి ఇస్తుంది (offline support).
// ఇలా చేయడం వల్ల GitHub లో update చేసిన వెంటనే users కి కొత్త version వస్తుంది.

const CACHE = 'workpin-v1';
const CORE = [
  'index.html',
  'worker-enroll.html',
  'post-work.html',
  'find-work.html',
  'find-workers.html',
  'my-profile.html',
  'settings.html',
  'privacy.html',
  'terms.html',
  'about.html',
  'assets/style.css',
  'assets/data.js',
  'assets/icons/icon-192.png'
];

self.addEventListener('install', e => {
  self.skipWaiting(); // కొత్త version వెంటనే activate
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(CORE).catch(() => {}))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  // GET requests మాత్రమే; Firebase/Google APIs ని touch చేయొద్దు
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(req)
      .then(res => {
        // తాజా copy ని cache లో పెట్టు (offline కోసం)
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy).catch(() => {}));
        return res;
      })
      .catch(() =>
        caches.match(req).then(hit => hit || caches.match('index.html'))
      )
  );
});
