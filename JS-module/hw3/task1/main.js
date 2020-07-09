// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

let dog = {
    name: 'Obi',
    age: 12,
    breed: 'german shepard',
    color: 'black',
    country: 'Ukraine'
}

let man = {
    name: 'Max',
    age: 23,
    job: 'JS',
    company: 'asd',
    status: 'not married'
}

let car = {
    model: 'mercedes',
    year: 2011,
    power: 2.0,
    color: 'beige',
    fuel: 'diesel'
}
//
// -- Створити масив та вивести його в консоль:
//     - з 5 собак
let dogsArray = ['Labrador Retriever','German Shepherd Dog','Golden Retriever','French Bulldog','Bulldog'];
for (const dog of dogsArray){
    console.log(dog);
}

// - 3 5 людей
let humanArray = ['Tania', 'Boris', 'Olga', 'Julia', 'Max'];
for (const human of humanArray) {
    console.log(human);

}

// - з 5 автомобілів
let carsArray = ['mercedes', 'bmw','audi','renault', 'toyota'];
for (const car of carsArray){
    console.log(car);
}

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

let driver = {
    name: 'Boris',
    age: 55,
    exp: 25,
    car: { model: 'toyota',
            color: 'silver',
            year: 2007},
    children: ['Olga','Julia']
}


let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
console.log(users[7].name);
//  статус Максима
console.log(users[4].name);
// - ім'я передостаннього об'єкту
console.log(users[9].name);
// - ім'я третього об'єкта
console.log(users[2].name);
// - вік Олега
console.log(users[6].age);
// - вік Олі
console.log(users[3].age);
// - вік + ім'я 5го об'єкта
console.log(users[4].name, users[4].age);
// - вік + сатус Анни
console.log(users[5].name, users[5].status);
