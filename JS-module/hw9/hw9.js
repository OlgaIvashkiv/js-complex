//Треба реалізувати свій розпорядок дня.
// Колбеками, промісами та асинк авейт.
//
// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

// function wakeUp(time, cb){
//     setTimeout(()=>{
//         time<=8.00? cb('You woke up on time') : cb('You slept too much. You are late for work')
//     },1000)
// }
//
// function eatBreakfast(eggs, cb){
//     setTimeout(()=>{
//         eggs? cb('Make omelette'): cb('You cannot go hungry')
//     },1500)
// }
//
// function brushTeeth(isWater, cb) {
//     setTimeout(()=>{
//     isWater?cb('Your teeth are clean'): cb('You are too dirty to go to work')
//     }, 500)
// }
//
// function roadToWork(fuel, cb) {
//     setTimeout(()=>{
//     fuel >= 5 ? cb ('You have enough fuel to get to work') : cb('You are out of patrol')
//     }, 2000)
// }
//
// function coffeeBreak(isBossHere, cb) {
//     setTimeout(()=>{
//     isBossHere ? cb('You can have your coffee, boss is away') : cb('Your boss looks after you!')
//     }, 500)
// }
//
// function finishWorking(workIsDone,cb) {
//     setTimeout(()=>{
//     workIsDone ? cb('Well done. You are finished') : cb('You didnt finish your work')
//     },2000)
// }
//
// function eatSupper(foodInFridge,cb) {
//     setTimeout(()=>{
//     foodInFridge ? cb('You can make some food') : cb('You have no food. Go sleep hungry')
//     },1500)
// }
//
// wakeUp(8.00, (value)=>{
//     console.log(value);
//     eatBreakfast(true, (value)=>{
//         console.log(value);
//         brushTeeth(true, (value)=> {
//             console.log(value);
//             roadToWork(10,(value)=> {
//                 console.log(value);
//                 coffeeBreak(false, (value)=> {
//                     console.log(value);
//                     finishWorking(true, (value)=> {
//                         console.log(value);
//                         eatSupper(true, (value)=> {
//                             console.log(value);
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

function wakeUp(time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            +time<=8.00? resolve('You woke up on time') : reject('You slept too much. You are late for work')
        },1000)
    })
}

function eatBreakfast(eggs){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            eggs? resolve('Make omelette'): reject('You cannot go hungry')
        },1500)
    })
}

function brushTeeth(isWater) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        isWater?resolve('Your teeth are clean'): reject('You are too dirty to go to work')
        }, 500)
    })
}

function roadToWork(fuel) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        +fuel >= 5 ? resolve ('You have enough fuel to get to work') : reject('You are out of patrol')
        }, 2000)
    })
}

function coffeeBreak(isBossHere) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        isBossHere.toLowerCase()=== 'no' ? resolve('You can have your coffee, boss is away') : reject('Your boss looks after you!')
        }, 500)
    })
}

function finishWorking(workIsDone) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
        workIsDone ? resolve('Well done. You are finished') : reject('You didnt finish your work')
        },2000)
    })
}

function eatSupper(foodInFridge) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        foodInFridge ? resolve('You can make some food') : reject('You have no food. Go sleep hungry')
        },1500)
    })
}

// wakeUp(7.45)
//     .then(value => {
//         console.log(value);
//         return eatBreakfast(true)
//     })
//     .then(value => {
//         console.log(value);
//         return brushTeeth(true)
//     })
//     .then(value => {
//         console.log(value);
//         return  roadToWork(15)
//     })
//     .then(value => {
//         console.log(value);
//         return coffeeBreak('yes')
//     })
//     .then(value => {
//         console.log(value);
//         return finishWorking(true)
//     })
//     .then(value => {
//         console.log(value);
//         return eatSupper(true)
//     })
//     .catch(reason => {
//         console.error('You fail!!!!!! ' + reason)
//     })

async function dayOfOlga() {
    try {
        let wake = await wakeUp('6.30');
        console.log(wake);
        let breakfast = await eatBreakfast(true);
        console.log(breakfast);
        let teeth = await brushTeeth(true);
        console.log(teeth);
        let road = await roadToWork(6);
        console.log(road);
        let coffee = await coffeeBreak('no');
        console.log(coffee);
        let finished = await finishWorking(true);
        console.log(finished);
        let supper = await eatSupper(true);
        console.log(supper);
    }
    catch (e) {
        console.error(e)
    }
}

dayOfOlga()