const Bcheck = document.querySelector(".verif");
const divMSG = document.querySelector(".message");
const MDP = document.querySelector(".MDP");
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
    if(MDP.value == MDP.defaultValue || MDP.value ===""){
        test = false;
        msg = "Votre Mot De Passe est Incorrect";
    }
    if (Pseudo.value === Pseudo.defaultValue || Pseudo.value === "") {
        test = false;
        msg = "Votre Pseudonyme est Incorrect";
    }
    if(!test){
        divMSG.innerHTML = msg;
        divMSG.style.backgroundColor = "red";
        divMSG.style.display="block";
    }
    else{
        divMSG.innerHTML = "Bienvenue";
        divMSG.style.backgroundColor = "green";
        divMSG.style.display="block";
        document.location.href="../index.html";

    }
}