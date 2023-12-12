import { creerUnElement, tableHeroData } from "./fonctionsGlobales.js"
import { tableOfHero, } from "./variableGlobale.js"
import { creationDivNombreDeJoueur } from "./fonctionJulienJs.js"
import { Fcreerbibliotheque, boutonBibliotheque } from "./fonctionMathis.js"

// initialisation des variables au globales
let glass

let partieParams = {}
let footer = document.getElementById("footer")

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
            // ferme les pop UP de création de partie
            do {
                glass.firstChild.remove();
            } while (glass.firstChild);
            glass.remove();
            boutonJouer.remove()
            boutonBibliotheque.remove()
            creationDivNombreDeJoueur()
            footer = creerUnElement("footer","footer","footer",document.body)
            let boutonJouer2 = creerUnElement("boutonJouer","boutonJouer","button",footer)
            let boutonBibliotheque2 = creerUnElement("boutonBibliotheque","boutonBibliothèque","button",footer )
            boutonBibliotheque2.textContent = "Bibliothèque"
            boutonBibliotheque2.addEventListener("click", ()=>{
                FcreerBibliotheque()
            })
            boutonJouer2.textContent = "Combat"
            boutonJouer2.addEventListener("click",()=>{
                lancerLeCombat()
            })
            
            return partieParams;
        }
    });

}
// fonction qui permet de recuperer les ID des héro checké et les places dans un tableau
function getHerosSelectionnes() {
    const herosSelectionnes = [];
    for (let i = 0; i < tableOfHero.length; i++) {
        const checkBoxe = document.getElementById(`checkboxe${i}`);
        if (checkBoxe.checked) {
            herosSelectionnes.push(tableHeroData[i].id);
        }
    }
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

function choixDuHéroAjouer1() {
    createGlass();
    let conteneurParentCDHAJ = creerUnElement("", "conteneurParentCDHAJ", "div", glass);
    let divParentCDHAJ = creerUnElement("", "divParentCDHAJ", "div", conteneurParentCDHAJ);

    if (partieParams.herosSelectionnes1) {
        for (let o = 0; o < partieParams.herosSelectionnes1.length; o++) {
            const heroId = partieParams.herosSelectionnes1[o];
            let heroData;

            for (let k = 0; k < tableHeroData.length; k++) {
                if (tableHeroData[k].id === heroId) {
                    heroData = tableHeroData[k];
                    break;
                }
            }

            let HéroAChoisirCDHAJ = creerUnElement("", "HéroAChoisirCDHAJ", "img", divParentCDHAJ);
            HéroAChoisirCDHAJ.setAttribute("src", `${heroData.image.url}`);
            HéroAChoisirCDHAJ.style.height = "8rem";
            HéroAChoisirCDHAJ.style.width = "7.3rem";
            HéroAChoisirCDHAJ.addEventListener("click", () => {
                // Code à exécuter au clic sur l'image du héros
            });
        }
    }

    let randomPickHero = creerUnElement("", "randomPickHero", "img", conteneurParentCDHAJ);
    randomPickHero.setAttribute("src", "../dossierImage/melanger_blanc.svg");
    randomPickHero.addEventListener("click", () => {
        // Code à exécuter au clic sur le bouton de choix aléatoire
    });
}
function choixDuHéroAjouer2() {
    createGlass();
    let conteneurParentCDHAJ = creerUnElement("", "conteneurParentCDHAJ", "div", glass);
    let divParentCDHAJ = creerUnElement("", "divParentCDHAJ", "div", conteneurParentCDHAJ);

    if (partieParams.herosSelectionnes2) {
        for (let o = 0; o < partieParams.herosSelectionnes2.length; o++) {
            const heroId = partieParams.herosSelectionnes2[o];
            let heroData;

            for (let k = 0; k < tableHeroData.length; k++) {
                if (tableHeroData[k].id === heroId) {
                    heroData = tableHeroData[k];
                    break;
                }
            }

            let HéroAChoisirCDHAJ = creerUnElement("", "HéroAChoisirCDHAJ", "img", divParentCDHAJ);
            HéroAChoisirCDHAJ.setAttribute("src", `${heroData.image.url}`);
            HéroAChoisirCDHAJ.style.height = "8rem";
            HéroAChoisirCDHAJ.style.width = "7.3rem";
            HéroAChoisirCDHAJ.addEventListener("click", () => {
                // Code à exécuter au clic sur l'image du héros
            });
        }
    }

    let randomPickHero = creerUnElement("", "randomPickHero", "img", conteneurParentCDHAJ);
    randomPickHero.setAttribute("src", "../dossierImage/melanger_blanc.svg");
    randomPickHero.addEventListener("click", () => {
        // Code à exécuter au clic sur le bouton de choix aléatoire
    });
}
function choixDuHéroAjouer3() {
    createGlass();
    let conteneurParentCDHAJ = creerUnElement("", "conteneurParentCDHAJ", "div", glass);
    let divParentCDHAJ = creerUnElement("", "divParentCDHAJ", "div", conteneurParentCDHAJ);

    if (partieParams.herosSelectionnes3) {
        for (let o = 0; o < partieParams.herosSelectionnes3.length; o++) {
            const heroId = partieParams.herosSelectionnes3[o];
            let heroData;

            for (let k = 0; k < tableHeroData.length; k++) {
                if (tableHeroData[k].id === heroId) {
                    heroData = tableHeroData[k];
                    break;
                }
            }

            let HéroAChoisirCDHAJ = creerUnElement("", "HéroAChoisirCDHAJ", "img", divParentCDHAJ);
            HéroAChoisirCDHAJ.setAttribute("src", `${heroData.image.url}`);
            HéroAChoisirCDHAJ.style.height = "8rem";
            HéroAChoisirCDHAJ.style.width = "7.3rem";
            HéroAChoisirCDHAJ.addEventListener("click", () => {
                // Code à exécuter au clic sur l'image du héros
            });
        }
    }

    let randomPickHero = creerUnElement("", "randomPickHero", "img", conteneurParentCDHAJ);
    randomPickHero.setAttribute("src", "../dossierImage/melanger_blanc.svg");
    randomPickHero.addEventListener("click", () => {
        // Code à exécuter au clic sur le bouton de choix aléatoire
    });
}
function choixDuHéroAjouer4() {
    createGlass();
    let conteneurParentCDHAJ = creerUnElement("", "conteneurParentCDHAJ", "div", glass);
    let divParentCDHAJ = creerUnElement("", "divParentCDHAJ", "div", conteneurParentCDHAJ);

    if (partieParams.herosSelectionnes4) {
        for (let o = 0; o < partieParams.herosSelectionnes4.length; o++) {
            const heroId = partieParams.herosSelectionnes4[o];
            let heroData;

            for (let k = 0; k < tableHeroData.length; k++) {
                if (tableHeroData[k].id === heroId) {
                    heroData = tableHeroData[k];
                    break;
                }
            }

            let HéroAChoisirCDHAJ = creerUnElement("", "HéroAChoisirCDHAJ", "img", divParentCDHAJ);
            HéroAChoisirCDHAJ.setAttribute("src", `${heroData.image.url}`);
            HéroAChoisirCDHAJ.style.height = "8rem";
            HéroAChoisirCDHAJ.style.width = "7.3rem";
            HéroAChoisirCDHAJ.addEventListener("click", () => {
                // Code à exécuter au clic sur l'image du héros
            });
        }
    }

    let randomPickHero = creerUnElement("", "randomPickHero", "img", conteneurParentCDHAJ);
    randomPickHero.setAttribute("src", "../dossierImage/melanger_blanc.svg");
    randomPickHero.addEventListener("click", () => {
        // Code à exécuter au clic sur le bouton de choix aléatoire
    });
}
export { glass, createGlass, partieParams, choixDuHéroAjouer1, choixDuHéroAjouer2, choixDuHéroAjouer3, choixDuHéroAjouer4 }

