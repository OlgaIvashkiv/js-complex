// Line 1-4
let numbers = [21,7,1993,2,9];
console.log(numbers);

let str = ['olga', 'julia', 'tania', 'masha', 'sasha'];
console.log(str);

let mas = [10,20,30,40,50, 'summer', 'winter', 'autumn', 'spring', 'year', 10>5, 5>6, 12!=='21', 5=='5', 'vasya'!=='petya'];
console.log(mas);

// Line 5
let list = [];
list[0] = 'olga';
list[1] = 21;
list[2] = 2;
console.log(list);

// Line 7
for (let i = 0; i < 10; i++) {
    document.write(`<div>hello</div>`);
}

// Line 8
for (let i = 0; i < 10; i++) {
    document.write(`<div>hello - index ${i}</div>`);
}

// Line 9
let counter = 0;
while (counter<20) {
    document.write(`<h1>hi</div>`);
    counter++;
}

// Line 10
let c = 0;
while (c<20) {
    document.write(`<div>Yo - index ${c}`);
    c++;
}

// Line 11
let nList = [1,2,3,4,5,6,7,8,9,10];
console.log(nList);

// Line 12
let strList = ['a','b','c','d','e','f','g','h','i','j'];
console.log(strList);

// Line 13
let arr = [30,40,50, 'summer', 'winter', 'autumn', 'spring', 'year', 10>5, 5>6];
console.log(arr);

// Line 14, 15,16
let mass = [10,20,30,40,50, 'summer', 'winter', 'autumn', 'spring', 'year', 10>5, 5>6, 12!=='21', 5=='5', 'vasya'!=='petya'];
for (const i of mass) {
    if (typeof i === 'boolean') {
        console.log(i);

    }
}
for (const j of mass) {
    if (typeof j === 'string') {
        console.log(j);

    }
}

for (const k of mass) {
    if (typeof k === 'number') {
        console.log(k);

    }
}

// Line 17
let list2 = [];
list2[0] = 50;
list2[1] = 'summer';
list2[2] = 'winter';
list2[3] = 16;
list2[4] = 58;
list2[5] = 5>6;
list2[6] = 'hello';
list2[7] = 5>6;
list2[8] = 10<13;
list2[9] = 5>6;

for (const list2Element of list2) {
    console.log(list2Element);
}

// Line 18
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i);
}

// line 19
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i);

}

// Line 20
for (let i = 0; i < 100; i+=2) {
    console.log(i);
    document.write(i);

}

// Line 21
for (let i = 0; i < 100; i++) {
    if (i%2 === 0) {
        console.log(i);
    }

}

// Line 23
for (let i = 0; i < 100; i++) {
    if (i%2 !== 0) {
        console.log(i);
    }

}

// // line 24
// for (let minute = 0; minute < 2; minute++) {
//     for (let sec = 0; sec < 60; sec++) {
//         console.log('min-' + minute +' '+'sec- ' + sec);
//     }
// }
//
// //Line 25
// for (let hour = 0; hour < 3; hour++) {
//     for (let minute = 0; minute < 60; minute++) {
//         if (hour === 2 && minute === 20){
//             break;
//         }
//         for (let second = 0; second < 60; second++) {
//             console.log('hour-' + hour + 'min-' + minute +' '+'sec-' + second);
//         }
//     }
// }

//Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arr1 = [ 'a', 'b', 'c'];
let word1 = '';
for (let i = 0; i < arr1.length; i++) {
    word1+=arr1[i];
}
console.log(word1);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let word2 = '';
let i = 0;
while(i<arr1.length){
    word2+=arr1[i];
    i++;
}
console.log(word2);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let word3 = '';
for (const element of arr1) {
    word3+=element;
}
console.log(word3);

