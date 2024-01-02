import { creerUnElement, tableHeroData } from "./fonctionsGlobales.js"
import { tableOfHero } from "./variableGlobale.js"
import { glass, createGlass, cimetièreJ1, cimetièreJ2, cimetièreJ3, cimetièreJ4 } from "./fonctionQuentin.JS"

//récupération de l'ID du bouton bibliothèque
let boutonBibliotheque = document.getElementById("Bibliothèque")
//bouton pour ouvrir le popup de la bibliothèque
boutonBibliotheque.addEventListener("click", () => {
    Fcreerbibliotheque()
})
//fonction de la bibliothèque
function Fcreerbibliotheque() {
    //mise en place de la glasse pour pouvoir clicker en dehors de la fenetre pour la fermer
    createGlass()
    //creation du conteneur principal accueillant les éléments de la bibliothèque
    let conteneurPrincipal = creerUnElement("conteneurPrincipal_ID", "conteneurPrincipal_Class", "div", glass)
    //la première ligne de la bibliothèque qui comporte le header de la page
    let ligne1 = creerUnElement("ligne1", "ligne1", "div", conteneurPrincipal)
    //le titre de la page
    let titreCollection = creerUnElement("titreCollection_ID", "titreCollection_Class", "div", ligne1)
    titreCollection.textContent = "Collection"

    //la deuxième ligne de la bibliothèque qui comporte le tableau de la collection
    let ligne2 = creerUnElement("ligne2", "ligne2", "div", conteneurPrincipal)
    //Conteneur du tableau de heros
    let ligne2_ColonneGauche = creerUnElement("ligne2_ColonneGauche_ID", "ligne2_ColonneGauche_Class", "div", ligne2)
    //tableau des heros choisi dans l'api
    for (let i = 0; i < tableOfHero.length; i++) {
        //conteneur du tableau
        let tableauBibliotheque = creerUnElement("tableauBibliotheque_ID", "tableauBibliotheque_Class", "div", ligne2_ColonneGauche);
        //conteneur pour les images
        let DivImage = creerUnElement("DivImage_ID", "DivImage_Class", "div", tableauBibliotheque);
        //conteneur pour les text liés aux titres et aux attributs des heros
        let DivTextAttribut = creerUnElement("DivNomAttribut_ID", "DivNomAttribut_Class", "div", tableauBibliotheque);
        //conteneur des titres
        let DivText = creerUnElement("DivText_ID", "DivText_Class", "div", DivTextAttribut);
        //conteneur des attributs
        let DivAttribut = creerUnElement("DivAttribut_ID", "DivAttribut_Class", "div", DivTextAttribut);
        //variable où on a attribuer les valeur des heros qu'on à choisi
        const allData = tableHeroData[i];


        //conteneur pour l'image du hero
        let imagesPerso = creerUnElement(`image${i}`, "imagesPerso", "img", DivImage);
        //Récupération de l'iamge dans allData où se trouve les données des héros choisi
        imagesPerso.setAttribute("src", allData.image.url);

        // ---------------------------------------------------------------INFO Titre
        // conteneur pour le text nom
        let NOM = creerUnElement("", "cellule", "div", DivText)
        // Définition d'un text pour le conteneur
        NOM.textContent = "NOM";

        // conteneur pour le text univers
        let UNIVERS = creerUnElement("", "cellule", "div", DivText)
        // Définition d'un text pour le conteneur
        UNIVERS.textContent = "UNIVERS";

        // conteneur pour le text force
        let STRENGTH = creerUnElement("", "cellule", "div", DivText)
        // Définition d'un text pour le conteneur
        STRENGTH.textContent = "STRENGTH";

        // conteneur pour le text intelligence
        let INTELLIGENCE = creerUnElement("", "cellule", "div", DivText)
        // Définition d'un text pour le conteneur
        INTELLIGENCE.textContent = "INTELLIGENCE";

        // conteneur pour le text speed
        let SPEED = creerUnElement("", "cellule", "div", DivText)
        // Définition d'un text pour le conteneur
        SPEED.textContent = "SPEED";

        // conteneur pour le text durability
        let DURABILITY = creerUnElement("", "cellule", "div", DivText)
        // Définition d'un text pour le conteneur
        DURABILITY.textContent = "DURABILITY";

        // ---------------------------------------------------------------INFO Attributs

        let nomHero = creerUnElement("", "cellule", "div", DivAttribut)
        nomHero.textContent = `${allData.name}` // renvoie le nom présent dans allData dans un text du conteneur de la ligne précédente
        nomHero.setAttribute("style", "margin-right: 20px;");

        let universHero = creerUnElement("", "cellule", "div", DivAttribut)
        universHero.textContent = `${allData.biography.publisher}`// renvoie l'éditeur dans l'onglet biography présente dans allData dans un text du conteneur de la ligne précédente
        universHero.setAttribute("style", "margin-right: 20px;");

        let forceHero = creerUnElement("", "cellule", "div", DivAttribut)
        forceHero.textContent = `${allData.powerstats.strength}`// renvoie la force du hero présent dans allData dans un text du conteneur de la ligne précédente
        forceHero.setAttribute("style", "margin-right: 30px;");

        let IntelHero = creerUnElement("", "cellule", "div", DivAttribut)
        IntelHero.textContent = `${allData.powerstats.intelligence}`// renvoie l'intelligence du hero présent dans allData dans un text du conteneur de la ligne précédente
        IntelHero.setAttribute("style", "margin-right: 30px;");

        let speedHero = creerUnElement("", "cellule", "div", DivAttribut)
        speedHero.textContent = `${allData.powerstats.speed}`// renvoie la vitesse du hero présent dans allData dans un text du conteneur de la ligne précédente
        speedHero.setAttribute("style", "margin-right: 30px;");

        let durabilityHero = creerUnElement("", "cellule", "div", DivAttribut)
        durabilityHero.textContent = `${allData.powerstats.durability}`// renvoie les PV du hero présent dans allData dans un text du conteneur de la ligne précédente
        durabilityHero.setAttribute("style", "margin-right: 30px;");

    };
}
// --------------------------------------------------------------Cimetiere
// conteneur du bouton cimetière
let boutonCimetiere = creerUnElement("boutonCimetiere_ID", "boutonCimetiere_Class", "div", document.body);
//bouton pour ouvrir le popup du cimetière
boutonCimetiere.addEventListener("click", () => {
    CimetierePopUp()
})

