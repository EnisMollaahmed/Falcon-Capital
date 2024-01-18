const formContainer = document.querySelector(".form-container");
const signInButton = document.querySelector("#signButton");
const mailField = document.querySelector(".reg-email");
const usernameField = document.querySelector(".reg-user-name");
const passwField = document.querySelector('[name="password"]');
const repPasswField = document.querySelector('[name="rep-password"]');

function redirTo(event){
    window.location = "http://127.0.0.1:5500/sign_in_page/sign_in.html";
    event.preventDefault();
}

function addErrorToMail(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errParagraph;
    if(emailRegex.test(mailField.value) && mailField.value === ""){
        if(mailField.classList.contains("is-correct")){
            mailField.classList.remove("is-correct");
        }
        else{
            mailField.classList.add("error-occurs");
            errParagraph = document.createElement("p");
            formContainer.appendChild(errParagraph);
            errParagraph.id="mailErr";
            errParagraph.classList.add("error-text");
            errParagraph.textContent = "Invalid e-mail address!";
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
            errParagraph = document.createElement("p");
            formContainer.appendChild(errParagraph);
            errParagraph.id="mailErr";
            errParagraph.classList.add("error-text");
            errParagraph.textContent = "Invalid e-mail address!";
        }
        mailField.classList.add("error-occurs");
    }
}

const checkUserName = () => {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if(usernameRegex.test(usernameField.value) && usernameField === ""){
        if(usernameField.classList.contains("is-correct")){
            usernameField.classList.remove("is-correct");
        }
        else{
            usernameField.classList.add("error-occurs");
        }
    }
    else if(usernameRegex.test(usernameField.value)){
        if(usernameField.classList.contains("error-occurs")){
            usernameField.classList.remove("error-occurs");
        }
        usernameField.classList.add("is-correct");
    }
    else{
        if(usernameField.classList.contains("is-correct")){
            usernameField.classList.remove("is-correct");
        }
        usernameField.classList.add("error-occurs");
    }
};

const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!passwordRegex.test(passwField.value) || passwField === ""){
        if(passwField.classList.contains("is-correct")){
            passwField.classList.remove("is-correct");
        }
        passwField.classList.add("error-occurs");
    }
    else{
        if(passwField.classList.contains("error-occurs")){
            passwField.classList.remove("error-occurs");
        }
        passwField.classList.add("is-correct")
    }
};

const validateRepPassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!passwordRegex.test(repPasswField.value) || repPasswField.value === "" || repPasswField.value !== passwField.value){
        if(repPasswField.classList.contains("is-correct")){
            repPasswField.classList.remove("is-correct");
        }
        repPasswField.classList.add("error-occurs");
    }
    else{
        if(repPasswField.classList.contains("error-occurs")){
            repPasswField.classList.remove("error-occurs");
        }
        repPasswField.classList.add("is-correct");
    }
};

signInButton.addEventListener("click", redirTo);
mailField.addEventListener("change", addErrorToMail);
usernameField.addEventListener("change", checkUserName);
passwField.addEventListener("change", validatePassword);
repPasswField.addEventListener("change", validateRepPassword);