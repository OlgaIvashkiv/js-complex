//- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по
// набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
let man = {
    name:'Max',
    surname: 'Khar',
    age: 23
};
let woman = {
    name:'Olga',
    surname: 'Iva',
    age: 26
};
let sister = {
    name:'Julia',
    surname: 'Kyrsa',
    age: 22
};
let mom = {
    name:'Tania',
    surname: 'Iva',
    age:51
};
let dad = {
    name:'Boris',
    surname: 'Iva',
    age: 51
};

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен
// присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт...
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
let man2 = {
    name:'Max',
    surname: 'Khar',
    age: 23,
    skills: ['js', 'node.js'],
    pets: {
        name: 'Bots',
        age: 3
    }
};
let woman2 = {
    name:'Olga',
    surname: 'Iva',
    age: 26,
    skills: ['eating','driving'],
    car: {
        model: 'mercedes',
        year: 2011
    }
};
let sister2 = {
    name:'Julia',
    surname: 'Kyrsa',
    age: 22,
    skills: ['eating','sleeping'],
    car: {
        model: 'ranult',
        year: 2016
    }
};
let mom2 = {
    name:'Tania',
    surname: 'Iva',
    age: 51,
    skills: ['eating','cooking'],
    phone: {
        model: 'iphone',
        year: 2011
    }
};
let dad2 = {
    name:'Boris',
    surname: 'Iva',
    age: 51,
    skills: ['working','driving'],
    car: {
        model: 'toyota',
        year: 2007
    }
};


// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
for (const manKey in man) {
    console.log(manKey);
}

for (const womanKey in woman) {
    console.log(womanKey)
}

for (const sisterKey in sister) {
    console.log(sisterKey)
}

for (const momKey in mom) {
    console.log(momKey)
}

for (const dadKey in dad) {
    console.log(dadKey)
}

for (const man2Key in man2) {
    console.log(man2Key)
}

for (const woman2Key in woman2) {
    console.log(woman2Key)
}

for (const sister2Key in sister2) {
    console.log(sister2Key)
}

for (const mom2Key in mom2) {
    console.log(mom2Key)
}

for (const dad2Key in dad2) {
    console.log(dad2Key)
}


// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
console.log(Object.keys(man));
console.log(Object.keys(woman));
console.log(Object.keys(sister));
console.log(Object.keys(mom));
console.log(Object.keys(dad));
console.log(Object.keys(man2));
console.log(Object.keys(woman2));
console.log(Object.keys(sister2));
console.log(Object.keys(mom2));
console.log(Object.keys(dad2));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель,
// год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
let cars = [
    {
    model: 'mazda',
    year: 2008,
    power: 1.5,
    color: 'green'
}, {
    model: 'toyota',
    year: 2007,
    power: 4.0,
    color: 'silver'
}, {
    model: 'mercedes',
    year: 2011,
    power: 2.0,
    color: 'yellow'
}, {
    model: 'renault',
    year: 2016,
    power: 1.5,
    color: 'white'
}, {
    model: 'nissan',
    year: 2014,
    power: 1.3,
    color: 'blue'
}, {
    model: 'mazda',
    year: 2018,
    power: 1.6,
    color: 'blue'
}, {
    model: 'bmw',
    year: 2010,
    power: 2.0,
    color: 'black'
}, {
    model: 'lexus',
    year: 2009,
    power: 2.5,
    color: 'black'
}, {
    model: 'audi',
    year: 2006,
    power: 1.8,
    color: 'blue'
}, {
    model: 'audi',
    year: 2008,
    power: 2.0,
    color: 'brown'
}
];

// - Создать массив объектов cities и заполнить его объектами с полями название,
// популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities = [
    {
    name: 'Kiev',
    population: '1 million',
    country: 'Ukraine',
    region: 'Kiev'
},{
    name: 'Chernivtsi',
    population: '300 000',
    country: 'Ukraine',
    region: 'Chernivtsi'
},{
    name: 'Lviv',
    population: '720 000',
    country: 'Ukraine',
    region: 'Lviv'
},{
    name: 'London',
    population: '9 million',
    country: 'UK',
    region: 'London'
}
];

