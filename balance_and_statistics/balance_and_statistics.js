const actualUser=JSON.parse(sessionStorage.getItem("actual-user"));
const visibleBalance = document.querySelector(".balance-currency .balance");
const visibleCurrency = document.querySelector(".balance-curency .currency");
const totalSpendingVisisble=document.querySelector(".spending .amount");
const totalSpendingCurrency = document.querySelector(".spending .curr");
const totalIncomeVisible=document.querySelector(".income .amount");
const totalIncomeCurrency = document.querySelector(".income .curr");
const revUsername=document.querySelector(".right-border .username");
const spentUsername=document.querySelector(".left-border .username");


function sumIncome(){
    let sum = 0;
    actualUser["income-transactions"].forEach(element => {
        sum+=element.amount;
    });
    return sum;
}

function sumExpenses(){
    let sum = 0;
    actualUser["outcome-transaction"].forEach(element => {
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
        moneyOfTransfers.reduce
    }
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

};

window.addEventListener("load", showInfo);
