//bindings

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


//functions

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const smallEl = formControl.querySelector("small");

    formControl.className = "form-control error";
    smallEl.textContent = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"; 
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function check() {
    //get values from the input elements

    const uV = username.value.trim();
    const eV = email.value.trim();
    const pV = password.value;
    const p2V = password2.value;

    if(uV === ''){
        //show appropriate error message
        //add error class
        setErrorFor(username,'Username cannot be blank');
    }else{
        //add success class
        setSuccessFor(username);
    }

    if(eV === ''){
        setErrorFor(email,"Email cannot be blamk");
    }else if(!isEmail(eV)){
        setErrorFor(email,"Email is Invalid");
    }else{
        setSuccessFor(email);
    }

    if(pV === ''){
        setErrorFor(password,"Password cannot be empty");
    }else{
        setSuccessFor(password);
    }

    if(p2V === ''){
        setErrorFor(password2,"Password cannot be empty");
    }else if(p2V !== pV){
        setErrorFor(password2,"Password does not match");
    }else{
        setSuccessFor(password2);
    }

}




//events

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    check();
});


