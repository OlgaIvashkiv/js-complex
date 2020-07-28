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