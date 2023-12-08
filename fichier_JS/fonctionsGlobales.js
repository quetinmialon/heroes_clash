import {tableOfHero,hero} from "./variableGlobale.js"

let allData
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

const fetchAllSuperHero = async() => {
    let url = `https://www.superheroapi.com/api.php/3573902879493747/70`;
    try{
        const response = await fetch(url);
        allData = await response.json();
        if(allData.response === 'success'){
            console.log(allData);
        }
    } catch(error){
        console.log(error);
    }
}

fetchAllSuperHero()




export{creerUnElement}



