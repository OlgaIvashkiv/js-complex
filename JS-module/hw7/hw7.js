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






//