var body = document.body;
// Ajout des styles CSS à l'élément
body.style.background = '-webkit-linear-gradient(90deg, #7b219f, #ed719e, #ffb5af)';
body.style.background = 'linear-gradient(90deg, #7b219f, #ed719e, #ffb5af)';
body.style.fontFamily = 'Arial, Helvetica, sans-serif';


// Pour la parti du menu 
// Créer un élément <header> avec la classe ""
var header = document.createElement('header');

// Créer un élément <div> avec la classe "head"
var divHead = document.createElement('div');
divHead.className = 'head';

// Créer un élément <div> avec la classe "logo"
var divLogo = document.createElement('div');
divLogo.className = 'logo';

// Créer un élément <a> avec les attributs href et class
var linkLogo = document.createElement('a');
linkLogo.href = 'index.html';
linkLogo.className = 'none';

// Créer un élément <p> avec la classe "logo__placement" et le texte "LOGO PROVISOIR"
var pLogo = document.createElement('p');
pLogo.className = 'logo__placement';
pLogo.textContent = 'LOGO PROVISOIR';

// Ajouter l'élément <p> à l'élément <a>
linkLogo.appendChild(pLogo);

// Ajouter l'élément <a> à l'élément <div class="logo">
divLogo.appendChild(linkLogo);

// Ajouter l'élément <div class="logo"> à l'élément <div class="head">
divHead.appendChild(divLogo);

// Créer un élément <div> avec la classe "head__block"
var divHeadBlock = document.createElement('div');
divHeadBlock.className = 'head__block';

// Créer un élément <nav> avec la classe "head__centre"
var nav = document.createElement('nav');
nav.className = 'head__centre';

// Créer les éléments <a> avec les attributs href et class pour le menu
var linkAPropos = document.createElement('a');
linkAPropos.href = 'apropos.html';
linkAPropos.className = 'menu_principal ligne none';
linkAPropos.textContent = 'A Propos';

var linkContact = document.createElement('a');
linkContact.href = 'contact.html';
linkContact.className = 'menu_principal ligne none';
linkContact.textContent = 'Contact';

var linkVitrine = document.createElement('a');
linkVitrine.href = 'vitrine_a.html';
linkVitrine.className = 'menu_principal ligne none';
linkVitrine.textContent = 'Vitrine';

var linkInscription = document.createElement('a');
linkInscription.href = 'inscription.html';
linkInscription.className = 'menu_principal ligne none';
linkInscription.textContent = 'Mon compte';

// Ajouter les éléments <a> à l'élément <nav>
nav.appendChild(linkAPropos);
nav.appendChild(linkContact);
nav.appendChild(linkVitrine);
nav.appendChild(linkInscription);

// Ajouter l'élément <nav> à l'élément <div class="head__block">
divHeadBlock.appendChild(nav);

// Ajouter l'élément <div class="head__block"> à l'élément <div class="head">
divHead.appendChild(divHeadBlock);

// Créer un élément <div> avec la classe "pannier"
var divPannier = document.createElement('div');
divPannier.className = 'pannier';

// Créer un élément <div> avec la classe "pannier__placement"
var divPannierPlacement = document.createElement('div');
divPannierPlacement.className = 'pannier__placement';

// Créer un élément <img> avec les attributs src, alt, width et height
var imgPannier = document.createElement('img');
imgPannier.src = 'ressources/panier.png';
imgPannier.alt = 'ADD TO BASKET';
imgPannier.width = '50%';
imgPannier.height = '50%';

// Ajouter l'élément <img> à l'élément <div class="pannier__placement">
divPannierPlacement.appendChild(imgPannier);

// Ajouter l'élément <div class="pannier__placement"> à l'élément <div class="pannier">
divPannier.appendChild(divPannierPlacement);

// Ajouter l'élément <div class="pannier"> à l'élément <div class="head">
divHead.appendChild(divPannier);

// Ajouter l'élément <div class="head"> à l'élément <header>
header.appendChild(divHead);

// Ajouter l'élément <header> au corps du document
document.body.appendChild(header);









// Pour la parti central 

var espace = document.createElement('div');
espace.className = 'trucalacon';

// var espaceStyle = document.querySelector(".trucalacon");

document.body.appendChild(espace);

// Créer un élément <section> avec la classe "centre"
var sectionCentre = document.createElement('section');
sectionCentre.className = 'centre';


// Créer un élément <section> imbriqué dans la première section
var sectionInterne = document.createElement('section');
sectionCentre.appendChild(sectionInterne);

// Créer un élément <div> avec la classe "menuClient"
var divMenuClient = document.createElement('div');
divMenuClient.className = 'menuClient';


// Créer les éléments <div> et <h3> pour le texte "Hey !!"
var divBienvenu1 = document.createElement('div');
divBienvenu1.className = 'menuClient__bienvenu';
var h3Bienvenu1 = document.createElement('h3');
h3Bienvenu1.textContent = 'Hey !!';


divBienvenu1.appendChild(h3Bienvenu1);
divMenuClient.appendChild(divBienvenu1);

