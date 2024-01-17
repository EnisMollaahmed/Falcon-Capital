const signInButton = document.querySelector("#signButton");
const mailField = document.querySelector(".reg-email");

function redirTo(event){
    window.location = "https://www.javascripttutorial.net/web-apis/";
    event.preventDefault();
}

function addErrorToMail(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(mailField.value) && mailField.value === ""){
        if(mailField.classList.contains("is-correct")){
            mailField.classList.remove("is-correct");
        }
        else{
            mailField.classList.add("error-occurs");
        }
    }
    else if(emailRegex.test(mailField.value)){
        mailField.classList.add("is-correct");
    }
    else{
        mailField.classList.add("error-occurs");
    }
}

signInButton.addEventListener("click", redirTo);
mailField.addEventListener("change", addErrorToMail);