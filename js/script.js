// Les fonctions

// Fonction qui va dire "bonjour"

// Déclaration et initialisation de la fonction direBonjour
function direBonjour() {
    console.log("Bonjour");
}

// Appel de la fonction direBonjour
direBonjour();

console.log("Benoit");

direBonjour();

// Déclaration et initialisation d'une fonction avec paramètres, valeurs par défaut et son JSDoc
/**
 * Cette fonction fait un console.log qui dit "Bonjour"
 * @param {string} prenom Prénom de la personne
 * @param {string} nom Nom de la personne
 */
function direBonjoura(prenom = "Benoit", nom = "Bremaud") {
    console.log(`Bonjour ${prenom} ${nom}`);
}

direBonjoura("Benoit", "Bremaud");
direBonjoura("Viktor");
direBonjoura("Roger", "Rabbit");

direBonjoura("Benoit", "Bremaud");

direBonjoura();

// Fonction qui retourne une valeur
/**
 * Cette fonction additionne 2 nombres
 * @param {number} nb1 Nombre 1
 * @param {number} nb2 Nombre 2
 * @returns number
 */
function addition(nb1, nb2) {
    let total = nb1 + nb2;
    return total;
}

let resultat = addition(5, 12);

console.log(resultat);
