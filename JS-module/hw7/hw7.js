let greenDiv = document.getElementById('text');
greenDiv.style.display='block'
let divButton = document.getElementById('divButton');
divButton.onclick=()=>{
    greenDiv.style.display === 'block'
        ? greenDiv.style.display = 'none'
        :greenDiv.style.display='block'
}

//Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let hideBtn = document.getElementById('hideBtn');
hideBtn.onclick=()=>{
    hideBtn.style.display = 'none'
}

//створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи
// меньше він ніж 18, та повідомити про це користувача
let form1= document.forms.form1;
let ageInput = form1.enterAge;
let ageBtn = form1.ageBtn
ageBtn.onclick=()=>{
    if (ageInput.value<18){
        alert('Your age is under 18');
    }
}

//Создайте меню, которое раскрывается/сворачивается при клике
let menuName = document.getElementById('menuName');
let menuDiv = document.getElementById('menuDiv');
menuDiv.style.display='block'
menuName.style.backgroundColor='#7ea47f'
menuName.style.width='40px'

menuName.onclick=()=>{
    menuDiv.style.display==='block'?menuDiv.style.display='none':menuDiv.style.display='block'
}

//Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let commentsArray = [{title : '1', body:'lorem ipsum dolo sit ameti'},
    {title : '2', body:'lorem ipsum dolo sit ameti'},
    {title : '3', body:'lorem ipsum dolo sit ameti'},
    {title : '4', body:'lorem ipsum dolo sit ameti'},
    {title : '5', body:'lorem ipsum dolo sit ameti'},]


for (const comment of commentsArray) {
   let commentDiv = document.createElement('div');
   let bodyDiv = document.createElement('div');
   let button = document.createElement('button');

   bodyDiv.innerText = comment.body;
    button.innerText = 'Hide';

   commentDiv.appendChild(bodyDiv);
   commentDiv.appendChild(button);

   button.onclick=()=>{
       bodyDiv.style.display='none'
   }

   let wrap = document.getElementById('wrap');
   wrap.appendChild(commentDiv);

}

//створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку
// считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let form2 = document.forms.form2;
let textInput1 = form2.textInput1;
let textInput2 = form2.textInput2;

let form3 = document.forms.form3;
let textInput3 = form3.textInput3;
let textInput4 = form3.textInput4;

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

btn1.onclick=()=>{
    console.log(textInput1.value)
    console.log(textInput2.value)
}
btn2.onclick=()=>{
    console.log(textInput3.value)
    console.log(textInput4.value)
}

//Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

