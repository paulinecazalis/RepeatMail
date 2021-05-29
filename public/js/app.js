const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let email = document.getElementById('email');
let email2 = document.getElementById('email2');
let sujet = document.getElementById('sujet');
let message = document.getElementById('message');
let check1 = document.getElementById('tenminutes');
let check2 = document.getElementById('twentyminutes');
let check3 = document.getElementById('thirtyminutes');

check1.checked = true;
check2.disabled = true;
check3.disabled = true;

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let formData = {
        name: name.value,
        prenom: prenom.value,
        email: email.value,
        email2: email2.value,
        sujet: sujet.value,
        message: message.value,
        check1: check1.checked,
        check2: check2.checked,
        check3: check3.checked,
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('email envoyé');
            /*name.value = '';
            prenom.value = '';
            email.value = '';
            email2.value = '';
            sujet.value = '';
            message.value = '';*/
        }else{
            alert('pas bon');
        }
    }
    xhr.send(JSON.stringify(formData));
})

function changeCheck(){
    if(check1.checked){
        check2.disabled = true;
        check3.disabled = true;
    }else if(check2.checked){
        check1.disabled = true;
        check3.disabled = true;
    }else if(check3.checked){
        check1.disabled = true;
        check2.disabled = true;
    }else{
        check1.disabled = false;
        check2.disabled = false;
        check3.disabled = false;
    }


}