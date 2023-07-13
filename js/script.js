// Gestion des tableaux

// Initialisation d'un tableau
let tableau = [];

console.log(tableau);

// Affectation d'une valeur
tableau = [10];

console.log(tableau);

// Affectation de plusieurs valeurs de type différent
tableau = [10, "Benoit"];

console.log(tableau);

// Affichage différent
console.table(tableau); // Affichage sous forme de tableau dans la console

// Affichage d'un élément à un indice donné
console.log(tableau[1]);

// Inverser l'ordre du tableau
tableau = [10, "Benoit", true, 18.25];

tableau.reverse();

console.table(tableau);
console.log(tableau[1]);

// Ajouter un/des valeurs dans mon tableau
// Au début
tableau.unshift("Bonjour", "Benoit");

console.table(tableau);
console.log(tableau[1]);

// A la fin
tableau.push("Au revoir");

console.table(tableau);
console.log(tableau[1]);

// Retirer une valeur du tableau
// La 1ére
let valeur = tableau.shift(); // Retire la première valeur du tableau

console.table(tableau);
console.log(valeur);

// La dernière valeur du tableau
valeur1 = tableau.pop();

console.table(tableau);
console.log(valeur1);

// Modifier des valeurs dans le tableau
tableau.splice(2, 0, "Valeur insérée"); // On insère un texte à la 2e place (entre 1 et 3)

console.table(tableau);
// console.log(valeur);

tableau.splice(2, 1, "Valeur2 insérée"); // On insère un texte à la 2e place (entre 1 et 3)

console.table(tableau);
