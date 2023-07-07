//^    #    ALL    #
//& 1 - Au click du button 
let appliquerR = document.querySelector('.recherche__buttonVerrif');
appliquerR.addEventListener('click', TrieAll);


//^     #    A    #
//^  --> pour de masquer les forme non presentes celon le choix datalist client
//& Function pour masquer les produit ne correspondant pas a la celection du datalist (Foundchoice())
function TrieAll(){
    //* PRIX (prix)
    let inputPrix = document.querySelector('.recherche__prix').value.toLowerCase();
    const priceFromDocument = document.querySelectorAll('.profile__price');
    //* COULEURS
    let inputColor = document.querySelector('#choixCouleur').value.toLowerCase();
    //* FORMES 
    let inputForme = document.querySelector('#recherche__forme').value.toLowerCase();
    //* ALL (Forme / Couleurs)
    const listeObjets = document.querySelectorAll('.profile__product');
    //* Passer en revu l'objet
    listeObjets.forEach(li => {
        if ((inputColor == "") && (inputForme == "")){
            li.classList.remove('hiddenProduct');
        }else{
            if(!li.classList.contains(inputForme) || (!li.classList.contains(inputColor))){
                li.classList.add('hiddenProduct');
            }if((li.classList.contains(inputForme)) || (li.classList.contains(inputColor))){
                li.classList.remove('hiddenProduct');
            };
        };
    });

    let aPrice = [];
    for (i=0;i<priceFromDocument.length;i++){
        let nodePrice = priceFromDocument[i];
        let allPrices = nodePrice.innerText
        // pour remove le €
        let simpelPrice = allPrices.slice(0, -1);
        simpelPrice = parseInt(simpelPrice);
        aPrice.push(simpelPrice);
    }

    if (inputPrix == "prix croissant"){
        const prixCroissant = aPrice.sort((a, b) => a - b);
        console.log(prixCroissant);

    }else if(inputPrix == "prix décroissant"){
        const prixDecroissant = aPrice.sort((a, b) => b - a);
        console.log(prixDecroissant);
    }
};