// - Создать массив объектов cars и заполнить его машинами с полями модель,
// год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя,
// возраст, пол, стаж.
let carsWithDriver = [
    {
    model: 'mazda',
    year: 2008,
    power: 1.5,
    color: 'green',
    driver: {
        name: 'Julia',
        age: 22,
        gender: 'female',
        exp: 2
    }
},{
    model: 'toyota',
    year: 2007,
    power: 4.0,
    color: 'silver',
    driver: {
        name: 'Boris',
        age: 51,
        gender: 'male',
        exp: 25
    }
},{
    model: 'mercedes',
    year: 2011,
    power: 2.0,
    color: 'yellow',
    driver: {
        name: 'Olga',
        age: 26,
        gender: 'female',
        exp: 4
    }
}
];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
let i = 0;
while(i<cars.length){
    console.log(cars[i]);
    i++;
}

let j = 0;
while(j<cities.length){
    console.log(cities[j]);
    j++;
}

let x = 0;
while(x<carsWithDriver.length){
    console.log(carsWithDriver[x]);
    x++;
}

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

for (let i = 0; i < carsWithDriver.length; i++) {
    console.log(carsWithDriver[i]);
}

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
for (const car of cars) {
    console.log(car);
}

for (const city of cities) {
    console.log(city);
}

for (const car of carsWithDriver) {
    console.log(car);
}

// - взять объекты из задания 1 и превратить каждый в json.
let manStr = JSON.stringify(man);
console.log(manStr);
let womanStr = JSON.stringify(woman);
console.log(womanStr);
let sisterStr = JSON.stringify(sister);
console.log(sisterStr);
let momStr = JSON.stringify(mom);
console.log(momStr);
let dadStr = JSON.stringify(dad);
console.log(dadStr);

// - взять json из задания 11 и превратить их обратно в объекты.
console.log(JSON.parse(manStr));
console.log(JSON.parse(womanStr));
console.log(JSON.parse(sisterStr));
console.log(JSON.parse(momStr));
console.log(JSON.parse(dadStr));

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
for (const car of cars) {
    console.log(JSON.stringify(car));
}

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
for (const city of cities) {
    console.log(JSON.stringify(city));
}

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и
// сразу скоприовать в новый массив.
let newCarsArray = [];
for (const car of carsWithDriver) {
    newCarsArray.push(JSON.stringify(car));
}
console.log(newCarsArray);
// - Создать массив пользователей. У каждого пользователя обязательно должено быть
// поле skills которое является массивом. Проитерировать массив пользователей и в каждом
// пользователе проитерировать его массив skills
let users = [
    {
    name: 'vasya',
    age: 31,
    skills: ['eat', 'sleep']
}, {
    name: 'petya',
    age: 30,
    skills: ['play', 'drive']
}, {
    name: 'kolya',
    age: 29,
    skills: ['walk', 'sleep']
}, {
    name: 'olya',
    age: 28,
    skills: ['dance', 'drive']
}
];
for (const user of users) {
    console.log(user);
    for (const skill of user.skills) {
        console.log(skill);
    }
}


// - Создать массив пользователей. У каждого пользователя обязательно должено быть
// поле skills которое является массивом. Проитерировать массив пользователей и в
// каждом пользователе проитерировать его массив skills. Скопировать все skills
// всех пользователей в отедльный массив
let skillsArray = [];
for (const user of users) {
    for (const skill of user.skills) {
        skillsArray.push(skill);
    }
}
console.log(skillsArray);

//За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
let users2 = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
    ];
for (const user of users2) {
    console.log(user);
    for (const skill of user.skills) {
        console.log(skill);
    }
}

// З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх
// в інший порожній масив.
let usersWithAddress = [
    {
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}
];
let addresses = [];

