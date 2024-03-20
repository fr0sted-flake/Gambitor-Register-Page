import {
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

import { auth } from "./firebase-config";

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
  signOut(auth)
    .then(() => {
      alert("You have been signed out");
    })
    .catch((error) => {
      errorMessage = error.message;
    });
};
