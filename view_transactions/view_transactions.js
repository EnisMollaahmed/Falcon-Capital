const outcomeSect = document.querySelector(".outcome .scrollable");
const incomeSect = document.querySelector(".income .scrollable");
const actualUser= JSON.parse(sessionStorage.getItem("actual-user"));
const outcomeArr=actualUser["outcome-transactions"];
const incomeArr=actualUser["income-transactions"];
const exitButton = document.querySelector(".exit-button");

const addInfoToOutcome = () => {
    if(outcomeArr.length > 0){
        outcomeArr.forEach(element => {
            const senderParagraph = document.createElement("p");
            const recieverParagraph = document.createElement("p");
            const amountParagraph = document.createElement("p");
            const currParagraph = document.createElement("p");
            senderParagraph.classList.add("out-sender-p");
            recieverParagraph.classList.add("out-reciever-p");
            amountParagraph.classList.add("out-amount-p");
            currParagraph.classList.add("out-curr-p");
            senderParagraph.textContent=element["senderUsername"];
            recieverParagraph.textContent=element["recieverUsername"];
            amountParagraph.textContent=element["amount"];
            currParagraph.textContent=element["currency"];
            const outContainer = document.createElement("section");
            outContainer.appendChild(senderParagraph);
            outContainer.appendChild(recieverParagraph);
            outContainer.appendChild(amountParagraph);
            outContainer.appendChild(currParagraph);
            outContainer.classList.add("out-tr");
            outcomeSect.appendChild(outContainer);
        });
    }
};

const addInfoToIncome=()=>{
    if(incomeArr.length > 0){
        incomeArr.forEach(element=>{
            const senderParagraph = document.createElement("p");
            const recieverParagraph = document.createElement("p");
            const amountParagraph = document.createElement("p");
            const currParagraph = document.createElement("p");
            senderParagraph.classList.add("inc-sender-p");
            recieverParagraph.classList.add("inc-reciever-p");
            amountParagraph.classList.add("inc-amount-p");
            currParagraph.classList.add("inc-curr-p");
            senderParagraph.textContent=element["senderUsername"];
            recieverParagraph.textContent=element["recieverUsername"];
            amountParagraph.textContent=element["amount"];
            currParagraph.textContent=element["currency"];
            const incomeContainer = document.createElement("section");
            incomeContainer.appendChild(senderParagraph);
            incomeContainer.appendChild(recieverParagraph);
            incomeContainer.appendChild(amountParagraph);
            incomeContainer.appendChild(currParagraph);
            incomeContainer.classList.add("inc-tr");
            incomeSect.appendChild(incomeContainer);
        });
    }
};

const loadTransferInfo = () => {
    addInfoToOutcome();
    addInfoToIncome();
};

const handleExit=(event)=>{
    localStorage.setItem(actualUser.email, JSON.stringify(actualUser));
    sessionStorage.clear();
    window.location.replace("https://enismollaahmed.github.io/Falcon-Capital/sign_in_page/index.html");
    event.preventDefault();
};

window.addEventListener("load",loadTransferInfo);
exitButton.addEventListener("click", handleExit);