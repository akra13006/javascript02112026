// On doit parfois exécuter un code différent selon une certaine condition
// Si a > b alors on affiche "Bonjour" sinon on affiche "Au revoir"

let a = 12;
let b = 14;

if (a > b) {
    console.log("Bonjour");
} else {
    console.log("Au revoir");
}

// On peut aussi utiliser l'opérateur ternaire
// condition ? instruction_si_vrai : instruction_si_faux

a > b ? console.log("Bonjour") : console.log("Au revoir"); 


/*
5 === 5 => vrai
"5" === 5 => faux
"5" == 5 => vrai
*/