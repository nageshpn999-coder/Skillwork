// ============================================
// Shared data — Telangana అన్ని జిల్లాలు + Hyderabad areas + bilingual (తెలుగు/English)
// Canonical stored values = Telugu (పాత entries తో compatibility కోసం)
// ============================================

// ---- Language ----
function getLang(){ return localStorage.getItem('sw_lang') || ''; }
function setLang(l){ localStorage.setItem('sw_lang', l); }

const I18N = {
  te: {
    brand_home: "దగ్గరలో పని, దగ్గరలో మనుషులు",
    home_h1: "మీ దగ్గర ఉన్న పని,<br>మీ దగ్గర ఉన్న మనుషులు",
    home_sub: "తెలంగాణ వ్యాప్తంగా — పని వెతుక్కునే వారికి, పని ఇచ్చే వారికి మధ్య వారధి. హైదరాబాద్ నుండి పల్లెల వరకు.",
    need_work: "నాకు పని కావాలి",
    need_work_sub: "మీ పేరు, స్కిల్, ప్రాంతం నమోదు చేసుకోండి — దగ్గరలో ఉన్న పని మీకు కనిపిస్తుంది",
    need_people: "నాకు మనుషులు కావాలి",
    need_people_sub: "మీకు కావాల్సిన పని పోస్ట్ చేయండి — దగ్గరలో ఉన్న వర్కర్స్ మీకు కనిపిస్తారు",
    already: "ఇప్పటికే నమోదు చేసుకున్నారా?",
    see_work: "📋 పని జాబితా చూడండి",
    see_workers: "👥 వర్కర్స్ చూడండి",
    foot: "తెలంగాణ కోసం స్థానిక పని వేదిక",
    enroll_title: "మీ వివరాలు నమోదు చేయండి",
    enroll_sub: "ఇది ఉచితం. మీ ఫోన్ నంబర్ దగ్గరలో పని ఇచ్చే వారికి కనిపిస్తుంది, వారు నేరుగా కాల్/వాట్సాప్ చేస్తారు.",
    your_name: "మీ పేరు",
    phone: "ఫోన్ నంబర్ (WhatsApp ఉన్నది)",
    district: "జిల్లా",
    mandal: "మండలం",
    area: "ఏరియా",
    village: "ఊరు / కాలనీ",
    skills_label: "మీ పని / స్కిల్ (ఒకటి కంటే ఎక్కువ ఎంచుకోవచ్చు)",
    available: "ఎప్పటి నుండి పనికి రెడీ? (optional)",
    submit_enroll: "నమోదు చేయండి",
    enroll_note: "Submit చేసిన తర్వాత మీ వివరాలు పని ఇచ్చే వారికి కనిపిస్తాయి. 📍 Location permission అడిగితే \"Allow\" చేయండి — దూరం ఖచ్చితంగా చూపించగలుగుతాం.",
    post_title: "మీకు కావాల్సిన పని వివరాలు",
    post_sub: "పోస్ట్ చేసిన తర్వాత, ఆ ప్రాంతంలో ఉన్న వర్కర్స్‌కి కనిపిస్తుంది. వారు నేరుగా మిమ్మల్ని కాల్/వాట్సాప్ చేస్తారు.",
    biz_name: "మీ పేరు / సంస్థ పేరు",
    work_type: "ఎలాంటి పని కావాలి? (ఒకటి కంటే ఎక్కువ ఎంచుకోవచ్చు)",
    how_many: "ఎంతమంది కావాలి",
    when_need: "ఎప్పుడు కావాలి",
    wage: "కూలి/జీతం (optional)",
    details: "వివరాలు (optional)",
    submit_post: "పని పోస్ట్ చేయండి",
    post_note: "Submit చేసిన తర్వాత మీ పోస్టింగ్ వర్కర్స్‌కి కనిపిస్తుంది. 📍 Location permission అడిగితే \"Allow\" చేయండి.",
    nearby_work: "దగ్గరలో పని",
    nearby_workers: "దగ్గరలో వర్కర్స్",
    all_districts: "అన్ని జిల్లాలు",
    list_sub_work: "జిల్లా బట్టి filter చేసుకోండి — దగ్గరలో ఉన్న పని పోస్టింగ్‌లు ఇక్కడ కనిపిస్తాయి.",
    list_sub_workers: "జిల్లా బట్టి filter చేసుకోండి — దగ్గరలో నమోదు అయిన వర్కర్స్ ఇక్కడ కనిపిస్తారు.",
    loc_checking: "📍 మీ లొకేషన్ చెక్ చేస్తున్నాం...",
    loc_found: "✅ మీ లొకేషన్ దొరికింది — ఖచ్చితమైన దూరం చూపిస్తున్నాం",
    loc_notfound: "📍 Location దొరకలేదు — మీ జిల్లా/మండలం ఎంచుకోండి (సుమారుగా దూరం చూపిస్తాం)",
    your_district: "మీ జిల్లా",
    your_mandal: "మీ మండలం/ఏరియా",
    call: "📞 కాల్ చేయండి",
    empty_work: "ప్రస్తుతం ఈ ప్రాంతంలో పని పోస్టింగ్‌లు లేవు.<br>తర్వాత మళ్ళీ చూడండి.",
    empty_workers: "ప్రస్తుతం ఈ ప్రాంతంలో నమోదైన వర్కర్స్ లేరు.<br>తర్వాత మళ్ళీ చూడండి.",
    err_load: "డేటా లోడ్ కాలేదు — Firebase config సరిచూడండి.",
    err_phone: "దయచేసి సరైన 10 అంకెల ఫోన్ నంబర్ ఇవ్వండి",
    err_skill: "కనీసం ఒక స్కిల్ ఎంచుకోండి",
    err_worktype: "కనీసం ఒక పని రకం ఎంచుకోండి",
    ok_enroll: "✅ నమోదు పూర్తయింది!",
    ok_post: "✅ పోస్ట్ చేయబడింది!",
    err_generic: "⚠️ Error — Firebase config సరిచూడండి",
    ready: "🗓️ రెడీ:",
    people_needed: "👥 కావాల్సిన మంది:",
    when_lbl: "🗓️ ఎప్పుడు:",
    wage_lbl: "💰 కూలి:",
    same_village: "అదే ఊరు", same_mandal: "అదే మండలం", same_district: "అదే జిల్లా", other_district: "వేరే జిల్లా",
    dist_m: "సుమారు {n} మీ దూరం", dist_km: "{n} కి.మీ దూరం",
    wa_msg_work: "నమస్తే, మీ పని పోస్టింగ్ చూసి కాంటాక్ట్ చేస్తున్నాను",
    wa_msg_worker: "నమస్తే, మీ ప్రొఫైల్ చూసి పని కోసం కాంటాక్ట్ చేస్తున్నాను",
    dist_all: "అన్ని దూరాలు",
    within: "{n} KM లోపు",
    open_map: "📍 మ్యాప్‌లో చూడండి",
    ph_name: "ఉదా: రమేష్", ph_phone: "10 అంకెల నంబర్", ph_mandal: "ఉదా: మక్తల్", ph_village: "ఉదా: గోపాల్‌పేట్ / KPHB కాలనీ",
    ph_available: "ఉదా: ఇప్పుడే / రేపటి నుండి", ph_bizname: "ఉదా: వెంకటేష్ / ABC కన్‌స్ట్రక్షన్స్",
    ph_count: "ఉదా: 5 మంది", ph_when: "ఉదా: రేపు ఉదయం నుండి", ph_wage: "ఉదా: రోజుకు ₹600 / నెలకు ₹15,000", ph_details: "ఇంకా ఏమైనా వివరాలు..."
  },
  en: {
    brand_home: "Work nearby, people nearby",
    home_h1: "Find work near you,<br>find people near you",
    home_sub: "Across Telangana — a bridge between people looking for work and people offering work. From Hyderabad to villages.",
    need_work: "I need work",
    need_work_sub: "Register your name, skill and area — nearby work will be shown to you",
    need_people: "I need workers",
    need_people_sub: "Post the work you need — nearby workers will be shown to you",
    already: "Already registered?",
    see_work: "📋 Browse work",
    see_workers: "👥 Browse workers",
    foot: "A local work platform for Telangana",
    enroll_title: "Register your details",
    enroll_sub: "It's free. Your phone number will be visible to nearby employers, who will call/WhatsApp you directly.",
    your_name: "Your name",
    phone: "Phone number (with WhatsApp)",
    district: "District",
    mandal: "Mandal",
    area: "Area",
    village: "Village / Colony",
    skills_label: "Your work / skills (select one or more)",
    available: "Available from when? (optional)",
    submit_enroll: "Register",
    enroll_note: "After submitting, your details will be visible to employers. 📍 If asked for location permission, tap \"Allow\" — this lets us show exact distances.",
    post_title: "Details of the work you need",
    post_sub: "After posting, workers in that area will see it and call/WhatsApp you directly.",
    biz_name: "Your name / business name",
    work_type: "What kind of work? (select one or more)",
    how_many: "How many people needed",
    when_need: "When needed",
    wage: "Wage/Salary (optional)",
    details: "Details (optional)",
    submit_post: "Post work",
    post_note: "After submitting, your posting will be visible to workers. 📍 If asked for location permission, tap \"Allow\".",
    nearby_work: "Work nearby",
    nearby_workers: "Workers nearby",
    all_districts: "All districts",
    list_sub_work: "Filter by district — nearby work postings appear here.",
    list_sub_workers: "Filter by district — nearby registered workers appear here.",
    loc_checking: "📍 Checking your location...",
    loc_found: "✅ Location found — showing exact distances",
    loc_notfound: "📍 Location not available — select your district/mandal (approximate distance will be shown)",
    your_district: "Your district",
    your_mandal: "Your mandal/area",
    call: "📞 Call",
    empty_work: "No work postings in this area right now.<br>Please check back later.",
    empty_workers: "No registered workers in this area right now.<br>Please check back later.",
    err_load: "Could not load data — check Firebase config.",
    err_phone: "Please enter a valid 10-digit phone number",
    err_skill: "Select at least one skill",
    err_worktype: "Select at least one work type",
    ok_enroll: "✅ Registered successfully!",
    ok_post: "✅ Posted successfully!",
    err_generic: "⚠️ Error — check Firebase config",
    ready: "🗓️ Ready:",
    people_needed: "👥 People needed:",
    when_lbl: "🗓️ When:",
    wage_lbl: "💰 Wage:",
    same_village: "Same village", same_mandal: "Same mandal", same_district: "Same district", other_district: "Other district",
    dist_m: "About {n} m away", dist_km: "{n} km away",
    wa_msg_work: "Hello, I saw your work posting and I'm contacting you",
    wa_msg_worker: "Hello, I saw your profile and I'm contacting you about work",
    dist_all: "All distances",
    within: "Within {n} KM",
    open_map: "📍 Open in Google Maps",
    ph_name: "e.g. Ramesh", ph_phone: "10-digit number", ph_mandal: "e.g. Makthal", ph_village: "e.g. Gopalpet / KPHB Colony",
    ph_available: "e.g. Immediately / From tomorrow", ph_bizname: "e.g. Venkatesh / ABC Constructions",
    ph_count: "e.g. 5 people", ph_when: "e.g. From tomorrow morning", ph_wage: "e.g. ₹600/day / ₹15,000/month", ph_details: "Any other details..."
  }
};

