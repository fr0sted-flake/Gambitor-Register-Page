import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut, 
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAoV-ZoNDu1KNAeq6if61uZcEVWfdDckT0",
  authDomain: "gambitor-login.firebaseapp.com",
  projectId: "gambitor-login",
  storageBucket: "gambitor-login.appspot.com",
  messagingSenderId: "1021237623050",
  appId: "1:1021237623050:web:04ed8b7f00fe0c1d58a2f3",
  measurementId: "G-8T2W9HDDCN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();



//Scrolling Listener
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var scrollingDiv = document.getElementById("navbar");

  if (scrollPosition > 40) {
    scrollingDiv.style.backgroundColor = "#150E4E";
  } else {
    scrollingDiv.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
});

//SIGN UP

const signUp = document.getElementById("sign-up");

signUp.addEventListener("click", function (event) {
  event.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      window.location.href = "../ signed-in.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
      // ..
    });
});

//SIGN IN

const signIn = document.getElementById("sign-in");

signIn.addEventListener("click", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.href = "signed-in.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});

//SIGN IN WITH GOOGLE

const signInGoogle = document.getElementById("google");
signInGoogle.addEventListener("click", function (e) {
  e.preventDefault();

  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      window.location.href = "signed-in.html";
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
    
});
