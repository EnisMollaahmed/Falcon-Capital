const formContainer = document.querySelector(".form-container");
const signInButton = document.querySelector("#signButton");
const mailField = document.querySelector(".reg-email");
const usernameField = document.querySelector(".reg-user-name");
const passwField = document.querySelector('[name="password"]');
const repPasswField = document.querySelector('[name="rep-password"]');
const regButton = document.querySelector("#regButton");

function redirTo(event){
    window.location = "http://127.0.0.1:5500/sign_in_page/sign_in.html";
    event.preventDefault();
}

const addErrMessage = ()=>{
    const errParagraph = document.createElement("p");
    formContainer.appendChild(errParagraph);
    errParagraph.id="mailErr";
    errParagraph.classList.add("error-text");
    errParagraph.textContent = "Invalid e-mail address!";
}

function addErrorToMail(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(mailField.value) && mailField.value === ""){
        if(mailField.classList.contains("is-correct")){
            mailField.classList.remove("is-correct");
        }
        else{
            mailField.classList.add("error-occurs");
            addErrMessage();
        }
    }
    else if(emailRegex.test(mailField.value)){
        if(mailField.classList.contains("error-occurs")){
            mailField.classList.remove("error-occurs");
            const errToRemove = document.querySelector("#mailErr");
            formContainer.removeChild(errToRemove);
        }
        mailField.classList.add("is-correct");
    }
    else{
        if(mailField.classList.contains("is-correct")){
            mailField.classList.remove("is-correct");
            addErrMessage()
        }
        mailField.classList.add("error-occurs");
    }
}

const userNameErrorMsg = () => {
    const errParagraph = document.createElement("p");
    formContainer.appendChild(errParagraph);
    errParagraph.id="usrNameErr";
    errParagraph.classList.add("error-text");
    errParagraph.textContent = "Invalid username!";
}

const checkUserName = () => {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if(usernameRegex.test(usernameField.value) && usernameField === ""){
        if(usernameField.classList.contains("is-correct")){
            usernameField.classList.remove("is-correct");
        }
        else{
            usernameField.classList.add("error-occurs");
            userNameErrorMsg();
        }
    }
    else if(usernameRegex.test(usernameField.value)){
        if(usernameField.classList.contains("error-occurs")){
            usernameField.classList.remove("error-occurs");
            const errToRemove = document.querySelector("#usrNameErr");
            formContainer.removeChild(errToRemove);
        }
        usernameField.classList.add("is-correct");
    }
    else{
        if(usernameField.classList.contains("is-correct")){
            usernameField.classList.remove("is-correct");
        }
        usernameField.classList.add("error-occurs");
        userNameErrorMsg();
    }
};

const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!passwordRegex.test(passwField.value) || passwField === ""){
        if(passwField.classList.contains("is-correct")){
            passwField.classList.remove("is-correct");
        }
        if(!passwField.classList.contains("error-occurs")){
            passwField.classList.add("error-occurs");
            const errP = document.createElement("p");
            formContainer.appendChild(errP);
            errP.id = "invPassw";
            errP.classList.add("error-text");
            errP.textContent = "Invalid password!";
        }
    }
    else{
        if(passwField.classList.contains("error-occurs")){
            passwField.classList.remove("error-occurs");
            const elemToRemove = document.querySelector("#invPassw");
            formContainer.removeChild(elemToRemove);
        }
        passwField.classList.add("is-correct")
    }
};

const validateRepPassword = () => {
    if(repPasswField.value !== passwField.value){
        if(repPasswField.classList.contains("is-correct")){
            repPasswField.classList.remove("is-correct");
        }
        if(!repPasswField.classList.contains("error-occurs")){
            const errP=document.createElement("p");
            formContainer.appendChild(errP);
            repPasswField.classList.add("error-occurs");
            errP.id = "repErr";
            errP.classList.add("error-text");
            errP.textContent = "Password does not match!";
        }
    }
    else{
        if(repPasswField.classList.contains("error-occurs")){
            repPasswField.classList.remove("error-occurs");
            const eToRemove = document.querySelector("#repErr");
            formContainer.removeChild(eToRemove);
        }
        repPasswField.classList.add("is-correct");
    }
};

function userExists(userObj){
    const strUser = JSON.stringify(userObj);
    let keys = Object.keys(localStorage);
    for(let key in keys) {
        if(localStorage.getItem(key) === strUser){
            return true;
        }
    }
    return false;
}

const registerUser = (event) => {
    if(mailField.classList.contains("is-correct") && usernameField.classList.contains("is-correct") && passwField.classList.contains("is-correct") && repPasswField.classList.contains("is-correct")){
        const userObj = {
            email: mailField.value,
            usname: usernameField.value,
            password: passwField.value
        };
        if(!userExists(userObj)){
            localStorage(usernameField.value, JSON.stringify(userObj));
            //TODO set here window.location to the main site
        }
    }
    event.preventDefault();
};

signInButton.addEventListener("click", redirTo);
mailField.addEventListener("change", addErrorToMail);
usernameField.addEventListener("change", checkUserName);
passwField.addEventListener("change", validatePassword);
repPasswField.addEventListener("change", validateRepPassword);
regButton.addEventListener("click", registerUser);