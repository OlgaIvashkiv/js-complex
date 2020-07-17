// Створити функцію конструктор для об'єкту який описує теги
function Tag(titleOfTag,action,titleOfAttr1,actionOfAttr1,titleOfAttr2,actionOfAttr2, ) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = [
        {titleOfAttr: titleOfAttr1, actionOfAttr: actionOfAttr1},
        {titleOfAttr: titleOfAttr2, actionOfAttr: actionOfAttr2},
    ];

}

let a = new Tag('a', '<a> предназначен для создания ссылок','href',
    'Задает адрес документа, на который следует перейти',
    'target','Имя окна или фрейма, куда браузер будет загружать документ')
console.log(a);

let div = new Tag('div', ' <div> является блочным элементом', 'align',
    'Задает выравнивание содержимого тега <div>', 'title',
    'Добавляет всплывающую подсказку к содержимому');
console.log(div);

let h1 = new Tag('h1','тег <h1> представляет собой наиболее важный заголовок первого уровня',
    'align','Определяет выравнивание заголовка',);
console.log(h1);

let span = new Tag('span','Тег <span> предназначен для определения строчных элементов документа',
    'dir','Задает направление и отображение текста — слева направо или справа налево',
    'class','Определяет имя класса');
console.log(span);

let input = new Tag('input','<input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков',
    'accept','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов',
    'value','Значение элемента');
console.log(input);

let form = new Tag('form','Связывает поле с формой по её идентификатору');
console.log(form);

let option = new Tag('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
    'disabled','Заблокировать для доступа элемент списка',
    'label','Указание метки пункта списка');
console.log(option);

let select = new Tag('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
    'form','Связывает список с формой','required','Список обязателен для выбора перед отправкой формы');
console.log(select);

//Створити класс  для об'єкту який описує теги
class Tags {
    constructor(titleOfTag,action,titleOfAttr1,actionOfAttr1,titleOfAttr2,actionOfAttr2, ){
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [
            {titleOfAttr: titleOfAttr1, actionOfAttr: actionOfAttr1},
            {titleOfAttr: titleOfAttr2, actionOfAttr: actionOfAttr2},
        ];
    }
}
let a1 = new Tags('a', '<a> предназначен для создания ссылок','href',
    'Задает адрес документа, на который следует перейти',
    'target','Имя окна или фрейма, куда браузер будет загружать документ')
console.log(a1);

let div1 = new Tags('div', ' <div> является блочным элементом', 'align',
    'Задает выравнивание содержимого тега <div>', 'title',
    'Добавляет всплывающую подсказку к содержимому');
console.log(div1);

let h11 = new Tags('h1','тег <h1> представляет собой наиболее важный заголовок первого уровня',
    'align','Определяет выравнивание заголовка');
console.log(h11);

let span1 = new Tags('span','Тег <span> предназначен для определения строчных элементов документа',
    'dir','Задает направление и отображение текста — слева направо или справа налево',
    'class','Определяет имя класса');
console.log(span1);

let input1 = new Tags('input','<input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков',
    'accept','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов',
    'value','Значение элемента');
console.log(input1);

let form1 = new Tags('form','Связывает поле с формой по её идентификатору');
console.log(form1);

let option1 = new Tags('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
    'disabled','Заблокировать для доступа элемент списка',
    'label','Указание метки пункта списка');
console.log(option1);

let select1 = new Tags('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
    'form','Связывает список с формой','required','Список обязателен для выбора перед отправкой формы');
console.log(select1);

//Line 75
//Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
let car = {
    model: 'mercedes b180',
    producer: 'mercedes-benz',
    year: 2011,
    maxSpeed: 220,
    volume: 2.0,
    drive: function(){
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    },
    info: function () {
        console.log(`model-${this.model}\n producer- ${this.producer}\n year- ${this.year}\n maxSpeed- ${this.maxSpeed}\n volume-${this.volume}`)
    },
    increaseMaxSpeed: function(newSpeed){
        this.maxSpeed += newSpeed;
        return this.maxSpeed
    },
    changeYear: function (newValue) {
        this.year = newValue;
        return this.year;
    },
    addDriver: function (driver) {
    this.driver = driver;
    return this.driver;
    }
};
car.drive();
car.info();
car.increaseMaxSpeed(20);
console.log(car.maxSpeed);
car.changeYear(2015);
console.log(car.year);
console.log(car.addDriver({name: 'Olga', age: 26, experience: 4}));
console.log(car.driver);

//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model,producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        console.log(`model-${this.model}\n producer- ${this.producer}\n year- ${this.year}\n maxSpeed- ${this.maxSpeed}\n volume-${this.volume}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        return this.maxSpeed
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
        return this.year;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
        return this.driver
    }
}
let renault = new Car('logan', 'renault', 2014, 200, 1.4);
renault.drive();
renault.info();
console.log(renault.increaseMaxSpeed(15));
console.log(renault.changeYear(2017));
console.log(renault.addDriver({name: 'Sasha', age: 39}));

//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class Auto{
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    drive (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info(){
        console.log(`model-${this.model}\n producer- ${this.producer}\n year- ${this.year}\n maxSpeed- ${this.maxSpeed}\n volume-${this.volume}`)
    }
    increaseMaxSpeed(newSpeed){
        this.maxSpeed += newSpeed;
        return this.maxSpeed
    }
    changeYear(newValue){
        this.year = newValue;
        return this.year;
    }
    addDriver(driver){
        this.driver = driver;
        return this.driver
    }
}

