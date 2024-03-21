import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

import { auth, provider } from "./firebase-config.js";

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const signUp = document.getElementById("sign-up");
const signIn = document.getElementById("sign-in");
const signInGoogle = document.getElementById("google");
let userCredentials;

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
const userSignUp = async () => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      userCredentials = userCredential.user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
      // ..
    });
};

//SIGN IN
const userSignIn = async () => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      userCredentials = userCredential.user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
};

//SIGN IN WITH GOOGLE
const userSignInGoogle = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      userCredentials = result.user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
};

onAuthStateChanged(auth, (userCredentials) => {
  if (userCredentials) {
    alert("You have signed in");
    window.location.href = "signed-in.html";
  } else {
    window.location.href = "index.html";
  }
});

signUp.addEventListener("click", function (event) {
  event.preventDefault();
  userSignUp();
});

signIn.addEventListener("click", function (e) {
  e.preventDefault();
  userSignIn();
});

signInGoogle.addEventListener("click", function (e) {
  e.preventDefault();
  userSignInGoogle();
});
