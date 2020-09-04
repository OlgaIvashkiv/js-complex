// Клас людина:
//     поля:
//         вага,зріст
// Клас депутат(наслідується від людини):
// поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
// методи:
//     дати хабаря(зробити відповідні перевірки...
// якщо депутат не хабарник то щоб він відмовився,
//     або ж якщо сума хабаря надто велика то щоб він вагався
// чи брати чи ні)

// Клас фракція
// поля:
//     список депутатів
// методи:
//     додати депутата (вводимо з клави)
// видалити депутата(теж з клави)
// видалити всіх негідників які брали хабаря
// вивести найбільшого хабарника
// вивести всіх депутатів
// видалити всіх депутатів
// вивести загальну суму хабарів для фракції

// клас Верховна рада
// поля:
//     мапа фракцій
// методи:
//     додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
// вивести найбільшого хабарника фракції
//
// в майні зробити через switch меню
//     1 - Верховна рада
//         2 - Фракція
//         3 - Депутат
//         відповідно при вводі з клави певної цифри ми попадаєио в інше меню
//         якщо ми нажали 1 то нам промалюється в консолі таке меню
//         1-додати фракцію
//         2-вивести всі фракції
//         3-вивести найбільшого хабарника
//         меню робимо на свій смак



abstract class AbsHuman {
    weight: number
    height: number
    constructor(weight: number, height: number) {
        this.weight = weight
        this.height = height
    }
}

class Deputat extends AbsHuman{
    id: number
    name: string
    surname: string
    habarnyk?: boolean
    sizeOfHabar: number = 0
    constructor(surname: string, name: string, weight: number, height: number,
                sizeOfHabar: number, habarnyk?: boolean) {
        super(weight, height)

        this.id =  +(Math.random() * Date.now()).toFixed();
        this.name = name
        this.surname = surname
        this.habarnyk = habarnyk
        this.sizeOfHabar = sizeOfHabar
    }
    giveHabar(money:number){
        if (this.habarnyk && (money>10000 && money<1000000)){
            this.sizeOfHabar += money
            console.log(`Im ${this.name} ${this.surname}! Give me your money, b..`)
            return
        }
        console.log('Keep your money away from me')
        return;
    }
}

let deputat1 = new Deputat('1Корнієнко', 'Олександр', 80, 180, 0, true);
deputat1.giveHabar(50000)

let deputat2 = new Deputat('2Арахамія', 'Давид', 95, 185, 0, false);

let deputat3 = new Deputat('3Тищенко', 'Микола', 90, 190, 0, true);
deputat3.giveHabar(100000)


class Fraktsia{
    list: Deputat[]=[]

    addDeputat(deputat:Deputat):void{
            this.list.push(deputat)

    }
    removeDeputat(deputat){
        this.list = this.list.filter(dep => dep.id !== deputat.id)

    }
    tookHabar(){
        this.list = this.list.filter(value => !value.habarnyk);
    }
    maxHabar(){
       return this.list.sort((a,b)=>b.sizeOfHabar-a.sizeOfHabar)[0]
    }
    showAllDeputats(){
        return this.list
    }
    deleteAllDeputats(){
        // this.list.length=0
        this.list=[]
    }
    sumOfHabars(){
       return this.list.reduce(function(a, b) { return a + b.sizeOfHabar; }, 0);
    }
}

let fraktsia = new Fraktsia();
fraktsia.addDeputat(deputat1)
fraktsia.addDeputat(deputat2)
fraktsia.addDeputat(deputat3)

// fraktsia.tookHabar()
// console.log(fraktsia);
fraktsia.removeDeputat(deputat2)
console.log('--------')
// console.log(fraktsia.maxHabar());

console.log(fraktsia)
// console.log(fraktsia.showAllDeputats())
//fraktsia.deleteAllDeputats()
console.log('----------------')
// console.log(fraktsia)
// console.log(fraktsia.sumOfHabars());


// клас Верховна рада
// поля:
//     мапа фракцій
// методи:
//     додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
// вивести найбільшого хабарника фракції

// class VerhovnaRada{
//     map: Map
//     constructor() {
//     }
// }

// let slugaNarodu = [
//     {
//     deputatName: 'Корнієнко Олександр Сергійович',
//     habar: 50000,
//     fraktsia: EFraktsia.SLUGA_NARODU
// },
//
// {
//     deputatName: 'Арахамія Давид Георгійович',
//     habar: 1000000,
//     fraktsia: EFraktsia.SLUGA_NARODU
// },
//
// {
//     deputatName: 'Тищенко Микола Миколайович',
//     habar: 150000,
//     fraktsia: EFraktsia.SLUGA_NARODU
// }
// ];
// let batkivschuna = [
// {
//     deputatName: 'Тимошенко Юлія Володимирівна',
//     habar: 10000000,
//     fraktsia: EFraktsia.BATKIVSCHYNA
// },
//
// {
//     deputatName: 'Соболєв Сергій Владиславович',
//     habar: 400000,
//     fraktsia: EFraktsia.BATKIVSCHYNA
// },
//
// {
//     deputatName: 'Тарута Сергій Олексійович',
//     habar: 0,
//     fraktsia: EFraktsia.BATKIVSCHYNA
// }
// ];
// let forFoture = [
// {
//     deputatName: 'Бондар Віктор Васильович',
//     habar: 340000,
//     fraktsia: EFraktsia.FOR_FUTURE
// },
//
// {
//     deputatName: 'Батенко Тарас Іванович',
//     habar: 250000,
//     fraktsia: EFraktsia.FOR_FUTURE
// },
//
// {
//     deputatName: 'Скороход Анна Костянтинівна',
//     habar: 0,
//     fraktsia: EFraktsia.FOR_FUTURE
// }
// ]
//


