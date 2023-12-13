import { creerUnElement } from "./fonctionsGlobales.js";
import { glass, createGlass, choixDuHéroAjouer, partieParams } from "./fonctionQuentin.JS";



//function creerUnElement(id, classe, typeElement, elementParent)


let divGlobalePageNouvellePartie = creerUnElement("", "divGlobalePageNouvellePartie", "div", document.body)

let pageGlobal = document.getElementById("pageGlobal")

let tunedujoueur = ["",1000,1000,1000,1000]
let divPariAffichage3
let divPariAffichage4
let divPariAffichage2
let divPariAffichage1





//div joueur 1
//création d'une boucle for pour ajouter la div correspondant
function creationDivNombreDeJoueur() {
    for (let j = 0; j < partieParams.nombreDeJoueur; j++) {


        //création de la div parent de joueur
        let divJoueurPariSelection1 = creerUnElement("", "divJoueurPariSelection", "div", divGlobalePageNouvellePartie)
        //création des div enfants de divJoueurPariSelection 
        let divJoueur1 = creerUnElement("", "divJoueurClass", "div", divJoueurPariSelection1)
        // définition de l'appellation du joueur par un j + 1 ajouter après le textContent "joueur"
        divJoueur1.textContent = "Joueur " + (j + 1);
        let divPariAffichage1 = creerUnElement("", "divPariAffichageClass", "div", divJoueurPariSelection1)
        divPariAffichage1.textContent = `${tunedujoueur[j + 1]}€`
        let divBoutonPlus1 = creerUnElement("", "divBoutonPlusClass", "div", divJoueurPariSelection1)
        divBoutonPlus1.addEventListener("click", () => {
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
    switch (j) {
        case 0:
            let divJoueurPariSelection1 = creerUnElement("", "divJoueurPariSelection", "div", divGlobalePageNouvellePartie)
            //création des div enfants de divJoueurPariSelection 
            let divJoueur1 = creerUnElement("", "divJoueurClass", "div", divJoueurPariSelection1)
            // définition de l'appellation du joueur par un j + 1 ajouter après le textContent "joueur"
            divJoueur1.textContent = "Joueur " + (j + 1);
             divPariAffichage1 = creerUnElement("", "divPariAffichageClass", "div", divJoueurPariSelection1)
            divPariAffichage1.textContent = `${tunedujoueur[j+1]}€`
            let divBoutonPlus1 = creerUnElement("divBoutonPlus1", "divBoutonPlusClass", "div", divJoueurPariSelection1)
            divJoueur1.classList.add("divJoueurBleu")
            divBoutonPlus1.classList.add("divJoueurBleu")
            divJoueurPariSelection1.classList.add("signeDollarBleu")
            divBoutonPlus1.textContent = "+"
            divBoutonPlus1.addEventListener("click",()=>{
                choixDuHéroAjouer(1)
            })
            break;

        case 1:
            let divJoueurPariSelection2 = creerUnElement("", "divJoueurPariSelection", "div", divGlobalePageNouvellePartie)
            //création des div enfants de divJoueurPariSelection 
            let divJoueur2 = creerUnElement("", "divJoueurClass", "div", divJoueurPariSelection2)
            // définition de l'appellation du joueur par un j + 1 ajouter après le textContent "joueur"
            divJoueur2.textContent = "Joueur " + (j + 1);
             divPariAffichage2 = creerUnElement("", "divPariAffichageClass", "div", divJoueurPariSelection2)
            divPariAffichage2.textContent = `${tunedujoueur[j+1]}€`
            let divBoutonPlus2 = creerUnElement("divBoutonPlus2", "divBoutonPlusClass", "div", divJoueurPariSelection2)
            divJoueur2.classList.add("divJoueurJaune")
            divBoutonPlus2.classList.add("divJoueurJaune")
            divJoueurPariSelection2.classList.add("signeDollarJaune")
            divBoutonPlus2.textContent = "+"
            divBoutonPlus2.addEventListener("click",()=>{
                choixDuHéroAjouer(2)
            })
            break;
        case 2:
            let divJoueurPariSelection3 = creerUnElement("", "divJoueurPariSelection", "div", divGlobalePageNouvellePartie)
            //création des div enfants de divJoueurPariSelection 
            let divJoueur3 = creerUnElement("", "divJoueurClass", "div", divJoueurPariSelection3)
            // définition de l'appellation du joueur par un j + 1 ajouter après le textContent "joueur"
            divJoueur3.textContent = "Joueur " + (j + 1);
            divPariAffichage3 = creerUnElement("", "divPariAffichageClass", "div", divJoueurPariSelection3)
            divPariAffichage3.textContent = `${tunedujoueur[j+1]}€`
            let divBoutonPlus3 = creerUnElement("divBoutonPlus3", "divBoutonPlusClass", "div", divJoueurPariSelection3)
            divJoueur3.classList.add("divJoueurTurquoise")
            divBoutonPlus3.classList.add("divJoueurTurquoise")
            divJoueurPariSelection3.classList.add("signeDollarTurquoise")
            divBoutonPlus3.textContent = "+"
            divBoutonPlus3.addEventListener("click",()=>{
                choixDuHéroAjouer(3)
            })
            break;
        case 3:
            let divJoueurPariSelection4 = creerUnElement("", "divJoueurPariSelection", "div", divGlobalePageNouvellePartie)
            //création des div enfants de divJoueurPariSelection 
            let divJoueur4 = creerUnElement("", "divJoueurClass", "div", divJoueurPariSelection4)
            // définition de l'appellation du joueur par un j + 1 ajouter après le textContent "joueur"
            divJoueur4.textContent = "Joueur " + (j + 1);
            divPariAffichage4 = creerUnElement("", "divPariAffichageClass", "div", divJoueurPariSelection4)
            divPariAffichage4.textContent = `${tunedujoueur[j+1]}€`
            let divBoutonPlus4 = creerUnElement("divBoutonPlus4", "divBoutonPlusClass", "div", divJoueurPariSelection4)
            divJoueur4.classList.add("divJoueurVert")
            divBoutonPlus4.classList.add("divJoueurVert")
            divJoueurPariSelection4.classList.add("signeDollarVert")
            divBoutonPlus4.textContent = "+"
            divBoutonPlus4.addEventListener("click",()=>{
                choixDuHéroAjouer(4)
            })
            break;

        default:
            break;
    }
    

    }
}

function popUpHistoriqueCombat () {
    createGlass()
    let popUpHistoriqueC = document.creerUnElement("","popUpHistoriqueC", "div", document.body)

}

export {creationDivNombreDeJoueur, tunedujoueur, divPariAffichage1, divPariAffichage2, divPariAffichage3, divPariAffichage4}