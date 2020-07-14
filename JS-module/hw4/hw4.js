//- створити функцію яка виводить масив
function arrayLog(array) {
    console.log(array);
}
arrayLog([1,23,56,78,888,12])

//- створити функцію яка заповнює масив рандомними
// числами та виводить його. Для виведення використати попвередню функцію.
function getRandom(length,min, max) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (max - min)) + min)
    }
    arrayLog(array);
}
getRandom(7,1,10);

//- створити функцію яка приймає три числа та виводить та повертає найменьше.
function theLeastNum (a,b,c) {
    if (a<b && a<c) {
        console.log(a);
        return(a);
    }
    if (b<c && b<a) {
        console.log(b);
        return(b)
    }
    if (c<b && c<a) {
        console.log(c);
        return(c)
    }
}

console.log(theLeastNum(2, 135, 15));

//- створити функцію яка приймає три числа та виводить та повертає найбільше.
function theBiggestNum(a,b,c) {
    if (a>b && a>c) {
        console.log(a);
        return(a)
    }
    if (b>c && b>a) {
        console.log(b);
        return(b)
    }
    if (c>b && c>a) {
        console.log(c);
        return(c)
    }
}

console.log(theBiggestNum(23, 4, 78));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function minMaxOfArray() {
    let min = arguments[0];
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i]<min) {
            min = arguments[i];
        }
        if (arguments[i]>max) {
            max = arguments[i];
        }
    } console.log('this is MAX '+ max);
    return min;
}
console.log(minMaxOfArray(-5,25,-100,150));

//- створити функцію яка повертає найбільше число з масиву
function maxNumber (){
    let max = arguments[0];
    for(let i = 0; i < arguments.length; i++){
        if((arguments[i]) > max){
            max = arguments[i];
        }
    }    return max;
}
console.log(maxNumber(12,-5,36,7820));

//- створити функцію яка повертає найменьше число з масиву
function minNumber() {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++){
        if ((arguments[i]) < min){
            min = arguments[i]
        }

    } return min
}

console.log(minNumber(-3, 6, 89, 3433));

//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function sumOfNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i];
        sum+=argument;
    }
    return sum
}

console.log(sumOfNumbers(12, 56, 7, 90));

//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function averageNumber() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i];
        sum+=argument
    } return sum/arguments.length
}

console.log(averageNumber(13, 6, 8, 333));

//Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
function numberOfObj(array) {
   let counter = 0;
    for (const object of array) {
        if(typeof object === 'object'){
            counter++;
        }
    }return counter
}

console.log(numberOfObj([1, 2, 'ou', 145, {name: 'hi', surname: 'hello'}]));

//- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
function numberOfFields(array){
    let counter = 0;
    for (const element of array) {
        if (typeof element === 'object'){
            for (const field in element) {
                console.log(field)
                counter++;
        }

    }

    } return counter
}

console.log(numberOfFields([{
    type: "Coupe",
    modification: ["325", "328", "330", "M"],
    errors: 0
}]));

//створити функцію  яка скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.

function sumOfArrays(array1, array2) {
    let newArray = []
    for (let i = 0; i < array1.length; i++) {
        const item1 = array1[i];
        for (let j = 0; j < array2.length; j++) {
            const item2 = array2[j];
            if (i===j){
               newArray.push(item1 + item2)
            }

        }

    } return newArray
}

console.log(sumOfArrays([1, 2, 3, 4],
    [2, 3, 4, 5]));

//*** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
function arrayOfNumbersWithI(array,i) {
    if (i<array.length){
        const buffer = array[i];
        array[i] = array [i+1]
        array[i+1] = buffer;

        console.log(array);
    }
}

arrayOfNumbersWithI([1, 2, 3, 45,6,0,877,9,12],5);

//*** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