//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let arrayNew = [];
for (let j = 1; j<=3; j++) {
    arrayNew=arr1;
    arrayNew.push(j);
}
console.log(arrayNew);
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let numberArray = [1, 2, 3];
let reverseNumberArray = [];
for (let j = numberArray.length - 1; j >= 0; j--) {
    const item = numberArray[j];
    reverseNumberArray.push(item);
}
console.log(reverseNumberArray);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let numberArray1 = [1, 2, 3];
for (let j = 4; j <=6; j++) {
    numberArray1.push(j);
}
console.log(numberArray1);
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let numberArray2 = [1, 2, 3];
numberArray2.unshift(4,5,6);
console.log(numberArray2);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let arrayShift = ['js', 'css', 'jq'];
let shiftedItem = arrayShift.shift();
console.log(shiftedItem);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let poppedItem = arrayShift.pop();
console.log(poppedItem);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let arrayOfNumbers = [1, 2, 3, 4, 5];
console.log(arrayOfNumbers.slice(3, 5));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
let slicedArray =  arrayOfNumbers.slice(0,2);
console.log(slicedArray);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
let arrayOfNumbers1 = [1, 2, 3, 4, 5];
arrayOfNumbers1.splice(1, 2);
console.log(arrayOfNumbers1);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arrayOfNumbers2 = [1, 2, 3, 4, 5];
arrayOfNumbers2.splice(2, 0, 'a', 'b', 'c');
console.log(arrayOfNumbers2);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arrayOfNumbers3 = [1, 2, 3, 4, 5];
arrayOfNumbers3.splice(1,0,'a', 'b');
arrayOfNumbers3.splice(5,0,'c');
arrayOfNumbers3.splice(8,0,'e');
console.log(arrayOfNumbers3);
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let numbers10 = [1,2,3,4,5,6,7,8,9,10];
for (const number of numbers10) {
    if (number%2===0){
        console.log(number);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let numbers11 = [];
for (const number of numbers10) {
    numbers11.push(number);
}
    console.log(numbers11)

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let numbers12 = [];
for (let i = 0; i < numbers10.length; i++) {
    numbers12[i] = numbers10[i];
}
console.log(numbers12);

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let numbersArr = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let x = 0;
while(x<numbersArr.length){
    console.log(numbersArr);
    x++;
}

// 2. перебрати його циклом for
for (const number of numbersArr) {
    console.log(numbersArr)
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let z = 0;
while(z<numbersArr.length){
    if (z%2!==0){
        const number = numbersArr[z];
        console.log(number);
    }
    z++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < numbersArr.length; i++) {
    const number = numbersArr[i];
    if (i%2!==0){
        console.log(number);
    }

}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let q = 0;
while(q<numbersArr.length){
    const number = numbersArr[q];
    if (number%2===0){
        console.log(number);
    }
    q++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < numbersArr.length; j++) {
    const number = numbersArr[j];
    if (number%2===0){
        console.log(number);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = 0; j < numbersArr.length; j++) {
        if (numbersArr[j]%3===0){
        numbersArr[j] = 'okten';
    }
    console.log(numbersArr)
}

// 8. вивести масив в зворотньому порядку.
for (let j = numbersArr.length - 1; j >= 0; j--) {
    console.log(numbersArr[j]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
for (let i=numbersArr.length-1; i >=0; i--) {
    console.log(numbersArr[i]);

}

let jl = numbersArr.length-1;
while (jl>=0) {
    console.log(numbersArr[jl]);
    jl--
}

let k = numbersArr.length-1;
while (k>=0) {
    if (numbersArr[k]%2 !==0) {
        console.log(numbersArr[k]);
    }
    k--
}
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
let emptyArray = [];
for (let j = 1; j < 102; j++) {
    if (j%2===0){
    emptyArray.push(j);
    }
}
    console.log(emptyArray);

// - заповнити його 50 непарними числами за допомоги циклу.
let emptyArr = [];
for (let j = 1; j < 100; j++) {
    if (j%2!==0){
        emptyArr.push(j);
    }

}
console.log(emptyArr);

// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
let emptyArray1 = [];
for (let j = 0; j < 10; j++) {
    emptyArray1[j]= Math.random();
    }
console.log(emptyArray1);
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
let emptyArray2 = [];
for (let j = 0; j < 10; j++) {
    emptyArray2[j]=Math.floor(Math.random() * (732 - 8)) + 8;
}
console.log(emptyArray2);
//  2. вывести на консоль  каждый третий елемент
for (let j = 2; j < emptyArray2.length; j+=3) {
    console.log(emptyArray2[j]);
}

//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
for (let j = 2; j < emptyArray2.length; j+=3) {
    if (emptyArray2[j]%2===0){
    console.log(emptyArray2[j]);
    }
}

//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
let emptyArray3 = [];
for (let j = 2; j < emptyArray2.length; j+=3) {
    if (emptyArray2[j]%2===0){
        emptyArray3.push(emptyArray2[j]);
    }
console.log(emptyArray3);
}

//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
for (let j = 0; j < emptyArray2.length; j++) {
    if (emptyArray2[j+1]%2===0){
        console.log(emptyArray2[j]);
    }
}

//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
let check = [100,250,50,168,120,345,188];
    let sum = 0;
for (let j = 0; j < check.length; j++) {
    sum += check[j];

}
console.log(sum);
console.log(sum/check.length);

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let randomArray = [];
let randomArray5 = [];
for (let i = 0; i < 10; i++) {
    randomArray[i]=Math.floor(Math.random() * (20 - 1)) + 1;
}
console.log(randomArray);
for (let j = 0; j < randomArray.length; j++) {
    randomArray5[j]=randomArray[j]*5;
}
console.log(randomArray5);
// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.
let someArray = [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'];
let someNewArray = [];
for (let j = 0; j < someArray.length; j++) {
    if (typeof someArray[j]=== 'number'){
        someNewArray.push(someArray[j]);
    }
}
console.log(someNewArray);