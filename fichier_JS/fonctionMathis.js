import { creerUnElement, tableHeroData } from "./fonctionsGlobales.js"
import { tableOfHero } from "./variableGlobale.js"
import { glass, createGlass } from "./fonctionQuentin.JS"

console.log(tableHeroData, "tableHeroData")
let boutonBibliotheque = document.getElementById("Bibliothèque")
console.log(tableOfHero, "tableOfHero")
boutonBibliotheque.addEventListener("click", () => {
    Fcreerbibliotheque()
})
    //mise en place de la glasse pour pouvoir clicker en dehors de la fenetre pour la fermer
function Fcreerbibliotheque (){
    createGlass()
    //creation du conteneur principal accueillant les éléments de la bibliothèque
    let conteneurPrincipal = creerUnElement("conteneurPrincipal_ID", "conteneurPrincipal_Class", "div", glass)
    //la première ligne de la bibliothèque qui comporte le bouton pour fermer la fenetre par exemple
    let ligne1 = creerUnElement("ligne1", "ligne1", "div", conteneurPrincipal)
    let titreCollection = creerUnElement("titreCollection_ID", "titreCollection_Class", "div", ligne1)
    titreCollection.textContent = "Collection"

    let boutonAstuce = creerUnElement("boutonAstuce_ID", "boutonAstuce_Class", "div", ligne1)
    let ligne2 = creerUnElement("ligne2", "ligne2", "div", conteneurPrincipal)
    let ligne2_ColonneGauche = creerUnElement("ligne2_ColonneGauche_ID", "ligne2_ColonneGauche_Class", "div", ligne2)

    for (let i = 0; i < tableOfHero.length; i++) {

        let tableauBibliotheque = creerUnElement("tableauBibliotheque_ID", "tableauBibliotheque_Class", "div", ligne2_ColonneGauche);
        let DivImage = creerUnElement("DivImage_ID", "DivImage_Class", "div", tableauBibliotheque);
        let DivTextAttribut = creerUnElement("DivNomAttribut_ID", "DivNomAttribut_Class", "div", tableauBibliotheque);
        let DivText = creerUnElement("DivText_ID", "DivText_Class", "div", DivTextAttribut);
        let DivAttribut = creerUnElement("DivAttribut_ID", "DivAttribut_Class", "div", DivTextAttribut);

        const allData = tableHeroData[i];

        let imagesPerso = creerUnElement(`image${i}`, "imagesPerso", "img", DivImage);
        imagesPerso.setAttribute("src", allData.image.url);

        let NOM = creerUnElement("", "cellule", "div", DivText)
        NOM.textContent = "NOM";

        let UNIVERS = creerUnElement("", "cellule", "div", DivText)
        UNIVERS.textContent = "UNIVERS";

        let STRENGTH = creerUnElement("", "cellule", "div", DivText)
        STRENGTH.textContent = "STRENGTH";

        let INTELLIGENCE = creerUnElement("", "cellule", "div", DivText)
        INTELLIGENCE.textContent = "INTELLIGENCE";

        let SPEED = creerUnElement("", "cellule", "div", DivText)
        SPEED.textContent = "SPEED";

        let DURABILITY = creerUnElement("", "cellule", "div", DivText)
        DURABILITY.textContent = "DURABILITY";
// ---------------------------------------------------------------PERSONNAGE
        let nomHero = creerUnElement("", "cellule", "div", DivAttribut)
        nomHero.textContent = `${allData.name}` // renvoie le nom présent dans allData
        nomHero.setAttribute("style", "margin-right: 20px;");

        let universHero = creerUnElement("", "cellule", "div", DivAttribut)
        universHero.textContent = `${allData.biography.publisher}`
        universHero.setAttribute("style", "margin-right: 20px;");
        
        let forceHero = creerUnElement("", "cellule", "div", DivAttribut)
        forceHero.textContent = `${allData.powerstats.strength}`
        forceHero.setAttribute("style", "margin-right: 30px;");

        let IntelHero = creerUnElement("", "cellule", "div", DivAttribut)
        IntelHero.textContent = `${allData.powerstats.intelligence}`
        IntelHero.setAttribute("style", "margin-right: 30px;");

        let speedHero = creerUnElement("", "cellule", "div", DivAttribut)
        speedHero.textContent = `${allData.powerstats.speed}`
        speedHero.setAttribute("style", "margin-right: 30px;");

        let durabilityHero = creerUnElement("", "cellule", "div", DivAttribut)
        durabilityHero.textContent = `${allData.powerstats.durability}`
        durabilityHero.setAttribute("style", "margin-right: 30px;");

        
    };
}

export {Fcreerbibliotheque, boutonBibliotheque}