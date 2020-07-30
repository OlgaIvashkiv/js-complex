function userCard(number) {
    let balance = 100;
    let transactionLimit =100;
    const historyLogs = [];
    let key = number <= 3 && number >=1 ? number : 'Key not valid';

    function getCardOptions(){
       return {balance, transactionLimit, historyLogs, key}
    }

    function putCredits(money){
        balance += money;
        return balance
    }

    function takeCredits(money) {
        if
        balance -= money;
        return balance
    }

    return {
        getCardOptions, putCredits, takeCredits
    }

}

const card1 = userCard(3);
console.log(card1);

console.log(card1.getCardOptions());
card1.putCredits(200)
console.log(card1.getCardOptions());
card1.takeCredits(100);
console.log(card1.getCardOptions());






