// Les boucles

// Boucle FOR
for (let compteur = 0; compteur <= 10; compteur++) {
    console.log(compteur);    
}

for (let compteur = 0; compteur <= 10; compteur += 5) {
    console.log(compteur);    
}

for (let compteur = 20; compteur >= 0; compteur--) {
    console.log(compteur);    
}

for (let compteur = 100; compteur >= 0; compteur -= 10) {
    console.log(compteur);    
}

let pass = "azerty";

// Boucle WHILE

// while (pass != "brouette") {
//     pass = prompt("Entrez le mot de passe");
// }

let clients =["Robert", "Bruno", "Pascale", "Benoit"];
console.table(clients);

// Parcours le tableau avec une boucle FOR
for (let ligne = 0; ligne < clients.length; ligne++) {
    console.log(clients[ligne]);
}

// Parcours avec boucle FOR IN quand on a besoin de la ligne
for (let ligne in clients) {
    console.log(ligne);
}

for (let ligne in clients) {
    console.log(clients[ligne]);
}

// Parcours le tableau avec boucle FOR OF quand on a besoin de la valeur
for (let valeur of clients) {
    console.log(valeur);
}

// Parcours le tableau avec une boucle FOREACH quand on a besoin de la ligne ET de la valeur
// On retour la valeur
clients.forEach((valeur) => {
    console.log(valeur); // Retourne Valeur
});

// On retour la valeur ET l'index
clients.forEach((valeur, index) => {
    console.log(valeur, index); // Retourne Valeur puis Index
});

clients.forEach((valeur, index, tableau) => {
    console.log(tableau); // Retourne array
});