import {tableOfHero} from "./variableGlobale.js"


function creerUnElement(id, classe, typeElement, elementParent) {
// fonction de création rapide d'une div attendant 4 paramtres, un id, une classe, un typed'element et l'elementparent qui doit etre dans le DOM)
// par exemple pour créer une div "test" dans la div parentTest (soit recupérer via get element by id ou créé dynamiquement en JS)
// test = creerUnElement ("idDuTest","classeDuTest","div",parentTest)

    let elementCree = document.createElement(typeElement);
    elementCree.className = classe;
    elementCree.setAttribute("id", id);
    elementParent.appendChild(elementCree);

    return elementCree;
}

async function fetchOneSuperHero(i) {
    //fonction faisant lien avec l'api super hero, le parametre "i" attend l'ID d'un héro
    let url = `https://www.superheroapi.com/api.php/3573902879493747/${i}`;
    try {
        const response = await fetch(url);
        const allData = await response.json();
        return allData;
    } catch (error) {
        console.log(error);
    }
}
// place les héros attendu de tableOfHero dans un tablo appelé tableHeroData
// chaque cellule du tableau tableHeroData contient l'objet avec toutes les informations sur le héro renvoyé par l'api
const tableHeroData = await Promise.all(tableOfHero.map(async (i) => {
    const allData = await fetchOneSuperHero(i);
    return allData;
}));


export{creerUnElement, tableHeroData}



