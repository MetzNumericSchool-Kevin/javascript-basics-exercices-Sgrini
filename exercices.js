const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

const nom_magasin = "Archibald Potions Shop";
let stock_potions_soins = 10;
let prix_potion = 1;
let boutique_ouverte = true;

var boutique_ouverte = true; // ou false si la boutique est fermée

if (boutique_ouverte) {
  console.log("Bienvenue dans la boutique $(nom_magasin) Aventurier !");
} else {
  console.log(
    "La boutique $(nom_magasin) est fermée, revenez plus tard Aventurier !"
  );
}
