let currData;
let cValues;
const cContainer = document.querySelector(".currency-container");
const balance = document.querySelector(".balance");
const user = JSON.parse(sessionStorage.getItem("actual-user"));

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

const balanceInfo = document.createElement("p");
balanceInfo.textContent=user.balance;
balanceInfo.classList.add("balance-num");
balance.appendChild(balanceInfo);

console.log(currData);