//- создать массив с 20 числами.
let numbers = [21,34,56,7,90,54,67,31,93,12,43,27,2,15,72,8,3,10,17,29];
// -- при помощи метода sort и колбека  отсортировать массив.
console.log(numbers.sort((a, b) => a - b));
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
console.log(numbers.sort((a, b) => b - a));
// -- при помощи filter получить числа кратные 3
console.log(numbers.filter(value => value % 3 === 0));
// -- при помощи filter получить числа кратные 10
console.log(numbers.filter(value => value % 10 === 0));
// -- перебрать (проитерировать) массив при помощи foreach()
numbers.forEach(value => console.log(value));
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
console.log(numbers.map(value => value * 3));

//создать массив со словами на 15-20 элементов.
let array = [
    'lorem','ipsum','Dolor','sit','amet','consectetur','adipisicing', 'Elit','dolores','enim','facilis','fuga','illum','perferendis','quibusdam','rem','repudiandae','tenetur','veritatis','voluptatibus'
];
// -- отсортировать его по алфавиту в восходящем порядке.
console.log(array.map(value => value.toUpperCase()).sort());
// -- отсортировать его по алфавиту  в нисходящем порядке.
console.log(array.map(value => value.toUpperCase()).reverse());
// -- отфильтровать слова длиной менее 4х символов
console.log(array.filter(value => value.length <= 4));
// -- перебрать массив при помощи map() и получить новый
// массив в котором все значения будут со знаком "!" в конце
console.log(array.map(value => value + '!'));

//Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
console.log(users.sort(((a, b) => a.age - b.age)));
console.log(users.sort(((a, b) => b.age - a.age)));
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
console.log(users.sort(((a, b) => a.name.length - b.name.length)));
console.log(users.sort(((a, b) => b.name.length - a.name.length)));
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний
// індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив
// (первинний масив залишиться без змін)
let usersWithId = users.map((value, index) => {
        let newUser = {};
        newUser.id = index+1;
        newUser.name = value.name;
        newUser.age = value.age;
        newUser.status = value.status;
        return newUser
})
console.log(usersWithId);
console.log(users);
// - відсортувати його за індентифікатором
console.log(usersWithId.sort(((a, b) => a.id - b.id)));

//наисать функцию калькулятора с 2мя числами и колбеком
function calculatorOf2(a,b,callback) {
   return callback(a,b)
}
let result = calculatorOf2(25,30, function (a,b) {
    return a+b;
});
console.log(result)
// -- наисать функцию калькулятора с 3мя числами и колбеком
function calculatorOf3(a,b,c, callback) {
    return callback(a,b,c)
}
let result1 = calculatorOf3(100,2,2,function (a,b,c) {
    return (a+b)/c
});
console.log(result1)

