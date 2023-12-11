import { creerUnElement } from "./fonctionsGlobales.js";
import { glass, createGlass,choixDuHéroAjouer, partieParams } from "./fonctionQuentin.JS";



//function creerUnElement(id, classe, typeElement, elementParent)


let divGlobalePageNouvellePartie = creerUnElement ("","divGlobalePageNouvellePartie","div",document.body)

let pageGlobal = document.getElementById("pageGlobal")

let tunedujoueur = ["",1000,1000,1000,1000]





//div joueur 1
//création d'une boucle for pour ajouter la div correspondant
function creationDivNombreDeJoueur(){
for (let j = 0; j < partieParams.nombreDeJoueur; j++) {

    let divJoueurPariSelection1 = creerUnElement("", "divJoueurPariSelection", "div", divGlobalePageNouvellePartie)
    let divJoueur1 = creerUnElement("", "divJoueurClass", "div", divJoueurPariSelection1)
    
    divJoueur1.textContent = "Joueur " + (j + 1);
    let divPariAffichage1 = creerUnElement("", "divPariAffichageClass", "div", divJoueurPariSelection1)
    divPariAffichage1.textContent = `${tunedujoueur[j+1]}€`
    let divBoutonPlus1 = creerUnElement("", "divBoutonPlusClass", "div", divJoueurPariSelection1)
    divBoutonPlus1.addEventListener("click",()=>{
        choixDuHéroAjouer()
    })
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

export {creationDivNombreDeJoueur}