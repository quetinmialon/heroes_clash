import { creerUnElement, tableHeroData } from "./fonctionsGlobales.js"
import { tableOfHero, } from "./variableGlobale.js"
import { creationDivNombreDeJoueur, tunedujoueur,divPariAffichage1, divPariAffichage2, divPariAffichage3, divPariAffichage4  } from "./fonctionJulienJs.js"
import { Fcreerbibliotheque, boutonBibliotheque, CimetierePopUp} from "./fonctionMathis.js"

// initialisation des variables au globales
let glass

let partieParams = {}
let footer = document.getElementById("footer")
let manchePartie = {}
let cimetièreJ1 = []
let cimetièreJ2 = []
let cimetièreJ3 = []
let cimetièreJ4 = []

let manche = {}
let parisJ1
let parisJ2
let parisJ3
let parisJ4

// créer l'événement de lancement de partie
let boutonJouer = document.getElementById("BoutonJouer")
boutonJouer.addEventListener("click", () => {
    popUpChoixDesCombatants()
})

// attention la grosse fonction elle est coton celle la

async function popUpChoixDesCombatants() {
    //commence par créer une " div écran" pour empecher de cliquer "en dessous" des éléments du popUp
    createGlass();
    // initialisation des compteurs
    let compteurManche = 0;
    let compteurJoueur = 2
    // création dynamique des différentes div imbriquées du popUp via la fonction creerUnElement()
    let popUpChoixDesCombatants = creerUnElement("", "popUpChoixDesCombatants", "div", glass);
    let headerCDC = creerUnElement("", "headerCDC", "div", popUpChoixDesCombatants);
    let sectionjoueurCDC = creerUnElement("", "section", "div", headerCDC)
    let iconeJoueurs = creerUnElement("", "iconeJoueurs", "img", sectionjoueurCDC);
    iconeJoueurs.setAttribute("src", "../dossierImage/utilisateurs_blanc.svg")
    let compteurJoueurs = creerUnElement("compteurJoueur", "compteurCDC", "div", sectionjoueurCDC);
    compteurJoueurs.style.gap = "1rem"

    let boutonMoinsCompteurJoueur = creerUnElement("boutonMoinsCompteurJoueur", "boutoncompteurCDCvisible", "img", compteurJoueurs)
    boutonMoinsCompteurJoueur.setAttribute("src", "../dossierImage/carre-moins_blanc.svg")
    // permet a l'utilisateur d'augmenter ou réduire le nombre de joueur avec un max de 4 et un min de 1 
    boutonMoinsCompteurJoueur.addEventListener("click", () => {
        if (compteurJoueur > 1) {
            compteurJoueur = compteurJoueur-2
            nombreDeJoueur.textContent = compteurJoueur
        }
    })

    let nombreDeJoueur = creerUnElement("NbDeJoueurCDC", "NbDeJoueurCDC", "div", compteurJoueurs)
    nombreDeJoueur.style.color = "white"
    nombreDeJoueur.style.fontSize = "3rem"
    nombreDeJoueur.style.alignSelf = "center"
    nombreDeJoueur.textContent = compteurJoueur


    let boutonPlusCompteurJoueur = creerUnElement("boutonPlusCompteurJoueur", "boutoncompteurCDCvisible", "img", compteurJoueurs)
    boutonPlusCompteurJoueur.setAttribute("src", "../dossierImage/carre-plus_blanc.svg")
    boutonPlusCompteurJoueur.addEventListener("click", () => {
        if (compteurJoueur < 4) {
            compteurJoueur = compteurJoueur+2
            nombreDeJoueur.textContent = compteurJoueur
        }
    })
    // création d'un compteur de manche qui s'incrémente a chaque fois qu'un héro est checké et décrémente inversement
    let nombredemanche = creerUnElement("", "", "div", headerCDC);
    nombredemanche.textContent = `nombre de manche : ${compteurManche}`;
    nombredemanche.style.fontSize = "2rem"
    nombredemanche.style.color = "white"
    nombredemanche.style.alignSelf = "center"

    let grilleCDC = creerUnElement("grilleCDC", "grilleCDC", "div", popUpChoixDesCombatants);
    // boucle for qui permet de créer portrait et checkboxe en fonction des héro dans le tableau créé dans variable globale
    for (let i = 0; i < tableOfHero.length; i++) {
        //permet de donner a la variable temporaire allData les caracteristiques de l'objet correspondant a chaque case du tableau 
        const allData = tableHeroData[i];
        let divCheckImage = creerUnElement("", "divCheckImage", "div", grilleCDC);
        let checkBoxe = creerUnElement(`checkboxe${i}`, "checkBoxe", "input", divCheckImage);
        // interupteur qui servira a incrémenter et décrémenter le compteur de manche 
        let interupt = true
        checkBoxe.setAttribute("type", "checkbox");

        // si la case n'est pas checkée, incrémente compteur manche, sinon décrémente
        checkBoxe.addEventListener("click", () => {
            if (interupt === true) {
                compteurManche++;
                nombredemanche.textContent = `nombre de manche : ${compteurManche}`;
                interupt = false;
            } else {
                compteurManche--;
                nombredemanche.textContent = `nombre de manche : ${compteurManche}`;
                interupt = true;
            }
        });

        let divStats
        // créer un élément image puis attribu l'url présent dans l'objet temporaire allData (qui correspond a ce qui a été recupérer dans l'API)
        let imageCDC = creerUnElement(`image${i}`, "imageCDC", "img", divCheckImage);
        imageCDC.setAttribute("src", allData.image.url);
        // création d'un popUp au survol des images des Héros renvoyant les stats recupèrée dans l'api puis stocké dans allData
        imageCDC.addEventListener("mouseover", () => {
            divStats = creerUnElement("", "divStats", "div", glass)
            let nameHeroCDC = creerUnElement("", "nameHeroCDC", "div", divStats)
            nameHeroCDC.textContent = `${allData.name}` // renvoie le nom présent dans allData
            nameHeroCDC.style.color = "white"

            let statsCDC = creerUnElement("", "statsCDC", "div", divStats)
            let forceDiv = creerUnElement("", "statDiv", "div", statsCDC)
            let intelligenceDiv = creerUnElement("", "statDiv", "div", statsCDC)
            let speedDiv = creerUnElement("", "statDiv", "div", statsCDC)
            let durabilityDiv = creerUnElement("", "statDiv", "div", statsCDC)

            let forceCDC2 = creerUnElement("", "", "div", forceDiv)
            forceCDC2.textContent = "Force"
            forceCDC2.style.transform = "rotate(270deg)"
            let forceCDC = creerUnElement("", "forceCDC", "div", forceDiv)
            forceCDC.style.height = `${allData.powerstats.strength / 4}vh`
            // créer une div dont la hauteur dépend du nombre associé a la force dans allData
            forceCDC.textContent = `${allData.powerstats.strength}`


            let intelligenceCDC2 = creerUnElement("", "", "div", intelligenceDiv)
            intelligenceCDC2.textContent = "intelligence"
            let intelligenceCDC = creerUnElement("", "intelligenceCDC", "div", intelligenceDiv)
            intelligenceCDC.style.height = `${allData.powerstats.intelligence / 4}vh`
            intelligenceCDC.textContent = `${allData.powerstats.intelligence}`
            intelligenceCDC2.style.transform = "rotate(270deg)"

            let vitesseCDC2 = creerUnElement("", "", "div", speedDiv)
            vitesseCDC2.textContent = "vitesse"
            vitesseCDC2.style.transform = "rotate(270deg)"
            let speedCDC = creerUnElement("", "speedCDC", "div", speedDiv)
            speedCDC.style.height = `${allData.powerstats.speed / 4}vh`
            speedCDC.textContent = `${allData.powerstats.speed}`


            let constitutionCDC2 = creerUnElement("", "", "div", durabilityDiv)
            constitutionCDC2.textContent = "constitution"
            constitutionCDC2.style.transform = "rotate(270deg)"
            let durabilityCDC = creerUnElement("", "durabilityCDC", "div", durabilityDiv)
            durabilityCDC.style.height = `${allData.powerstats.durability / 4}vh`
            durabilityCDC.textContent = `${allData.powerstats.durability}`


        });
        // ferme automatiquement la div de stats quand la souris quitte l'image
        imageCDC.addEventListener("mouseout", () => {
            if (divStats) {
                divStats.remove()
            }
        });
    }

    let footerCDC = creerUnElement("", "footerCDC", "div", popUpChoixDesCombatants);
    let boutonJouerCDC = creerUnElement("boutonJouerCDC", "boutonJouerCDC", "button", footerCDC);
    boutonJouerCDC.textContent = "Jouer"
    boutonJouerCDC.addEventListener("click", () => {
        // vérifie si au moins une manche est selectionné pour jouer la partie
        if (compteurManche >= 1) {
            // Récupère les informations nécessaires
            const nombreDeJoueur = compteurJoueur;
            const nombreDeRobot = compteurJoueur % 2 === 1 ? 1 : 0; 
            // petite fonction ternaire pour faire plaisir a maxime B 
            //(vérifie si le nombre de joueur est pair ou impair et ajout un robot en fonction)
            // finalement on a pas eu le temps de faire la partie combat donc encore moins de temps pour une partie robot... rip LOL
            const herosSelectionnes4 = getHerosSelectionnes();
            const herosSelectionnes1 = getHerosSelectionnes();
            const herosSelectionnes2 = getHerosSelectionnes();
            const herosSelectionnes3 = getHerosSelectionnes();
            const nombreDeManche = compteurManche

            // Crée l'objet avec les informations recupérées
            partieParams = {
                nombreDeJoueur,
                nombreDeRobot,                
                herosSelectionnes1,
                herosSelectionnes2,
                herosSelectionnes3,
                herosSelectionnes4,
                nombreDeManche,
            };
            // ferme les pop UP de création de partie, supprime les boutons de la page d'accueil et le recréer dynamiquement
            do {
                glass.firstChild.remove();
            } while (glass.firstChild);
            glass.remove();
            boutonJouer.remove()
            boutonBibliotheque.remove()
            // lancement de la fonction de Julien qui affiche le nombre d'interface joueur selectionnés
            creationDivNombreDeJoueur()
            footer = creerUnElement("footer","footer","footer",document.body)
            let boutonJouer2 = creerUnElement("boutonJouer","boutonJouer","button",footer)
            let boutonBibliotheque2 = creerUnElement("boutonBibliotheque","boutonBibliothèque","button",footer )
            boutonBibliotheque2.textContent = "Bibliothèque"
            boutonBibliotheque2.addEventListener("click", ()=>{
                Fcreerbibliotheque()
            })
            boutonJouer2.textContent = "Combat"
            boutonJouer2.addEventListener("click",()=>{
                // fonction de lancement de la manche, malheureusement pas encore finie
                lancerLeCombat()
            })
            // bouton cimetière qui lance la fonction de mathis 
            let boutonCimetiere = creerUnElement("boutonCimetiere_ID","boutonCimetiere_Class","img",document.body)
            boutonCimetiere.setAttribute("src","../dossierImage/cimetiere.png")
            boutonCimetiere.addEventListener("click",()=>{
                CimetierePopUp()
            })
            // renvoie l'élément partieParams, remplie des données de la partie à jouer
            return partieParams;
        }
    });

}
// fonction qui permet de recuperer les ID des héro checké et les places dans un tableau
function getHerosSelectionnes() {
    // déclaration d'un tableau temporaire pour stocker les info de l'API
    const herosSelectionnes = [];
    for (let i = 0; i < tableOfHero.length; i++) {
        // recupèré et vérifie si les checkboxes sont validées ou non 
        const checkBoxe = document.getElementById(`checkboxe${i}`);
        if (checkBoxe.checked) {
            //si la checkboxe est validé, ajout de l'ID API du héro correspondant a la 
            //checkboxe dans le tableau temporaire herosSelectionnés depuis tableherodata 
            //(qui contient les données de l'api)
            herosSelectionnes.push(tableHeroData[i].id);
        }
    }
    //renvoie le tableau temporaire créée 
    return herosSelectionnes;
}
// fonction créant une "div écran" empechant de cliquer "en desous" des éléments du popUp créer par la suite
function createGlass() {
    glass = creerUnElement("", "glass", "div", document.body);

    glass.addEventListener("click", (event) => {
        // si l'utilisateur clique en dehors de la div popUp ferme l'écran ainsi que les popUps
        if (event.target === glass) {
            do {
                glass.firstChild.remove();
            } while (glass.firstChild);
            glass.remove();
        }
    });
}
// fonction qui attend comme parametre l'index du joueur pour bien différencier les actions des différents joueurs
function choixDuHéroAjouer(indexJoueur) {
    createGlass();
    //création dynamique des éléments pour le choix du héro a jouer
    let conteneurParentCDHAJ = creerUnElement("", "conteneurParentCDHAJ", "div", glass);
    let divParentCDHAJ = creerUnElement("", "divParentCDHAJ", "div", conteneurParentCDHAJ);
 //déclaration d'une variable herosSelectionnés qui recupère le tableau du joueur en cours avec les ID API des héro
 //qui sont stockés dans l'objet partieParams
    const herosSelectionnes = partieParams[`herosSelectionnes${indexJoueur}`];
// ajout d'une condition d'existance de herosSelectionnés pour s'assurer que l'étape précédente a bien fonctionné
    if (herosSelectionnes) {
        //boucle for pour itérér dans le tableau créer
        for (let o = 0; o < herosSelectionnes.length; o++) {
            // assignation de la case en cours a une variable temporaire heroID
            const heroId = herosSelectionnes[o];
            // recherche dans tableHeroData (contenant toutes les info de l'API) si heroID correspond à
            //l'ID d'un héro, si oui, alors assignation de l'objet a la variable temporaire heroData
            let heroData = tableHeroData.find(hero => hero.id === heroId);

            let HéroAChoisirCDHAJ = creerUnElement("", "HéroAChoisirCDHAJ", "img", divParentCDHAJ);
            // assignation de l'image du héro stocké dans heroData 
            HéroAChoisirCDHAJ.setAttribute("src", `${heroData.image.url}`);
            HéroAChoisirCDHAJ.style.height = "8rem";
            HéroAChoisirCDHAJ.style.width = "7.3rem";
            HéroAChoisirCDHAJ.addEventListener("click", () => {
                // utilisation de la technique ".indexOf" pour récuperer l'index du hero selectionné 
                //dans le tableau du joueur en cours de selection
                const indexDansHerosSelectionnes = partieParams[`herosSelectionnes${indexJoueur}`].indexOf(heroId);
                    // création dynamique des div du choix du paris
                    let choixParis = creerUnElement("","CPconteneur","div",glass)
                    let footerCP = creerUnElement("","footerCP","div",choixParis)
                    let parisCP = creerUnElement (`parisCP${indexJoueur}`,"parisCP","input",footerCP)
                    parisCP.setAttribute ("type","number")
                    parisCP.setAttribute ("step","100")
                    let monnaieCP = creerUnElement("","monnaieCP","div",footerCP)
                    monnaieCP.textContent = "€"
                    let buttonValider = creerUnElement(`buttonValider${indexJoueur}`,"boutonBibliothèque","div",choixParis)
                    buttonValider.textContent = "Parier"
                    // écouteur d'événement sur le bouton valider le paris
                    buttonValider.addEventListener("click",()=>{
                        // vérifie que le paris ne soit pas nul ou négatif
                        if(parisCP.value > 0){
                            // soustraction du montant du paris dans le tableau tunedujoueur
                        tunedujoueur[`${indexJoueur}`] = tunedujoueur[`${indexJoueur}`] - parseInt(parisCP.value)
                            // une fois le paris valider, les div se ferment
                        do {
                            glass.firstChild.remove();
                        } while (glass.firstChild);
                        glass.remove();
                            //utilisation de la technique eval() pour appliquer un texte à des variables dynamiquement
                            //texte du montant d'argent disponnible mis à jour pour le joueur
                        eval(`divPariAffichage${indexJoueur}`).textContent = tunedujoueur[`${indexJoueur}`] + "€"   
                        
                            // retrait du héro choisi par le joueur de son tableau de joueur disponnible en utilisant la technique splice 
                            // et en utilisant la const indexdansheroselectionnés pour retirer le héro choisi
                            partieParams[`herosSelectionnes${indexJoueur}`].splice(indexDansHerosSelectionnes, 1);

                            // ajout du héro choisi dans le cimetière du joueur en cours
                            eval(`cimetièreJ${indexJoueur}`).push(parseInt(heroId));
                    // assignation des différents info de la manche a l'objet manche qui sert de base pour la fonction combat et historique (à venir)  
                    // eval(`parisJ${indexJoueur}`) = parseInt(parisCP.value)
                    // manche = {
                    //     parisJ1,
                    //     parisJ2,
                    //     parisJ3,
                    //     parisJ4,
                    // }
                    
                                           
            }else {alert("entrez un paris")}})


                // Ajoute le code spécifique à exécuter au clic sur l'image du héros ici
            });
        }
    }
}



export { glass, createGlass, partieParams, choixDuHéroAjouer, cimetièreJ1, cimetièreJ2, cimetièreJ3, cimetièreJ4}

