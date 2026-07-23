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
    use_my_loc: "📍 నా ప్రస్తుత లొకేషన్ వాడండి",
    loc_detecting: "లొకేషన్ గుర్తిస్తున్నాం...",
    loc_set: "✅ మీ లొకేషన్ ఆధారంగా జిల్లా/ఏరియా set చేశాం — సరిచూసుకోండి",
    loc_denied_msg: "లొకేషన్ దొరకలేదు — ఫర్వాలేదు, కింద మాన్యువల్‌గా ఎంచుకోండి",
    search_area_ph: "ఏరియా వెతకండి... (ఉదా: Gach, Kuka)",
    skill_search_ph: "🔍 స్కిల్, పేరు లేదా పని వెతకండి",
    no_match: "సరిపోలే వర్కర్స్ లేదా పనులు దొరకలేదు.",
    skill_filter_ph: "🔍 స్కిల్ వెతకండి... (ఉదా: Ele, Dri)",
    no_skills_found: "సరిపోలే స్కిల్స్ దొరకలేదు.",
    enter_area_ph: "మీ ఏరియా పేరు రాయండి / Enter Your Area Name",
    post_banner: "మీకు కావాల్సిన worker దొరకలేదా? 📝 పని పోస్ట్ చేయండి — workers మిమ్మల్ని సంప్రదిస్తారు →",
    verified_badge: "✅ ధృవీకరించబడింది",
    featured_badge: "⭐ ఫీచర్డ్",
    feat_promo: "⭐ మీ పోస్ట్ అందరికంటే పైన కనిపించాలా? Post చేశాక ఇక్కడ WhatsApp చేయండి",
    share_btn: "📤 షేర్ చేయండి",
    share_worker_msg: "👷 *{name}* — {skills}\n📍 {place}\n\nWorkPin లో ఈ వర్కర్ ప్రొఫైల్ చూడండి — దగ్గరలో వర్కర్స్, నేరుగా కాల్:\n{link}",
    share_work_msg: "🔨 *పని అవకాశం!*\n*{name}* — {skills}\n📍 {place}\n\nWorkPin లో వివరాలు చూడండి — దగ్గరలో పని, నేరుగా కాల్:\n{link}",
    student_checkbox: "🎓 నేను స్టూడెంట్‌ని — పార్ట్ టైం మాత్రమే",
    parttime_badge: "🎓 పార్ట్ టైం",
    job_type_label: "పని రకం",
    job_full: "ఫుల్ టైం",
    job_part: "పార్ట్ టైం",
    job_any: "ఏదైనా",
    my_profile: "👤 నా ప్రొఫైల్",
    profile_title: "నా ప్రొఫైల్",
    profile_sub: "మీ ఫోన్ నంబర్ ఇవ్వండి — మీ ప్రొఫైల్ చూసి, ఖాళీ/పనిలో స్టేటస్ మార్చుకోండి.",
    find_profile: "నా ప్రొఫైల్ చూపించు",
    profile_not_found: "ఈ నంబర్‌తో నమోదు దొరకలేదు. ముందు నమోదు చేసుకోండి.",
    status_free: "🟢 ఖాళీగా ఉన్నాను",
    status_busy: "🔴 పనిలో ఉన్నాను",
    busy_badge: "🔴 ప్రస్తుతం పనిలో",
    status_updated: "✅ స్టేటస్ మారింది!",
    post_expiry_note: "మీ పోస్ట్ 15 రోజులు కనిపిస్తుంది — పని ముందే అయిపోతే WhatsApp చేయండి, తీసేస్తాం.",
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
    use_my_loc: "📍 Use My Current Location",
    loc_detecting: "Detecting your location...",
    loc_set: "✅ District/Area set from your location — please verify",
    loc_denied_msg: "Location not available — no problem, select manually below",
    search_area_ph: "Search area... (e.g. Gach, Kuka)",
    skill_search_ph: "🔍 Search Skill, Worker or Job",
    no_match: "No matching Workers or Jobs found.",
    skill_filter_ph: "🔍 Search skills... (e.g. Ele, Dri)",
    no_skills_found: "No matching skills found.",
    enter_area_ph: "Enter Your Area Name",
    post_banner: "Didn't find the worker you need? 📝 Post your work — workers will contact you →",
    verified_badge: "✅ Verified",
    featured_badge: "⭐ Featured",
    feat_promo: "⭐ Want your post on top? WhatsApp us here after posting",
    share_btn: "📤 Share",
    share_worker_msg: "👷 *{name}* — {skills}\n📍 {place}\n\nView this worker profile on WorkPin — nearby workers, direct call:\n{link}",
    share_work_msg: "🔨 *Job opportunity!*\n*{name}* — {skills}\n📍 {place}\n\nSee details on WorkPin — nearby work, direct call:\n{link}",
    student_checkbox: "🎓 I am a student — part time only",
    parttime_badge: "🎓 Part Time",
    job_type_label: "Job type",
    job_full: "Full Time",
    job_part: "Part Time",
    job_any: "Any",
    my_profile: "👤 My Profile",
    profile_title: "My Profile",
    profile_sub: "Enter your phone number to view your profile and change your Free/Busy status.",
    find_profile: "Show My Profile",
    profile_not_found: "No registration found with this number. Please enroll first.",
    status_free: "🟢 I am Free",
    status_busy: "🔴 I am Busy",
    busy_badge: "🔴 Currently Busy",
    status_updated: "✅ Status updated!",
    post_expiry_note: "Your post stays visible for 15 days — if work is done earlier, WhatsApp us to remove it.",
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
  {lat:17.385, lng:78.4867, te:"హైదరాబాద్", en:"Hyderabad"},
  {lat:17.25, lng:78.45, te:"రంగారెడ్డి", en:"Rangareddy"},
  {lat:17.63, lng:78.48, te:"మేడ్చల్–మల్కాజిగిరి", en:"Medchal–Malkajgiri"},
  {lat:17.62, lng:78.08, te:"సంగారెడ్డి", en:"Sangareddy"},
  {lat:17.34, lng:77.9, te:"వికారాబాద్", en:"Vikarabad"},
  {lat:16.74, lng:77.99, te:"మహబూబ్‌నగర్", en:"Mahabubnagar"},
  {lat:16.74, lng:77.49, te:"నారాయణపేట", en:"Narayanpet"},
  {lat:16.23, lng:77.8, te:"జోగులాంబ గద్వాల", en:"Jogulamba Gadwal"},
  {lat:16.36, lng:78.06, te:"వనపర్తి", en:"Wanaparthy"},
  {lat:16.48, lng:78.32, te:"నాగర్‌కర్నూల్", en:"Nagarkurnool"},
  {lat:18.05, lng:78.26, te:"మెదక్", en:"Medak"},
  {lat:18.1, lng:78.85, te:"సిద్దిపేట", en:"Siddipet"},
  {lat:18.67, lng:78.1, te:"నిజామాబాద్", en:"Nizamabad"},
  {lat:18.32, lng:78.34, te:"కామారెడ్డి", en:"Kamareddy"},
  {lat:19.1, lng:78.34, te:"నిర్మల్", en:"Nirmal"},
  {lat:19.67, lng:78.53, te:"ఆదిలాబాద్", en:"Adilabad"},
  {lat:19.36, lng:79.28, te:"కొమరం భీమ్ ఆసిఫాబాద్", en:"Komaram Bheem Asifabad"},
  {lat:18.87, lng:79.44, te:"మంచిర్యాల", en:"Mancherial"},
  {lat:18.62, lng:79.37, te:"పెద్దపల్లి", en:"Peddapalli"},
  {lat:18.44, lng:79.13, te:"కరీంనగర్", en:"Karimnagar"},
  {lat:18.79, lng:78.91, te:"జగిత్యాల", en:"Jagtial"},
  {lat:18.39, lng:78.81, te:"రాజన్న సిరిసిల్ల", en:"Rajanna Sircilla"},
  {lat:17.98, lng:79.6, te:"వరంగల్", en:"Warangal"},
  {lat:18.01, lng:79.56, te:"హనుమకొండ", en:"Hanumakonda"},
  {lat:17.72, lng:79.16, te:"జనగామ", en:"Jangaon"},
  {lat:18.43, lng:79.86, te:"జయశంకర్ భూపాలపల్లి", en:"Jayashankar Bhupalpally"},
  {lat:18.19, lng:79.94, te:"ములుగు", en:"Mulugu"},
  {lat:17.6, lng:80.0, te:"మహబూబాబాద్", en:"Mahabubabad"},
  {lat:17.25, lng:80.15, te:"ఖమ్మం", en:"Khammam"},
  {lat:17.55, lng:80.62, te:"భద్రాద్రి కొత్తగూడెం", en:"Bhadradri Kothagudem"},
  {lat:17.05, lng:79.27, te:"నల్గొండ", en:"Nalgonda"},
  {lat:17.14, lng:79.62, te:"సూర్యాపేట", en:"Suryapet"},
  {lat:17.51, lng:78.89, te:"యాదాద్రి భువనగిరి", en:"Yadadri Bhuvanagiri"}
];

