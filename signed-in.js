import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const auth = getAuth();

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
