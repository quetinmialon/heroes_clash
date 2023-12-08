import {hero} from "./variableGlobale.js"


function creerUnElement(id, classe, typeElement, elementParent) {
    if (!elementParent || !(elementParent instanceof Element)) {
        console.error("Invalid elementParent:", elementParent);
        return null;
    }

    let elementCree = document.createElement(typeElement);
    elementCree.className = classe;
    elementCree.setAttribute("id", id);
    elementParent.appendChild(elementCree);

    return elementCree;
}


export{creerUnElement}