// Créer les éléments <div> et <h3> pour le texte "Bonjour M.Dupont"
var divBienvenu2 = document.createElement('div');
divBienvenu2.className = 'menuClient__bienvenu';
var h3Bienvenu2 = document.createElement('h3');
h3Bienvenu2.className = 'petitbug'
h3Bienvenu2.textContent = 'Bonjour M.Dupont';
divBienvenu2.appendChild(h3Bienvenu2);
divMenuClient.appendChild(divBienvenu2);

// Ajouter des éléments <br> supplémentaires
divMenuClient.appendChild(document.createElement('br'));
divMenuClient.appendChild(document.createElement('br'));
divMenuClient.appendChild(document.createElement('br'));
divMenuClient.appendChild(document.createElement('br'));

// Créer un lien <a> pour "Mes Informations"
var lienMesInformations = document.createElement('a');
lienMesInformations.href = 'compte/mesinformation.html';

var divMesInformations = document.createElement('div');
divMesInformations.className = 'info';
divMesInformations.textContent = 'Mes Informations';
lienMesInformations.appendChild(divMesInformations);
divMenuClient.appendChild(lienMesInformations);

// Ajouter des éléments <br> supplémentaires
divMenuClient.appendChild(document.createElement('br'));
divMenuClient.appendChild(document.createElement('br'));

// Créer un lien <a> pour "Bon plans"
var lienBonPlans = document.createElement('a');
lienBonPlans.href = 'compte/bonplan.html';

var divBonPlans = document.createElement('div');
divBonPlans.className = 'bonPlans';
divBonPlans.textContent = 'Bon plans';
lienBonPlans.appendChild(divBonPlans);
divMenuClient.appendChild(lienBonPlans);

// Ajouter des éléments <br> supplémentaires
divMenuClient.appendChild(document.createElement('br'));
divMenuClient.appendChild(document.createElement('br'));

// Créer un lien <a> pour "Historique de commandes"
var Historique = document.createElement('a');
Historique.href = 'compte/historique.html';

var divHistorique = document.createElement('div');
divHistorique.className = 'historique';
divHistorique.textContent = 'Historique de commandes';
Historique.appendChild(divHistorique);
divMenuClient.appendChild(Historique);

// Ajouter des éléments <br> supplémentaires
divMenuClient.appendChild(document.createElement('br'));
divMenuClient.appendChild(document.createElement('br'));

// Créer un élément <div> avec la classe "deconnexion"
var Deconnexion = document.createElement('div');
Deconnexion.className = 'deconnexion';
Deconnexion.textContent = 'Déconnexion';
divMenuClient.appendChild(Deconnexion);

// Ajouter le contenu final à la section interne
sectionInterne.appendChild(divMenuClient);

// Ajouter la section au corps du document
document.body.appendChild(sectionCentre);





























// Pour la parti du Footer

// Créer un élément <footer>
var footer = document.createElement('footer');

// Créer un élément <div> avec la classe "grow"
var divGrow = document.createElement('div');
divGrow.className = 'grow';

// Ajouter l'élément <div class="grow"> au footer
footer.appendChild(divGrow);

// Créer un élément <div> avec la classe "footer__placement"
var divFooterPlacement = document.createElement('div');
divFooterPlacement.className = 'footer__placement';

// Créer un élément <div> avec la classe "footer"
var divFooter = document.createElement('div');
divFooter.className = 'footer';

// Créer un élément <div> avec la classe "B1"
var divB1 = document.createElement('div');
divB1.className = 'B1';

// Créer un élément <a> avec les attributs href et class pour les mentions légales
var linkMentionsLegales = document.createElement('a');
linkMentionsLegales.href = 'mentionlegales.html';
linkMentionsLegales.className = 'hov none';

// Créer un élément <p> avec le texte "Mentions Légales"
var pMentionsLegales = document.createElement('p');
pMentionsLegales.textContent = 'Mentions Légales';

// Ajouter l'élément <p> à l'élément <a>
linkMentionsLegales.appendChild(pMentionsLegales);

// Ajouter l'élément <a> au <div class="B1">
divB1.appendChild(linkMentionsLegales);

// Créer un élément <br>
var br1 = document.createElement('br');

// Ajouter l'élément <br> au <div class="B1">
divB1.appendChild(br1);

// Créer un autre élément <a> avec les attributs href et class pour les conditions générales de vente
var linkConditionsVentes = document.createElement('a');
linkConditionsVentes.href = 'mentionlegales.html';
linkConditionsVentes.className = 'hov none';

// Créer un autre élément <p> avec le texte "Conditions Générales de Ventes"
var pConditionsVentes = document.createElement('p');
pConditionsVentes.textContent = 'Conditions Générales de Ventes';

// Ajouter l'élément <p> à l'élément <a>
linkConditionsVentes.appendChild(pConditionsVentes);

// Ajouter l'élément <a> au <div class="B1">
divB1.appendChild(linkConditionsVentes);

// Ajouter l'élément <div class="B1"> au <div class="footer">
divFooter.appendChild(divB1);

