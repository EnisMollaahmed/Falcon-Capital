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
        const target = JSON.parse(localStorage.getItem(key));
        if(target.username === usernameField.value){
            receieverUser = target;
            recUserEmail = key;
            break;
        }
    }
};

const doesReceiverExist = ()=>{
    const keys = Object.keys(localStorage);
    for(let key of keys){
        const target = JSON.parse(localStorage.getItem(key));
        if(target.username ===usernameField.value){
            return true;
        }
    }
    return false;
}

const handleClick = (event)=>{
    if(usernameField.value !== "" && amountField.value !== "" && !isNaN(amountField.value) && Number(amountField.value) <= actualUser.balance && doesReceiverExist()){
        actualUser.balance = actualUser.balance - Number(amountField.value);
        debugger
        const transaction = {
            senderUsername:actualUser.username,
            recieverUsername:usernameField.value,
            amount: Number(amountField.value),
            currency: visibleCurrency.textContent
        };
        findReceiver();
        receieverUser.balance += Number(amountField.value);
        receieverUser["income-transactions"].push(transaction);
        actualUser["outcome-transactions"].push(transaction);
        localStorage.setItem(actualUser.email, JSON.stringify(actualUser));
        sessionStorage.setItem("actual-user", JSON.stringify(actualUser));
        localStorage.setItem(recUserEmail, JSON.stringify(receieverUser));
        visibleBalance.textContent = actualUser.balance;
        event.preventDefault();
    }
    event.preventDefault();
};

const handleExit=(event)=>{
    localStorage.setItem(actualUser.email, JSON.stringify(actualUser));
    sessionStorage.clear();
    window.location.replace("http://127.0.0.1:5500/sign_in_page/sign_in.html");
    event.preventDefault();
};

window.addEventListener("load", showBalanceData);
transferButton.addEventListener("click", handleClick);
exitButton.addEventListener("click", handleExit);