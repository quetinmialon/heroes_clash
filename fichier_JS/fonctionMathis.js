import { creerUnElement, tableHeroData } from "./fonctionsGlobales.js"
import { tableOfHero } from "./variableGlobale.js"
import { glass, createGlass } from "./fonctionQuentin.JS"

console.log(tableHeroData, "tableHeroData")
let boutonBibliotheque = document.getElementById("Bibliothèque")
console.log(tableOfHero, "tableOfHero")
boutonBibliotheque.addEventListener("click", () => {
    //mise en place de la glasse pour pouvoir clicker en dehors de la fenetre pour la fermer

    createGlass()
    //creation du conteneur principal accueillant les éléments de la bibliothèque
    let conteneurPrincipal = creerUnElement("conteneurPrincipal_ID", "conteneurPrincipal_Class", "div", glass)
    //la première ligne de la bibliothèque qui comporte le bouton pour fermer la fenetre par exemple
    let ligne1 = creerUnElement("ligne1", "ligne1", "div", conteneurPrincipal)
    let titreCollection = creerUnElement("titreCollection_ID", "titreCollection_Class", "div", ligne1)
    titreCollection.textContent = "Collection"

    let boutonAstuce = creerUnElement("boutonAstuce_ID", "boutonAstuce_Class", "div", ligne1)
    //création du conteneur du bouton pour supprimer la fenetre
    // let cP_BoutonSuppr = creerUnElement("cP_BoutonSuppr_ID", "cP_BoutonSuppr_Class", "div", ligne1)

    // //creation dun conteneur pour y metre une image afin de l'animer au survol
    // let image = creerUnElement("", "image", "img", cP_BoutonSuppr)

    // //définition de l'image
    // image.setAttribute("src", "../dossierImage/boutonfermer.svg")

    // //Add d'un event au click pour le bouton, ici pour suppr la fenetre et la glass
    // image.addEventListener("click", () => {
    //     conteneurPrincipal.remove()
    //     glass.remove()
    // })
    // //add d'un event au survol de l'image pour que celle ci change
    // image.addEventListener("mouseover", function (e) {
    //     e.target.setAttribute("src", "../dossierImage/boutonfermer2.bmp");
    // })
    // //add d'un event en enlevant le curseur de l'image pour la remettre à son etat initial
    // image.addEventListener("mouseout", function (e) {
    //     e.target.setAttribute("src", "../dossierImage/boutonfermer.svg");
    // })
    // -------------------------------------------------------------------------------
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

        // let BIOGRAPHIE = creerUnElement("", "cellule", "div", DivText)
        // BIOGRAPHIE.textContent = "BIOGRAPHIE";

        // let APPARENCE = creerUnElement("", "cellule", "div", DivText)
        // APPARENCE.textContent = "APPARENCE";

        // let CONNECTIONS = creerUnElement("", "cellule", "div", DivText)
        // CONNECTIONS.textContent = "CONNECTIONS";

        // let WORK = creerUnElement("", "cellule", "div", DivText)
        // WORK.textContent = "WORK";

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

        // let biographieHero = creerUnElement("", "cellule", "div", DivAttribut)
        // biographieHero.textContent = `${allData.work.occupation}`
        // biographieHero.setAttribute("style", "margin-right: 20px;");

        // let appearanceHero = creerUnElement("", "cellule", "div", DivAttribut)
        // appearanceHero.textContent = `${allData.appearance.race}`
        // appearanceHero.setAttribute("style", "margin-right: 20px;");

        // let collectionHero = creerUnElement("", "cellule", "div", DivAttribut)
        // collectionHero.textContent = `${allData.connections.relatives}`
        // collectionHero.setAttribute("style", "margin-right: 20px;");

        // let workHero = creerUnElement("", "cellule", "div", DivAttribut)
        // workHero.textContent = `${allData.work.base}`
        // workHero.setAttribute("style", "margin-right: 30px;");
        
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
})
