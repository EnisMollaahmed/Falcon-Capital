const actualUser = JSON.parse(sessionStorage.getItem("actual-user"));
const visibleBalance = document.querySelector(".balance");
const visibleCurrency = document.querySelector(".currency");
const usernameField = document.querySelector(".send-to");
const amountField = document.querySelector(".send-amount");
const transferButton = document.querySelector(".transfer-button");
const circle = document.querySelector(".balnce-curr");
const exitButton = document.querySelector(".exit-button");
let receieverUser;
let recUserEmail;

let allUsers=[];

const showBalanceData = ()=>{
    visibleBalance.textContent=actualUser.balance;
    visibleCurrency.textContent=actualUser.currency;
};

const findReceiver = () =>{
    const keys = Object.keys(localStorage);
    for(let key of keys){
        if(JSON.parse(localStorage.getItem(key)).username === usernameField.value){
            receieverUser = JSON.parse(localStorage.getItem(key));
            recUserEmail = key;
            break;
        }
    }
};

const doesReceiverExist = ()=>{
    const keys = Object.keys(localStorage);
    for(let key of keys){
        if(JSON.parse(localStorage.getItem(key)).username ===usernameField.value){
            return true;
        }
    }
    return false;
}

const handleClick = (event)=>{
    if(usernameField.value !== "" && amountField.value !== "" && !isNaN(amountField.value) && Number(amountField.value) <= actualUser.balance && doesReceiverExist()){
        actualUser.balance = actualUser.balance - Number(amountField.value);
        const transaction = {
            senderUsername:actualUser.username,
            recieverUsername:usernameField.value,
            amount: Number(amountField.value),
            currency: visibleCurrency.textContent
        };
        findReceiver();
        receieverUser["income-transactions"].push(transaction);
        actualUser["outcome-transactions"].push(transaction);
        debugger
        localStorage.setItem(actualUser.email, JSON.stringify(actualUser));
        sessionStorage.setItem("actual-user", JSON.stringify(actualUser));
        localStorage.getItem(recUserEmail, receieverUser);
        visibleBalance.textContent = actualUser.balance;
        event.preventDefault();
    }
    event.preventDefault();
};

const handleExit=(event)=>{
    localStorage.setItem(user.email, JSON.stringify());
    sessionStorage.clear();
    window.location.replace("http://127.0.0.1:5500/sign_in_page/sign_in.html");
    event.preventDefault();
};

window.addEventListener("load", showBalanceData);
transferButton.addEventListener("click", handleClick);
exitButton.addEventListener("click", handleExit);