function t(key){
  const l = getLang() || 'te';
  return (I18N[l] && I18N[l][key]) || I18N.te[key] || key;
}

// Apply translations to elements with data-i / data-i-ph / data-i-html
function applyLang(){
  document.querySelectorAll('[data-i]').forEach(el=>{ el.textContent = t(el.getAttribute('data-i')); });
  document.querySelectorAll('[data-i-html]').forEach(el=>{ el.innerHTML = t(el.getAttribute('data-i-html')); });
  document.querySelectorAll('[data-i-ph]').forEach(el=>{ el.placeholder = t(el.getAttribute('data-i-ph')); });
  const tog = document.getElementById('langToggle');
  if(tog) tog.textContent = (getLang()==='en') ? 'తెలుగు' : 'EN';
}

function toggleLang(){
  setLang(getLang()==='en' ? 'te' : 'en');
  location.reload();
}

// Show language overlay on first visit (index page)
function maybeShowLangOverlay(){
  if(getLang()) return false;
  const ov = document.getElementById('langOverlay');
  if(ov){ ov.style.display='flex'; return true; }
  return false;
}
function chooseLang(l){
  setLang(l);
  const ov = document.getElementById('langOverlay');
  if(ov) ov.style.display='none';
  applyLang();
  if(typeof afterLangReady==='function') afterLangReady();
}

