// Conditions et opérations de comparaison

/* 
Si le temps est beau
    Je prends mes lunettes de soleil
Sinon
    Je prends mon parapluie
*/

let nombre = 12;

// On pose une question
if (nombre == 12) {
    // La consition est remplie
    console.log("Le nombre est égal à 12");
}
// Autre exemple
nombre = 122;

// On pose une question
if (nombre == 12) {
    // La condition est remplie
    console.log("Le nombre est égal à 12");
} else {
    // La consition n'est pas rempli
    console.log("Le nombre n'est pas égal à 12");
}

// Autre exemple
nombre = "12";

// On pose une question
if (nombre == 12) {
    // La condition est remplie
    console.log("Le nombre est égal à 12");
} else {
    // La consition n'est pas rempli
    console.log("Le nombre n'est pas égal à 12");
}

// `==` ne compare que la valeur (égalité faible) `===` compare la valeur ET le type (égalité forte)

nombre = "12";

// On pose une question
if (nombre === 12) {
    // La condition est remplie (valeur ET type)
    console.log("Le nombre est égal à 12");
} else {
    // La consition n'est pas rempli (ici valeur OK, type NOK)
    console.log("Le nombre n'est pas égal à 12");
}

nombre = 12;

// != inégalité
if (nombre != 12) {
    // La condition est remplie (en valeur seulement)
    console.log("Le nombre n'est pas égal à 12");
} else {
    // La consition n'est pas rempli (en valeur seulement)
    console.log("Le nombre est égal à 12");
}

nombre = "12";

// != inégalité faible
if (nombre != 12) {
    // La condition est remplie (en valeur seulement)
    console.log("Le nombre n'est pas égal à 12");
} else {
    // La consition n'est pas rempli (en valeur seulement)
    console.log("Le nombre est égal à 12");
}

nombre = "12";

// !== inégalité stricte
if (nombre !== 12) {
    // La condition est remplie (en valeur et en type)
    console.log("Le nombre n'est pas égal à 12");
} else {
    // La consition n'est pas rempli (valeur OK, type NOK)
    console.log("Le nombre est égal à 12");
}

nombre = 12;

// < plus petit que
if (nombre < 12) {
    // La condition est remplie
    console.log("Le nombre est plus petit que 12");
} else {
    // La consition n'est pas rempli
    console.log("Le nombre n'est pas plus petit que 12");
}

nombre = 11;

// <= plus petit ou égal à
if (nombre <= 12) {
    // La condition est remplie
    console.log("Le nombre est plus petit ou égal à 12");
} else {
    // La consition n'est pas rempli
    console.log("Le nombre n'est pas plus petit ou égal à 12");
}

// <, <=, >, >=

// condition avec des booléens
let bool = true;

if (bool === true) {
    // La condition est remplie (valeur ET type)
    console.log("Le booléen est à true");
} else {
    // La consition n'est pas rempli (ici valeur OK, type NOK)
    console.log("Le booléen est à false");
}

// On peut aussi écrire de la façon suivante
if (bool) {
    // La condition est remplie (valeur ET type)
    console.log("Le booléen est à true");
} else {
    // La consition n'est pas rempli (ici valeur OK, type NOK)
    console.log("Le booléen est à false");
}

// On peut mixer
if (bool && nombre < 12) {
    // La condition est remplie (valeur ET type)
    console.log("Le booléen est à true et le nombre est plus petit que 12");
} else {
    // La consition n'est pas rempli (ici valeur OK, type NOK)
    console.log("Le booléen est à false");
}

// Autre exemple
nombre = 13;
bool = false;

if (bool || nombre < 12) {
    // La condition est remplie (valeur ET type)
    console.log("Le booléen est à true OU le nombre est plus petit que 12");
} else {
    // La consition n'est pas rempli (ici valeur OK, type NOK)
    console.log("Le booléen est à false et le nombre n'est pas plus petit que 12");
}

// Autre exemple
if (bool || nombre < 12 && nombre > 5) {
    // La condition est remplie (valeur ET type)
    console.log("Le booléen est à true OU le nombre est plus petit que 12");
} else {
    // La consition n'est pas rempli (ici valeur OK, type NOK)
    console.log("Le booléen est à false et le nombre n'est pas plus petit que 12");
}

