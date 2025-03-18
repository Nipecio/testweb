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
function checkCardVisibility() {
    const cards = document.querySelectorAll('.first-card, .second-card, .third-card');
    
    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect();
      
      // Check if card is in viewport
      if (cardPosition.top < window.innerHeight && cardPosition.bottom >= 0) {
        card.classList.add('show');
      } else {
        card.classList.remove('show'); // Remove if not in viewport
      }
    });
  }
  
  // Set up scroll event listener
  window.addEventListener('scroll', checkCardVisibility);
  
  // Run on initial page load to check initial positions
  document.addEventListener('DOMContentLoaded', checkCardVisibility);