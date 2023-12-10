import {tableOfHero} from "./variableGlobale.js"


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

const tableHeroData = await Promise.all(tableOfHero.map(async (i) => {
    const allData = await fetchOneSuperHero(i);
    return allData;
}));


export{creerUnElement, tableHeroData}



