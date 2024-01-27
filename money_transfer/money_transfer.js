const actualUser = JSON.parse(sessionStorage.getItem("actual-user"));
const visibleBalance = document.querySelector(".balance");
const visibleCurrency = document.querySelector(".currency");
const usernameField = document.querySelector(".send-to");
const amountField = document.querySelector(".send-amount");
const transferButton = document.querySelector(".transfer-button");
const circle = document.querySelector(".balnce-curr");

let allUsers=[];

const showBalanceData = ()=>{
    visibleBalance.textContent=actualUser.balance;
    visibleCurrency.textContent=actualUser.currency;
};

const handleClick = (event)=>{
    if(usernameField.value !== "" && amountField.value !== "" && !isNaN(amountField.value) && amountField.value <= actualUser.balance){
        actualUser.balance = actualUser.balance - amountField.value;
        const transaction = {
            senderUsername:actualUser.username,
            recieverUsername:usernameField.value,
            amount: amountField.value,
            currency: visibleCurrency.innerHTML
        };
        actualUser.transactions.push(transaction);// TODO write transaction to receiever
        localStorage(actualUser.email, JSON.stringify(actualUser));
        sessionStorage("actual-user", JSON.stringify(actualUser));
        visibleBalance.textContent = actualUser.balance;
        
    }//TODO add error message
    event.preventDefault();
};

window.addEventListener("load", showBalanceData);
transferButton.addEventListener("click", handleClick);