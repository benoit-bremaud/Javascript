// L'opérateur de décomposition

const nombres = [25, 12, 8];

function addition(nb1, nb2, nb3) {
    return nb1 + nb2 + nb3;
}

let resultat = addition(10, 20, 30);
console.log(resultat);

// Exemple 2
resultat = addition(nombres[0], nombres[1], nombres[2]);
console.log(resultat);

// Exemple 3 
resultat = addition(...nombres);
console.log(resultat);

// Exemple 2 et Exemple 3 donnent exéctement le même résultat

console.log(nombres); // Affiche un array

console.log(...nombres); // Eclate le tableau et affiche chaque valeur du tableau les unes derrières les autres

// Récupération de la date du jour
let maDate = new Date();
// Affichage sur console
console.log(maDate);

// Initialisation d'une date
maDate = new Date(2023, 7, 13);

console.log(maDate);

// Initialisation d'un tableau avec date
const tableauDate = [2023, 7, 13];
// Récupération d'une date dans un tableau
maDate = new Date(...tableauDate);

console.log(maDate);

// Inclure un tableau à l'intérieur d'un autre
const tableauNombres = [48, 74, ...nombres, 26];

console.table(tableauNombres);

const t1 = ["a", "b", "c"];
const t2 = ["d", "e", "f"];

// Concatenation de t1 et t2 et crée t3
const t3 = [...t1, ...t2];

console.table(t3);

// Avec des objets
// Déclaration d'un objet
const nom = {
    nom: "Bremaud"
};

// Autre objet
const prenom = {
    prenom: "Benoit"
};

// Nouvel Objet
const profil = {...nom, ...prenom};

console.log(profil);