let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
console.log(cars.filter(value => value.volume > 3));
// - двигун = 2л
console.log(cars.filter(value => value.volume === 2));
// - виробник мерс
console.log(cars.filter(value => value.producer === 'mercedes'));
// - двигун більше 3х літрів + виробник мерседес
console.log(cars.filter(value => value.volume >= 3 && value.producer === 'mercedes'));
// - двигун більше 3х літрів + виробник субару
console.log(cars.filter(value => value.volume >= 3 && value.producer === 'subaru'));
// - сили більше ніж 300
console.log(cars.filter(value => value.power > 300));
// - сили більше ніж 300 + виробник субару
console.log(cars.filter(value => value.power > 300 && value.producer === 'subaru'));
// - мотор серіі ej
console.log(cars.filter(value => value.engine.startsWith('ej')));
// - сили більше ніж 300 + виробник субару + мотор серіі ej
console.log(cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej')));
// - двигун меньше 3х літрів + виробник мерседес
console.log(cars.filter(value => value.volume < 3 && value.producer === 'mercedes'));
// - двигун більше 2л + сили більше 250
console.log(cars.filter(value => value.volume > 2 && value.power > 250));
// - сили більше 250  + виробник бмв
console.log(cars.filter(value => value.power > 250 && value.producer === 'bmw'));


let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
console.log(usersWithAddress.sort((a, b) => a.id - b.id));
// -- отсортировать его по id пользователей в обратном опрядке
console.log(usersWithAddress.sort((a, b) => b.id - a.id));
// -- отсортировать его по возрасту пользователей
console.log(usersWithAddress.sort((a, b) => a.age - b.age));
// -- отсортировать его по возрасту пользователей в обратном порядке
console.log(usersWithAddress.sort((a, b) => b.age - a.age));
// -- отсортировать его по имени пользователей
console.log(usersWithAddress.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1
    }
    return 0;
}));
// -- отсортировать его по имени пользователей в обратном порядке
console.log(usersWithAddress.sort((a, b) => {
    if (b.name < a.name) {
        return -1;
    } else if (b.name > a.name) {
        return 1
    }
    return 0;
}));
// -- отсортировать его по названию улицы  в алфавитном порядке
console.log(usersWithAddress.sort((a, b) => {
    if (a.address.street < b.address.street) {
        return -1
    } else if (a.address.street > b.address.street) {
        return 1
    }
    return 0;
}));
// -- отсортировать его по номеру дома по возрастанию
console.log(usersWithAddress.sort((a, b) => a.address.number - b.address.number));
// -- отфильтровать (оставить) тех кто младше 30
console.log(usersWithAddress.filter(value => value.age < 30));
// -- отфильтровать (оставить) тех у кого отрицательный статус
console.log(usersWithAddress.filter(value => !value.status));
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
console.log(usersWithAddress.filter(value => !value.status && value.age < 30));
// -- отфильтровать (оставить) тех у кого номер дома четный
console.log(usersWithAddress.filter(value => value.address.number % 2 === 0));

//Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
class Auto {
    constructor(producer, power, price, year, owner) {
       this.producer = producer;
       this.power = power;
       this.price = price;
       this.year = year;
       this.owner = owner;
    }
}
let auto1 = new Auto('mercedes', 200, 8000, 2011,{name:'olga', age:26, experience:4});
let auto2 = new Auto('bmw', 250, 12000, 2015,{name:'vasya',age: 28,experience:6});
let auto3 = new Auto('audi', 230, 9500, 2013, {name:'oleg', age:29,experience:7});
let auto4 = new Auto('subaru', 300, 17000, 2016,{name:'sasha',age:29,experience:8});
let auto5 = new Auto('mercedes', 300, 16500, 2014,{name:'serg',age:33,experience:9});
let auto6 = new Auto('toyota', 220, 9500, 2014,{name: 'vasya', age: 20, experience: 2});
let auto7 = new Auto('mercedes', 180, 7000, 2008,{name: 'max', age: 25, experience: 5});
let autosArray = [auto1,auto2,auto3,auto4,auto5,auto6,auto7];


// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

for (let i = 0; i < autosArray.length; i+=2) {
    const auto = autosArray[i];
    auto.power += auto.power*0.1
}
console.log(autosArray);


// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10%
// та ціну на 5%
for (let i = 0; i < autosArray.length; i+=2) {
    const auto = autosArray[i];
    auto.power += auto.power*0.1
    auto.price += auto.price*0.05
}
console.log(autosArray);

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років,
// але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації,
// що збільшить йому досвід на 1 рік.
autosArray.forEach((value) => {
    if(value.owner.experience < 5 && value.owner.age > 25){
        value.owner.experience++
    }
});
console.log(autosArray);


// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let priceSum = [];
autosArray.forEach(value => {
    priceSum.push(value.price)
})
console.log(priceSum)
console.log(priceSum.reduce((previousValue, currentValue) => previousValue + currentValue));

//Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
function minAndMaxIndex(array,el) {
    let min = array.indexOf(el);
    let max = array.lastIndexOf(el);
    console.log(`Answer: MinIndex = ${min}, MaxIndex = ${max}`)
}

minAndMaxIndex(arr,7)