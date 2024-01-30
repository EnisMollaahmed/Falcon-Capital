const outcomeSect = document.querySelector(".outcome .scrollable");
const incomeSect = document.querySelector(".income .scrollable");
const actualUser= JSON.parse(sessionStorage.getItem("actual-user"));
const outcomeArr=actualUser["outcome-transactions"];
const incomeArr=actualUser["income-transactions"];

const addInfoToOutcome = () => {
    outcomeArr.forEach(element => {
        const senderParagraph = document.createElement("p");
        const recieverParagraph = document.createElement("p");
        const amountParagraph = document.createElement("p");
        senderParagraph.classList.add("out-sender-p");
        recieverParagraph.classList.add("out-reciever-p");
        amountParagraph.classList.add("out-amount-p");
        senderParagraph.textContent=element["senderUsername"];
        recieverParagraph.textContent=element["recieverUsername"];
        amountParagraph.textContent=element["amount"];
        const outContainer = document.createElement("section");
        outContainer.appendChild(senderParagraph);
        outContainer.appendChild(recieverParagraph);
        outContainer.appendChild(amountParagraph);
        outContainer.classList.add("out-tr");
        outcomeSect.appendChild(outContainer);
    });
};

const addInfoToIncome=()=>{
    incomeArr.forEach(element=>{
        const senderParagraph = document.createElement("p");
        const recieverParagraph = document.createElement("p");
        const amountParagraph = document.createElement("p");
        senderParagraph.classList.add("inc-sender-p");
        recieverParagraph.classList.add("inc-reciever-p");
        amountParagraph.classList.add("inc-amount-p");
        senderParagraph.textContent=element["senderUsername"];
        recieverParagraph.textContent=element["recieverUsername"];
        amountParagraph.textContent=element["amount"];
        const incomeContainer = document.createElement("section");
        incomeContainer.appendChild(senderParagraph);
        incomeContainer.appendChild(recieverParagraph);
        incomeContainer.appendChild(amountParagraph);
        incomeContainer.classList.add("inc-tr");
        incomeSect.appendChild(incomeContainer);
    })
};

const loadTransferInfo = () => {
    addInfoToOutcome();
    addInfoToIncome();
};

window.addEventListener("load",loadTransferInfo);