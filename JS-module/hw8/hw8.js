// Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

let textarea1 = document.getElementById('textarea1');
textarea1.oninput=()=>{
    localStorage.setItem('text',textarea1.value)
}
textarea1.value = localStorage.getItem('text');

//- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
let form1 = document.form1;
form1.oninput=()=>{
    for (const element of form1) {
        if (element.type === 'checkbox' ||element.type === 'checkbox' ){
            element.checked? element.value = true : element.value = false
        }
        localStorage.setItem(element.name,element.value)
    }
}

function getLSInputData(form) {
    for (const element of form) {
        if (localStorage.hasOwnProperty(element.name)){
            element.value = localStorage.getItem(element.name)
            if (element.value === 'true' || element.value === 'on' ){
                element.setAttribute('checked','checked')
            }
        }
    }
}

getLSInputData(form1);

//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются"
// (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let textarea2 = document.getElementById('textarea2');
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let saveBtn = document.getElementById('saveBtn');

saveBtn.onclick=()=>{
    localStorage.setItem(localStorage.length+1,textarea2.value);
}

btnLeft.onclick=()=>{
    btnRight.style.visibility = 'visible';
    let index = 0;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)){
            if (localStorage.getItem(key) === textarea2.value){
                index=key
            }
        }
    }
    if (index==='1'){
        btnLeft.style.visibility = 'hidden';
        return
    }
    textarea2.value = localStorage.getItem(index-1);
}

btnRight.onclick=()=>{
    btnLeft.style.visibility = 'visible';
    let index = 0;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)){
            if (localStorage.getItem(key) === textarea2.value){
                index = key;
            }
        }
    }
    if (index = localStorage.toString()){
        btnRight.style.visibility = 'hidden'
        return
    }
    textarea2.value = localStorage.getItem(+index+1)
}
//Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
let contactForm = document.forms.contactForm;
let btnSave = document.getElementById('btnSave');

const usersArray = 'USERS_ARRAY';
let tempUser = {};
let contactDiv = document.getElementById('contactDiv');

btnSave.onclick = (ev)=>{
    let user = {...tempUser};
    tempUser = {};
    for (const formElement of contactForm) {
        if (formElement.name){
            user[formElement.name] = formElement.value;
        }
    }if (!user.id){
        user.id = new Date().getTime()
    }
    saveUser(user)
}

function saveUser(user){
    if (localStorage.hasOwnProperty(usersArray)){
        let arrayUsers = JSON.parse(localStorage.getItem(usersArray));
        let find = arrayUsers.find(value => value.id === user.id);
        if (find){
            let filter = arrayUsers.filter(value => value.id !== user.id);
            filter.push(user);
            localStorage.setItem(usersArray, JSON.stringify(filter));
        }else{
            arrayUsers.push(user)
            localStorage.setItem(usersArray, JSON.stringify(arrayUsers))
        }
    }else{
        localStorage.setItem(usersArray, JSON.stringify([user]))
    }
}

getContactFromLS()
function getContactFromLS() {
    if (localStorage.hasOwnProperty(usersArray)){
        let array = JSON.parse(localStorage.getItem(usersArray));
        for (const user of array) {
            contactDiv.appendChild(generateContact(user));
        }
    }
}

function generateContact(user) {
    let userDiv = document.createElement('div');
    let flag = true
    for (const key in user) {
        if(flag){
            let h3 = document.createElement('h3');
            h3.innerText = key + ':'+ user[key];
            userDiv.appendChild(h3)
            flag=false;
        }else{
            let p = document.createElement('p');
            p.innerText = key + ':'+ user[key];
            userDiv.appendChild(p)
        }
    }
    userDiv.style = 'width: 300px'
    let b1 = document.createElement('button');
    let b2 = document.createElement('button');
    b1.innerText = 'Edit'
    b2.innerText = 'Delete'

    b1.onclick =()=>{
        editUser(user.id)
    }
    b2.onclick=()=>{
        deleteUser(user.id);
    }

    userDiv.appendChild(b1);
    userDiv.appendChild(b2);

    return userDiv
}

function deleteUser(id) {
    let user = JSON.parse(localStorage.getItem(usersArray));
    let filter = user.filter(value => value.id !== id);
    localStorage.setItem(usersArray, JSON.stringify(filter));
    location.reload()
}

function editUser(id) {
    let parsed = JSON.parse(localStorage.getItem(usersArray));
    let user = parsed.find(value => value.id === id);
    for (const formElement of contactForm) {
        if (formElement.name){
            for (const key in user) {
                if (formElement.name === key){
                    formElement.value = user[key]
                }
            }
        }
    }
    tempUser=user;
}

