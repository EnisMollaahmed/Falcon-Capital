const gotoReg = document.querySelector("#regButton");
const mailField = document.querySelector('[name="email"]');
const passwordField = document.querySelector('[type="password"]');
const signInButton = document.querySelector("#signButton");
const signContainer = document.querySelector(".form-container");

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
        const targetUser = localStorage.getItem(mailField.value);
        sessionStorage.setItem("actual-user", targetUser);
        window.location="http://127.0.0.1:5500/main_page/main_page.html";
    }
    else{//TODO: output error message
        const errMessage = document.createElement("p");
        errMessage.textContent = "Wrong email address or password!";
        errMessage.classList.add("error-message");
        signContainer.appendChild(errMessage);
        mailField.classList.add("error-occurs");
        passwordField.classList.add("error-occurs");
    }
    event.preventDefault();
};

const removeMailErr = ()=>{
    if(mailField.classList.contains("error-occurs")){
        mailField.classList.remove("error-occurs");
    }
};

const removePassErr = ()=>{
    if(passwordField.classList.contains("error-occurs")){
        passwordField.classList.remove("error-occurs");
    }
};

gotoReg.addEventListener("click", redirectToReg);
signInButton.addEventListener("click", accessToApp);
gotoReg.addEventListener("change", removeMailErr);