



// function filtrerCouleurs() {
//     // Récupérer l'option sélectionnée
//     var optionSelectionnee = document.querySelector("recherche__couleur");
//     var optionValue = optionSelectionnee.value;
//     console.log("option selectionner = "+optionValue);
//     // Récupérer tous les éléments
//     var elements = document.querySelectorAll("#gallery li");

//     // Parcourir les éléments et afficher uniquement ceux correspondant à l'option sélectionnée
//     for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];
//     var classeCouleur = element.className.toLowerCase();

//     if (classeCouleur === optionSelectionnee) {
//         element.style.display = "block"; // Afficher l'élément
//     } else {
//         element.style.display = "none"; // Masquer l'élément
//     }
//     }
// }

// function Foundchoice(){
//     filtrerCouleurs();
// }

// let appliquer = document.querySelector('.recherche__buttonVerrif');
// appliquer.addEventListener('click', ()=>{
//     // var optionSelectionnee = ""
//     console.log(optionSelectionnee);
//     Foundchoice();
// })





//^Test 2 

// Étape 1: Récupérer l'élément <input> et l'élément <datalist>
var inputElement = document.querySelector('#recherche__couleur').value.toLowerCase();
console.log(inputElement);
ll
var dataListElement = document.querySelector('.truc_test');
console.log(dataListElement);

// Étape 2: Écouter l'événement 'input' sur l'élément <input>
inputElement.addEventListener('click', function(e) {

    var array = [];
    e.value.array.push

    // Étape 3: Récupérer la valeur sélectionnée de l'élément <datalist>
    var selectedOptionValue = null;

    for (var i = 0; i < dataListElement.options.length; i++) {
        var option = dataListElement.options[i];

        if (option.value === inputElement.value) {
        selectedOptionValue = option.value;
    }
}

// Étape 4: Utiliser la valeur sélectionnée
if (selectedOptionValue !== null) {
    console.log('La valeur sélectionnée est : ' + selectedOptionValue);
    // Faire quelque chose avec la valeur sélectionnée...
}
});










//& Autres test de l'autre doc -->

//TODO 1 - Determiner les option de trie : couleur / Formes / prix 
//TODO 2 - récupere les # dans class via js 
//TODO 3 - ordoné les class couleur dans un tableau 
//TODO 4 - Function de trie 
//TODO 5 - console.log de la reponse 
//TODO
//TODO
//TODO


// Récupération de la liste d'objets

//console.log(listeObjets);


// Convertir les balises <li> en tableau d'objets
// const objets = Array.from(listeObjets).map(li => {
//     return {
//         element: li,
//         couleur: li.style.color
//     };
// });
//console.log(objets);




//^ test0


// // les selectors
// let listBleu = document.querySelector('#listBleu');


// function TrieColor(couleur){
//     // recupere l'id du button 
//     const buttonBleu = document.querySelector(couleur);
//     // Pour rendre la function plus généralist il faut faire un input.value et prendre la valeur de l'option selectionner
//     const listeObjets = document.querySelectorAll('.profile__product');
//     // Passer en revu l'objet
//     listeObjets.forEach(li => {
//         if(!li.classList.contains(couleur.id)){
//             li.setAttribute("class", "hiddenProduct");
//         };
//     });
// }


// // Function générale 
// function Foundchoice(e){
//     console.log(e);
//     var inputElement = document.querySelector('#recherche__couleur').innerText;//.value.toLowerCase()
//     console.log(inputElement);

//     var dataListElement = document.querySelector('.truc_test');
//     console.log(dataListElement);       

//     TrieColor(inputElement);
// }




// let appliquerR = document.querySelector('.recherche__buttonVerrif');
// appliquerR.addEventListener('click', Foundchoice);



//^ TEST 2

// function GetOptionSelect(selectId){

//     var choiceColor = document.querySelector('selectId');
//     return choiceColor.options[choiceColor.selectedIndex].value;
// }
// console.log(GetOptionSelect);

// var selectValue = GetOptionSelect('couleurs');
// var selectValue = document.getElementById('couleurs').options[document.getElementById('couleurs').selectedIndex].value;





// function TrieColor(){
//     let optionToHide = GetOptionSelect(selectId);

//     // Passer en revu l'objet
//     listeObjets.forEach(li => {
//         if(!li.classList.contains(buttonBleu.id)){
//             li.setAttribute("class", "hiddenProduct");
//         };
//     });
// }


//code

// /**Retourne la valeur du select selectId*/
// function getSelectValue(selectId)
// {
// 	/**On récupère l'élement html <select>*/
// 	var selectElmt = document.getElementById(selectId);
// 	/**
// 	selectElmt.options correspond au tableau des balises <option> du select
// 	selectElmt.selectedIndex correspond à l'index du tableau options qui est actuellement sélectionné
// 	*/
//     return selectElmt.options[selectElmt.selectedIndex].value;
// }



//^ Test 3 

// let listBleu = document.querySelector('#listBleu');


// function TrieColor(){

//     const liste = document.getElementById("couleurs");
//     console.log(liste);

//     const optionSelectionnee = liste.querySelector("option:selected");
//     console.log(optionSelectionnee);
    
//     // // Passer en revu l'objet
//     // listeObjets.forEach(li => {
//     //     if(!optionSelectionnee){
//     //         optionSelectionnee.setAttribute("hidden", "");
//     //     };
//     // });
// }


// // Function générale 
// function Foundchoice(){
//     TrieColor();
// }

// let appliquer = document.querySelector('.recherche__buttonVerrif');
// appliquer.addEventListener('click', Foundchoice);





//^Test 4 


// function filtrerCouleurs() {
//     // Récupérer l'option sélectionnée
//     var optionSelectionnee = document.querySelector("choixCouleur").value.toLowerCase();
//     console.log("option selectionner = "+optionSelectionnee);
//     // Récupérer tous les éléments
//     var elements = document.querySelectorAll("#gallery li");

//     // Parcourir les éléments et afficher uniquement ceux correspondant à l'option sélectionnée
//     for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];
//     var classeCouleur = element.className.toLowerCase();

//     if (classeCouleur === optionSelectionnee) {
//         element.style.display = "block"; // Afficher l'élément
//     } else {
//         element.style.display = "none"; // Masquer l'élément
//     }
//     }
// }

// function Foundchoice(){
//     filtrerCouleurs();
// }

// let appliquer = document.querySelector('.recherche__buttonVerrif');
// appliquer.addEventListener('click', Foundchoice);
// // au moment du click assigner la valeur a couleur
// // Et lencer la funciton Foundchoice

// button.addEventListener('click', ()=>{
//     var optionSelectionnee = ""
//     Foundchoice();
// })


// input__choix.addEventListener('click', (e) => 
// {
//     e.preventDefault();
//     choix.value += e.target.value + "\n";
//     e.target.value = null;
//     body.style.backgroundColor = "blue"
// });



