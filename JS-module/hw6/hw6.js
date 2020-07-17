//- создать массив с 20 числами.
let numbers = [21,34,56,7,90,54,67,31,93,12,43,27,2,15,72,8,3,10,17,29];
// -- при помощи метода sort и колбека  отсортировать массив.
console.log(numbers.sort((a, b) => a - b));
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
console.log(numbers.sort((a, b) => b - a));
// -- при помощи filter получить числа кратные 3
console.log(numbers.filter(value => value % 3 === 0));
// -- при помощи filter получить числа кратные 10
console.log(numbers.filter(value => value % 10 === 0));
// -- перебрать (проитерировать) массив при помощи foreach()
numbers.forEach(value => console.log(value));
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
console.log(numbers.map(value => value * 3));

//создать массив со словами на 15-20 элементов.
let array = [
    'lorem','ipsum','Dolor','sit','amet','consectetur','adipisicing', 'Elit','dolores','enim','facilis','fuga','illum','perferendis','quibusdam','rem','repudiandae','tenetur','veritatis','voluptatibus'
];
// -- отсортировать его по алфавиту в восходящем порядке.
console.log(array.map(value => value.toUpperCase()).sort());
// -- отсортировать его по алфавиту  в нисходящем порядке.
console.log(array.map(value => value.toUpperCase()).reverse());
// -- отфильтровать слова длиной менее 4х символов
console.log(array.filter(value => value.length <= 4));
// -- перебрать массив при помощи map() и получить новый
// массив в котором все значения будут со знаком "!" в конце
console.log(array.map(value => value + '!'));

//Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
console.log(users.sort(((a, b) => a.age - b.age)));
console.log(users.sort(((a, b) => b.age - a.age)));
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
console.log(users.sort(((a, b) => a.name.length - b.name.length)));
console.log(users.sort(((a, b) => b.name.length - a.name.length)));
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний
// індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив
// (первинний масив залишиться без змін)
let usersWithId = users.map((value, index) => {
        let newUser = {};
        newUser.id = index+1;
        newUser.name = value.name;
        newUser.age = value.age;
        newUser.status = value.status;
        return newUser
})
console.log(usersWithId);
console.log(users);
// - відсортувати його за індентифікатором
console.log(usersWithId.sort(((a, b) => a.id - b.id)));