// ---- Telangana districts (33) — canonical value = Telugu ----
const DISTRICTS = [
  {te:"హైదరాబాద్", en:"Hyderabad"},
  {te:"రంగారెడ్డి", en:"Rangareddy"},
  {te:"మేడ్చల్–మల్కాజిగిరి", en:"Medchal–Malkajgiri"},
  {te:"సంగారెడ్డి", en:"Sangareddy"},
  {te:"వికారాబాద్", en:"Vikarabad"},
  {te:"మహబూబ్‌నగర్", en:"Mahabubnagar"},
  {te:"నారాయణపేట", en:"Narayanpet"},
  {te:"జోగులాంబ గద్వాల", en:"Jogulamba Gadwal"},
  {te:"వనపర్తి", en:"Wanaparthy"},
  {te:"నాగర్‌కర్నూల్", en:"Nagarkurnool"},
  {te:"మెదక్", en:"Medak"},
  {te:"సిద్దిపేట", en:"Siddipet"},
  {te:"నిజామాబాద్", en:"Nizamabad"},
  {te:"కామారెడ్డి", en:"Kamareddy"},
  {te:"నిర్మల్", en:"Nirmal"},
  {te:"ఆదిలాబాద్", en:"Adilabad"},
  {te:"కొమరం భీమ్ ఆసిఫాబాద్", en:"Komaram Bheem Asifabad"},
  {te:"మంచిర్యాల", en:"Mancherial"},
  {te:"పెద్దపల్లి", en:"Peddapalli"},
  {te:"కరీంనగర్", en:"Karimnagar"},
  {te:"జగిత్యాల", en:"Jagtial"},
  {te:"రాజన్న సిరిసిల్ల", en:"Rajanna Sircilla"},
  {te:"వరంగల్", en:"Warangal"},
  {te:"హనుమకొండ", en:"Hanumakonda"},
  {te:"జనగామ", en:"Jangaon"},
  {te:"జయశంకర్ భూపాలపల్లి", en:"Jayashankar Bhupalpally"},
  {te:"ములుగు", en:"Mulugu"},
  {te:"మహబూబాబాద్", en:"Mahabubabad"},
  {te:"ఖమ్మం", en:"Khammam"},
  {te:"భద్రాద్రి కొత్తగూడెం", en:"Bhadradri Kothagudem"},
  {te:"నల్గొండ", en:"Nalgonda"},
  {te:"సూర్యాపేట", en:"Suryapet"},
  {te:"యాదాద్రి భువనగిరి", en:"Yadadri Bhuvanagiri"}
];

