import { creerUnElement} from "./fonctionsGlobales.js"
import { tableOfHero,} from "./variableGlobale.js"
import { mettreHeroEntable } from "./fonctionsGlobales.js"


let glass
let boutonJouer = document.getElementById("BoutonJouer")
let tableHeroImage = []
boutonJouer.addEventListener("click",()=>{
    popUpChoixDesCombatants()
})

// ...

async function popUpChoixDesCombatants() {
    createGlass();
    let compteurManche = 1;
    let popUpChoixDesCombatants = creerUnElement("", "popUpChoixDesCombatants", "div", glass);
    let headerCDC = creerUnElement("", "headerCDC", "div", popUpChoixDesCombatants);
    let iconeJoueurs = creerUnElement("", "iconeJoueurs", "div", headerCDC);
    let compteurJoueurs = creerUnElement("compteurOrdi", "compteurJoueurs", "input", headerCDC);
    compteurJoueurs.setAttribute("type", "number");
    compteurJoueurs.setAttribute("max", "4");
    compteurJoueurs.setAttribute("min", "1");
    let iconeOrdi = creerUnElement("", "iconeOrdi", "div", headerCDC);
    let compteurOrdi = creerUnElement("compteurOrdi", "compteurOrdi", "input", headerCDC);
    compteurOrdi.setAttribute("type", "number");
    compteurOrdi.setAttribute("max", "4");
    let grilleCDC = creerUnElement("grilleCDC", "grilleCDC", "div", popUpChoixDesCombatants);

    // Attendre que les images soient chargées avant de créer les éléments DOM
    tableHeroImage = await mettreHeroEntable("image", tableHeroImage);
    
    for (let i = 0; i < tableOfHero.length; i++) {
        let perso = creerUnElement("","perso","div",grilleCDC)
        let checkBoxe = creerUnElement(`checkboxe${i}`, "checkBoxe", "input", perso);
        let interupt = true
        checkBoxe.setAttribute("type", "checkbox");
        checkBoxe.addEventListener("click", () => {
            if (interupt === true) {                
                nombredemanche.textContent = `nombre de manche : ${compteurManche}`;
                compteurManche++;
                interupt = false
            } else {
                nombredemanche.textContent = `nombre de manche : ${compteurManche}`;
                compteurManche--;
                interupt = true
            }
        });
        let imageCDC = creerUnElement(`image${i}`, "imageCDC", "img", perso);
        imageCDC.setAttribute("src", tableHeroImage[i].url);
    }

    let footerCDC = creerUnElement("", "footerCDC", "div", popUpChoixDesCombatants);
    let nombredemanche = creerUnElement("", "", "div", footerCDC);
    let boutonJouerCDC = creerUnElement("boutonJouerCDC", "boutonJouerCDC", "button", footerCDC);
}

// ...



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
