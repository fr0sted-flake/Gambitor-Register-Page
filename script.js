window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var scrollingDiv = document.getElementById('navbar');
  
    
    if (scrollPosition > 40) {
      scrollingDiv.style.backgroundColor = "#150E4E"; 
    } else {
      scrollingDiv.style.backgroundColor = 'rgba(255, 255, 255, 0)'; 
    }
  });
  