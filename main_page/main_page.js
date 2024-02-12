// let currData;
// let cValues;
const cContainer = document.querySelector(".currency-container");
const balance = document.querySelector(".balance");
const user = JSON.parse(sessionStorage.getItem("actual-user"));
const welcomeMessage=document.querySelector(".username");
const visibleBalance=document.querySelector(".balance-currency .amount");
const visibleCurrency=document.querySelector(".balance-currency .currency");
const exitButton = document.querySelector(".exit-button");

let albInfo;
let albFlags;
let albCurr;
const loadInformation = async () => {
    const response = await fetch("https://restcountries.com/v3.1/name/albania");
    const data = await response.json();
    albInfo = data;
    albFlags=albInfo.at(0)["flags"];
    albCurr=albInfo.at(0)["currencies"];
    console.log(albInfo);
    console.log(albFlags);
    console.log(albCurr);
}

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
};

const showBalance = ()=>{
    visibleBalance.textContent=user.balance;
    if(user.currency !== "X"){
        visibleCurrency.textContent=user.currency;
    }
};

const makeAlbLekSection = async () =>{// added because of requirement of at least one request
    await loadInformation()
    const sectContainer = document.createElement("section");
    sectContainer.classList.add("alb-container");
    sectContainer.classList.add("concrete-currency")
    const flag = document.createElement("img");
    flag.src=albFlags.png;
    flag.alt=albFlags.alt;
    flag.classList.add("flag");
    sectContainer.appendChild(flag);
    const currName =document.createElement("p");
    currName.textContent =albCurr.ALL.name;
    currName.classList.add("currency-name");
    sectContainer.appendChild(currName);
    const bgnToAll = document.createElement("p");
    bgnToAll.classList.add("currency-value");
    bgnToAll.textContent="53,10";
    sectContainer.appendChild(bgnToAll);
    cContainer.appendChild(sectContainer);
};

const showInfo= ()=>{
    makeAlbLekSection();
    greetUser();
    showBalance();
};

const handleExit=(event)=>{
    localStorage.setItem(user.email, JSON.stringify(user));
    sessionStorage.clear();
    window.location.replace("https://enismollaahmed.github.io/Falcon-Capital/sign_in_page/index.html");
    event.preventDefault();
};

window.addEventListener("load",showInfo);
exitButton.addEventListener("click", handleExit);