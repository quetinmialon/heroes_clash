import {creerUnElement} from "./fonctionsGlobales.js"
import {hero} from "./variableGlobale.js"



let boutonBibliotheque = document.getElementById("Bibliothèque")
console.log()
boutonBibliotheque.addEventListener("click", ()=>{
    let conteneurPrincipal = creerUnElement("conteneurPrincipal_ID","conteneurPrincipal_Class","div",document.body)

    let cP_BoutonSuppr = creerUnElement("cP_BoutonSuppr_ID","cP_BoutonSuppr_Class","div",conteneurPrincipal)
    cP_BoutonSuppr.addEventListener("click", ()=>{
        cP_BoutonSuppr.addEventListener("mouseover", ()=>{
            cP_BoutonSuppr.
        })

        conteneurPrincipal.remove()
        
    })

    let slot = [1, 2, 3, 4]
    for(let i of slot){
        let div_i = document.createElement("div")
    }

})