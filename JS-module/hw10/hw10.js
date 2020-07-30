//Task 1
function UserCard(number) {
    let balance = 100;
    let transactionLimit =100;
    const historyLogs = [];
    const key = number <= 3 && number >=1 ? number : 'Key not valid';

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

const card1 = new UserCard(1);
const card2 = new UserCard(2);

console.log(card1.getCardOptions());
card1.putCredits(200);
card1.takeCredits(100);
card1.setTransactionLimit(3000);
card1.transferCredits(10, card2);

console.log(card1.getCardOptions());
console.log('---------------');
console.log(card2.getCardOptions());

//Task 2
class UserAccount{
    constructor(name){
        this.name = name;
        this.card = [];
    }
    addCard(){
        if (this.card.length < 3){
            this.card.push(new UserCard(this.card.length+1))
        } else {
            console.error('Card limit is over')
        }

    }
    getCardByKey(number){
        return this.card.find(value => value.getCardOptions().key === number)
    }
}

const user1 = new UserAccount('Olga');
const user2 = new UserAccount('Tania');
console.log(user1);
user1.addCard();
user1.addCard();
user1.addCard();

let user1Card1 = user1.getCardByKey(1);
console.log(user1Card1.getCardOptions());

user2.addCard();
user2.addCard();
user2.addCard();

let user2Card1 = user2.getCardByKey(1);
user1Card1.putCredits(1000);
user1Card1.transferCredits(100, user2Card1);
console.log(user1Card1.getCardOptions());
console.log(user2Card1.getCardOptions());

