function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function toggleMode() {
  document.body.classList.toggle('dark-mode');
  const btn = document.getElementById('toggleMode');
  btn.textContent = document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
}

// Typing animation
const textArray = ["Web Developer", "Designer", "Machine Learning & Data Science Researcher","Tech Explorer", "UPSC Aspirant"];
let textIndex = 0;
let charIndex = 0;
const typedText = document.querySelector(".typed-text");

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, 1000);
});
