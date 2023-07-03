





//^     #   A   #      OK --> permet de masquer les couleurs non presentes celon le choix datalist client

//& 3 - Function pour masquer les produit ne correspondant pas a la celection du datalist (Foundchoice())
function TrieColor(couleur){
    // console.log(couleur) //OK

    // ici on s'interesse aux articles viser
    const listeObjets = document.querySelectorAll('.profile__product');
    // console.log(listeObjets);

    // Passer en revu l'objet
    listeObjets.forEach(li => {
        // ligne = si, n'est pas egale a la classe de li (contien couleur --> value du datalist)... ajout d'attribut
        if(!li.classList.contains(couleur)){
            // let alreadyPresent = li.classList.value //Ok mais obselet
            // console.log(alreadyPresent); //OK
            li.classList.add('hiddenProduct');
            console.log(li);
        }if(li.classList.contains(couleur)){
            li.classList.remove('hiddenProduct');
        }
    });
}
// recupere la class existant 
// set attridute ajouter hiddenProduct

//& 2 - Function pour récuperé la valeur de l'input et apeller la fucntion de TrieColor()
function Foundchoice(e){
    // console.log(e);

    var inputElement = document.querySelector('#choixCouleur').value.toLowerCase()
    //console.log(inputElement); //OK

    var dataListElement = document.querySelector('.truc_test');
    // console.log(dataListElement); //OK

    // Super astuce ici !! la variable passer en paramettre est envoyer a une autres function !!
    TrieColor(inputElement);
}

//& 1 - Au click du button 
let appliquerR = document.querySelector('.recherche__buttonVerrif');
appliquerR.addEventListener('click', Foundchoice);





//^  --> pour de masquer les forme non presentes celon le choix datalist client

//& 3 - Function pour masquer les produit ne correspondant pas a la celection du datalist (Foundchoice())
function TrieColor(couleur){
    // console.log(couleur) //OK

    // ici on s'interesse aux articles viser
    const listeObjets = document.querySelectorAll('.profile__product');
    // console.log(listeObjets);

    // Passer en revu l'objet
    listeObjets.forEach(li => {
        // ligne = si, n'est pas egale a la classe de li (contien couleur --> value du datalist)... ajout d'attribut
        if(!li.classList.contains(couleur)){
            // let alreadyPresent = li.classList.value //Ok mais obselet
            // console.log(alreadyPresent); //OK
            li.classList.add('hiddenProduct');
            console.log(li);
        }if(li.classList.contains(couleur)){
            li.classList.remove('hiddenProduct');
        }
    });
}