// ---- Hyderabad areas — canonical value = Telugu ----
const HYD_AREAS = [
  {te:"అమీర్‌పేట", en:"Ameerpet"},
  {te:"కూకట్‌పల్లి", en:"Kukatpally"},
  {te:"KPHB", en:"KPHB"},
  {te:"మియాపూర్", en:"Miyapur"},
  {te:"చందానగర్", en:"Chandanagar"},
  {te:"గచ్చిబౌలి", en:"Gachibowli"},
  {te:"మాదాపూర్", en:"Madhapur"},
  {te:"హైటెక్ సిటీ", en:"Hitech City"},
  {te:"కొండాపూర్", en:"Kondapur"},
  {te:"జూబ్లీ హిల్స్", en:"Jubilee Hills"},
  {te:"బంజారా హిల్స్", en:"Banjara Hills"},
  {te:"పంజాగుట్ట", en:"Panjagutta"},
  {te:"సోమాజిగూడ", en:"Somajiguda"},
  {te:"బేగంపేట", en:"Begumpet"},
  {te:"సికింద్రాబాద్", en:"Secunderabad"},
  {te:"అల్వాల్", en:"Alwal"},
  {te:"కొంపల్లి", en:"Kompally"},
  {te:"ECIL", en:"ECIL"},
  {te:"ఉప్పల్", en:"Uppal"},
  {te:"హబ్సిగూడ", en:"Habsiguda"},
  {te:"తార్నాక", en:"Tarnaka"},
  {te:"అంబర్‌పేట", en:"Amberpet"},
  {te:"ముషీరాబాద్", en:"Musheerabad"},
  {te:"కోఠి", en:"Koti"},
  {te:"అబిడ్స్", en:"Abids"},
  {te:"నాంపల్లి", en:"Nampally"},
  {te:"మలక్‌పేట", en:"Malakpet"},
  {te:"దిల్‌సుఖ్‌నగర్", en:"Dilsukhnagar"},
  {te:"LB నగర్", en:"LB Nagar"},
  {te:"వనస్థలిపురం", en:"Vanasthalipuram"},
  {te:"చార్మినార్", en:"Charminar"},
  {te:"సంతోష్ నగర్", en:"Santosh Nagar"},
  {te:"మెహదీపట్నం", en:"Mehdipatnam"},
  {te:"టోలిచౌకి", en:"Tolichowki"},
  {te:"అత్తాపూర్", en:"Attapur"},
  {te:"రాజేంద్రనగర్", en:"Rajendranagar"},
  {te:"శంషాబాద్", en:"Shamshabad"},
  {te:"పటాన్‌చెరు", en:"Patancheru"},
  {te:"బాలానగర్", en:"Balanagar"},
  {te:"నిజాంపేట", en:"Nizampet"},
  {te:"ఇతర ఏరియా (Other)", en:"Other area"}
];

// ---- Skill groups — canonical value = te ----
const SKILL_GROUPS = [
  {
    group: {te:"🌾 వ్యవసాయం", en:"🌾 Agriculture"},
    items: [
      {te:"వ్యవసాయ కూలీలు", en:"Farm labour"},
      {te:"ట్రాక్టర్ డ్రైవర్", en:"Tractor driver"},
      {te:"పంట కోత", en:"Harvesting"},
      {te:"స్ప్రేయింగ్", en:"Spraying"},
      {te:"బోరు/పంపు మెకానిక్", en:"Bore/pump mechanic"},
      {te:"ఎడ్ల బండి (Bull Cart)", en:"Bull cart"}
    ]
  },
  {
    group: {te:"🏗️ నిర్మాణం", en:"🏗️ Construction"},
    items: [
      {te:"మేస్త్రీ", en:"Mason"},
      {te:"కార్పెంటర్", en:"Carpenter"},
      {te:"పెయింటర్", en:"Painter"},
      {te:"ఎలక్ట్రీషియన్", en:"Electrician"},
      {te:"ప్లంబర్", en:"Plumber"},
      {te:"వెల్డర్", en:"Welder"},
      {te:"టైల్స్/మార్బుల్ వర్క్", en:"Tiles/marble work"},
      {te:"సెంటరింగ్ వర్క్", en:"Centering work"},
      {te:"సాధారణ కూలీలు", en:"General labour"},
      {te:"ఇంటీరియర్ డిజైనర్", en:"Interior designer"},
      {te:"JCB ఆపరేటర్", en:"JCB operator"},
      {te:"సర్వేయర్ (Land Surveyor)", en:"Land surveyor"},
      {te:"ఫాల్స్ సీలింగ్ వర్క్", en:"False ceiling work"},
      {te:"గ్రానైట్/స్టోన్ వర్క్", en:"Granite/stone work"}
    ]
  },
  {
    group: {te:"🚗 రవాణా & డెలివరీ", en:"🚗 Transport & Delivery"},
    items: [
      {te:"కారు/ఆటో డ్రైవర్", en:"Car/auto driver"},
      {te:"లారీ డ్రైవర్", en:"Lorry driver"},
      {te:"క్యాబ్/బైక్ టాక్సీ డ్రైవర్", en:"Cab/bike taxi driver"},
      {te:"డెలివరీ ఎగ్జిక్యూటివ్", en:"Delivery executive"},
      {te:"ప్యాకర్స్ & మూవర్స్ హెల్పర్", en:"Packers & movers helper"}
    ]
  },
  {
    group: {te:"🏠 గృహ సేవలు", en:"🏠 Home Services"},
    items: [
      {te:"వంట మనిషి", en:"Cook"},
      {te:"ఇంటి పని", en:"House help"},
      {te:"బేబీ సిట్టింగ్/ఎల్డర్ కేర్", en:"Baby sitting/elder care"},
      {te:"గార్డెనింగ్", en:"Gardening"},
      {te:"హౌస్ కీపింగ్ (అపార్ట్మెంట్/ఆఫీస్)", en:"Housekeeping (apartment/office)"}
    ]
  },
  {
    group: {te:"🔧 టెక్నికల్/రిపేర్", en:"🔧 Technical/Repair"},
    items: [
      {te:"AC/Fridge మెకానిక్", en:"AC/fridge mechanic"},
      {te:"మొబైల్/ఎలక్ట్రానిక్స్ రిపేర్", en:"Mobile/electronics repair"},
      {te:"టైలర్/దర్జీ", en:"Tailor"},
      {te:"బైక్/కారు మెకానిక్", en:"Bike/car mechanic"},
      {te:"CCTV/నెట్‌వర్క్ టెక్నీషియన్", en:"CCTV/network technician"}
    ]
  },
  {
    group: {te:"🛡️ సెక్యూరిటీ & ఇతర", en:"🛡️ Security & Others"},
    items: [
      {te:"సెక్యూరిటీ గార్డ్", en:"Security guard"},
      {te:"వాచ్‌మెన్", en:"Watchman"},
      {te:"లిఫ్ట్ ఆపరేటర్", en:"Lift operator"},
      {te:"క్లీనింగ్ స్టాఫ్", en:"Cleaning staff"},
      {te:"హమాలీ/లోడింగ్-అన్‌లోడింగ్", en:"Hamali/loading-unloading"}
    ]
  },
  {
    group: {te:"🏪 దుకాణాలు/ఆఫీస్", en:"🏪 Shops/Office"},
    items: [
      {te:"సేల్స్ మ్యాన్", en:"Salesman"},
      {te:"డెలివరీ బాయ్", en:"Delivery boy"},
      {te:"హెల్పర్", en:"Helper"},
      {te:"ఆఫీస్ బాయ్", en:"Office boy"},
      {te:"రిసెప్షనిస్ట్/ఫ్రంట్ డెస్క్", en:"Receptionist/front desk"},
      {te:"హోటల్/రెస్టారెంట్ స్టాఫ్", en:"Hotel/restaurant staff"}
    ]
  }
];

