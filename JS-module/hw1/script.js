//  1
let a = 'hello';
console.log(a);
document.write(a);

let b = 'owu';
console.log(b);
document.write(b);

let c = 'com';
console.log(c);
document.write(c);

let d = 'ua';
console.log(d);
document.write(d);

let e = '1';
console.log(e);
document.write(e);

let f = '10';
console.log(f);
document.write(f);

let g = '-999';
console.log(g);
document.write (g);

let h = '123';
console.log(h);
document.write(h);

let i = '3.14';
console.log(i);
document.write(i);

let j = '2.7';
console.log(j);
document.write(j);

let k = '16';
console.log(k);
document.write(k);

let l = 'true';
console.log(l);
document.write(l);

let m = 'false';
console.log(m);
document.write(m);

//  2
a = 'a1'
console.log(a);
document.write(a);

b = 'b1';
console.log(b);
document.write(b);

c = 'c1';
console.log(c);
document.write(c);

d = 'd1';
console.log(d);
document.write(d);

e = 'e1';
console.log(e);
document.write(e);

f = 'f1';
console.log(f);
document.write(f);

g = 'g1';
console.log(g);
document.write(g);

h = 'h1';
console.log(h);
document.write(h);

i = 'i1';
console.log(i);
document.write(i);

j = 'j1';
console.log(j);
document.write(j);

k = 'k1';
console.log(k);
document.write(k);

l = 'l1';
console.log(l);
document.write (l);

m = 'm1';
console.log(m);
document.write(m);

//  3
const num1 = 5;
console.log(num1);
document.write(num1);

const num2 = 15;
console.log(num2);
document.write(num2);

const num3 = 25;
console.log(num3);
document.write(num3);

const st1 = 'hello world';
console.log(st1);
document.write(st1);

const st2 = 'my name';
console.log(st2);
document.write(st2);

const st3 = 'olga';
console.log(st3);
document.write(st3);

//  4
let username = prompt('Введи Имя');
let surname = prompt('Введи фамилию');
let patronymic = prompt('Введи отчество');
console.log(username + ' ' + surname  + ' ' + patronymic);
document.write(username + ' ' + surname  + ' ' + patronymic);

//  5
let person = username + ' ' + surname  + ' ' + patronymic;
console.log(person);
document.write(person);

//  6
let momName = prompt('Введи Имя мамы');
let momSurname = prompt('Введи фамилию мамы');
let momPatronymic = prompt('Введи отчество мамы');
console.log(momName + ' ' + momSurname + ' ' + momPatronymic);
document.write(momName + ' ' + momSurname + ' ' + momPatronymic);

let dadName = prompt('Введи Имя папы');
let dadSurname = prompt('Введи фамилию папы');
let dadPatronymic = prompt('Введи отчество папы');
console.log(dadName + ' ' + dadSurname + ' ' + dadPatronymic);
document.write(dadName + ' ' + dadSurname + ' ' + dadPatronymic);

let personMom = momName + ' ' + momSurname + ' ' + momPatronymic;
let personDad = dadName + ' ' + dadSurname + ' ' + dadPatronymic;
console.log(personMom + ' ' + personDad);


//  7
let number1 = +prompt('Введи первое число');
console.log(number1);

let number2 = +prompt('Введи второе число');
console.log(number2);

let number3 = +prompt('Введи третье число');
console.log(number3);

//  8
let enterNum1 = prompt('Enter number 1');
let enterNum2 = prompt('Enter number 2');
let enterNum3 = prompt('Enter number 3');
let enterNum4 = prompt('Enter number 4');

let resultOfParseInt1 = parseInt(enterNum1);
let resultOfParseInt2 = parseInt(enterNum2);
let resultOfParseInt3 = parseInt(enterNum3);
let resultOfParseInt4 = parseInt(enterNum4);

let result = resultOfParseInt1+resultOfParseInt2+resultOfParseInt3+resultOfParseInt4;
console.log(result);

//  9
let floatNo1 = prompt('Enter float number 1');
let floatNo2 = prompt('Enter float number 2');
let floatNo3 = prompt('Enter float number 3');

let resultOfParseFloat1 = parseFloat(floatNo1);
let resultOfParseFloat2 = parseFloat(floatNo2);
let resultOfParseFloat3 = parseFloat(floatNo3);

let resultFloat = resultOfParseFloat1+resultOfParseFloat2+resultOfParseFloat3;
console.log(resultFloat);

//  10
let floatNum1 = +prompt('Enter Float number1');
let floatNum2 = +prompt('Enter Float number2');
let floatNum3 = +prompt('Enter Float number2');

let newNum1 = Math.round(floatNum1);
let newNum2 = Math.round(floatNum2);
let newNum3 = Math.round(floatNum3);

console.log(newNum1+newNum2+newNum3);

let no1 = +prompt('Enter some number1');
let no2 = +prompt('Enter some number2');
console.log(Math.pow(no1, no2));

//  12
let a11 = 100;
console.log(typeof a11);

let b11 = '100';
console.log(typeof b11);

let c11 = true;
console.log(typeof c11);

