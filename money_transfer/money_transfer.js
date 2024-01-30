const actualUser = JSON.parse(sessionStorage.getItem("actual-user"));
const visibleBalance = document.querySelector(".balance");
const visibleCurrency = document.querySelector(".currency");
const usernameField = document.querySelector(".send-to");
const amountField = document.querySelector(".send-amount");
const transferButton = document.querySelector(".transfer-button");
const circle = document.querySelector(".balnce-curr");
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
    if(usernameField.value !== "" && amountField.value !== "" && !isNaN(amountField.value) && amountField.value <= actualUser.balance && doesReceiverExist()){
        actualUser.balance = actualUser.balance - amountField.value;
        const transaction = {
            senderUsername:actualUser.username,
            recieverUsername:usernameField.value,
            amount: amountField.value,
            currency: visibleCurrency.innerHTML
        };
        findReceiver();
        receieverUser["outcome-transactions"].push("transaction");
        actualUser["outcome-transactions"].push(transaction);
        localStorage(actualUser.email, JSON.stringify(actualUser));
        sessionStorage("actual-user", JSON.stringify(actualUser));
        localStorage.getItem(recUserEmail, receieverUser);
        visibleBalance.textContent = actualUser.balance;
        
    }//TODO add error message
    event.preventDefault();
};

window.addEventListener("load", showBalanceData);
transferButton.addEventListener("click", handleClick);