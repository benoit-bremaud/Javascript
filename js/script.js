// Manipuler le document (DOM) Document Object Model - Partie 3

// On utilise à la place de l'attribut "defer" l'évenement "DOMContentLoaded"
window.addEventListener("DOMContentLoaded", () => {
    // Ici on est certains que le DOM est chargé
    let baliseP = document.querySelector("#titre2 + p"); // On va chercher la balise "p" qui suit le titre2

    // Affiche dans la console
    // console.log(baliseP.previousElementSibling);

    // On change le texte de l'élément parent, à savoir ici le tire h2
    baliseP.previousElementSibling.innerText = "Texte modifié";

    // Possibilité de manipuler les parents
    // On va chercher la balise li, la dernière balise li
    let baliseLi = document.querySelector("li:last-child");
    console.log(baliseLi);

    // let section1 = baliseP.parentElement.previousElementSibling;
    // console.log(section1);

    // let baliseLi = section1.querySelector("li:last-child");
    // console.log(baliseLi);
});
