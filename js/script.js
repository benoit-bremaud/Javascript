// Manipuler le document (DOM) Document Object Model

// Aller chercher un/des élément(s) dans le document
// Aller chercher tous ce qui a la balise h2
let baliseH2 = document.querySelectorAll("h2");
console.log(baliseH2);


// Acceder au 2e li grace au selecteur CSS
let baliseLi = document.querySelector("li:nth-child(2)");
console.log(baliseLi);

// Aller chercher un élément avec une classe
let classeRow = document.querySelectorAll(".row");
console.log(classeRow);

// Aller chercher un élément avec un id
let titre2 = document.querySelector("#titre2");
console.log(titre2);

for (let row of classeRow) {
    console.log(row);
}
