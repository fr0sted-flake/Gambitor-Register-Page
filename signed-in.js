import { signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
// import { getUserCredentials } from "./login.js";
import { auth } from "./firebaseConfig.js";

// document.addEventListener("DOMContentLoaded", function () {
const signOutButton = document.getElementById("sign-out");
// document.getElementById("email").textContent= userCredentials.email

signOutButton.addEventListener("click", function (e) {
  e.preventDefault();
  userSignOut();
});

//SIGN OUT
const userSignOut = async () => {
  await signOut(auth)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch((error) => {
      errorMessage = error.message;
    });
};

// });
