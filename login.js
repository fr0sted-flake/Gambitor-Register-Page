import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries

const auth = getAuth();
const provider = new GoogleAuthProvider();
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const signUp = document.getElementById("sign-up");
const signIn = document.getElementById("sign-in");
const signInGoogle = document.getElementById("google");

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
};

//SIGN IN
const userSignIn = async () => {
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
};

//SIGN IN WITH GOOGLE
const userSignInGoogle = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      window.location.href = "signed-in.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.customData.email;

      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

onAuthStateChanged(auth, (user) => {
  if (user) {
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