// ---- Urban skill groups (Hyderabad) — canonical value = te ----
const SKILL_GROUPS_URBAN = [
  {
    group: {te:"💻 IT & ఆఫీస్", en:"💻 IT & Office"},
    items: [
      {te:"సాఫ్ట్‌వేర్ డెవలపర్", en:"Software Developer"},
      {te:"వెబ్ డెవలపర్", en:"Web Developer"},
      {te:"మొబైల్ యాప్ డెవలపర్", en:"Mobile App Developer"},
      {te:"డేటా ఎంట్రీ ఆపరేటర్", en:"Data Entry Operator"},
      {te:"కంప్యూటర్ ఆపరేటర్", en:"Computer Operator"},
      {te:"గ్రాఫిక్ డిజైనర్", en:"Graphic Designer"},
      {te:"డిజిటల్ మార్కెటింగ్", en:"Digital Marketing"},
      {te:"అకౌంటెంట్", en:"Accountant"},
      {te:"ఆఫీస్ అసిస్టెంట్", en:"Office Assistant"},
      {te:"రిసెప్షనిస్ట్", en:"Receptionist"}
    ]
  },
  {
    group: {te:"🚚 డెలివరీ & లాజిస్టిక్స్", en:"🚚 Delivery & Logistics"},
    items: [
      {te:"డెలివరీ ఎగ్జిక్యూటివ్", en:"Delivery Executive"},
      {te:"బైక్ డెలివరీ", en:"Bike Delivery"},
      {te:"కొరియర్ డెలివరీ", en:"Courier Delivery"},
      {te:"వేర్‌హౌస్ వర్కర్", en:"Warehouse Worker"},
      {te:"పికర్ & ప్యాకర్", en:"Picker & Packer"},
      {te:"హమాలీ/లోడింగ్-అన్‌లోడింగ్", en:"Loader / Unloader"}
    ]
  },
  {
    group: {te:"🚗 డ్రైవర్లు", en:"🚗 Drivers"},
    items: [
      {te:"కారు డ్రైవర్", en:"Car Driver"},
      {te:"క్యాబ్ డ్రైవర్", en:"Cab Driver"},
      {te:"ఆటో డ్రైవర్", en:"Auto Driver"},
      {te:"బైక్ రైడర్", en:"Bike Rider"},
      {te:"ట్రక్/లారీ డ్రైవర్", en:"Truck Driver"},
      {te:"బస్ డ్రైవర్", en:"Bus Driver"}
    ]
  },
  {
    group: {te:"🏗️ నిర్మాణం", en:"🏗️ Construction"},
    items: [
      {te:"మేస్త్రీ", en:"Mason"},
      {te:"కార్పెంటర్", en:"Carpenter"},
      {te:"ఎలక్ట్రీషియన్", en:"Electrician"},
      {te:"ప్లంబర్", en:"Plumber"},
      {te:"పెయింటర్", en:"Painter"},
      {te:"వెల్డర్", en:"Welder"},
      {te:"టైల్స్/మార్బుల్ వర్క్", en:"Tiles Worker"},
      {te:"POP/ఫాల్స్ సీలింగ్ వర్క్", en:"POP Worker"},
      {te:"AC/Fridge మెకానిక్", en:"AC Technician"},
      {te:"CCTV/నెట్‌వర్క్ టెక్నీషియన్", en:"CCTV Technician"},
      {te:"సాధారణ కూలీలు", en:"General Labour"},
      {te:"ఇంటీరియర్ డిజైనర్", en:"Interior Designer"},
      {te:"JCB ఆపరేటర్", en:"JCB Operator"},
      {te:"సర్వేయర్ (Land Surveyor)", en:"Land Surveyor"}
    ]
  },
  {
    group: {te:"🏠 గృహ సేవలు", en:"🏠 Home Services"},
    items: [
      {te:"ఇంటి పని", en:"House Maid"},
      {te:"వంట మనిషి", en:"Cook"},
      {te:"హౌస్ కీపింగ్ (అపార్ట్మెంట్/ఆఫీస్)", en:"Housekeeping"},
      {te:"క్లీనింగ్ స్టాఫ్", en:"Cleaner"},
      {te:"గార్డెనింగ్", en:"Gardener"},
      {te:"బేబీ కేర్", en:"Baby Care"},
      {te:"ఎల్డర్ కేర్", en:"Elder Care"}
    ]
  },
  {
    group: {te:"💇 బ్యూటీ & వెల్‌నెస్", en:"💇 Beauty & Wellness"},
    items: [
      {te:"బార్బర్", en:"Barber"},
      {te:"హెయిర్ స్టైలిస్ట్", en:"Hair Stylist"},
      {te:"బ్యూటీషియన్", en:"Beautician"},
      {te:"మేకప్ ఆర్టిస్ట్", en:"Makeup Artist"},
      {te:"స్పా థెరపిస్ట్", en:"Spa Therapist"}
    ]
  },
  {
    group: {te:"🏥 హెల్త్‌కేర్", en:"🏥 Healthcare"},
    items: [
      {te:"డాక్టర్", en:"Doctor"},
      {te:"నర్స్", en:"Nurse"},
      {te:"ఫార్మసిస్ట్", en:"Pharmacist"},
      {te:"ల్యాబ్ టెక్నీషియన్", en:"Lab Technician"},
      {te:"ఫిజియోథెరపిస్ట్", en:"Physiotherapist"},
      {te:"కేర్‌టేకర్", en:"Caretaker"}
    ]
  },
  {
    group: {te:"🎓 విద్య", en:"🎓 Education"},
    items: [
      {te:"టీచర్", en:"Teacher"},
      {te:"ట్యూషన్ టీచర్", en:"Tuition Teacher"},
      {te:"లెక్చరర్", en:"Lecturer"},
      {te:"స్పోకెన్ ఇంగ్లీష్ ట్రైనర్", en:"Spoken English Trainer"},
      {te:"కంప్యూటర్ ట్రైనర్", en:"Computer Trainer"}
    ]
  },
  {
    group: {te:"🍽️ హోటల్ & రెస్టారెంట్", en:"🍽️ Hotel & Restaurant"},
    items: [
      {te:"చెఫ్", en:"Chef"},
      {te:"హోటల్ కుక్", en:"Hotel Cook"},
      {te:"వెయిటర్", en:"Waiter"},
      {te:"కిచెన్ హెల్పర్", en:"Kitchen Helper"},
      {te:"క్యాషియర్", en:"Cashier"},
      {te:"హోటల్ మేనేజర్", en:"Hotel Manager"}
    ]
  },
  {
    group: {te:"🛒 రిటైల్ & షాపింగ్", en:"🛒 Retail & Shopping"},
    items: [
      {te:"సేల్స్ ఎగ్జిక్యూటివ్", en:"Sales Executive"},
      {te:"స్టోర్ కీపర్", en:"Store Keeper"},
      {te:"బిల్లింగ్ ఎగ్జిక్యూటివ్", en:"Billing Executive"},
      {te:"షోరూమ్ స్టాఫ్", en:"Showroom Staff"}
    ]
  },
  {
    group: {te:"🏭 ఫ్యాక్టరీ & తయారీ", en:"🏭 Factory & Manufacturing"},
    items: [
      {te:"మెషిన్ ఆపరేటర్", en:"Machine Operator"},
      {te:"ప్రొడక్షన్ వర్కర్", en:"Production Worker"},
      {te:"క్వాలిటీ ఇన్‌స్పెక్టర్", en:"Quality Inspector"},
      {te:"ప్యాకేజింగ్ స్టాఫ్", en:"Packaging Staff"},
      {te:"ఫ్యాక్టరీ హెల్పర్", en:"Factory Helper"}
    ]
  },
  {
    group: {te:"🛡️ సెక్యూరిటీ", en:"🛡️ Security"},
    items: [
      {te:"సెక్యూరిటీ గార్డ్", en:"Security Guard"},
      {te:"బౌన్సర్", en:"Bouncer"},
      {te:"CCTV ఆపరేటర్", en:"CCTV Operator"},
      {te:"వాచ్‌మెన్", en:"Watchman"},
      {te:"లిఫ్ట్ ఆపరేటర్", en:"Lift Operator"}
    ]
  },
  {
    group: {te:"📞 కస్టమర్ సపోర్ట్", en:"📞 Customer Support"},
    items: [
      {te:"కాల్ సెంటర్ ఎగ్జిక్యూటివ్", en:"Call Center Executive"},
      {te:"టెలీకాలర్", en:"Telecaller"},
      {te:"కస్టమర్ సపోర్ట్ ఎగ్జిక్యూటివ్", en:"Customer Support Executive"}
    ]
  },
  {
    group: {te:"🧺 వ్యక్తిగత సేవలు", en:"🧺 Personal Services"},
    items: [
      {te:"టైలర్/దర్జీ", en:"Tailor"},
      {te:"లాండ్రీ వర్కర్", en:"Laundry Worker"},
      {te:"ఐరనింగ్ వర్కర్", en:"Ironing Worker"},
      {te:"షూ రిపేర్", en:"Shoe Repair"},
      {te:"మొబైల్/ఎలక్ట్రానిక్స్ రిపేర్", en:"Mobile Repair Technician"}
    ]
  },
  {
    group: {te:"🎉 ఈవెంట్స్ & మీడియా", en:"🎉 Events & Media"},
    items: [
      {te:"ఈవెంట్ స్టాఫ్", en:"Event Staff"},
      {te:"క్యాటరింగ్ స్టాఫ్", en:"Catering Staff"},
      {te:"ఫోటోగ్రాఫర్", en:"Photographer"},
      {te:"వీడియోగ్రాఫర్", en:"Videographer"},
      {te:"DJ/సౌండ్ సిస్టమ్", en:"DJ / Sound System"},
      {te:"డెకరేషన్ వర్కర్", en:"Decoration Worker"},
      {te:"లైటింగ్ వర్కర్", en:"Lighting Worker"},
      {te:"అంకర్/హోస్ట్", en:"Anchor / Host"}
    ]
  },
  {
    group: {te:"🏋️ ఫిట్‌నెస్ & స్పోర్ట్స్", en:"🏋️ Fitness & Sports"},
    items: [
      {te:"జిమ్ ట్రైనర్", en:"Gym Trainer"},
      {te:"యోగా ట్రైనర్", en:"Yoga Trainer"},
      {te:"స్విమ్మింగ్ కోచ్", en:"Swimming Coach"},
      {te:"స్పోర్ట్స్ కోచ్", en:"Sports Coach"},
      {te:"డాన్స్ టీచర్", en:"Dance Teacher"},
      {te:"మ్యూజిక్ టీచర్", en:"Music Teacher"}
    ]
  },
  {
    group: {te:"🔧 హోమ్ అప్లయన్స్ & టెక్నికల్", en:"🔧 Home Appliance & Technical"},
    items: [
      {te:"RO వాటర్ ప్యూరిఫైయర్ టెక్నీషియన్", en:"RO Water Purifier Technician"},
      {te:"వాషింగ్ మెషిన్ రిపేర్", en:"Washing Machine Repair"},
      {te:"ఇన్వర్టర్/బ్యాటరీ టెక్నీషియన్", en:"Inverter / Battery Technician"},
      {te:"సోలార్ ప్యానెల్ టెక్నీషియన్", en:"Solar Panel Technician"},
      {te:"లిఫ్ట్ టెక్నీషియన్", en:"Lift Technician"},
      {te:"గ్లాస్/అల్యూమినియం ఫ్యాబ్రికేషన్", en:"Glass / Aluminium Fabrication"},
      {te:"మాడ్యులర్ కిచెన్ ఫిట్టర్", en:"Modular Kitchen Fitter"},
      {te:"కర్టెన్/సోఫా వర్క్", en:"Curtain / Sofa Work"},
      {te:"పెస్ట్ కంట్రోల్ వర్కర్", en:"Pest Control Worker"},
      {te:"వాటర్ ట్యాంక్ క్లీనింగ్", en:"Water Tank Cleaning"},
      {te:"బైక్/కారు మెకానిక్", en:"Bike / Car Mechanic"},
      {te:"కారు వాషింగ్/డిటైలింగ్", en:"Car Washing / Detailing"}
    ]
  },
  {
    group: {te:"🏘️ అపార్ట్మెంట్ & డైలీ సేవలు", en:"🏘️ Apartment & Daily Services"},
    items: [
      {te:"అపార్ట్మెంట్ సూపర్‌వైజర్", en:"Apartment Supervisor"},
      {te:"ఫెసిలిటీ మేనేజర్", en:"Facility Manager"},
      {te:"వాటర్ క్యాన్ డెలివరీ", en:"Water Can Delivery"},
      {te:"పాల డెలివరీ", en:"Milk Delivery"},
      {te:"న్యూస్‌పేపర్ డెలివరీ", en:"Newspaper Delivery"},
      {te:"టిఫిన్/ఫుడ్ సర్వీస్", en:"Tiffin / Food Service"},
      {te:"పెట్ కేర్/డాగ్ వాకర్", en:"Pet Care / Dog Walker"},
      {te:"కార్ డ్రైవర్ (మంత్లీ)", en:"Monthly Car Driver"}
    ]
  },
  {
    group: {te:"🏢 ప్రొఫెషనల్ సేవలు", en:"🏢 Professional Services"},
    items: [
      {te:"రియల్ ఎస్టేట్ ఏజెంట్", en:"Real Estate Agent"},
      {te:"ఇన్సూరెన్స్ అడ్వైజర్", en:"Insurance Advisor"},
      {te:"లోన్ ఎగ్జిక్యూటివ్", en:"Loan Executive"},
      {te:"అడ్వకేట్", en:"Advocate"},
      {te:"చార్టర్డ్ అకౌంటెంట్", en:"Chartered Accountant"}
    ]
  }
];

