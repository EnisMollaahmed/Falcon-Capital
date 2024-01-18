const gotoReg = document.querySelector("#regButton");
const mailField = document.querySelector('[name="email"]');
const passwordField = document.querySelector('[type="password"]');
const signInButton = document.querySelector("#signButton");

const redirectToReg = (event) => {
    window.location = "http://127.0.0.1:5500/register_page/register.html";
    event.preventDefault();
};

const profileExist = (mail, pass) =>{
    const keys = Object.keys(localStorage);
    for(let key in keys){
        if(JSON.parse(localStorage.getItem(key))["email"] === mail && JSON.parse(localStorage.getItem(key))["password"] === pass){
            return true;
        }
    }
    return false;
};

const accessToApp = (event)=>{
    if(profileExist(mailField.value, passwordField.value)){
        //TODO: send user to app
    }
    else{//TODO: output error message
        
    }
    event.preventDefault();
};

gotoReg.addEventListener("click", redirectToReg);
signInButton.addEventListener("click")