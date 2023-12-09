import { creerUnElement} from "./fonctionsGlobales.js"
import { tableOfHero,} from "./variableGlobale.js"
import { tableHeroData } from "./fonctionsGlobales.js"


let glass

let boutonJouer = document.getElementById("BoutonJouer")

boutonJouer.addEventListener("click",()=>{
    popUpChoixDesCombatants()
})

// ...

// ...

async function popUpChoixDesCombatants() {
    createGlass();
    let compteurManche = 0;
    let popUpChoixDesCombatants = creerUnElement("", "popUpChoixDesCombatants", "div", glass);
    let headerCDC = creerUnElement("", "headerCDC", "div", popUpChoixDesCombatants);
    let sectionjoueurCDC = creerUnElement("","section","div",headerCDC)
    let iconeJoueurs = creerUnElement("", "iconeJoueurs", "img", sectionjoueurCDC);
    iconeJoueurs.setAttribute("src","../dossierImage/utilisateurs_blanc.svg")
    let compteurJoueurs = creerUnElement("compteurOrdi", "compteur", "input", sectionjoueurCDC);
    compteurJoueurs.setAttribute("type", "number");
    compteurJoueurs.setAttribute("max", "4");
    compteurJoueurs.setAttribute("min", "1");
    let sectionOrdiCDC = creerUnElement("","section","div",headerCDC)
    let iconeOrdi = creerUnElement("", "iconeOrdi", "img", sectionOrdiCDC);
    iconeOrdi.setAttribute("src","../dossierImage/robot-utilisateur_blanc.svg")
    let compteurOrdi = creerUnElement("compteurOrdi", "compteur", "input", sectionOrdiCDC);
    compteurOrdi.setAttribute("type", "number");
    compteurOrdi.setAttribute("max", "4");
    let grilleCDC = creerUnElement("grilleCDC", "grilleCDC", "div", popUpChoixDesCombatants);

    for (let i = 0; i < tableOfHero.length; i++) {
        const allData = tableHeroData[i];
        let divCheckImage = creerUnElement("", "divCheckImage", "div", grilleCDC);
        let checkBoxe = creerUnElement(`checkboxe${i}`, "checkBoxe", "input", divCheckImage);
        let interupt = true
        checkBoxe.setAttribute("type", "checkbox");
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
        let imageCDC = creerUnElement(`image${i}`, "imageCDC", "img", divCheckImage);
        imageCDC.setAttribute("src", allData.image.url);
        imageCDC.addEventListener("mouseover", () => {
            divStats = creerUnElement("","divStats","div",glass)
            let nameHeroCDC = creerUnElement("","nameHeroCDC","div",divStats)
            nameHeroCDC.textContent = `${allData.name}`
            nameHeroCDC.style.color = "white"            

            let statsCDC = creerUnElement("","statsCDC","div",divStats)
            let forceDiv = creerUnElement("","statDiv","div",statsCDC)
            let intelligenceDiv = creerUnElement("","statDiv","div",statsCDC)
            let speedDiv = creerUnElement("","statDiv","div",statsCDC)
            let durabilityDiv = creerUnElement("","statDiv","div",statsCDC)

            let forceCDC2 = creerUnElement ("","","div",forceDiv)
            forceCDC2.textContent = "Force"
            forceCDC2.style.transform = "rotate(270deg)"
            let forceCDC = creerUnElement("","forceCDC","div",forceDiv)
            forceCDC.style.height = `${allData.powerstats.strength/4}vh`
            forceCDC.textContent  = `${allData.powerstats.strength}`


            let intelligenceCDC2 = creerUnElement ("","","div",intelligenceDiv)
            intelligenceCDC2.textContent = "intelligence"
            let intelligenceCDC = creerUnElement("","intelligenceCDC","div",intelligenceDiv)
            intelligenceCDC.style.height = `${allData.powerstats.intelligence/4}vh`
            intelligenceCDC.textContent  = `${allData.powerstats.intelligence}`
            intelligenceCDC2.style.transform = "rotate(270deg)"

            let vitesseCDC2 = creerUnElement ("","","div",speedDiv)
            vitesseCDC2.textContent = "vitesse"
            vitesseCDC2.style.transform = "rotate(270deg)"
            let speedCDC = creerUnElement("","speedCDC","div",speedDiv)
            speedCDC.style.height = `${allData.powerstats.speed/4}vh`
            speedCDC.textContent  = `${allData.powerstats.speed}`


            let constitutionCDC2 = creerUnElement ("","","div",durabilityDiv)
            constitutionCDC2.textContent = "constitution"
            constitutionCDC2.style.transform = "rotate(270deg)"
            let durabilityCDC = creerUnElement("","durabilityCDC","div",durabilityDiv)
            durabilityCDC.style.height = `${allData.powerstats.durability/4}vh`
            durabilityCDC.textContent  = `${allData.powerstats.durability}`
            
            
        });
        imageCDC.addEventListener("mouseout", () => {
           if(divStats){
            divStats.remove()
           }
        });
    }

    let footerCDC = creerUnElement("", "footerCDC", "div", popUpChoixDesCombatants);
    let nombredemanche = creerUnElement("", "", "div", footerCDC);
    nombredemanche.textContent = `nombre de manche : ${compteurManche}`;
    let boutonJouerCDC = creerUnElement("boutonJouerCDC", "boutonJouerCDC", "button", footerCDC);
    boutonJouerCDC.textContent = "Jouer"
}


function createGlass() {    
    glass = creerUnElement("", "glass", "div", document.body);
    
    glass.addEventListener("click", (event) => {
        // Vérifie si l'élément cliqué est le propre élément glass
        if (event.target === glass) {
            do {
                glass.firstChild.remove();
            } while (glass.firstChild);
            glass.remove();
        }
    });
}
export{glass,createGlass}

