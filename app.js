
// script.js
const texts = [
  "Welcome to my website!",
  "Explore my portfolio.",
  "I create amazing websites.",
  "Let's build something together.",
  "I am a frontend developer",
  "I am also a content manger"

  

];

let currentIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing
const erasingSpeed = 90; // Speed of erasing
const delayBetweenTexts = 2000; // Delay between texts
const textElement = document.getElementById("changingText");

function typeText() {
  if (charIndex < texts[currentIndex].length) {
      textElement.textContent += texts[currentIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
  } else {
      setTimeout(eraseText, delayBetweenTexts);
  }
}

function eraseText() {
  if (charIndex > 0) {
      textElement.textContent = texts[currentIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, erasingSpeed);
  } else {
      currentIndex = (currentIndex + 1) % texts.length; // Move to the next text
      setTimeout(typeText, typingSpeed + 500);
  }
}

// Start the typing effect
setTimeout(typeText, delayBetweenTexts + 500);
