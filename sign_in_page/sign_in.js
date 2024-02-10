const gotoReg = document.querySelector("#regButton");
const mailField = document.querySelector('[name="email"]');
const passwordField = document.querySelector('[type="password"]');
const signInButton = document.querySelector("#signButton");
const signContainer = document.querySelector(".form-container");
let allUsers = [];

const loadAllUsers = async ()=>{
    const request = await fetch("user_accounts.json");
    const response = await request.json();
    allUsers = response;
}

const writeToStorage = ()=>{
    allUsers.forEach(element => {
        localStorage.setItem(element.email, JSON.stringify(element));
    });
}

const redirectToReg = (event) => {
    window.location = "https://enismollaahmed.github.io/Falcon-Capital/register_page/index.html";
    event.preventDefault();
};

const profileExist = (mail, pass) =>{
    const keys = Object.keys(localStorage);
    for(let i = 0; i < keys.length; i++){
        let key = keys.at(i);
        const user = JSON.parse(localStorage.getItem(key));
        console.log(user);
        console.log(user.email);
        console.log(user.password);
        if(user["email"] === mail && user["password"] === pass){
            console.log("yess")
            return true;
        }
    }
    console.log("nope");
    return false;
};

const accessToApp = (event)=>{
    debugger
    if(profileExist(mailField.value, passwordField.value)){
        //TODO: send user to app
        const targetUser = localStorage.getItem(mailField.value);
        sessionStorage.setItem("actual-user", targetUser);
        window.location="http://127.0.0.1:5500/main_page/index.html";
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

const prepareInfo = async()=>{
    if(localStorage.length === 0){
        await loadAllUsers();
        writeToStorage();
    }
};

window.addEventListener("load", prepareInfo);
gotoReg.addEventListener("click", redirectToReg);
signInButton.addEventListener("click", accessToApp);