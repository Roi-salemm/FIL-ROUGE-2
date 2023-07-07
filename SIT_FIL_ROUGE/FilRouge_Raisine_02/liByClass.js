class Product {

    constructor(name, price, color, shape) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.shape = shape;
    }

//^ Copy js du Html
generateLiElement() {
    const li = document.createElement('li');
    li.classList.add('profile__product');

    const a = document.createElement('a');
    a.setAttribute('href', 'produit.html');
    a.classList.add('class', 'none');
    // a.setAttribute('value', '');

    const img = document.createElement('img');
    img.setAttribute('src', 'ressources/pasteImage1679588884375.jpeg');
    img.setAttribute('alt', 'Article');
    img.classList.add('profile-img');

    const ul = document.createElement('ul');
    ul.classList.add('profile__side');

    const likeImg = document.createElement('img');
    likeImg.setAttribute('src', 'ressources/coeur.png');
    likeImg.setAttribute('alt', '.');
    likeImg.classList.add('like_it');

    ul.appendChild(likeImg);

    const div = document.createElement('div');
    div.classList.add('profile__info');

    const colorDiv = document.createElement('div');
    colorDiv.classList.add('profile__color');
    // colorDiv.style.backgroundColor = this.color;

    const nameP = document.createElement('p');
    nameP.classList.add('profile__name');
    nameP.innerText = this.name;

    const priceP = document.createElement('p');
    priceP.classList.add('profile__price');
    priceP.innerText = this.price;

    const seeButton = document.createElement('button');
    seeButton.classList.add('profile__see');
    seeButton.innerText = 'Jeter un oeil';

    div.appendChild(colorDiv);
    div.appendChild(nameP);
    div.appendChild(priceP);
    div.appendChild(seeButton);

    a.appendChild(img);
    a.appendChild(ul);
    a.appendChild(div);

    li.appendChild(a);

    return li;
    }
}

//* Liste des poduits entrer (avec leurs caracteristique  ==>  Constructeur)
const products = [
    new Product('salamandres vert 1', '19€', 'vert', 'salamandres'),
    new Product('crânes bleu 2', '12€', 'bleu', 'crânes'),
    new Product('grenouilles rose 3', '8€', 'rose', 'grenouilles'),
    new Product('salamandres violet 4', '25€', 'violet', 'salamandres'),
    new Product('crânes vert 5', '15€', 'vert', 'crânes'),
    new Product('grenouilles bleu 6', '10€', 'bleu', 'grenouilles'),
    new Product('salamandres rose 7', '22€', 'rose', 'salamandres'),
    new Product('crânes violet 8', '6€', 'violet', 'crânes'),
    new Product('grenouilles vert 9', '17€', 'vert', 'grenouilles'),
    new Product('salamandres bleu 10', '13€', 'bleu', 'salamandres')
];

//^ Ici récuperations des id, class et des imputs

//* Pour ciblé ou serra fait l'affichage des produits
const productsList = document.querySelector('.gallery');

//* Pour recupere le choix client croissant/decroissant/""
const sortOptionInput = document.getElementById('sortOption');

//* Pour recupere le choix client couleur
const colorOptionInput = document.getElementById('colorOption');

//* Pour triller par forme 
const shapeOptionInput = document.getElementById('shapeOption');

//* Pour recherche
const chercheOptionInput = document.getElementById('recherche');

//* Pour l'autocompletion de recherche (pour reset)
const autocompletOptionUl = document.getElementById('autocompleteList');

//* Si aucune correspondance
const ifNoCorrespondance = document.getElementById('ifNoCorrespondance');

//* Pour valider 
const validateButton = document.getElementById('validateButton');

//^ Rémouve les produits 
function clearProductsList() {
    productsList.innerHTML = '';
}

//^ supprime et réaffiche
function displayProducts() {
    clearProductsList();
    //* boucle les produits de la constante contenant tous les produits
    //* Et réaffiche avec generateLiElement() --> L'article (produit) 
    for (const product of products) {
        const li = product.generateLiElement();
        productsList.appendChild(li);
    }
}

