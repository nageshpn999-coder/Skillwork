# WorkPin — Setup గైడ్

## 1. Firebase Setup
1. https://console.firebase.google.com → కొత్త ప్రాజెక్ట్ క్రియేట్ చేయండి (లేదా మీ ఉన్న `onlineland-28234` ప్రాజెక్ట్ వాడుకోవచ్చు)
2. Build → Firestore Database → Create database → **test mode** లో స్టార్ట్ చేయండి
3. Project Settings (⚙️) → General → "Your apps" → Web app (</>) → app రిజిస్టర్ చేయండి
4. అక్కడ వచ్చే `firebaseConfig` వాల్యూస్ కాపీ చేసి `assets/firebase-config.js` ఫైల్‌లో పేస్ట్ చేయండి

## 2. Firestore Security Rules (ముఖ్యం)
Firestore → Rules ట్యాబ్‌లో ఇది పెట్టండి — ఎవరైనా చదవగలరు, రాయగలరు (public tool కాబట్టి), కానీ delete admin.html నుండి మాత్రమే జరుగుతుంది కాబట్టి ఫర్వాలేదు:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /panipniWorkers/{doc} {
      allow read: if true;
      allow create: if true;
      allow delete: if true;
    }
    match /panipniWork/{doc} {
      allow read: if true;
      allow create: if true;
      allow delete: if true;
    }
  }
}
```

## 3. Admin పాస్‌వర్డ్ మార్చండి
`admin.html` ఫైల్‌లో ఈ లైన్ వెతికి మీకు నచ్చిన పాస్‌వర్డ్ పెట్టండి:
```js
const ADMIN_PASS = "onlineland2026";
```

## 4. GitHub Pages Deploy (మీ ఎప్పటి workflow లాగే)
1. కొత్త repo క్రియేట్ చేయండి (ఉదా: `panipni-connect`)
2. ఈ folder లో ఉన్న అన్ని ఫైల్స్ (`index.html`, `worker-enroll.html`, `post-work.html`, `find-work.html`, `find-workers.html`, `admin.html`, `assets/` folder మొత్తం) అప్‌లోడ్ చేయండి
3. Settings → Pages → Deploy from branch → main → Save
4. కొన్ని నిమిషాల్లో `https://<username>.github.io/panipni-connect/` లో లైవ్ అవుతుంది

## Pేజీలు
- `index.html` — హోమ్ పేజీ (2 దారులు)
- `worker-enroll.html` — పని కావాలి అనుకునే వారి నమోదు ఫారం
- `post-work.html` — మనుషులు కావాలి అనుకునే వారి పని పోస్టింగ్ ఫారం
- `find-work.html` — వర్కర్స్ కోసం — దగ్గరలో పని జాబితా (దూరం ప్రకారం sort)
- `find-workers.html` — Employers కోసం — దగ్గరలో వర్కర్స్ జాబితా (దూరం ప్రకారం sort)
- `admin.html` — మీ కంట్రోల్ ప్యానెల్ (view + delete)

## దూరం (Distance) ఫీచర్ ఎలా పనిచేస్తుంది
- నమోదు/పోస్టింగ్ సమయంలో బ్రౌజర్ GPS permission అడుగుతుంది. "Allow" చేస్తే వారి lat/lng సేవ్ అవుతుంది (deny చేసినా ఫారం సబ్మిట్ అవుతుంది, ఫర్వాలేదు).
- Listing పేజీలు (`find-work.html` / `find-workers.html`) చూసేవారి GPS కూడా అడుగుతాయి.
- ఇద్దరికీ GPS ఉంటే → **ఖచ్చితమైన కి.మీ దూరం** (📏 బ్యాడ్జ్) చూపిస్తుంది, దూరం ప్రకారం దగ్గరున్నవి మొదట కనిపిస్తాయి.
- GPS లేకపోతే (deny చేసినా/పని చేయకపోయినా) → చూసేవారు తమ జిల్లా/మండలం మాన్యువల్‌గా ఎంచుకోవచ్చు, దాని ఆధారంగా **"అదే ఊరు" / "అదే మండలం" / "అదే జిల్లా"** (≈ బ్యాడ్జ్) సుమారు దూరం చూపిస్తుంది.
- GPS పనిచేయాలంటే site **https** లో ఉండాలి — GitHub Pages default గా https ఇస్తుంది కాబట్టి సమస్య ఉండదు.

## తర్వాత add చేయగలిగేవి (ఇప్పుడు లేవు)
- Mandal-wise cascading dropdown (ఇప్పుడు మండలం/ఊరు free-text)
- OTP verification
- Rating/review system
- SMS notification (కొత్త matching work వచ్చినప్పుడు)
