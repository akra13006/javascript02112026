// Entrée : récupérer une valeur founnie par l'utilisateur ou un dispositif
// Une seule instruction : prompt() qui ouvre une boite de dialogue pour saisir une valeur
alert("Message");

prompt("Quel est votre nom ?"); // la valeur saisie est de type string

let age = prompt("Quel est votre âge ?"); // la valeur saisie est de type string
console.log(age); // affichage du type de la variable age

// prompt retourne toujours un string

let nombre1 = prompt("Saisir un nombre : "); // la valeur saisie est de type string
console.log(typeof nombre1); // affichage du type de la variable nombre

let nombre2 = Number(prompt("Saisir un nombre : ")); // la valeur saisie est de type string
console.log(typeof nombre2); // affichage du type de la variable nombre