let d11 = undefined;
console.log(typeof d11);

//  13
console.log(5<6);
console.log(5>6);
console.log(5==6);
console.log(5>=6);
console.log(10==10);
console.log(10===10);
console.log(10<10);
console.log(10>10);
console.log(10!=10);
console.log(123>123);
console.log(123==123);

// 14
console.log(132 > 100 && 45 < 12 ); //F
console.log(34 > 33 && 23 < 90 ); //T
console.log(99 > 100 && 45 > 12 ); //F
console.log(132 > 100 || 45 < 12 ); //T
console.log(111 > 11 || 45 < 111 ); //T
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); //T
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); //T
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); //F
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); //T
console.log(!!'-1'); //T
console.log(!!-1); //T
console.log(!!'0'); //T
console.log(!!'null'); //T
console.log(!!'undefined'); //T
console.log(!!(3/'owu')); //F
console.log((111 > 11 || 45 < 111) ||  !!'0'); //T
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); //F

// Class 1
let str = 'Привет';
let num = 123;
let flag = true;
let txt = 'true';

console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

//        Class 2
let a1111 = 5 + 3;
let a2222 = 5 - 3;
let a3333 = 5 * 3;
let a4444 = 5 / 3;
let a5555 = 5 % 3;

console.log(a1111);
console.log(a2222);
console.log(a3333);
console.log(a4444);
console.log(a5555);

//Class 3
let a21 = 5 % 3;
let a22 = 3 % 5;
let a23 = 5 + '3';
let a24 = '5' - 3;
let a25 = 75 + 'кг';
console.log(a21);
console.log(a22);
console.log(a23);
console.log(a24);
console.log(a25);


//Class 4
let height = 23;
let width = 10;

let s = 0.5*(height*width);
console.log(s);

// Class 5
let heightC = 10;
let dC = 4;

let v = heightC*dC;
console.log(v);

//   Class 6
let side1 = 3;
let side2= 4;

let kq = Math.sqrt(Math.pow(side1,2)+Math.pow(side2,2));
console.log(kq);

//  Class 7
let str111 = 'Hello world';
document.write(str111);
console.log(str111);

// Class 8
let yourName = 'Olga \n';
let yourSurname = 'Ivashkiv \n';
let yourFathersName = 'Borysivna \n';
let yourAge = '26 \n';
let yourHobby = 'JS \n';

alert(yourName+yourSurname+yourFathersName+yourAge+yourHobby);

// Class 9
let str1 = 'Кто ';
let str2 = 'ты ';
let str3 = 'такой?';
let concatenation = (str1 + str2 + str3);
document.write(concatenation);


// Class 10
let strz = "20";
let az = 5;
document.write(strz + az + "<br/>");
document.write(strz - az + "<br/>");
document.write(strz * "2" + "<br/>");
document.write(strz / 2 + "<br/>");

//        Class 11
console.log(parseInt("3.14"));
console.log(parseInt("-7.875"));
console.log(parseInt("435"));
console.log(parseInt("Вася"));

//        Class 12
let strx = prompt("Enter something", "ho-ho")
console.log(strx);

//        Class 13
let q = prompt('Enter number1');
let q1 = prompt('enter number2');

alert(q*q1);

//        Class 14
let userNameX = prompt('Enter name');
let userSurnameX = prompt('Enter Surname');
let userAgeX = prompt('Enter age');


alert('Доброго вечера' + ' ' + (userNameX + ' ' + userSurnameX)+(', мои поздравления что вам ')+(userAgeX));

// Additional 1
let n1 = +prompt('Enter number1');
let n2 = +prompt('Enter number2');
let n3 = +prompt('Enter number3');

if (n1>n2 && n2>n3){
    console.log(n1,n2,n3)
}
else if (n1>n3 && n3>n2) {
    console.log (n1,n3,n2);
}
else if (n2>n1 && n1>n3) {
    console.log (n2,n1,n3);
}
else if (n2>n3 && n3>n1) {
    console.log (n2,n3,n1);
}
else if (n3>n1 && n1>n2) {
    console.log (n3,n1,n2);
}
else {
    console.log (n3,n2,n1);
}

// Additional 2
let color = prompt('color');
if (color === 'green') {
    console.log('go!');
}
else if (color === 'yellow') {
    console.log('wait');
}
else if (color === 'red'){
    console.log('stop');
}
else {
    console.log('do whatever');
}

// Additional 3
let isRoadClear = confirm('Машины есть?');
console.log(isRoadClear);

let colour = prompt('Цвет?');
if (colour === 'зеленый' && isRoadClear) {
    console.log('иди!');
}
else if (colour === 'зеленый' && !isRoadClear) {
    console.log('подожди пока нарушители проедут');
}
else if (colour === 'желтый' && isRoadClear) {
    console.log('все равно жди');
}
else if (colour === 'желтый' && !isRoadClear) {
    console.log('жди');
}
else if (colour === 'красный' && isRoadClear) {
    console.log('стой все равно');
}
else if (colour === 'красный' && !isRoadClear) {
    console.log('стой и жди');
}
else {
    console.log('делай что хочешь');
}