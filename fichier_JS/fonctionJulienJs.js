import { creerUnElement } from "./fonctionsGlobales.js";
import { glass, createGlass } from "./fonctionQuentin.JS";


//function creerUnElement(id, classe, typeElement, elementParent)


let divGlobalePageNouvellePartie = document.getElementById("divGlobalePageNouvellePartie")
let pageGlobal = document.getElementById("pageGlobal")



//div joueur 1
let divJoueurPariSelection1 = creerUnElement("", "divJoueurPariSelection", "div", divGlobalePageNouvellePartie)
let divJoueur1 = creerUnElement("", "divJoueurClass", "div", divJoueurPariSelection1)
divJoueur1.classList.add("divJoueurBleu")
divJoueur1.textContent = "Joueur 1"
let divPariAffichage1 = creerUnElement("", "divPariAffichageClass", "div", divJoueurPariSelection1)
divJoueurPariSelection1.classList.add("signeDollarBleu")
divPariAffichage1.textContent = "$"
let divBoutonPlus1 = creerUnElement("", "divBoutonPlusClass", "div", divJoueurPariSelection1)
divBoutonPlus1.classList.add("divJoueurBleu")
divBoutonPlus1.textContent = "+"

//div joueur 2
let divJoueurPariSelection2 = creerUnElement("", "divJoueurPariSelection", "div", divGlobalePageNouvellePartie)
let divJoueur2 = creerUnElement("", "divJoueurClass", "div", divJoueurPariSelection2)
divJoueur2.classList.add("divJoueurJaune")
divJoueur2.textContent = "Joueur 2"
let divPariAffichage2 = creerUnElement("", "divPariAffichageClass", "div", divJoueurPariSelection2)
divJoueurPariSelection2.classList.add("signeDollarJaune")
divPariAffichage2.textContent = "$"
let divBoutonPlus2 = creerUnElement("", "divBoutonPlusClass", "div", divJoueurPariSelection2)
divBoutonPlus2.classList.add("divJoueurJaune")
divBoutonPlus2.textContent = "+"

//div joueur 3
let divJoueurPariSelection3 = creerUnElement("", "divJoueurPariSelection", "div", divGlobalePageNouvellePartie)
let divJoueur3 = creerUnElement("", "divJoueurClass", "div", divJoueurPariSelection3)
divJoueur3.classList.add("divJoueurTurquoise")
divJoueur3.textContent = "Joueur 3"
let divPariAffichage3 = creerUnElement("", "divPariAffichageClass", "div", divJoueurPariSelection3)
divJoueurPariSelection3.classList.add("signeDollarTurquoise")
divPariAffichage3.textContent = "$"
let divBoutonPlus3 = creerUnElement("", "divBoutonPlusClass", "div", divJoueurPariSelection3)
divBoutonPlus3.classList.add("divJoueurTurquoise")
divBoutonPlus3.textContent = "+"

//div joueur 4
let divJoueurPariSelection4 = creerUnElement("", "divJoueurPariSelection", "div", divGlobalePageNouvellePartie)
let divJoueur4 = creerUnElement("", "divJoueurClass", "div", divJoueurPariSelection4)
divJoueur4.classList.add("divJoueurVert")
divJoueur4.textContent = "Joueur 4"
let divPariAffichage4 = creerUnElement("", "divPariAffichageClass", "div", divJoueurPariSelection4)
divJoueurPariSelection4.classList.add("signeDollarVert")
divPariAffichage4.textContent = "$"
let divBoutonPlus4 = creerUnElement("", "divBoutonPlusClass", "div", divJoueurPariSelection4)
divBoutonPlus4.classList.add("divJoueurVert")
divBoutonPlus4.textContent = "+"

//ecouteur d'évènement sur le bouton "+"
//function creerUnElement(id, classe, typeElement, elementParent)

divBoutonPlus1.addEventListener("click",()=>{
    createGlass()
    let popUpChoixDesPersonnages = creerUnElement("","popUpChoixDesPersonnages","div",glass)
})
divBoutonPlus2.addEventListener("click",()=>{
    createGlass()
    let popUpChoixDesPersonnages = creerUnElement("","popUpChoixDesPersonnages","div",glass)
})
divBoutonPlus3.addEventListener("click",()=>{
    createGlass()
    let popUpChoixDesPersonnages = creerUnElement("","popUpChoixDesPersonnages","div",glass)
})
divBoutonPlus4.addEventListener("click",()=>{
    createGlass()
    let popUpChoixDesPersonnages = creerUnElement("","popUpChoixDesPersonnages","div",glass)
})
