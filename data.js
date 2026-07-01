// ============================================
// Shared data — 5 జిల్లాలు (Old Mahabubnagar) + Skill categories
// ============================================

const DISTRICTS = [
  "మహబూబ్‌నగర్",
  "నారాయణపేట",
  "జోగులాంబ గద్వాల",
  "వనపర్తి",
  "నాగర్‌కర్నూల్"
];

const SKILL_GROUPS = [
  {
    group: "🌾 వ్యవసాయం",
    items: ["వ్యవసాయ కూలీలు", "ట్రాక్టర్ డ్రైవర్", "పంట కోత", "స్ప్రేయింగ్", "బోరు/పంపు మెకానిక్", "ఎడ్ల బండి (Bull Cart)"]
  },
  {
    group: "🏗️ నిర్మాణం",
    items: ["మేస్త్రీ", "కార్పెంటర్", "పెయింటర్", "ఎలక్ట్రీషియన్", "ప్లంబర్", "వెల్డర్", "టైల్స్/మార్బుల్ వర్క్", "సెంటరింగ్ వర్క్", "సాధారణ కూలీలు", "ఇంటీరియర్ డిజైనర్", "JCB ఆపరేటర్", "సర్వేయర్ (Land Surveyor)"]
  },
  {
    group: "🚗 రవాణా",
    items: ["కారు/ఆటో డ్రైవర్", "లారీ డ్రైవర్", "బైక్ డెలివరీ"]
  },
  {
    group: "🏠 గృహ సేవలు",
    items: ["వంట మనిషి", "ఇంటి పని", "బేబీ సిట్టింగ్/ఎల్డర్ కేర్", "గార్డెనింగ్"]
  },
  {
    group: "🔧 టెక్నికల్/రిపేర్",
    items: ["AC/Fridge మెకానిక్", "మొబైల్/ఎలక్ట్రానిక్స్ రిపేర్", "టైలర్/దర్జీ"]
  },
  {
    group: "🛡️ సెక్యూరిటీ & ఇతర",
    items: ["సెక్యూరిటీ గార్డ్", "వాచ్‌మెన్", "క్లీనింగ్ స్టాఫ్", "హమాలీ/లోడింగ్-అన్‌లోడింగ్"]
  },
  {
    group: "🏪 దుకాణాలు/వ్యాపారం",
    items: ["సేల్స్ మ్యాన్", "డెలివరీ బాయ్", "హెల్పర్"]
  }
];

// ---- helpers ----
function fillDistrictSelect(sel){
  DISTRICTS.forEach(d=>{
    const o=document.createElement('option');
    o.value=d; o.textContent=d;
    sel.appendChild(o);
  });
}

function buildSkillChips(container, selectedSet){
  SKILL_GROUPS.forEach(g=>{
    const label=document.createElement('div');
    label.className='group-label';
    label.textContent=g.group;
    container.appendChild(label);
    const row=document.createElement('div');
    row.className='chips';
    g.items.forEach(skill=>{
      const chip=document.createElement('div');
      chip.className='chip';
      chip.textContent=skill;
      chip.onclick=()=>{
        chip.classList.toggle('on');
        if(selectedSet.has(skill)) selectedSet.delete(skill); else selectedSet.add(skill);
      };
      row.appendChild(chip);
    });
    container.appendChild(row);
  });
}

function showToast(msg){
  const t=document.createElement('div');
  t.className='toast';
  t.textContent=msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),3000);
}

function cleanPhone(p){
  return (p||'').replace(/[^0-9]/g,'');
}

function waLink(phone,text){
  const p = cleanPhone(phone);
  const num = p.length===10 ? '91'+p : p;
  return `https://wa.me/${num}?text=${encodeURIComponent(text||'')}`;
}

// ---- location helpers ----
// GPS ఉంటే browser location తీసుకుంటుంది; లేకపోతే/నిరాకరిస్తే null వస్తుంది.
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

// రెండు GPS పాయింట్ల మధ్య దూరం (కి.మీ) — Haversine formula
function haversineKm(lat1,lon1,lat2,lon2){
  const R=6371;
  const dLat=(lat2-lat1)*Math.PI/180;
  const dLon=(lon2-lon1)*Math.PI/180;
  const a=Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}

// GPS లేనప్పుడు ఊరు/మండలం/జిల్లా పోల్చి approximate దూరం బ్యాడ్జ్ ఇస్తుంది
function approxDistanceLabel(a,b){
  if(a.village && b.village && a.village.trim()===b.village.trim()) return {text:'అదే ఊరు', km:1};
  if(a.mandal && b.mandal && a.mandal.trim()===b.mandal.trim()) return {text:'అదే మండలం', km:15};
  if(a.district && b.district && a.district===b.district) return {text:'అదే జిల్లా', km:60};
  return {text:'వేరే జిల్లా', km:200};
}

// item కి distance info attach చేస్తుంది — GPS ఉంటే exact కి.మీ, లేకపోతే approximate badge
function attachDistance(item, myLoc){
  if(myLoc && item.lat!=null && item.lng!=null){
    const km = haversineKm(myLoc.lat, myLoc.lng, item.lat, item.lng);
    item._distKm = km;
    item._distText = km < 1 ? 'సుమారు '+Math.round(km*1000)+' మీ దూరం' : km.toFixed(1)+' కి.మీ దూరం';
    item._exact = true;
  } else {
    const approx = approxDistanceLabel({village:item._myVillage,mandal:item._myMandal,district:item._myDistrict}, {village:item.village,mandal:item.mandal,district:item.district});
    item._distKm = approx.km;
    item._distText = approx.text;
    item._exact = false;
  }
  return item;
}
