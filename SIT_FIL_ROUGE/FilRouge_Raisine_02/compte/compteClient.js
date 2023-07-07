
//& Récupération des éléments de l'utilisateur
const nomElement = document.getElementById('nom');
const modifierNom = document.getElementById('modifierNom');

const prenomElement = document.getElementById('prenom');
const modifierPrenom = document.getElementById('modifierPrenom');

const adresseElement = document.getElementById('adresse');
const modifierAdresse = document.getElementById('modifierAdresse');

const cpElement = document.getElementById('cp');
const modifierCp = document.getElementById('modifierCp');

const villeElement = document.getElementById('ville');
const modifierVille = document.getElementById('modifierVille');

const telElement = document.getElementById('tel');
const modifierTel = document.getElementById('modifierTel');

const dateElement = document.getElementById('date');
const modifierDate = document.getElementById('modifierDate');


//& Données utilisateur deja renseigné  -->  CF base de données 
let nom = 'Doe';
let prenom = 'John';
let adresse = '7 Rue Truc';
let cp = '31000';
let ville = 'Toulouse';
let tel = '0600000000';
let date = '01/01/2011';


//^ Afficher les informations utilisateur (ici des varriable)
nomElement.textContent = nom;
prenomElement.textContent = prenom;
adresseElement.textContent = adresse;
cpElement.textContent = cp;
villeElement.textContent = ville;
telElement.textContent = tel;
dateElement.textContent = date;

//^ Nom
modifierNom.addEventListener('click', function(){
  let new1 = prompt('Entrez le nouveau Nom :');
  nom = new1;
  nomElement.textContent = nom;
});

//^ Prenom
modifierPrenom.addEventListener('click', function(){
  let new2 = prompt('Entrez le nouveau Prenom :');
  prenom = new2;
  prenomElement.textContent = prenom;
});

//^ Adress
modifierAdresse.addEventListener('click', function(){
  let new3 = prompt('Entrez une nouvelle adresse :');
  adresse = new3;
  adresseElement.textContent = adresse;
});



//^ Cp
modifierCp.addEventListener('click', function(){
  let new4 = prompt('Entrez un nouveauc code postal :');
  cp = new4;
  cpElement.textContent = cp;
});

//^ Ville
modifierVille.addEventListener('click', function(){
  let new5 = prompt('Entrez une nouvelle Ville:');
  ville = new5;
  villeElement.textContent = ville;
});

//^ Tel
modifierTel.addEventListener('click', function(){
  let new6 = prompt('Entrez un nouveaux numero de telephon :');
  tel = new6;
  telElement.textContent = tel;
});

//^ Date
modifierDate.addEventListener('click', function(){
  let new7 = prompt('Entrez une nouvelle date de naissance :');
  date = new7;
  dateElement.textContent = date;
});