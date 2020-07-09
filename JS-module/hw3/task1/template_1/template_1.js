//-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName
// або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
let content = document.getElementById('content');
console.log(content.innerText);

// - отримує текст з блоку з id "rules"
let rulesId = document.getElementById('rules');
console.log(rulesId.innerText);

// - замініть текст параграфа з id 'content' на будь-який інший
content.innerText = 'Hello people';

// - замініть текст параграфа з id 'rules' на будь-який інший
rulesId.innerText = 'FC rules';

// - змініть кожному елементу колір фону на червоний
let allElements = document.body.getElementsByTagName('*');
for (const element of allElements) {
element.style.backgroundColor = 'red';
}

// - змініть кожному елементу колір тексту на синій
for (const element of allElements) {
    element.style.color = 'blue';
}

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rulesId.classList);

// - отримати всі елементи з класом fc_rules
let fcRules = document.getElementsByClassName('fc_rules');

// - поміняти колір тексту у всіх елементів fc_rules на червоний
for (const rule of fcRules) {
    rule.style.color = 'red';
}