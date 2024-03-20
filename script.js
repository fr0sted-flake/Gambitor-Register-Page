  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAoV-ZoNDu1KNAeq6if61uZcEVWfdDckT0",
    authDomain: "gambitor-login.firebaseapp.com",
    projectId: "gambitor-login",
    storageBucket: "gambitor-login.appspot.com",
    messagingSenderId: "1021237623050",
    appId: "1:1021237623050:web:04ed8b7f00fe0c1d58a2f3",
    measurementId: "G-8T2W9HDDCN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);




window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var scrollingDiv = document.getElementById('navbar');
  
    
    if (scrollPosition > 40) {
      scrollingDiv.style.backgroundColor = "#150E4E"; 
    } else {
      scrollingDiv.style.backgroundColor = 'rgba(255, 255, 255, 0)'; 
    }
  });
  

