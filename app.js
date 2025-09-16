// script.js

// Affiche un message dans la console
console.log("Bonjour, le JavaScript fonctionne !");

// Change le texte du <h1> après 2 secondes
setTimeout(() => {
  const titre = document.querySelector("h1");
  titre.textContent = "Le JS a changé le texte !";
}, 2000);