// ---- lookup helpers ----
function districtLabel(teName){
  const d = DISTRICTS.find(x=>x.te===teName);
  if(!d) return teName;
  return getLang()==='en' ? d.en : d.te;
}
function areaLabel(teName){
  const a = HYD_AREAS.find(x=>x.te===teName);
  if(!a) return teName;
  return getLang()==='en' ? a.en : a.te;
}
function skillLabel(teName){
  for(const list of [SKILL_GROUPS, SKILL_GROUPS_URBAN]){
    for(const g of list){
      const it = g.items.find(x=>x.te===teName);
      if(it) return getLang()==='en' ? it.en : it.te;
    }
  }
  return teName;
}

function fillDistrictSelect(sel){
  DISTRICTS.forEach(d=>{
    const o=document.createElement('option');
    o.value=d.te;
    o.textContent = getLang()==='en' ? d.en : d.te;
    sel.appendChild(o);
  });
}

function fillAreaSelect(sel){
  sel.innerHTML='';
  HYD_AREAS.forEach(a=>{
    const o=document.createElement('option');
    o.value=a.te;
    o.textContent = getLang()==='en' ? a.en : a.te;
    sel.appendChild(o);
  });
}

// Hyderabad district select → show area dropdown instead of mandal text input
const HYD_TE = "హైదరాబాద్";
function setupHydAreaSwitch(districtSel, mandalWrap, areaWrap){
  function sync(){
    const isHyd = districtSel.value===HYD_TE;
    mandalWrap.style.display = isHyd ? 'none' : 'block';
    areaWrap.style.display = isHyd ? 'block' : 'none';
  }
  districtSel.addEventListener('change', sync);
  sync();
}

