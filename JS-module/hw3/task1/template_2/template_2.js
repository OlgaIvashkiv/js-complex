//- Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
let mainHeader = document.getElementById('main_header');
mainHeader.style.color = 'aquamarine';

// -- робить шириниу елементу ul 400 пікселів
let uls = document.getElementsByTagName('ul');
for (const ul of uls) {
    ul.style.width = '400px';
}

// -- робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (const linkElement of linkList) {
    linkElement.style.width = '50%';
}

// -- отримує текст який зберігається в елементі з класом listElement2
let listEl2 = document.getElementsByClassName('listElement2');
for (const listEl2Element of listEl2) {
    console.log(listEl2Element.innerText);
}

// -- отримує всі елементи li та змінює ім колір фону на сірий
let allLi = document.getElementsByTagName('li');
for (const li of allLi) {
    li.style.backgroundColor = 'silver';
}

// -- отримує всі елементи 'a' та додає їм клас anchor
let allA = document.getElementsByTagName('a');
for (const a of allA) {
    a.classList.add('anchor');
}

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
for (const a of allA) {
    if (a.innerText === 'link3'){
        a.style.fontSize = '40px';
    }
}

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const a of allA) {
    a.classList.add(`element_${a.innerText}`);
}

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeaders = document.getElementsByClassName('sub-header');
for (const subHeader of subHeaders) {
    subHeader.style.backgroundColor = prompt('Color?')
}

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст
// елемнту = content 2 segment . Колір отримати з prompt()
for (const subHeader of subHeaders) {
    if (subHeader.innerText === 'content 2 segment'){
    subHeader.style.backgroundColor = prompt('Color?');
    }
}

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.getElementsByClassName('content_1');
for (const content of content1) {
    content.innerText = prompt('Enter Text');
}

// -- отримати елементи p та змінити їм paddin на довільне значення
let p = document.getElementsByTagName('p');
for (const pElement of p) {
    pElement.style.padding = '40px';
}

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let text2 = document.getElementsByClassName('text2');
for (const text2Element of text2) {
    text2Element.innerText = 'Hello';
}