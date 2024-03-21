import {
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

import { auth } from "./firebaseConfig.js";

const emailButton = document.getElementById("verify-email");
const signOutButton = document.getElementById("sign-out");

emailButton.addEventListener("click", function (e) {
  e.preventDefault();
});

signOutButton.addEventListener("click", function (e) {
  e.preventDefault();
  userSignOut();
});

//SIGN OUT
const userSignOut = async () => {
  await signOut(auth)
    .then(() => {
      window.location.href="index.html"
    })
    .catch((error) => {
      errorMessage = error.message;
    });
};

//VERIFY EMAIL