let newRenault = new Auto('sandero', 'renault', 2014, 200, 1.4);
newRenault.drive();
newRenault.info();
newRenault.increaseMaxSpeed(20);
newRenault.changeYear(2013);
console.log(newRenault.addDriver({name: 'Alex', age: 35}));

//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Cinderella extends Human{
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize
    }
}

let cinderella1 = new Cinderella('Olga',26,35.5)
console.log(cinderella1);
let cinderella2 = new Cinderella('Julia',22,37)
console.log(cinderella2);
let cinderella3 = new Cinderella('Natalia',22,37.5)
console.log(cinderella3);
let cinderella4 = new Cinderella('Katia',24,36.5)
console.log(cinderella4);
let cinderella5 = new Cinderella('Diana',29,38.5)
console.log(cinderella5);
let cinderella6 = new Cinderella('Tania',51,38)
console.log(cinderella6);
let cinderella7 = new Cinderella('Yana',27,35)
console.log(cinderella7);
let cinderella8 = new Cinderella('Natasha',42,36)
console.log(cinderella8);
let cinderella9 = new Cinderella('Nastia',24,39)
console.log(cinderella9);
let cinderella10 = new Cinderella('Alisa',24,40)
console.log(cinderella10);

let cinderellaArray = [cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10];


class Prince extends Human{
    constructor(name, age, shoeSize) {
        super(name, age);
        this.shoeSize = shoeSize;
    }
    findCinderella(array){
        for (const element of array) {
            if (element.footSize === this.shoeSize){
                console.log(`My name is ${this.name} and my Cinderella is ${element.name}`)
            }
        }
    }
}

let prince1 = new Prince('Max', 23, 35.5);
prince1.findCinderella(cinderellaArray);

let prince2 = new Prince('Sasha',28,40);
prince2.findCinderella(cinderellaArray);

let prince3 = new Prince('Pasha',26,39);
prince3.findCinderella(cinderellaArray);

let prince4 = new Prince('Alex',28,37.5);
prince4.findCinderella(cinderellaArray);

let prince5 = new Prince('Dima',28,35);
prince5.findCinderella(cinderellaArray);

let prince6 = new Prince('Yura',28,36);
prince6.findCinderella(cinderellaArray);

let prince7 = new Prince('Ivan',28,38.5);
prince7.findCinderella(cinderellaArray);

let prince8 = new Prince('Vasya',28,36.5);
prince8.findCinderella(cinderellaArray);

let prince9 = new Prince('Ilya',28,37);
prince9.findCinderella(cinderellaArray);

let prince10 = new Prince('Serge',28,38);
prince10.findCinderella(cinderellaArray);

//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
function CinderellaNew(name,age,shoeSize){
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
}

let newCinderella1 = new CinderellaNew('Olga',26,35.5);
let newCinderella2 = new CinderellaNew('Julia',22,37);
let newCinderella3 = new CinderellaNew('Natalia',22,37.5);
let newCinderella4 = new CinderellaNew('Katia',24,36.5);
let newCinderella5 = new CinderellaNew('Diana',29,38.5);
let newCinderella6 = new CinderellaNew('Tania',51,38);
let newCinderella7 = new CinderellaNew('Yana',27,35);
let newCinderella8 = new CinderellaNew('Natasha',42,36);
let newCinderella9 = new CinderellaNew('Nastia',24,39);
let newCinderella10 = new CinderellaNew('Alisa',24,40);

let newCinderellaArray = [newCinderella1,newCinderella2,newCinderella3,newCinderella4,newCinderella5,newCinderella6,newCinderella7,newCinderella8,newCinderella9,newCinderella10];

function PrinceNew(name,age,shoe){
    this.name = name;
    this.age = age;
    this.shoe = shoe;
    this.findCinderellaShoe = function (array) {
        for (const field of array) {
            if (field.shoeSize === shoe) {
                console.log(`I'm ${this.name} & this is my Cinderella ${field.name}`);

            }
        }
    }
}

let princeNew1 = new PrinceNew('Max', 23, 35.5);
princeNew1.findCinderellaShoe(newCinderellaArray);
let princeNew2 = new PrinceNew('Sasha',28,40);
princeNew2.findCinderellaShoe(newCinderellaArray);
let princeNew3 = new PrinceNew('Pasha',26,39);
princeNew3.findCinderellaShoe(newCinderellaArray);
let princeNew4 = new PrinceNew('Alex',28,37.5);
princeNew4.findCinderellaShoe(newCinderellaArray);
let princeNew5 = new PrinceNew('Dima',28,35);
princeNew5.findCinderellaShoe(newCinderellaArray);
let princeNew6 = new PrinceNew('Yura',28,36);
princeNew6.findCinderellaShoe(newCinderellaArray);
let princeNew7 = new PrinceNew('Ivan',28,38.5);
princeNew7.findCinderellaShoe(newCinderellaArray);
let princeNew8 = new PrinceNew('Vasya',28,36.5)
princeNew8.findCinderellaShoe(newCinderellaArray);
let princeNew9 = new PrinceNew('Ilya',28,37);
princeNew9.findCinderellaShoe(newCinderellaArray);
let princeNew10 = new PrinceNew('Serge',28,38);
princeNew10.findCinderellaShoe(newCinderellaArray);




