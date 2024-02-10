// let currData;
// let cValues;
const cContainer = document.querySelector(".currency-container");
const balance = document.querySelector(".balance");
const user = JSON.parse(sessionStorage.getItem("actual-user"));
const welcomeMessage=document.querySelector(".username");
const visibleBalance=document.querySelector(".balance-currency .amount");
const visibleCurrency=document.querySelector(".balance-currency .currency");
const exitButton = document.querySelector(".exit-button");

//PROBLEMATIC CODE!!!!!!!
// const loadInformation = async () => {
//     const request = await fetch("https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_E90k4uQPB8qGnESfUyEMCP98DVenDmhlXF3W626V&currencies=EUR%2CUSD%2CCAD%2CGBP%2CJPY%2CTRY%2CRUB&base_currency=BGN");
//     const response= await request.json();
//     currData = response;
// };

// const currencyValues = async ()=> {
//     const request = await fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_E90k4uQPB8qGnESfUyEMCP98DVenDmhlXF3W626V&currencies=EUR%2CUSD%2CCAD%2CGBP%2CJPY%2CTRY%2CRUB&base_currency=BGN");
//     const response= await request.json();
//     cValues = response;
// };


// loadInformation();
// currencyValues();
//!!!!!!!!!!!!!!

const greetUser = ()=>{
    welcomeMessage.textContent=user.username;
}

const showBalance = ()=>{
    visibleBalance.textContent=user.balance;
    if(user.currency !== "X"){
        visibleCurrency.textContent=user.currency;
    }
}

const showInfo= ()=>{
    greetUser();
    showBalance();
}

const handleExit=(event)=>{
    localStorage.setItem(user.email, JSON.stringify(user));
    sessionStorage.clear();
    window.location.replace("https://enismollaahmed.github.io/Falcon-Capital/sign_in_page/index.html");
    event.preventDefault();
}

window.addEventListener("load",showInfo);
exitButton.addEventListener("click", handleExit);