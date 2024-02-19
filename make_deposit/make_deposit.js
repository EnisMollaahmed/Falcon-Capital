const showBalanceAmount = document.querySelector(".balnce-currency .balance");
const showBalanceCurrency = document.querySelector(".balnce-currency .currency");
const actUser= JSON.parse(sessionStorage.getItem("actual-user")); 
const depositInput = document.querySelector(".money-inp");
const depositCurrency= document.querySelector(".select-curr");
const createAccButton = document.querySelector(".create-account-button");
const exitButton = document.querySelector(".exit-button");
const bgnTo = {USD: .55, EUR: .51, TRY: 16.87, BGN: 1};
const tryTo = {USD: .033, EUR: .030, TRY: 1, BGN: .059};
const usdTo = {USD: 1, EUR: 0.93, TRY: 30.60, BGN: 1.81};
const eurTo = {USD: 1.08, EUR: 1, TRY: 32.97, BGN: 1.95};

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

const findCurrVector = ()=>{
    if(actUser.currency === "BGN"){
        return bgnTo;
    }
    else if(actUser.currency === "EUR"){
        return eurTo;
    }
    else if(actUser.currency === "USD"){
        return usdTo;
    }
    else if(actUser.currency === "TRY"){
        return tryTo;
    }
}

const addToBalance = (event)=>{
    if(depositInput.value !== "" && !isNaN(depositInput.value)){
        selectCurr();
        currVector = findCurrVector();
        depCurr = currVector[depositCurrency.options[depositCurrency.selectedIndex].value];
        actUser.balance=actUser.balance + depCurr * Number(depositInput.value);
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