// Créer un autre élément <div> avec la classe "B1"
var divB2 = document.createElement('div');
divB2.className = 'B1';

// Créer un élément <p> avec la classe "hov" pour "Cookie"
var pCookie = document.createElement('p');
pCookie.className = 'hov';
pCookie.textContent = 'Cookie';

// Ajouter l'élément <p> au <div class="B2">
divB2.appendChild(pCookie);

// Créer un autre élément <br>
var br2 = document.createElement('br');

// Ajouter l'élément <br> au <div class="B2">
divB2.appendChild(br2);

// Créer un autre élément <p> avec la classe "hov" pour "Copyright"
var pCopyright = document.createElement('p');
pCopyright.className = 'hov';
pCopyright.textContent = 'Copyright';

// Ajouter l'élément <p> au <div class="B2">
divB2.appendChild(pCopyright);

// Ajouter l'élément <div class="B2"> au <div class="footer">
divFooter.appendChild(divB2);

// Créer un autre élément <div> avec la classe "B3"
var divB3 = document.createElement('div');
divB3.className = 'B3';

// Créer un élément <img> avec les attributs src, alt, width et height pour Instagram
var imgInstagram = document.createElement('img');
imgInstagram.src = 'ressources/instagram.png';
imgInstagram.alt = 'Instagram';
imgInstagram.width = '40';
imgInstagram.height = '40';

// Ajouter l'élément <img> au <div class="B3">
divB3.appendChild(imgInstagram);

// Ajouter l'élément <div class="B3"> au <div class="footer">
divFooter.appendChild(divB3);

// Ajouter l'élément <div class="footer"> au <div class="footer__placement">
divFooterPlacement.appendChild(divFooter);

// Ajouter l'élément <div class="footer__placement"> au footer
footer.appendChild(divFooterPlacement);

// Ajouter le footer au corps du document
document.body.appendChild(footer);




















// Le CSS de la partie Body

// let espaceStyle = document.getElementsByClassName('.espaceStyle');
// espaceStyle.style.height = "50px";
// espaceStyle.style.width = '100%';

let centre = document.querySelector('.centre');
centre.style.width = '80%';
centre.style.margin = 'auto';

let menuClient = document.querySelector('.menuClient');
menuClient.style.height = '500px';
menuClient.style.width = '300px';
menuClient.style.display = 'flex';
menuClient.style.background = 'rgba(255, 255, 255, 0.3)';
menuClient.style.overflow = 'hidden';
menuClient.style.borderRadius = '20px';
menuClient.style.margin = '60px';
menuClient.style.boxShadow = '4px 4px 60px 8px rgba(0, 0, 0, 0.2)';
menuClient.style.backdropFilter = 'blur(10px)';
menuClient.style.webkitBackdropFilter = 'blur(10px)';
menuClient.style.mozBackdropFilter = 'blur(10px)';
menuClient.style.borderLeft = '1px solid rgba(255, 255, 255, 0.3)';
menuClient.style.borderTop = '1px solid rgba(255, 255, 255, 0.3)';
menuClient.style.flexDirection = 'column';
menuClient.style.flexWrap = 'wrap';
menuClient.style.marginTop = '130px';

let menuClient__bienvenu2 = document.querySelector('.menuClient__bienvenu');
menuClient__bienvenu2.style.textAlign = 'center';

// let menuClient__menu2 = document.querySelector('.menuClient__menu');
// menuClient__menu2.style.textAlign = 'justify';


let h3 = document.querySelector('h3');
h3.style.color = '#ffffff';
h3.style.fontSize = '25px';
h3.style.margin = '10px 15px';
h3.style.marginTop = '15px';


// let elements = document.querySelector('h2');
// elements.addEventListener('mouseover', function() {
// this.style.color = '#c9c9c9';
// });


let infoElement = document.querySelector('.info')
infoElement.style.color = 'white';
infoElement.style.fontSize = '20px';
infoElement.style.margin = '0px 15px';
infoElement.style.padding = '10px';
infoElement.parentNode.style.textDecoration = 'none';

let bonPlans2 = document.querySelector('.bonPlans');
bonPlans2.style.color = '#ffffff';
bonPlans2.style.fontSize = '20px';
bonPlans2.style.margin = '0px 15px';
bonPlans2.style.padding = '10px';
bonPlans2.parentNode.style.textDecoration = 'none';

let historique = document.querySelector('.historique');
historique.style.color = 'white';
historique.style.fontSize = '20px';
historique.style.margin = '0px 15px';
historique.style.padding = '10px';
historique.parentNode.style.textDecoration = 'none';

let deconnexion = document.querySelector('.deconnexion');
deconnexion.style.color = '#ffffff';
deconnexion.style.fontSize = '20px';
deconnexion.style.margin = '0px 15px';
deconnexion.style.padding = '10px';
deconnexion.parentNode.style.textDecoration = 'none';


let petitbug = document.querySelector('.petitbug');
petitbug.style.color = '#ffffff';
petitbug.style.fontSize = '25px';
petitbug.style.margin = '0px 15px';
petitbug.style.marginTop = '5px';
petitbug.style.textAlign = 'center'