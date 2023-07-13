// Manipuler les chaînes de caractères
let texte = "J'ai une jolie brouette";
console.log(texte);

let texte2 = 'Un texte';
console.log(texte2);

let texte3 = `Un autre texte`;
console.log(texte3);

let texte4 = 'J\'ai moi aussi une jolie brouette';
console.log(texte4);

let texte5 = 'J\'ai moi aussi une jolie \'brouette\'';
console.log(texte5);

let prenom = "Benoit";

let nom = "Bremaud";

let phrase = "Bon" + "jour";
console.log(phrase);

let phrase2 = "Bonjour " + prenom + " " + nom;
console.log(phrase2);

let phrase3 = `Bonjour ${prenom} ${nom}`; // Avec injection de valeur
console.log(phrase3);

console.log(phrase3[3]); // Affiche le caractère à l'indice n° 3

console.log(phrase3.length); // Affiche le nombre de caractère (longueur) de la chaîne "phrase3"

// La chaîne contient-elle le mot "Benoit" ?
console.log(phrase3.indexOf("Benoit")); // Benoit se trouve en position 8 (la lettre B)

console.log(phrase3.indexOf("benoit")); // Renvoi -1 donc "je n'ai pas trouvé"

console.log(phrase3.indexOf("t")); // Renvoi 13 donc la lettre "t" se trouve à la 13e position

console.log(phrase3.slice(8)); // Renvoi tout se qui se trouve après le 8e caractère

console.log(phrase3.slice(8, 12)); // Renvoi tout se qui se trouve entre le 8e et le 12e caractère

console.log(phrase3.toUpperCase()); // Renvoi la phrase3 en Majuscule

console.log(phrase3.toLowerCase()); // Renvoi la phrase3 en minuscule

console.log(phrase3.replace("Benoit", "Bruno")); // Modifie une partie de la chaîne de caractère