for (const user of usersWithAddress) {
    console.log(user.address);
    addresses.push(user.address);
}
console.log(addresses);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за
// допомоги document.createElement. Всі данні в одному блоці.
for (const  user of usersWithAddress) {
    let addressStr = '';
    for (const address in user.address) {
    addressStr = addressStr + ' ' + user.address[address];

    }
    let userDiv = document.createElement('div');
    userDiv.innerText = `Name - ${user.name} Age - ${user.age} Status - ${user.status} Address - ${addressStr}`
    document.body.appendChild(userDiv);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за
// допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
for (const user of usersWithAddress) {
    let userDiv = document.createElement('div');
    for (const field in user) {
        let fieldDiv = document.createElement('div');
        fieldDiv.innerText = `${JSON.stringify(user[field])}`;
        userDiv.appendChild(fieldDiv);
    }
    document.body.appendChild(userDiv)
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за
// допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з
// адресою зробити окремим блоком, з блоками для кожної властивості








let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
let usersWithCities = [];

for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id){
            user.address = city;
        }
    }
    usersWithCities = usersWithId;
}
console.log(usersWithCities);

//- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id ,
// class та тегу
let header = document.getElementById('header');
console.log(header.innerText);

let rule1 = document.getElementsByClassName('rule1');
console.log(rule1[0].innerText);

let p = document.getElementsByTagName('p');
console.log(p[2].innerText);

// - змінити цей текст використовуючи селектори id, class,  tag
header.innerText = 'Fight club rules';
rule1[0].innerText = 'Rule 1 here';
p[2].innerText = 'Some text here';

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
header.style.height = '100px';
header.style.width = '100px';

rule1[0].style.height = '200px';
rule1[0].style.width = '200px';

p[2].style.height = '150px';
p[2].style.width = '150px';

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома
// ячейками всередені
let table = document.createElement('table');
let tr = document.createElement('tr');
for (let i = 0; i <3; i++) {
    let td = document.createElement('td');

tr.appendChild(td)
table.appendChild(tr);

document.body.appendChild(table);
}


// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з
// трьома ячейками всередені
let table2 = document.createElement('table');

for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');
    for (let i = 0; i < 3; i++) {
        const td = document.createElement('td');
        tr.appendChild(td);
    }
    table2.appendChild(tr);
}
document.body.appendChild(table2);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків
// з 5 ячейками всередені
let table3 = document.createElement('table');

for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');
    for (let i = 0; i < 5; i++) {
        const td = document.createElement('td')
        tr.appendChild(td);
    }
    table3.appendChild(tr)
}
document.body.appendChild(table3);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків
// з m ячейками всередені. n та m отримати з prompt
// let table4 = document.createElement('table');

// for (let i = 0; i < prompt('Enter number of tr'); i++) {
//     const tr = document.createElement('tr');
//     for (let i = 0; i < prompt('Enter number of td'); i++) {
//         const td = document.createElement('td')
//        tr.appendChild(td);
//     }
//     table4.appendChild(tr)
// }
// document.body.appendChild(table4);



// знайти всі елементі, які мають class
let classes = document.getElementsByTagName('*');
for (const classlist of classes) {
    if (classlist.getAttribute('class')) {
        console.log(classlist);

    }
}
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
let pList = document.getElementsByTagName('p');
for (const p of pList) {
    p.innerText = 'hello oktenweb!'
}

//  - знайти всі div та змінити ім колір на червоний
let divList = document.getElementsByTagName('div');
for (const div of divList) {
    div.style.backgroundColor = 'red'
}

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content
//     з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let h2List = document.getElementsByTagName('h2');
let contentDiv = document.getElementById('content');
let ul = document.createElement('ul');

for (const h2 of h2List) {
    let li = document.createElement('li');
    li.innerText = h2.innerText;
    ul.appendChild(li);
    contentDiv.appendChild(ul);
}

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить
// з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

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
let wrapDiv = document.getElementById('wrap');
for (const rule of rules) {
    let ruleDiv = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');

    h2.innerText = rule.title;
    p.innerText = rule.body;

    ruleDiv.appendChild(h2);
    ruleDiv.appendChild(p);

    wrapDiv.appendChild(ruleDiv);
}