// ---- Hyderabad areas — canonical value = Telugu ----
const HYD_AREAS = [
  {lat:17.4375, lng:78.4483, te:"అమీర్‌పేట", en:"Ameerpet"},
  {lat:17.4849, lng:78.4138, te:"కూకట్‌పల్లి", en:"Kukatpally"},
  {lat:17.4933, lng:78.3915, te:"KPHB", en:"KPHB"},
  {lat:17.4969, lng:78.3715, te:"మియాపూర్", en:"Miyapur"},
  {lat:17.493, lng:78.332, te:"చందానగర్", en:"Chandanagar"},
  {lat:17.4401, lng:78.3489, te:"గచ్చిబౌలి", en:"Gachibowli"},
  {lat:17.4483, lng:78.3915, te:"మాదాపూర్", en:"Madhapur"},
  {lat:17.4435, lng:78.3772, te:"హైటెక్ సిటీ", en:"Hitech City"},
  {lat:17.4622, lng:78.3568, te:"కొండాపూర్", en:"Kondapur"},
  {lat:17.4325, lng:78.407, te:"జూబ్లీ హిల్స్", en:"Jubilee Hills"},
  {lat:17.4108, lng:78.4294, te:"బంజారా హిల్స్", en:"Banjara Hills"},
  {lat:17.4239, lng:78.452, te:"పంజాగుట్ట", en:"Panjagutta"},
  {lat:17.4239, lng:78.462, te:"సోమాజిగూడ", en:"Somajiguda"},
  {lat:17.444, lng:78.4661, te:"బేగంపేట", en:"Begumpet"},
  {lat:17.4399, lng:78.4983, te:"సికింద్రాబాద్", en:"Secunderabad"},
  {lat:17.5046, lng:78.51, te:"అల్వాల్", en:"Alwal"},
  {lat:17.5453, lng:78.487, te:"కొంపల్లి", en:"Kompally"},
  {lat:17.477, lng:78.585, te:"ECIL", en:"ECIL"},
  {lat:17.4056, lng:78.5591, te:"ఉప్పల్", en:"Uppal"},
  {lat:17.4062, lng:78.543, te:"హబ్సిగూడ", en:"Habsiguda"},
  {lat:17.4266, lng:78.528, te:"తార్నాక", en:"Tarnaka"},
  {lat:17.391, lng:78.514, te:"అంబర్‌పేట", en:"Amberpet"},
  {lat:17.42, lng:78.499, te:"ముషీరాబాద్", en:"Musheerabad"},
  {lat:17.385, lng:78.48, te:"కోఠి", en:"Koti"},
  {lat:17.39, lng:78.475, te:"అబిడ్స్", en:"Abids"},
  {lat:17.391, lng:78.468, te:"నాంపల్లి", en:"Nampally"},
  {lat:17.373, lng:78.503, te:"మలక్‌పేట", en:"Malakpet"},
  {lat:17.3688, lng:78.5247, te:"దిల్‌సుఖ్‌నగర్", en:"Dilsukhnagar"},
  {lat:17.3476, lng:78.549, te:"LB నగర్", en:"LB Nagar"},
  {lat:17.332, lng:78.559, te:"వనస్థలిపురం", en:"Vanasthalipuram"},
  {lat:17.3616, lng:78.4747, te:"చార్మినార్", en:"Charminar"},
  {lat:17.348, lng:78.503, te:"సంతోష్ నగర్", en:"Santosh Nagar"},
  {lat:17.3949, lng:78.434, te:"మెహదీపట్నం", en:"Mehdipatnam"},
  {lat:17.4, lng:78.409, te:"టోలిచౌకి", en:"Tolichowki"},
  {lat:17.367, lng:78.434, te:"అత్తాపూర్", en:"Attapur"},
  {lat:17.318, lng:78.403, te:"రాజేంద్రనగర్", en:"Rajendranagar"},
  {lat:17.2403, lng:78.4294, te:"శంషాబాద్", en:"Shamshabad"},
  {lat:17.533, lng:78.265, te:"పటాన్‌చెరు", en:"Patancheru"},
  {lat:17.467, lng:78.44, te:"బాలానగర్", en:"Balanagar"},
  {lat:17.516, lng:78.387, te:"నిజాంపేట", en:"Nizampet"},
  {lat:17.462, lng:78.306, te:"నల్లగండ్ల", en:"Nallagandla"},
  {lat:17.398, lng:78.332, te:"కోకాపేట", en:"Kokapet"},
  {lat:17.386, lng:78.357, te:"నార్సింగి", en:"Narsingi"},
  {lat:17.402, lng:78.372, te:"మణికొండ", en:"Manikonda"},
  {lat:17.389, lng:78.32, te:"గండిపేట", en:"Gandipet"},
  {lat:17.413, lng:78.34, te:"ఫైనాన్షియల్ డిస్ట్రిక్ట్", en:"Financial District"},
  {lat:17.418, lng:78.356, te:"నానక్‌రామ్‌గూడ", en:"Nanakramguda"},
  {lat:17.441, lng:78.38, te:"రాయదుర్గ్", en:"Raidurg"},
  {lat:17.468, lng:78.287, te:"తెల్లాపూర్", en:"Tellapur"},
  {lat:17.489, lng:78.317, te:"లింగంపల్లి", en:"Lingampally"},
  {lat:17.489, lng:78.302, te:"BHEL/రామచంద్రాపురం", en:"BHEL / Ramachandrapuram"},
  {lat:17.522, lng:78.322, te:"అమీన్‌పూర్", en:"Ameenpur"},
  {lat:17.547, lng:78.383, te:"బాచుపల్లి", en:"Bachupally"},
  {lat:17.522, lng:78.4, te:"ప్రగతి నగర్", en:"Pragathi Nagar"},
  {lat:17.506, lng:78.447, te:"జీడిమెట్ల", en:"Jeedimetla"},
  {lat:17.534, lng:78.436, te:"సూరారం", en:"Suraram"},
  {lat:17.529, lng:78.421, te:"గజులరామారం", en:"Gajularamaram"},
  {lat:17.577, lng:78.423, te:"దుండిగల్", en:"Dundigal"},
  {lat:17.629, lng:78.482, te:"మేడ్చల్", en:"Medchal"},
  {lat:17.493, lng:78.568, te:"సైనిక్‌పురి", en:"Sainikpuri"},
  {lat:17.48, lng:78.556, te:"AS రావు నగర్", en:"AS Rao Nagar"},
  {lat:17.452, lng:78.535, te:"మల్కాజిగిరి", en:"Malkajgiri"},
  {lat:17.468, lng:78.543, te:"నేరేడ్‌మెట్", en:"Neredmet"},
  {lat:17.426, lng:78.554, te:"నాచారం", en:"Nacharam"},
  {lat:17.438, lng:78.57, te:"మల్లాపూర్", en:"Mallapur"},
  {lat:17.462, lng:78.607, te:"చెర్లపల్లి", en:"Cherlapally"},
  {lat:17.449, lng:78.685, te:"ఘట్‌కేసర్", en:"Ghatkesar"},
  {lat:17.418, lng:78.636, te:"పోచారం", en:"Pocharam"},
  {lat:17.413, lng:78.592, te:"బోడుప్పల్", en:"Boduppal"},
  {lat:17.405, lng:78.585, te:"పీర్జాదిగూడ", en:"Peerzadiguda"},
  {lat:17.372, lng:78.562, te:"నాగోల్", en:"Nagole"},
  {lat:17.367, lng:78.54, te:"కొత్తపేట", en:"Kothapet"},
  {lat:17.356, lng:78.529, te:"సరూర్‌నగర్", en:"Saroornagar"},
  {lat:17.33, lng:78.607, te:"హయత్‌నగర్", en:"Hayathnagar"},
  {lat:17.301, lng:78.525, te:"బడంగ్‌పేట", en:"Badangpet"},
  {lat:17.232, lng:78.606, te:"ఆదిబట్ల", en:"Adibatla"},
  {lat:17.355, lng:78.415, te:"బండ్లగూడ జాగీర్", en:"Bandlaguda Jagir"},
  {lat:17.383, lng:78.401, te:"గోల్కొండ", en:"Golconda"},
  {lat:17.409, lng:78.402, te:"షేక్‌పేట", en:"Shaikpet"},
  {lat:17.413, lng:78.413, te:"ఫిల్మ్ నగర్", en:"Film Nagar"},
  {lat:17.433, lng:78.439, te:"యూసుఫ్‌గూడ", en:"Yousufguda"},
  {lat:17.443, lng:78.444, te:"SR నగర్", en:"SR Nagar"},
  {lat:17.457, lng:78.434, te:"ఎర్రగడ్డ", en:"Erragadda"},
  {lat:17.45, lng:78.429, te:"మోతీ నగర్", en:"Moti Nagar"},
  {lat:17.411, lng:78.458, te:"ఖైరతాబాద్", en:"Khairatabad"},
  {lat:17.404, lng:78.462, te:"లక్డీకాపూల్", en:"Lakdikapul"},
  {lat:17.4, lng:78.45, te:"మసాబ్ ట్యాంక్", en:"Masab Tank"},
  {lat:17.402, lng:78.483, te:"హిమాయత్‌నగర్", en:"Himayatnagar"},
  {lat:17.395, lng:78.488, te:"నారాయణగూడ", en:"Narayanguda"},
  {lat:17.389, lng:78.497, te:"కాచిగూడ", en:"Kachiguda"},
  {lat:17.332, lng:78.466, te:"ఫలక్‌నుమా", en:"Falaknuma"},
  {lat:17.329, lng:78.482, te:"చాంద్రాయణగుట్ట", en:"Chandrayangutta"},
  {lat:17.356, lng:78.493, te:"యాకుత్‌పురా", en:"Yakutpura"},
  {lat:17.361, lng:78.51, te:"సైదాబాద్", en:"Saidabad"},
  {te:"ఇతర ఏరియా (Other)", en:"Other area"}
];

