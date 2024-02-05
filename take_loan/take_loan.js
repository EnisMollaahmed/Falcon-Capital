const actUser = JSON.parse(sessionStorage.getItem("actual-user"));
const amountField = document.querySelector(".req-input");
const period=document.querySelector(".ret-period");
const loanButton = document.querySelector(".loan-button");
const showAmount = document.querySelector(".amount");
const showCurr = document.querySelector(".currency");
const countOfLoands = document.querySelector(".count");


const showDebt = () =>{
    showAmount.textContent = actUser.debt;
    showCurr.textContent = actUser.currency;
    countOfLoands.textContent = actUser.debtCount;
}

const handleClick = (event) =>{
    debugger
    if (amountField.value !== "" && !isNaN(amountField.value) && period.value !== "" && !isNaN(period.value)) {
        actUser.debt += Number(amountField.value);
        actUser.debtCount += 1;
        localStorage.setItem(actUser.email, JSON.stringify(actUser));
        sessionStorage.setItem("actual-user", JSON.stringify(actUser));
        showDebt();
    }
    event.preventDefault();
};

window.addEventListener("load", showDebt);
loanButton.addEventListener("click", handleClick);