function table(tr,td,element){
    let table = document.createElement('table');
    if (td>=1 && tr>=1){
        for (let i = 0; i < tr; i++) {
           let tr = document.createElement('tr');
            for (let j = 0; j < td; j++) {
                let td = document.createElement('td');
                td.innerText='hello'
                td.style.border='2px solid black'
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }
    let wrap=document.getElementById(element);
    wrap.appendChild(table);
}

table(3,3,'wrap');

//Створити 3 инпута та кнопку. Один визначає кількість рядків, другий -
// кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let form4 = document.forms.form4;

let inputRows = form4.inputRows;
let inputCells = form4.inputCells;
let inputText = form4.inputText;
let tableBtn = document.getElementById('tableBtn');

tableBtn.onclick=()=>{
    let table = document.createElement('table');
    if (inputRows.value>=1 && inputCells.value>=1){
        for (let i = 0; i < inputRows.value; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < inputCells.value; j++) {
                let td = document.createElement('td');
                td.innerText=inputText.value
                td.style.border='1px solid black'
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }
    let wrap=document.getElementById('wrap');
    wrap.appendChild(table);
}

//Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let imgArray = [
//     {id:1, img_url: 'JS-module/hw7/images/img1.jpg'},
//     {id:2, img_url: 'JS-module/hw7/images/img2.jpg'},
//     {id:3, img_url: 'JS-module/hw7/images/img3.jpg'},
//     {id:4, img_url: 'JS-module/hw7/images/img4.jpg'},
//     {id:5, img_url: 'JS-module/hw7/images/img5.jpg'},
//     {id:6, img_url: 'JS-module/hw7/images/img6.jpg'}
// ];
let imgArray = [
    {id:1, img_url: 'C:\\Users\\Асус\\WebstormProjects\\js-complex\\JS-module\\hw7\\images\\img1.jpg'},
    {id:2, img_url: 'C:\\Users\\Асус\\WebstormProjects\\js-complex\\JS-module\\hw7\\images\\img2.jpg'},
    {id:3, img_url: 'C:\\Users\\Асус\\WebstormProjects\\js-complex\\JS-module\\hw7\\images\\img3.jpg'},
    {id:4, img_url: 'C:\\Users\\Асус\\WebstormProjects\\js-complex\\JS-module\\hw7\\images\\img4.jpg'},
    {id:5, img_url: 'C:\\Users\\Асус\\WebstormProjects\\js-complex\\JS-module\\hw7\\images\\img5.jpg'},
    {id:6, img_url: 'C:\\Users\\Асус\\WebstormProjects\\js-complex\\JS-module\\hw7\\images\\img6.jpg'}
];

let img = document.createElement('img');
let btnLeft = document.createElement('button');
let btnRight = document.createElement('button');

btnLeft.innerText = '<<<';
btnRight.innerText = '>>>';

let index = 0;
img.maxWidth = '170px';
img.src = imgArray[index].img_url;

let contentDiv = document.getElementById('content')
contentDiv.appendChild(img);
contentDiv.appendChild(btnLeft);
contentDiv.appendChild(btnRight);

btnLeft.onclick=()=>{
   index-1 < 0
    ? index = imgArray.length-1
       : index = index-1

    img.src = imgArray[index].img_url;
}

btnRight.onclick=()=>{
   index+1 > imgArray.length-1
    ? index = 0
       : index = index+1

    img.src = imgArray[index].img_url;
}

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
let uncensoredArray = ['blya','suka','pots','pridurok', 'durak'];
let uncensoredInput = document.getElementById('uncensoredInput');
let uncensoredBtn = document.getElementById('uncensoredBtn');

uncensoredBtn.onclick=()=>{
    for (const word of uncensoredArray) {
        if (uncensoredInput.value === word){
            alert('Warning!!!')
        }
    }
}

//Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
let uncensoredInput2 = document.getElementById('uncensoredInput2');
let uncensoredBtn2 = document.getElementById('uncensoredBtn2');

uncensoredBtn2.onclick=()=>{
    for (const word of uncensoredArray) {
        if (uncensoredInput2.value.includes(word)){
            alert('Warning!!!')
        }
    }
}

//создать скрипт, который берет считывает на странице (rules.html)
// текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

let h2 = document.getElementsByTagName('h2');
let ul = document.createElement('ul');

for (let i = 0; i < h2.length; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    let r = 'r'+ (i+1);
    a.href = '#'+ r
    h2[i].setAttribute('id', r);
    a.innerHTML = h2[i].innerText;
    li.appendChild(a)
    ul.appendChild(li)
}
contentDiv.appendChild(ul);


let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
let usersArrayDiv = document.getElementById('usersArrayDiv');
function filterUsers(array){
    usersArrayDiv.innerText = ''
    for (const user of array) {
        let userDiv = document.createElement('div');
        userDiv.innerText = JSON.stringify(user);
        usersArrayDiv.appendChild(userDiv);
    }
}
filterUsers(usersWithAddress)


let cbox1 = document.formCbox.cbox1;
let cbox2 = formCbox.cbox2;
let cbox3 = formCbox.cbox3;

cbox1.onclick=()=>{
    cbox1.checked ?
        filterUsers(usersWithAddress.filter(value => !value.status))
        :filterUsers(usersWithAddress)
}
// 2й - оставляет старше 29 лет включительно
cbox2.onclick=()=>{
    cbox2.checked? filterUsers(usersWithAddress.filter(value => value.age>29))
        : filterUsers(usersWithAddress)
}

// 3й - оставляет тех у кого город киев
cbox3.onclick=()=>{
    cbox3.checked?
        filterUsers(usersWithAddress.filter(value => value.address.city === 'Kyiv'))
        : filterUsers(usersWithAddress)
}
