import { creerUnElement } from "./fonctionsGlobales.js"
import { glass, createGlass } from "./fonctionQuentin.JS"



let boutonBibliotheque = document.getElementById("Bibliothèque")
console.log()
boutonBibliotheque.addEventListener("click", () => {
    //mise en place de la glasse pour pouvoir clicker en dehors de la fenetre pour la fermer

    createGlass()
    //creation du conteneur principal accueillant les éléments de la bibliothèque
    let conteneurPrincipal = creerUnElement("conteneurPrincipal_ID", "conteneurPrincipal_Class", "div", glass)
    let ligne1 = creerUnElement("ligne1", "ligne1", "div", conteneurPrincipal)
    //création du conteneur du bouton pour supprimer la fenetre
    let cP_BoutonSuppr = creerUnElement("cP_BoutonSuppr_ID", "cP_BoutonSuppr_Class", "div", ligne1)

    //creation dun conteneur pour y metre une image afin de l'animer au survol
    let image = creerUnElement("", "image", "img", cP_BoutonSuppr)

    //définition de l'image
    image.setAttribute("src", "../dossierImage/images.png")

    //Add d'un event au click pour le bouton, ici pour suppr la fenetre et la glass
    image.addEventListener("click", () => {
        conteneurPrincipal.remove()
        glass.remove()
    })
    //add d'un event au survol de l'image pour que celle ci change
    image.addEventListener("mouseover", function (e) {
        e.target.setAttribute("src", "../dossierImage/poubelle-ouverte.png");
    })
    //add d'un event en enlevant le curseur de l'image pour la remettre à son etat initial
    image.addEventListener("mouseout", function (e) {
        e.target.setAttribute("src", "../dossierImage/images.png");
    })

    

})