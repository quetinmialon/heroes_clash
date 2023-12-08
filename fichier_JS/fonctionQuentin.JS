import { creerUnElement } from "./fonctionsGlobales.js"
import { tableOfHero } from "./variableGlobale.js"


let glass
let boutonJouer = document.getElementById("BoutonJouer")

boutonJouer.addEventListener("click",()=>{
    popUpChoixDesCombatants()
})

function popUpChoixDesCombatants() {
    createGlass()
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
    for (let i of tableOfHero) {
        let checkBoxe = creerUnElement(`checkboxe${i}`, "checkBoxe", "input", grilleCDC);
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
        let imageCDC = creerUnElement(`image${i}`, "imageCDC", "div", grilleCDC);
    }
    let footerCDC = creerUnElement("", "footerCDC", "div", popUpChoixDesCombatants);
    let nombredemanche = creerUnElement("", "", "div", footerCDC);
    let boutonJouerCDC = creerUnElement("boutonJouerCDC", "boutonJouerCDC", "button", footerCDC);
}


function createGlass(){    
    glass = creerUnElement("","glass","div",document.body)
    glass.addEventListener("click",()=>{
    do{
        glass.firstChild.remove()
    } while(glass.firstChild)
    glass.remove()
    })
}