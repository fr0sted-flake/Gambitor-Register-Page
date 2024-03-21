import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

import { auth, provider } from "./firebaseConfig.js";

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const signUp = document.getElementById("sign-up");
const signIn = document.getElementById("sign-in");
const signInGoogle = document.getElementById("google");
let userCredentials;
let authStabilized = false;

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
  await createUserWithEmailAndPassword(auth, email, password)
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
  await signInWithEmailAndPassword(auth, email, password)
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
  await signInWithPopup(auth, provider)
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

onAuthStateChanged(auth, (user) => {
  if (user && authStabilized) {
    alert("You have signed in");
    window.location.href = "signed-in.html";
    authStabilized = false;
    return;
  } else if (!user && authStabilized) {
    window.location.href = "index.html";
    authStabilized = false;
    return;
  }

  // Set authStabilized to true after first call
  authStabilized = true;
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
