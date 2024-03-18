window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var scrollingDiv = document.getElementById('navbar');
  
    // Adjust opacity based on scroll position
    if (scrollPosition > 40) { // Adjust the scroll position as needed
      scrollingDiv.style.backgroundColor = "#150E4E"; // Fully opaque
    } else {
      scrollingDiv.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Initial opacity
    }
  });
  