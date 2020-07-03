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

// line 24
for (let minute = 0; minute < 2; minute++) {
    for (let sec = 0; sec < 60; sec++) {
        console.log('min-' + minute +' '+'sec- ' + sec);
    }
}

//Line 25
for (let hour = 0; hour < 3; hour++) {
    for (let minute = 0; minute < 60; minute++) {
        if (hour === 2 && minute === 20){
            break;
        }
        for (let second = 0; second < 60; second++) {
            console.log('hour-' + hour + 'min-' + minute +' '+'sec-' + second);
        }
    }
}

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


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.