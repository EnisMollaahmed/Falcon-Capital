const showBalanceAmount = document.querySelector(".balnce-currency .balance");
const showBalanceCurrency = document.querySelector(".balnce-currency .currency");
const actUser= JSON.parse(sessionStorage.getItem("actual-user")); 
const depositInput = document.querySelector(".money-inp");
const depositCurrency= document.querySelector(".select-curr");
const createAccButton = document.querySelector(".create-account-button");
const exitButton = document.querySelector(".exit-button");

const showInfo = () => {
    showBalanceAmount.textContent=actUser.balance;
    showBalanceCurrency.textContent=actUser.currency;
    if(actUser.currency !== "X"){
        depositCurrency.value = actUser.currency;
    }
};

const selectCurr = () =>{
    if(actUser.currency === "X"){
        actUser.currency = depositCurrency.options[depositCurrency.selectedIndex].value;
    }
};

const addToBalance = (event)=>{
    if(depositInput.value !== "" && !isNaN(depositInput.value)){
        selectCurr();
        actUser.balance=actUser.balance + Number(depositInput.value);
        sessionStorage.setItem("actual-user", JSON.stringify(actUser));
        localStorage.setItem(actUser.email, JSON.stringify(actUser));
        showBalanceAmount.textContent=actUser.balance;
        showBalanceCurrency.textContent=actUser.currency;
    }
    event.preventDefault();
}

const handleExit=(event)=>{
    localStorage.setItem(actUser.email, JSON.stringify(actUser));
    sessionStorage.clear();
    window.location.replace("https://enismollaahmed.github.io/Falcon-Capital/sign_in_page/index.html");
    event.preventDefault();
}

window.addEventListener("load", showInfo);
createAccButton.addEventListener("click", addToBalance);
exitButton.addEventListener("click", handleExit);