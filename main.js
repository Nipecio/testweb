function toggleTheme() {
    document.body.classList.toggle("light-mode");
    
}



function imageforone() {

    document.querySelector('.imagetwotext').classList.remove('showtextfortwo');
    document.querySelector('.imagethreetext').classList.remove('showtextforthree');
    document.querySelector('.imageonetext').classList.add('showtextforone');

    

}

function imagefortwo() {

    document.querySelector('.imageonetext').classList.remove('showtextforone');
    document.querySelector('.imagethreetext').classList.remove('showtextforthree');
    document.querySelector('.imagetwotext').classList.add('showtextfortwo');

    
}

function imageforthree() {

    document.querySelector('.imagetwotext').classList.remove('showtextfortwo');
    document.querySelector('.imageonetext').classList.remove('showtextforone');
    document.querySelector('.imagethreetext').classList.add('showtextforthree');

    
}

// Call this function on page load to set initial visibility
// Keep track of which cards have already been shown
const shownCards = new Set();

function checkCardVisibility() {
  const cards = document.querySelectorAll('.first-card, .second-card, .third-card');
  
  cards.forEach(card => {
    // Skip cards that have already been shown
    if (shownCards.has(card)) {
      return;
    }
    
    const cardPosition = card.getBoundingClientRect();
    
    // Check if card is in viewport
    if (cardPosition.top < window.innerHeight && cardPosition.bottom >= 0) {
      card.classList.add('show');
      // Add this card to our set of shown cards
      shownCards.add(card);
    }
  });
}

// Set up scroll event listener
window.addEventListener('scroll', checkCardVisibility);

// Run on initial page load to check initial positions
document.addEventListener('DOMContentLoaded', checkCardVisibility);

// Add this code to your main.js file

// Function to toggle hamburger menu animation and show/hide nav overlay
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    
    hamburger.classList.toggle('change');
    
    if (hamburger.classList.contains('change')) {
      // Open the navigation
      navOverlay.style.height = '100%';
    } else {
      // Close the navigation
      navOverlay.style.height = '0';
    }
  }
  
  // Close menu when a navigation link is clicked
  function closeMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    
    hamburger.classList.remove('change');
    navOverlay.style.height = '0';
  }
  
  // Add event listeners when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger menu and nav overlay if they don't exist
    if (!document.querySelector('.hamburger-menu')) {
      // Create hamburger icon
      const hamburger = document.createElement('div');
      hamburger.className = 'hamburger-menu';
      hamburger.innerHTML = `
        <div class="hamburger-line line1"></div>
        <div class="hamburger-line line2"></div>
        <div class="hamburger-line line3"></div>
      `;
      hamburger.addEventListener('click', toggleMenu);
      document.body.appendChild(hamburger);
      
      // Create navigation overlay
      const navOverlay = document.createElement('div');
      navOverlay.className = 'nav-overlay';
      
      // Clone existing navigation menu for the overlay
      const navMenu = document.querySelector('nav ul').cloneNode(true);
      navOverlay.appendChild(navMenu);
      
      // Add event listeners to all links in the overlay
      const navLinks = navOverlay.querySelectorAll('a');
      navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
      });
      
      document.body.appendChild(navOverlay);
    }
  });