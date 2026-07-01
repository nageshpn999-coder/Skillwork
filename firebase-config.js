// ============================================
// Firebase Config — ఇక్కడ మీ Firebase project వివరాలు పెట్టండి
// (Firebase Console → Project Settings → General → Your apps → Config)
// మీరు OnlineLand కి వాడిన అదే ప్రాజెక్ట్ (onlineland-28234) వాడొచ్చు,
// లేదా కొత్త Firebase project క్రియేట్ చేసుకోవచ్చు — ఏదైనా పని చేస్తుంది,
// ఎందుకంటే క్రింద collections వేరుగా (panipniWorkers / panipniWork) పెట్టాం.
// ============================================
const firebaseConfig = {
  apiKey: "AIzaSyCun2PIE3gP6jZqTQB6phtqlTzJxau-M4k",
  authDomain: "onlineland-28234.firebaseapp.com",
  projectId: "onlineland-28234",
  storageBucket: "onlineland-28234.firebasestorage.app",
  messagingSenderId: "181994843440",
  appId: "1:181994843440:web:c009d8c40702dc920aacf5",
  measurementId: "G-FS8G5F66CB"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
