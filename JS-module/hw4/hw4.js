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

function zeroesToTheEnd(array) {
    let zeroes = [];
    let numbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0){
            zeroes.push(array[i])
        }
        else {
            numbers.push(array[i])
        }
    }return numbers.concat(zeroes);

}

console.log(zeroesToTheEnd([1, 0, 6, 0, 3]));

//Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function bodyElem() {
    let bodyElement = document.createElement('div');
    bodyElement.innerText = 'Hello owu';
    document.body.appendChild(bodyElement);
}
bodyElem();

//Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function addTextToBody(tag, text) {
    let bodyElement = document.createElement(tag);
    bodyElement.innerText = text;
    document.body.appendChild(bodyElement);
}
addTextToBody('div','Hello');

//риймає масив автомобілів (можна взяти з попередніх дз ),та
// індентифікатор елемнту в який потрібно додати список цих автомобілів.
let cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];
function addArrayOfCars(array,id) {
    let wrap = document.createElement('div');
    wrap.id = id;
    for (const item of array) {
    let divElement = document.createElement('div');
        for (const key in item) {
            let keyDiv = document.createElement('div');
            keyDiv.innerText = `${key}- ${item[key]}`
            divElement.appendChild(keyDiv)
        }
      wrap.appendChild(divElement);
    } document.body.appendChild(wrap)
}

addArrayOfCars(cars, 'wrap');

//**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

function connectCitiesWithUser(arrayUser, arrayCity) {
    let newArray = [];
    for (const user of arrayUser) {
        user.address = [];
        for (const city of arrayCity) {
            if (user.id === city.user_id) {
                user.address.push(city.user_id)
            }
        }newArray.push(user);
    }return newArray;
}

console.log(connectCitiesWithUser(usersWithId, citiesWithId));

//Та робимо це функцією.При цьому правила отримувати через аргумент.
// Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

];

function rulesF(rulesArray) {
    let container = document.createElement('div');
    container.id = 'container'
    for (const rule of rulesArray) {
        let ruleDiv = document.createElement('div');
        for (const key in rule) {
            let keyDiv = document.createElement('div');
            keyDiv.innerText = `${rule[key]}`
            ruleDiv.appendChild(keyDiv);
        }container.appendChild(ruleDiv)
    }document.body.appendChild(container);
}

rulesF(rules);

//Additional
//1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
function powerOfTwo(n) {
    let result = n/2
    if (result>1){
        return powerOfTwo(n/2)
    }
    if(result<1){
        return 'NO'
    }
    return 'YES'
}

console.log(powerOfTwo(4));