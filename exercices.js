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