// ---- Skill groups — canonical value = te ----
const SKILL_GROUPS = [
  {
    group: {te:"🌾 వ్యవసాయం", en:"🌾 Agriculture"},
    items: [
      {te:"వ్యవసాయ కూలీలు", en:"Farm labour"},
      {te:"ఫామ్ హెల్పర్", en:"Farm Helper"},
      {te:"ఇరిగేషన్ హెల్పర్", en:"Irrigation Helper"},
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
      {te:"తాపీ మేస్త్రీ", en:"Tapi Mason"},
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
    group: {te:"🏥 హాస్పిటల్ పనులు", en:"🏥 Hospital Work"},
    items: [
      {te:"కంపౌండర్", en:"Compounder"},
      {te:"వార్డ్ బాయ్", en:"Ward Boy"},
      {te:"వార్డ్ గర్ల్", en:"Ward Girl"},
      {te:"పేషెంట్ కేర్ అసిస్టెంట్", en:"Patient Care Assistant"}
    ]
  },
  {
    group: {te:"🎉 ఫంక్షన్ హాల్ పనులు", en:"🎉 Function Hall Work"},
    items: [
      {te:"ఫంక్షన్ హాల్ వర్కర్", en:"Function Hall Worker"},
      {te:"డెకరేషన్ హెల్పర్", en:"Decoration Helper"},
      {te:"సర్వింగ్ స్టాఫ్", en:"Serving Staff"},
      {te:"కిచెన్ హెల్పర్", en:"Kitchen Helper"}
    ]
  },
  {
    group: {te:"🏪 దుకాణాలు/ఆఫీస్", en:"🏪 Shops/Office"},
    items: [
      {te:"సేల్స్ మ్యాన్", en:"Salesman"},
      {te:"బట్టల దుకాణం ఉద్యోగి", en:"Clothing Shop Worker"},
      {te:"సేల్స్ బాయ్", en:"Sales Boy"},
      {te:"సేల్స్ గర్ల్", en:"Sales Girl"},
      {te:"స్టోర్ అసిస్టెంట్", en:"Store Assistant"},
      {te:"ప్యాకింగ్ స్టాఫ్", en:"Packing Staff"},
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
    group: {te:"🎓 స్టూడెంట్ / పార్ట్ టైం", en:"🎓 Student / Part Time"},
    items: [
      {te:"పార్ట్ టైం జాబ్స్ (General)", en:"Part Time Jobs (General)"},
      {te:"వీకెండ్ వర్క్", en:"Weekend Work"},
      {te:"ఈవెంట్ స్టాఫ్ (వీకెండ్)", en:"Event Staff (Weekend)"},
      {te:"ఫుడ్ డెలివరీ (పార్ట్ టైం)", en:"Food Delivery (Part Time)"},
      {te:"ట్యూషన్స్ చెప్పడం", en:"Tuitions"},
      {te:"డేటా ఎంట్రీ (Work from Home)", en:"Data Entry (Work from Home)"},
      {te:"టెలీకాలింగ్ (పార్ట్ టైం)", en:"Telecalling (Part Time)"},
      {te:"ప్రమోషన్/ఫ్లయర్ డిస్ట్రిబ్యూషన్", en:"Promotion / Flyer Distribution"},
      {te:"సర్వే వర్క్", en:"Survey Work"},
      {te:"కంటెంట్/సోషల్ మీడియా", en:"Content / Social Media"}
    ]
  },
  {
    group: {te:"💻 IT & ఆఫీస్", en:"💻 IT & Office"},
    items: [
      {te:"సాఫ్ట్‌వేర్ డెవలపర్", en:"Software Developer"},
      {te:"వెబ్ డెవలపర్", en:"Web Developer"},
      {te:"ఫుల్ స్టాక్ డెవలపర్", en:"Full Stack Developer"},
      {te:"ఫ్రంటెండ్ డెవలపర్", en:"Frontend Developer"},
      {te:"బ్యాకెండ్ డెవలపర్", en:"Backend Developer"},
      {te:"మొబైల్ యాప్ డెవలపర్", en:"Mobile App Developer"},
      {te:"AI ఇంజనీర్", en:"AI Engineer"},
      {te:"Agentic AI డెవలపర్", en:"Agentic AI Developer"},
      {te:"ప్రాంప్ట్ ఇంజనీర్", en:"Prompt Engineer"},
      {te:"మెషిన్ లెర్నింగ్ ఇంజనీర్", en:"Machine Learning Engineer"},
      {te:"UI/UX డిజైనర్", en:"UI/UX Designer"},
      {te:"DevOps ఇంజనీర్", en:"DevOps Engineer"},
      {te:"క్లౌడ్ ఇంజనీర్", en:"Cloud Engineer"},
      {te:"సైబర్ సెక్యూరిటీ ఇంజనీర్", en:"Cyber Security Engineer"},
      {te:"డేటా అనలిస్ట్", en:"Data Analyst"},
      {te:"డేటా ఎంట్రీ ఆపరేటర్", en:"Data Entry Operator"},
      {te:"కంప్యూటర్ ఆపరేటర్", en:"Computer Operator"},
      {te:"గ్రాఫిక్ డిజైనర్", en:"Graphic Designer"},
      {te:"డిజిటల్ మార్కెటింగ్", en:"Digital Marketing"},
      {te:"అకౌంటెంట్", en:"Accountant"},
      {te:"HR ఎగ్జిక్యూటివ్", en:"HR Executive"},
      {te:"మార్కెటింగ్ ఎగ్జిక్యూటివ్", en:"Marketing Executive"},
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
      {te:"తాపీ మేస్త్రీ", en:"Tapi Mason"},
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
      {te:"ఆర్కిటెక్ట్", en:"Architect"},
      {te:"కన్‌స్ట్రక్షన్ ఇంజనీర్", en:"Construction Engineer"},
      {te:"స్ట్రక్చరల్ ఇంజనీర్", en:"Structural Engineer"},
      {te:"క్వాంటిటీ సర్వేయర్", en:"Quantity Surveyor"},
      {te:"ప్రాజెక్ట్ మేనేజర్", en:"Project Manager"},
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
      {te:"కంపౌండర్", en:"Compounder"},
      {te:"వార్డ్ బాయ్", en:"Ward Boy"},
      {te:"వార్డ్ గర్ల్", en:"Ward Girl"},
      {te:"పేషెంట్ కేర్ అసిస్టెంట్", en:"Patient Care Assistant"},
      {te:"డాక్టర్", en:"Doctor"},
      {te:"డెంటిస్ట్", en:"Dentist"},
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
      {te:"బట్టల దుకాణం ఉద్యోగి", en:"Clothing Shop Worker"},
      {te:"సేల్స్ బాయ్", en:"Sales Boy"},
      {te:"సేల్స్ గర్ల్", en:"Sales Girl"},
      {te:"స్టోర్ అసిస్టెంట్", en:"Store Assistant"},
      {te:"ప్యాకింగ్ స్టాఫ్", en:"Packing Staff"},
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
      {te:"ఫంక్షన్ హాల్ వర్కర్", en:"Function Hall Worker"},
      {te:"సర్వింగ్ స్టాఫ్", en:"Serving Staff"},
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
      {te:"ప్రాపర్టీ కన్సల్టెంట్", en:"Property Consultant"},
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

function fillAreaSelect(sel, filterText){
  const f = (filterText||'').trim().toLowerCase();
  sel.innerHTML='';
  HYD_AREAS.forEach(a=>{
    // Search matches English name, Telugu name — typing "gach" → Gachibowli
    if(f && !(a.en.toLowerCase().includes(f) || a.te.includes(filterText.trim()))) return;
    const o=document.createElement('option');
    o.value=a.te;
    o.textContent = getLang()==='en' ? a.en : a.te;
    sel.appendChild(o);
  });
  // Filter తో ఏమీ దొరకకపోతే అన్నీ చూపించు (user confuse అవ్వకుండా)
  if(!sel.options.length){
    HYD_AREAS.forEach(a=>{
      const o=document.createElement('option');
      o.value=a.te;
      o.textContent = getLang()==='en' ? a.en : a.te;
      sel.appendChild(o);
    });
  }
}

// Hyderabad district select → show area dropdown instead of mandal text input
const HYD_TE = "హైదరాబాద్";
const OTHER_AREA_TE = "ఇతర ఏరియా (Other)";

// ⭐ Featured post enquiries మీ WhatsApp కి రావడానికి — మీ నంబర్ పెట్టండి (91 + 10 అంకెలు)
const OWNER_WHATSAPP = "919959731120";

// Post ఇంకా featured గా ఉందా? (featured=true మరియు గడువు దాటలేదు)
function isFeatured(item){
  if(!item.featured) return false;
  if(!item.featuredUntil) return true;
  const until = item.featuredUntil.toDate ? item.featuredUntil.toDate() : new Date(item.featuredUntil);
  return until > new Date();
}

// 📤 WhatsApp share — card వివరాలు + page link తో share message
function shareCardLink(item, type){
  const skills = (item.skills||[]).map(s=>skillLabel(s)).join(', ');
  const place = [item.village, item.customArea||areaLabel(item.mandal), districtLabel(item.district)].filter(Boolean).join(', ');
  const page = type==='worker' ? 'find-workers.html' : 'find-work.html';
  const link = new URL(page, window.location.href).href;
  const msg = t(type==='worker' ? 'share_worker_msg' : 'share_work_msg')
    .replace('{name}', item.name||'')
    .replace('{skills}', skills)
    .replace('{place}', place)
    .replace('{link}', link);
  return 'https://wa.me/?text=' + encodeURIComponent(msg);
}
function setupHydAreaSwitch(districtSel, mandalWrap, areaWrap){
  function sync(){
    const isHyd = districtSel.value===HYD_TE;
    mandalWrap.style.display = isHyd ? 'none' : 'block';
    areaWrap.style.display = isHyd ? 'block' : 'none';
  }
  districtSel.addEventListener('change', sync);
  sync();
}

function buildSkillChips(container, selectedSet, groups, filterText, preserveSelection){
  const list = groups || SKILL_GROUPS;
  const f = (filterText||'').trim().toLowerCase();
  container.innerHTML='';
  // District మారినప్పుడు selections clear; filter టైప్ చేసేటప్పుడు preserve
  if(!preserveSelection) selectedSet.clear();
  let shown = 0;
  const seen = new Set(); // combined lists లో duplicate skills రాకుండా
  list.forEach(g=>{
    // Filter: English/Telugu label రెండింటిలో match అయిన skills మాత్రమే
    const items = (f ? g.items.filter(it=> it.en.toLowerCase().includes(f) || it.te.includes(filterText.trim())) : g.items)
      .filter(it=>{ if(seen.has(it.te)) return false; seen.add(it.te); return true; });
    if(!items.length) return; // ఖాళీ group headings చూపించొద్దు
    const label=document.createElement('div');
    label.className='group-label';
    label.textContent = getLang()==='en' ? g.group.en : g.group.te;
    container.appendChild(label);
    const row=document.createElement('div');
    row.className='chips';
    items.forEach(skill=>{
      const chip=document.createElement('div');
      chip.className='chip' + (selectedSet.has(skill.te) ? ' on' : '');
      chip.textContent = getLang()==='en' ? skill.en : skill.te;
      chip.onclick=()=>{
        chip.classList.toggle('on');
        if(selectedSet.has(skill.te)) selectedSet.delete(skill.te); else selectedSet.add(skill.te);
      };
      row.appendChild(chip);
      shown++;
    });
    container.appendChild(row);
  });
  // ఏ skill match అవ్వకపోతే message
  if(shown===0){
    const msg=document.createElement('div');
    msg.className='note';
    msg.textContent = t('no_skills_found');
    container.appendChild(msg);
  }
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

// ---- Smart Skill Search helpers ----
// Store Once → Reuse Many Times: listing పేజీలు Firestore ని ఒక్కసారే చదివి
// memory (allWork/allWorkers) లో ఉంచుతాయి; ఈ functions ఆ memory data మీద పనిచేస్తాయి.

// HTML-safe escape (highlight చేసేటప్పుడు injection రాకుండా)
function escHtml(s){
  return String(s??'').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function escReg(s){ return String(s??'').replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }

// Query తో match అయిన భాగాన్ని <mark> తో highlight చేస్తుంది
function highlightText(text, query){
  const t = escHtml(text);
  const q = (query||'').trim();
  if(!q) return t;
  try{
    return t.replace(new RegExp('('+escReg(escHtml(q))+')','gi'), '<mark>$1</mark>');
  }catch(e){ return t; }
}

// ఒక item (worker/work) query తో match అవుతుందా?
// Name + skills (తెలుగు మరియు English రెండు labels) మీద మాత్రమే వెతుకుతుంది
function matchesQuery(item, query){
  const q = (query||'').trim().toLowerCase();
  if(!q) return true;
  if((item.name||'').toLowerCase().includes(q)) return true;
  // Named Hyderabad area list ముందుగా (te & en labels రెండూ)
  if(item.mandal){
    const a = HYD_AREAS.find(x=>x.te===item.mandal);
    if(a && (a.en.toLowerCase().includes(q) || a.te.includes(query.trim()))) return true;
    if(String(item.mandal).toLowerCase().includes(q)) return true;
  }
  // Named list లో match లేకపోతే customArea లో వెతుకు
  if(item.customArea && String(item.customArea).toLowerCase().includes(q)) return true;
  return (item.skills||[]).some(s=>{
    if(String(s).toLowerCase().includes(q)) return true;            // stored Telugu value
    for(const list of [SKILL_GROUPS, SKILL_GROUPS_URBAN]){
      for(const g of list){
        const it = g.items.find(x=>x.te===s);
        if(it && (it.en.toLowerCase().includes(q) || it.te.includes(query.trim()))) return true;
      }
    }
    return false;
  });
}

// Auto-suggestions: రెండు skill lists నుండి query తో మొదలయ్యే/కలిగిన skills
// ప్రస్తుత భాషలో label ఇస్తుంది, గరిష్టంగా 8
function skillSuggestions(query){
  const q = (query||'').trim().toLowerCase();
  if(q.length<2) return [];
  const seen = new Set();
  const out = [];
  for(const list of [SKILL_GROUPS, SKILL_GROUPS_URBAN]){
    for(const g of list){
      for(const it of g.items){
        if(seen.has(it.te)) continue;
        if(it.en.toLowerCase().includes(q) || it.te.includes(query.trim())){
          seen.add(it.te);
          out.push(getLang()==='en' ? it.en : it.te);
          if(out.length>=8) return out;
        }
      }
    }
  }
  return out;
}

// ---- Phase 3: nearest district/area from GPS ----
// ఇచ్చిన lat/lng కి అతి దగ్గరగా ఉన్న జిల్లా (HQ coordinates ఆధారంగా)
function nearestDistrict(lat, lng){
  let best=null, bestKm=Infinity;
  DISTRICTS.forEach(d=>{
    if(d.lat==null) return;
    const km = haversineKm(lat,lng,d.lat,d.lng);
    if(km<bestKm){ bestKm=km; best=d; }
  });
  return best; // {te,en,lat,lng}
}

// ఇచ్చిన lat/lng కి అతి దగ్గరగా ఉన్న Hyderabad area
function nearestHydArea(lat, lng){
  let best=null, bestKm=Infinity;
  HYD_AREAS.forEach(a=>{
    if(a.lat==null) return;
    const km = haversineKm(lat,lng,a.lat,a.lng);
    if(km<bestKm){ bestKm=km; best=a; }
  });
  return best;
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
