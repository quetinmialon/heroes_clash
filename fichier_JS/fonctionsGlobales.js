function creerUnElement(id, classe, typeElement, elementParent){
    // fonction de création d'objet, pour l'utiliser : 
    // test = creerUnElement("idDuTest","classeduTest", "typedebaliseduTest", element ou arrive le test)
    
       let  elementcree = document.createElement(typeElement)
        elementcree.className = classe
        elementcree.setAttribute("id",id)
        elementParent.appendChild(elementcree)
        
        return elementcree
}



function recupererUnHero(heroName){
    //fonction pour stocker un objet de l'api hero entier dans une variable
    // exemple : let heroBatman = recupererUnHero(batman)
    
}

export{creerUnElement}

