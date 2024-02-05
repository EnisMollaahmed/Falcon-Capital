const actualUser=JSON.parse(sessionStorage.getItem("actual-user"));
const visibleBalance = document.querySelector(".balance-currency .balance");
const visibleCurrency = document.querySelector(".balance-currency .currency");
const totalSpendingVisisble=document.querySelector(".spending .amount");
const totalSpendingCurrency = document.querySelector(".spending .curr");
const totalIncomeVisible=document.querySelector(".income .amount");
const totalIncomeCurrency = document.querySelector(".income .curr");
const revUsername=document.querySelector(".right-border .username");
const spentUsername=document.querySelector(".left-border .username");
const incToDateAmount = document.querySelector(".inc .money");
const incToDateCurr = document.querySelector(".inc .curr");
const expToDateAmount = document.querySelector(".spend .money");
const expToDateCurr = document.querySelector(".spend .curr");
const exitButton = document.querySelector(".exit-button");

function sumIncome(){
    let sum = 0;
    actualUser["income-transactions"].forEach(element => {
        sum+=element.amount;
    });
    return sum;
}

function sumExpenses(){
    let sum = 0;
    actualUser["outcome-transactions"].forEach(element => {
        sum+=element.amount;
    });
    return sum;
}

function findRevUsername(){
    let countOccurences = 0;
    let targetUsername = "";
    actualUser["income-transactions"].forEach(element => {
        const targetUser = actualUser["income-transactions"].filter(transaction=> transaction.senderUsername === element.senderUsername);
        if(targetUser.length > countOccurences){
            countOccurences = targetUser.length;
            targetUsername = element.senderUsername;
        }
    });
    return targetUsername;
}

function findExpensiveUsername(){
    let countOccurences = 0;
    let targetUsername = "";
    actualUser["outcome-transactions"].forEach(element=> {
        const targetUser = actualUser["outcome-transactions"].filter(transaction=>transaction.recieverUsername === element.recieverUsername);
        if(targetUser.length > countOccurences){
            countOccurences = targetUser.length;
            targetUsername=element.recieverUsername;
        }
    });
    return targetUsername;
}

function findTransferValues(targetUsename, transactDirection){
    if(transactDirection === "income-transactions"){
        const userParticipated = actualUser["income-transactions"].filter(element=>element.senderUsername === targetUsename);
        const moneyOfTransfers = userParticipated.map(element=>element.amount);
        const sum = moneyOfTransfers.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
        return sum;
    }
    else if(transactDirection === "outcome-transactions"){
        const userParticipated = actualUser["outcome-transactions"].filter(element=>element.recieverUsername === targetUsename);
        const moneyOfTransfers = userParticipated.map(element=>element.amount);
        const sum = moneyOfTransfers.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
        return sum;
    }
    return 0;
}

const showInfo = ()=>{
    visibleBalance.textContent=actualUser.balance;
    visibleCurrency.textContent=actualUser.currency;
    const income= sumIncome();
    const expenses = sumExpenses();
    totalSpendingVisisble.textContent=expenses;
    totalSpendingCurrency.textContent=actualUser.currency;
    totalIncomeVisible.textContent=income;
    totalIncomeCurrency.textContent=actualUser.currency;
    const revenueUsername = findRevUsername();
    const expensiveUsername = findExpensiveUsername();
    revUsername.textContent=revenueUsername;
    spentUsername.textContent=expensiveUsername;
    const specificIncome = findTransferValues(revenueUsername, "income-transactions");
    const specificExpenses = findTransferValues(expensiveUsername, "outcome-transactions");
    incToDateAmount.textContent=specificIncome;
    incToDateCurr.textContent=actualUser.currency;
    expToDateAmount.textContent=specificExpenses;
    expToDateCurr.textContent=actualUser.currency;
};

const handleExit=(event)=>{
    localStorage.setItem(user.email, JSON.stringify());
    sessionStorage.clear();
    window.location.replace("http://127.0.0.1:5500/sign_in_page/sign_in.html");
    event.preventDefault();
}

window.addEventListener("load", showInfo);
exitButton.addEventListener("click", handleExit);