import { creerUnElement } from "./fonctionsGlobales.js";
import { glass, createGlass } from "./fonctionQuentin.JS";


//function creerUnElement(id, classe, typeElement, elementParent)


let divGlobalePageNouvellePartie = document.getElementById("divGlobalePageNouvellePartie")

let pageGlobal = document.getElementById("pageGlobal")

let partieParams = {
    nombreDeJoueur: 3,
    nombreDeRobot: 1,
    herosSelectionnes: [332, 106, 346, 149, 720, 480, 476, 107, 514, 485],
    nombreDeManche: 10,
};





//div joueur 1
//création d'une boucle for pour ajouter la div correspondant
function creationDivNombreDeJoueur(){
for (let j = 0; j < partieParams.nombreDeJoueur; j++) {

    let divJoueurPariSelection1 = creerUnElement("", "divJoueurPariSelection", "div", divGlobalePageNouvellePartie)
    let divJoueur1 = creerUnElement("", "divJoueurClass", "div", divJoueurPariSelection1)
    
    divJoueur1.textContent = "Joueur " + (j + 1);
    let divPariAffichage1 = creerUnElement("", "divPariAffichageClass", "div", divJoueurPariSelection1)

    divPariAffichage1.textContent = "€"
    let divBoutonPlus1 = creerUnElement("", "divBoutonPlusClass", "div", divJoueurPariSelection1)
    switch (j) {
        case 0:
            divJoueur1.classList.add("divJoueurBleu")
            divBoutonPlus1.classList.add("divJoueurBleu")
            divJoueurPariSelection1.classList.add("signeDollarBleu")
            break;
        case 1:
            divJoueur1.classList.add("divJoueurJaune")
            divBoutonPlus1.classList.add("divJoueurJaune")
            divJoueurPariSelection1.classList.add("signeDollarJaune")
            break;
        case 2:
            divJoueur1.classList.add("divJoueurTurquoise")
            divBoutonPlus1.classList.add("divJoueurTurquoise")
            divJoueurPariSelection1.classList.add("signeDollarTurquoise")
            break;
        case 3:
            divJoueur1.classList.add("divJoueurVert")
            divBoutonPlus1.classList.add("divJoueurVert")
            divJoueurPariSelection1.classList.add("signeDollarVert")
            break;

        default:
            break;
    }
    divBoutonPlus1.textContent = "+"
}
}
    
    

divBoutonPlus1.addEventListener("click", () => {
    createGlass()
    let popUpChoixDesPersonnages = creerUnElement("", "popUpChoixDesPersonnages", "div", glass)
})
divBoutonPlus2.addEventListener("click", () => {
    createGlass()
    let popUpChoixDesPersonnages = creerUnElement("", "popUpChoixDesPersonnages", "div", glass)
})
divBoutonPlus3.addEventListener("click", () => {
    createGlass()
    let popUpChoixDesPersonnages = creerUnElement("", "popUpChoixDesPersonnages", "div", glass)
})
divBoutonPlus4.addEventListener("click", () => {
    createGlass()
    let popUpChoixDesPersonnages = creerUnElement("", "popUpChoixDesPersonnages", "div", glass)
})

export {creationDivNombreDeJoueur}