//* Trie Croissant 
function sortProductsByPriceAsc() {
    products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    displayProducts();
}
//* Trie Décroissant
function sortProductsByPriceDesc() {
    products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    displayProducts();
}

//^ Trie celons la forme 
//* Recupere en paramettre la forme (constructeur) des article (const products)
function filterProductsByShape(shape) {

    //* Par defaut all pour tout afficher. 
    if (shape === '') {
        displayProducts();

    //* Si non : cree un tableau avec .filter --> (new array). 
    //* product.shape === shape --> (forme du produit par la forme (shape du constructor)) pour conparé les forme
    } else {
        const filteredProducts = products.filter(product => product.shape === shape);
        clearProductsList();

        //* Trie les forme, si la forme du produit correspond a celle du datalist alors il cree un li en apellant generateLiElement()
        for (const product of filteredProducts) {
        const li = product.generateLiElement();
        productsList.appendChild(li);
        }
    }
    if (productsList.childElementCount === 0){
        ifNoCorrespondance.innerText = "Il n'y a acctuelement aucun produit avec la forme "+shape;
    }
}

//^ Trie celons la Couleur
function filterProductsByColor(color) {
    if (color === '') {
        displayProducts();     
    }else {
        const filteredProducts = products.filter(product => product.color === color);
        clearProductsList();
        for (const product of filteredProducts) {
        const li = product.generateLiElement();
        productsList.appendChild(li);
        }
    } 
    if (productsList.childElementCount === 0){
            ifNoCorrespondance.innerText = "Il n'y a acctuelement aucun produit avec la couleur "+color;
        }
}


//^ Recherche
function findProducts(cherche) {
    const chercheTerm = chercheOptionInput.value.toLowerCase();
    
    if (cherche === '') {
        displayProducts();
    } else {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(chercheTerm) ||
            product.price.toLowerCase().includes(chercheTerm) ||
            product.color.toLowerCase().includes(chercheTerm)
        );
        clearProductsList();
        for (const product of filteredProducts) {
        const li = product.generateLiElement();
        productsList.appendChild(li);
        }
    }
}

//^ Pour l'auto completion  
function autocomplete() {
    const searchTerm = chercheOptionInput.value.toLowerCase();
    
    const autocompleteResults = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    const autocompleteList = document.getElementById('autocompleteList');
    autocompleteList.innerHTML = '';

    autocompleteResults.forEach(result => {
        const item = document.createElement('li');
        item.textContent = result.name;
        autocompleteList.appendChild(item);
    });
}

chercheOptionInput.addEventListener('input', autocomplete);

//^ L'evenement --> btn Appliquer
validateButton.addEventListener('click', function() {
    const sortOption = sortOptionInput.value;
    const colorOption = colorOptionInput.value;
    const shapeOption = shapeOptionInput.value;
    const chercheOption = chercheOptionInput.value;

    if (sortOption === 'prix croissant') {
        sortProductsByPriceAsc();
    } else if (sortOption === 'prix décroissant') {
        sortProductsByPriceDesc();
    }

    filterProductsByColor(colorOption);

    if (shapeOption !== ''){
        filterProductsByShape(shapeOption);
    }

    if (chercheOption !== ''){
        findProducts(chercheOption);
    }

    //* Pour vider les suggestion d'auto completion automatiquement
    autocompletOptionUl.innerHTML = '';
});


//^ Pour réinitialiser les champs input au click 
let resetData = '';

function initDataSortOptionInput (){
    sortOptionInput.value = resetData;
}
function initDataColorOptionInput (){
    colorOptionInput.value = resetData;
}
function initDataShapeOptionInput (){
    shapeOptionInput.value = resetData;
}
function initDataCherchOptionInput (){
    chercheOptionInput.value = resetData;
}
// function initDataAutocompletUl (){
//     autocompletOptionUl.innerHTML = '';
// }

sortOptionInput.addEventListener('click', initDataSortOptionInput);
colorOptionInput.addEventListener('click', initDataColorOptionInput);
shapeOptionInput.addEventListener('click', initDataShapeOptionInput);
chercheOptionInput.addEventListener('click', initDataCherchOptionInput);
// autocompletOptionUl.addEventListener('click', initDataAutocompletUl);

displayProducts();







