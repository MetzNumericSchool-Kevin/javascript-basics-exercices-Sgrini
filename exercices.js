const nom_sorcier = "Archibald";
const nom_magasin = "Archibald Potions Shop";
let stock_potions_soins = 10;
let prix_potion = 1;
let boutique_ouverte = true;

if (boutique_ouverte) {
  console.log("Bienvenue dans la boutique $(nom_magasin) Aventurier !");
} else {
  console.log(
    "La boutique $(nom_magasin) est fermée, revenez plus tard Aventurier !"
  );
}
console.log(
  "Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ?\\n1. Le nom de la boutique\\n2. Le nom du Sorcier\\n3. Le prix d'une potion de soin\\4. La quantité d'une potion de soin"
);

let choix = parseInt(
  prompt(
    "Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? : \n1 - Le nom de la boutique.\n2 - Le nom du Sorcier.\n3 - Le prix d'une potion de soin.\n4 - La quantité d'une potion de soin."
  )
);

switch (choix) {
  case 1:
    console.log(nom_magasin);
    break;
  case 2:
    console.log(nom_sorcier);
    break;
  case 3:
    console.log(prix_potion);
    break;

  case 4:
    console.log(stock_potions_soins);
    break;

  default: // Si aucun choix ne correspond
    console.log(
      "Mh... Désolé avnturier, je ne comprends pas ce que tu souhaites. Refais ton choix !"
    );
}

let quantite_potion = parseInt(prompt("Combien de potions voulez vous ?"));
const prix_total = quantite_potion * prix_potion;

console.log(
  "Prix de",
  prix_potion,
  "par potions de soins : ",
  prix_total,
  "mon cher Aventurier."
);

let bourse_aventurier = 10;
let quantite_potion_demandee = 3;
if (bourse_aventurier >= quantite_potion) {
  console.log("Tu as assez d'argent.");
  bourse_aventurier -= prix_total;
  console.log("Il te reste " + bourse_aventurier + " pièces.");
} else {
  console.log("Tu n'as pas assez d'argent pour acheter les potions.");
  console.log("Il te manques" + prix_total - bourse_aventurier + "pièces.");
}

let inventairePotions = ["Shield", "Elixir", "Liode"];

console.log("Inventaire des potions du Shop:", inventairePotions);
console.log("Première potion :", inventairePotions[0]);
console.log(inventairePotions.length);
console.log(inventairePotions[inventairePotions.length - 1]);

for (let i = 0; i < inventairePotions.length; i++) {
  console.log(inventairePotions[i]);
}

inventairePotions.push("Mushroom");

console.log("Nouvelle inventaire des potions :", inventairePotions);

inventairePotions.pop(3);
console.log("Inventaire remis à jour :", inventairePotions);
