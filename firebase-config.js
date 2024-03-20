import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAoV-ZoNDu1KNAeq6if61uZcEVWfdDckT0",
  authDomain: "gambitor-login.firebaseapp.com",
  projectId: "gambitor-login",
  storageBucket: "gambitor-login.appspot.com",
  messagingSenderId: "1021237623050",
  appId: "1:1021237623050:web:04ed8b7f00fe0c1d58a2f3",
  measurementId: "G-8T2W9HDDCN",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
