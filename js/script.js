// Manipuler le document (DOM) Document Object Model - Partie 2
// On place un écouteur d'événement
window.addEventListener("DOMContentLoaded", () => {
    // Ici on est certains que le DOM est chargé
    
    // Aller chercher un/des élément(s) dans le document
    // Aller chercher tous ce qui a la balise h2
    let balisesH2 = document.querySelectorAll("h2");
    // console.log(baliseH2);
    
    
    // Acceder au 2e li grace au selecteur CSS
    let baliseLi = document.querySelector("li:nth-child(2)");
    console.log(baliseLi);
    
    // Aller chercher un élément avec une classe
    let classeRow = document.querySelectorAll(".row"); // Attention, si on utilise SelectorAll, il faut par la suite boucler
    console.log(classeRow);
    
    // Aller chercher un élément avec un id
    // let titre2 = document.querySelector("#titre2");
    // console.log(classeRow);
    
    for (let row of classeRow) {
        row.style.color ="red";
    }

    // On écoute le clic sur les balises h2
    // console.log(baliseH2);
    for (let baliseH2 of balisesH2) {        
        baliseH2.addEventListener("click", changeCouleur);
        baliseH2.addEventListener("mouseenter", ajoutBordrues);
        baliseH2.addEventListener("mouseleave", retraitBordures);
            // console.log(this);
            // this.style.color = "green";
    }

    baliseLi.addEventListener("click", changeCouleur);
    baliseLi.addEventListener("mouseenter", ajoutBordrues);
    baliseLi.addEventListener("mouseleave", retraitBordures);

});

function changeCouleur() {
    this.style.color = "green";
}

function ajoutBordrues() {
    this.style.border = "1px solid black";
    this.removeEventListener("mouseenter", ajoutBordrues);
}

function retraitBordures() {
    this.style.border = "none";
    this.removeEventListener("mouseleave", retraitBordures);

}