//fonction du cimetière
function CimetierePopUp() {
        //mise en place de la glasse pour pouvoir clicker en dehors de la fenetre pour la fermer
    createGlass()
    // conteneur de la fenetre cimetière dans la glass
    let fenetreCimetiere = creerUnElement("fenetreCimetiere_ID", "fenetreCimetiere_Class", "div", glass);
    // conteneur du header du cimetiere
    let ligne1 = creerUnElement("ligne1Cim_ID", "ligne1Cim_Class", "div", fenetreCimetiere);
    // conteneur du body dans cimetiere
    let ligne2 = creerUnElement("ligne2Cim_ID", "ligne2Cim_Class", "div", fenetreCimetiere);
    // conteneur du titre du popup
    let titreCimetiere = creerUnElement("titreCimetiere_ID", "titreCimetiere_Class", "div", ligne1);
    // conteneur du tableau du cimetiere où seront présents les cimetière des 4joueurs
    let tableauCimetiere = creerUnElement("tableauCimetiere_ID", "tableauCimetiere_Class", "div", ligne2);
    // attribution d'un text au conteneur du titre
    titreCimetiere.textContent = "CIMETIERE"
// récupération des heros selectionnées dans le jeux pour le voir dans le cimetiere / PAS FINI MAIS LA BASE EST Là

}

function cimetierreJoueur (indexjoueur){
    
}

export { Fcreerbibliotheque, boutonBibliotheque, CimetierePopUp }