function buildSkillChips(container, selectedSet, groups){
  const list = groups || SKILL_GROUPS;
  container.innerHTML='';
  selectedSet.clear();
  list.forEach(g=>{
    const label=document.createElement('div');
    label.className='group-label';
    label.textContent = getLang()==='en' ? g.group.en : g.group.te;
    container.appendChild(label);
    const row=document.createElement('div');
    row.className='chips';
    g.items.forEach(skill=>{
      const chip=document.createElement('div');
      chip.className='chip';
      chip.textContent = getLang()==='en' ? skill.en : skill.te;
      chip.onclick=()=>{
        chip.classList.toggle('on');
        if(selectedSet.has(skill.te)) selectedSet.delete(skill.te); else selectedSet.add(skill.te);
      };
      row.appendChild(chip);
    });
    container.appendChild(row);
  });
}

function showToast(msg){
  const el=document.createElement('div');
  el.className='toast';
  el.textContent=msg;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),3000);
}

function cleanPhone(p){ return (p||'').replace(/[^0-9]/g,''); }

function waLink(phone,text){
  const p = cleanPhone(phone);
  const num = p.length===10 ? '91'+p : p;
  return `https://wa.me/${num}?text=${encodeURIComponent(text||'')}`;
}

// Google Maps link — GPS ఉంటే exact pin, లేకపోతే address search
function mapsLink(item){
  if(item.lat!=null && item.lng!=null){
    return `https://www.google.com/maps?q=${item.lat},${item.lng}`;
  }
  const q = [item.village, item.mandal, districtLabel(item.district), 'Telangana'].filter(Boolean).join(', ');
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

// ---- location helpers ----
function getMyLocation(){
  return new Promise((resolve)=>{
    if(!navigator.geolocation){ resolve(null); return; }
    navigator.geolocation.getCurrentPosition(
      pos => resolve({lat: pos.coords.latitude, lng: pos.coords.longitude}),
      ()  => resolve(null),
      {timeout:6000, enableHighAccuracy:false}
    );
  });
}

function haversineKm(lat1,lon1,lat2,lon2){
  const R=6371;
  const dLat=(lat2-lat1)*Math.PI/180;
  const dLon=(lon2-lon1)*Math.PI/180;
  const a=Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}

function approxDistanceLabel(a,b){
  if(a.village && b.village && a.village.trim() && a.village.trim()===b.village.trim()) return {text:t('same_village'), km:1};
  if(a.mandal && b.mandal && a.mandal.trim() && a.mandal.trim()===b.mandal.trim()) return {text:t('same_mandal'), km:15};
  if(a.district && b.district && a.district===b.district) return {text:t('same_district'), km:60};
  return {text:t('other_district'), km:200};
}

function attachDistance(item, myLoc){
  if(myLoc && item.lat!=null && item.lng!=null){
    const km = haversineKm(myLoc.lat, myLoc.lng, item.lat, item.lng);
    item._distKm = km;
    item._distText = km < 1 ? t('dist_m').replace('{n}', Math.round(km*1000)) : t('dist_km').replace('{n}', km.toFixed(1));
    item._exact = true;
  } else {
    const approx = approxDistanceLabel({village:item._myVillage,mandal:item._myMandal,district:item._myDistrict}, {village:item.village,mandal:item.mandal,district:item.district});
    item._distKm = approx.km;
    item._distText = approx.text;
    item._exact = false;
  }
  return item;
}
