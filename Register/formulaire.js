const Bcheck = document.querySelector(".verif");
const nom = document.querySelector(".nom");
const age = document.querySelector(".age");
const divMSG = document.querySelector(".message");
const MAIL = document.querySelector(".Adresse-Email");
const V_MAIL = document.querySelector(".Verif-Email");
const MDP = document.querySelector(".MDP");
const V_MDP = document.querySelector(".Verif-MDP");
const inputs = document.querySelectorAll("input");
const Pseudo = document.querySelector(".Pseudo");

for(let i = 0; i<inputs.length; i++){
    inputs[i].addEventListener('click',function () {
        if(inputs[i].value === inputs[i].defaultValue){
            inputs[i].value = null;
        }
    })
}

//si on click sur check ou sur send on verif le formulaire
Bcheck.addEventListener('click',verif);


function verif() {
    //on fait les verifs du formulaire 
    let test = true;
    let msg = "";
    if(nom.value === nom.defaultValue || nom.value === ""){
        test = false;
        msg = "entré votre nom";
    }
    if(MAIL.value != V_MAIL.value){
        test = false;
        msg = "vous devez avoir la même Adresse-Email";
    }
    if(MDP.value != V_MDP.value){
        test = false;
        msg = "vous devez avoir le même Mot de passe";
    }
    if (Pseudo.value === Pseudo.defaultValue || Pseudo.value === "") {
        test = false;
        msg = "Veuillez entrez un Pseudonyme";
    }
    if(!test){
        divMSG.innerHTML = msg;
        divMSG.style.backgroundColor = "red";
        divMSG.style.display="block";
    }
    else{
        divMSG.innerHTML = "Votre compte a bien été crée";
        divMSG.style.backgroundColor = "green";
                divMSG.style.display="block";
    }
}