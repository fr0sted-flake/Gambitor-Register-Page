import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth, provider } from "./firebaseConfig.js";

let userCredentials = null;

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
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      sendEmailVerification(user)
        .then(() => {
          alert(
            "User created successfully. Click on the verification link sent on your mail to sign in with your account!"
          );
        })
        .catch((error) => {
          alert("Error: " + error.message);
        });
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
};

//SIGN IN
const userSignIn = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        userCredentials = user;

        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        window.location.href = "signed-in.html";
      } else {
        alert("Please verify your email before signing in.");
      }
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
      userCredentials = result.user;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      window.location.href = "signed-in.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
};

signUp.addEventListener("click", function (e) {
  e.preventDefault();
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
