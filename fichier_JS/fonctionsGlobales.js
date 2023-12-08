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

async function fetchOneSuperHero(i) {
    let url = `https://www.superheroapi.com/api.php/3573902879493747/${i}`;
    try {
        const response = await fetch(url);
        const allData = await response.json();
        if (allData.response === 'success') {
            // console.log(allData);
        }
        return allData;
    } catch (error) {
        console.log(error);
    }
}

async function mettreHeroEntable(propriete, tableARemplir) {
    

    // Utiliser Promise.all pour attendre que toutes les requêtes soient terminées
    await Promise.all(tableOfHero.map(async (i) => {
        const allData = await fetchOneSuperHero(i);
        if (allData.hasOwnProperty(propriete)) {
            tableARemplir.push(allData[propriete]);
        }
    }));

    // console.log(tableARemplir);
    return tableARemplir
}


export{creerUnElement, mettreHeroEntable}



