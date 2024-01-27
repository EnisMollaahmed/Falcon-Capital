let allUsers = [];
let actUser = JSON.parse(sessionStorage.getItem("actual-user"));
let targetKey;
let targetIndex = 0;

const amountField = document.querySelector(".req-input");
const period=document.querySelector(".ret-period");
const loanButton = document.querySelector(".loan-button");
const showAmount = document.querySelector(".amount");
const showCurr = document.querySelector(".currency");
const countOfLoands = document.querySelector(".count");

const getAllUsers = () =>{
    let keys = Object.keys(localStorage);
    for(let key of keys){
        allUsers.push(JSON.parse(localStorage.getItem(key)));
    }
};

const findTargetUser = () =>{
    let count = 0;
    allUsers.forEach((user)=>{
        if(user.username === actUser.username){
            user.debt += amountField.value;
            user.debtCount +=1;
            targetKey = user.email;
            targetIndex = count;
        }
        count++;
    });
}

const writeInfo = () => {
    localStorage.setItem(targetKey, JSON.stringify(allUsers.at(targetIndex)));
};

const handleClick = (event) =>{
    if (amountField.value !== "" && !isNaN(amountField.value) && period.value !== "" && !isNaN(period.value)) {
        findTargetUser();
        writeInfo();
        Window.refresh();
    }
    //TODO add error message
    event.preventDefault();
};

const showDebt = () =>{
    showAmount.textContent = actUser.debt;
    showCurr.textContent = actUser.currency;
    countOfLoands.textContent = actUser.debtCount;
}

getAllUsers();
loanButton.addEventListener("click", handleClick);
window.addEventListener("load", showDebt);
//TODO add upper bound to loans count