let prix = Number(prompt("Entrez le prix du produit."));
let quantite = Number(prompt("Entrez la quantité du produit."));

let total = prix * quantite;

const reduction = 10;

if (total > 50) {
    total = total - (total * reduction / 100);
}

alert("Le prix total est de : " + total + "€");