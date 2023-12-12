import { creerUnElement } from "./fonctionsGlobales.js";
import { glass, createGlass } from "./fonctionQuentin.JS";


//function creerUnElement(id, classe, typeElement, elementParent)


let divGlobalePageNouvellePartie = document.getElementById("divGlobalePageNouvellePartie")

let pageGlobal = document.getElementById("pageGlobal")







//div joueur 1
//création d'une boucle for pour ajouter la div correspondant
function creationDivNombreDeJoueur(){
for (let j = 0; j < partieParams.nombreDeJoueur; j++) {

    
    //création de la div parent de joueur
    let divJoueurPariSelection1 = creerUnElement("", "divJoueurPariSelection", "div", divGlobalePageNouvellePartie)
    //création des div enfants de divJoueurPariSelection 
    let divJoueur1 = creerUnElement("", "divJoueurClass", "div", divJoueurPariSelection1)
    // définition de l'appellation du joueur par un j + 1 ajouter après le textContent "joueur"
    divJoueur1.textContent = "Joueur " + (j + 1);
    let divPariAffichage1 = creerUnElement("", "divPariAffichageClass", "div", divJoueurPariSelection1)
    divPariAffichage1.textContent = "€"
    let divBoutonPlus1 = creerUnElement("", "divBoutonPlusClass", "div", divJoueurPariSelection1)
    //switch pour la création de chaque div parent avec comme variante la couleur différente pour toutes
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
    
    

// divBoutonPlus1.addEventListener("click", () => {
//     createGlass()
//     let popUpChoixDesPersonnages = creerUnElement("", "popUpChoixDesPersonnages", "div", glass)
// })
// divBoutonPlus2.addEventListener("click", () => {
//     createGlass()
//     let popUpChoixDesPersonnages = creerUnElement("", "popUpChoixDesPersonnages", "div", glass)
// })
// divBoutonPlus3.addEventListener("click", () => {
//     createGlass()
//     let popUpChoixDesPersonnages = creerUnElement("", "popUpChoixDesPersonnages", "div", glass)
// })
// divBoutonPlus4.addEventListener("click", () => {
//     createGlass()
//     let popUpChoixDesPersonnages = creerUnElement("", "popUpChoixDesPersonnages", "div", glass)
// })

function popUpHistoriqueCombat() {
    let divPopUpHC = creerUnElement("", "PUHC", "div", document.body)
}




export {creationDivNombreDeJoueur, popUpHistoriqueCombat}

//let boutonHistorique = creerUnElement("", "historique", "div", document.body)

