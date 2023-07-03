
//& l'envoie
//* L'evenements de fin --> "Btn Enregistré"
let form = document.getElementById('inscription_submit');
form.addEventListener("submit",VerifAll);



//^ les objects --> ce qui est à verrifier 
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
var regexpChar = new RegExp("^[a-zA-Zàâäéèêëîïôöùûüÿ\'\ \-]{1,22}$");
var regexpEmail = new RegExp("^[a-z.-_^@]{1,22}$");
var regexpInt = new RegExp("[+0-9]");
// var regexpMp = new RegExp("^[a-zA-Z0-9^<>{}\"/|;:.,~!?@#$%^=&*\\]\\\\()\\[¿§«»ω⊙¤°℃℉€¥£¢¡®©0-9_+]{7,30}*$u");

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
    let element = e.target;
    let valeur = element.value; 
    let p = element.parentNode.lastChild.previousSibling;
    if(!regexpEmail.test(valeur)){
        element.setAttribute("class","error");
        p.innerText = "Vous devez entrer une adresse mail valide";
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
        p.innerText = "Au format +33 ou 06...";
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
        p.innerText = "7 caractéres minimum parmis : Majuscule, Minuscule, Chffres, caractéres Alpha-numeriques";
    }
    else{
        element.setAttribute("class","validation");
        p.innerText = "";
    };
};

//* Pour verrifier que le second mots de passe est indentique au premier 
function VerifMpTwo(e){
    let mp = document.getElementById('mp');
    let mp_confirm = document.getElementById('mp_confirm');
    if(mp == mp_confirm){
        element.setAttribute("class","validation");
        p.innerText = "";
    }else{
        element.setAttribute("class","error");
        p.innerText = "Mots de passe non identique"
    }
}





// pour lencer les verif des functions 
function VerifAll(e){
    e.preventDefault() // anule le comportement par default
    console.log(e);
}











