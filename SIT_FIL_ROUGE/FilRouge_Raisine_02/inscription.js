//& l'envoie -->  Connexion
//* L'evenements de fin --> "Btn Enregistré"
let form1 = document.getElementById('listenToMe');
form1.addEventListener("submit",VerifAll);


//& l'envoie --> Inscription
//* L'evenements de fin --> "Btn Enregistré"
let form2 = document.getElementById('inscription_submit');
form2.addEventListener("submit",VerifAll);
form1.addEventListener("submit",windowOk);


//^ les objects --> ce qui est à verrifier 
//& A
//* les mots de passes 
let mp__co = document.getElementById('co__mp');
mp__co.addEventListener('blur', VerifMp);
// mp__co.addEventListener('blur', VerifConnexionMp);

//* Le Mail
let email__co = document.getElementById('co__email');
email__co.addEventListener('blur', VerrifEmail)
// email__co.addEventListener('blur', VerifConnexionEmail)





//* Les funciton pour valider si les indentifiant de conexions sont correct ?
function VerifConnexionMp(e){
    // e.preventDefault()
    let simulationDataMptsDePass = 'vivelecode555';  //!  Mp Provisoir
 //* Comparaison avec les identifiant deja enregistré (ici une variable)
    let vco__mp = document.getElementById('co__mp').value;
    let result = false
    if(simulationDataMptsDePass==vco__mp){
        result = true
        console.log('bon mots de pass');
    }
    else{
        console.log('movais mots de pass');
    };
    return result;
}

function VerifConnexionEmail (e){
    // e.preventDefault()
    let simulationDataEmail = 'viveLECODE@gmail.com'; //! Email provisoir
     //* Comparaison avec les identifiant deja enregistré (ici une variable)
    let vco__email = document.getElementById('co__email').value;
    let result = false
    if(simulationDataEmail==vco__email){
        result = true
        console.log('Bon Email');
    }
    else{
        console.log('Movais Email');
    };
    return result;
}



//& B
//* Les Char
let nom = document.getElementById('nom');
nom.addEventListener('blur',VerifChar);

let prenom = document.getElementById('prenom');
prenom.addEventListener('blur', VerifChar);

//* Le Mail
let email = document.getElementById('email');
email.addEventListener('blur', VerrifEmail)

//* Les Int
let tel = document.getElementById('tel');
tel.addEventListener('blur', VerifInt);

//* les mots de passes 
let mp = document.getElementById('mp');
mp.addEventListener('blur', VerifMp);

let mp_confirm = document.getElementById('mp_confirm');
mp_confirm.addEventListener('blur', VerifMpTwo)



//^ les objects --> notifications d'erreurs au bon endroit 
let wrong_nom = document.getElementById('wrong_nom');
let wrong_prenom = document.querySelector('#wrong_prenom');
let wrong_mp = document.querySelector('#wrong_mp');
let wrong_mp_confirm = document.querySelector('#wrong_mp_confirm');
let wrong_datborn = document.querySelector('#wrong_datborn');
let wrong_email = document.querySelector('#wrong_email');
let wrong_tel = document.querySelector('#wrong_tel');


//^ Varriables des Regexp
//* Pour les char
var regexpChar = new RegExp("^[a-zA-Zàâäéèêëîïôöùûüÿ\'\ \-]{2,22}$");
var regexpEmail = new RegExp("^[a-z.-_^@]{4,22}$");
var regexpInt = new RegExp("^[0-9]{10}$");
var regexpMp = new RegExp("^[0-9a-zA-Z0-9_]{7,30}$");

//* Pour les char
function VerifChar(e){
    let element = e.target; // e = evenement ____ traget = la cible de de l'evenement
    let valeur = element.value; // la valeur de la cible 
    let p = element.parentNode.lastChild.previousSibling;

    if(!regexpChar.test(valeur)){
        element.setAttribute("class","error");
        p.innerText = "...J'ai l'impression que la saisit est invalide, essaie encore s'il-te-plait";
    }
    else{
        element.setAttribute("class","validation");
        p.innerText = "";
    };
};

//* E-mail
function VerrifEmail(e){
    //let result = true;
    let element = e.target;
    let valeur = element.value; 
    let p = element.parentNode.lastChild.previousSibling;
    if(!regexpEmail.test(valeur)){
        element.setAttribute("class","error");
        p.innerText = "Vous devez entrer une adresse mail valide";
        //return result = false; // pour la validations final... --> envoie
    }
    else{
        element.setAttribute("class","validation");
        p.innerText = "";
    };
};

//* Pour les int
function VerifInt(e){
    let element = e.target;
    let valeur = element.value;
    let p = element.parentNode.lastChild.previousSibling;
    if(!regexpInt.test(valeur)){
        element.setAttribute("class","error");
        p.innerText = "Au format 06 00 00 00 00.";
    }
    else{
        element.setAttribute("class","validation");
        p.innerText = "";
    };
};

//* Pour les mots de passes 
function VerifMp(e){
    let element = e.target;
    let valeur = element.value;
    let p = element.parentNode.lastChild.previousSibling;
    if(!regexpMp.test(valeur)){
        element.setAttribute("class","error");
        p.innerText = "7 caractéres minimum parmis : Majuscule, Minuscule, Chffres.";
    }
    else{
        element.setAttribute("class","validation");
        p.innerText = "";
    };
};

//* Pour verrifier que le second mots de passe est indentique au premier 
function VerifMpTwo(e){
    let element = e.target;
    let p = element.parentNode.lastChild.previousSibling;

    let mp2 = document.getElementById('mp').value;
    let mp_confirm2 = document.getElementById('mp_confirm').value;

    if(mp2 == mp_confirm2){
        element.setAttribute("class","validation");
        p.innerText = "";
    }else{
        element.setAttribute("class","error");
        p.innerText = "Erreur dans les mots de passes"
    }
}



//^ pour lencer les verif des functions 
function VerifAll(e){
    e.preventDefault() // anule le comportement par default
}

//^ Function provisoir pour les identifiant de connexion qui renvoie sur la page compet Client.
function windowOk(e){
    let testmp = false 
    testmp = VerifConnexionMp(e);
    let testemail = false
    testemail = VerifConnexionEmail(e);
    if ((testmp == true)&&(testemail ==true)){
        window.location.href = 'compteClient.html'
    }
    console.log(testmp);
    console.log(testemail);
}




