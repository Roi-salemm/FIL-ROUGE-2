// Création des éléments
var doctype = document.implementation.createDocumentType('html', '', '');
var doc = document.implementation.createDocument('', 'html', doctype);
var html = doc.documentElement;
var head = document.createElement('head');
var metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
var metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
var title = document.createElement('title');
title.textContent = 'Raisine';
var body = document.createElement('body');
var script = document.createElement('script');








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

    var espaceStyle = document.querySelector(".trucalacon");
    // espaceStyle.style.height = "100px";
    // espaceStyle.style.width = '100%';

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
    var lienHistorique = document.createElement('a');
    lienHistorique.href = 'compte/historique.html';
    var divHistorique = document.createElement('div');
    divHistorique.className = 'historique';
    divHistorique.textContent = 'Historique de commandes';
    lienHistorique.appendChild(divHistorique);
    divMenuClient.appendChild(lienHistorique);

    // Ajouter des éléments <br> supplémentaires
    divMenuClient.appendChild(document.createElement('br'));
    divMenuClient.appendChild(document.createElement('br'));

    // Créer un élément <div> avec la classe "deconnexion"
    var divDeconnexion = document.createElement('div');
    divDeconnexion.className = 'deconnexion';
    divDeconnexion.textContent = 'Déconnexion';
    divMenuClient.appendChild(divDeconnexion);

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