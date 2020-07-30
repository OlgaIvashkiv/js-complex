//Task 1
function userCard(number) {
    let balance = 100;
    let transactionLimit =100;
    const historyLogs = [];
    let key = number <= 3 && number >=1 ? number : 'Key not valid';

    function getCardOptions(){
       return {balance, transactionLimit, historyLogs, key}
    }

    function putCredits(money){
        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        balance += money;
        addHistory('Received credits', money, date + ', ' + time)
        // return balance
    }

    function addHistory(operationType, credits, operationTime) {
        historyLogs.push({operationType, credits, operationTime})
    }

    function takeCredits(money) {
        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        if(money<=transactionLimit && balance >= money){
        balance -= money
        } else {
            console.error('Your money is over limit or you do not have enough money left')
        }
        addHistory('Withdrawal of credits',money,date + ', ' + time )
        // return balance
    }
    
    function setTransactionLimit(number) {
        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        transactionLimit = number;
        addHistory('Transaction limit change',number,date + ', ' + time )
        // return transactionLimit
    }

    function transferCredits(credit, receiverCard) {
        let money = credit*1.005
        if (credit<=transactionLimit && balance>=money){
            balance = balance - money;
            receiverCard.putCredits(credit);
        }else{
            console.error('Your money is over limit or you do not have enough money left')
        }
        // return balance
    }

    return {getCardOptions, putCredits, takeCredits, setTransactionLimit, transferCredits}

}

const card1 = userCard(3);
const card2 = userCard(2);

console.log(card1.getCardOptions());
card1.putCredits(200);
card1.takeCredits(100);
card1.setTransactionLimit(3000);
card1.transferCredits(10, card2);

console.log(card1.getCardOptions());
console.log('---------------');
console.log(card2.getCardOptions());






