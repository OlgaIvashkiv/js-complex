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
    private static count:number = 1
    id: number
    name: string
    surname: string
    habarnyk: boolean
    sizeOfHabar: number
    constructor(surname: string, name: string, weight: number, height: number,
                sizeOfHabar: number=0, habarnyk: boolean=false) {
        super(weight, height)

        // this.id =  +(Math.random() * Date.now()).toFixed();
        this.id = Deputat.count++
        this.name = name
        this.surname = surname
        this.habarnyk = habarnyk
        this.sizeOfHabar = sizeOfHabar
    }
    giveHabar(money:number){
        if (this.habarnyk && (money>10000 && money<10000000)){
            this.sizeOfHabar += money
            console.log(`Im ${this.name} ${this.surname}! Give me your money, b..`)
            return
        }
        console.log('Keep your money away from me')
        return;
    }
}

let deputat1 = new Deputat('Корнієнко', 'Олександр', 80, 180, 0, true);
deputat1.giveHabar(50000);

let deputat2 = new Deputat('Арахамія', 'Давид', 95, 185);

let deputat3 = new Deputat('Тищенко', 'Микола', 90, 190, 0, true);
deputat3.giveHabar(100000);

let deputat4 = new Deputat('Тимошенко', 'Юлія', 65, 165, 0, true);
deputat4.giveHabar(1000000);

let deputat5 = new Deputat('Соболєв', 'Сергій', 90, 190);
let deputat6 = new Deputat('Тарута', 'Сергій', 85, 182);

let deputat7 = new Deputat('Бондар', 'Віктор', 95, 180, 0, true);
deputat7.giveHabar(150000);
let deputat8 = new Deputat('Батенко', 'Тарас', 95, 180, 0, true);
deputat8.giveHabar(340000);
let deputat9 = new Deputat('Скороход', 'Анна', 95, 180, 0, true);


class Fraktsia{
    list: Deputat[]=[]
    fraktsiaName: string

    constructor(fraktsiaName: string) {
        this.fraktsiaName = fraktsiaName
    }

    getFractionName(): string {
        return this.fraktsiaName;
    }

    addDeputat(deputat:Deputat):void{
            this.list.push(deputat)

    }
    removeDeputat(deputat:Deputat):void{
        this.list = this.list.filter(dep => dep.id !== deputat.id)

    }
    tookHabar(){
        return this.list = this.list.filter(value => value.habarnyk);
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


const fraktsiaSN = new Fraktsia('SLUGA_NARODU');
fraktsiaSN.addDeputat(deputat1);
fraktsiaSN.addDeputat(deputat2);
fraktsiaSN.addDeputat(deputat3);

const fraktsiaB = new Fraktsia('BATKIVSCHYNA');
fraktsiaB.addDeputat(deputat4);
fraktsiaB.addDeputat(deputat5);
fraktsiaB.addDeputat(deputat6);

const fraktsiaFF = new Fraktsia('FOR_FUTURE');
fraktsiaFF.addDeputat(deputat8);
fraktsiaFF.addDeputat(deputat9);


console.log('--------')
console.log(fraktsiaFF)
console.log('----------------')
console.log(fraktsiaFF.tookHabar());

console.log(fraktsiaFF.sumOfHabars());


// клас Верховна рада
// поля:
//     мапа фракцій
// методи:
//     додати\видалити фракцію
//1вивести всі фракції
// 2вивести конкретну фракцію
// 3додати\видалити депутата з фракції---
// 4вивести всіх хабарників фракції---
// 5вивести найбільшого хабарника у фрації---
// 6вивести найбільшого хабарника верховної ради---
// 7вивести фсіх депутатів фракції---
// 8вивести найбільшого хабарника фракції---

class VerhovnaRada{
    fraktsiaList: Fraktsia[]=[]

    addFraktsia(fraktsia:Fraktsia):void{
        this.fraktsiaList.push(fraktsia)
    }
    removeFraktsia(fraktsia:Fraktsia){
        this.fraktsiaList = this.fraktsiaList.filter(value => value.fraktsiaName !== fraktsia.fraktsiaName);
    }
    showAllFraktions(){
        return this.fraktsiaList
    }
    showFraktion(fraktsia){
    return this.fraktsiaList.filter(value => value.fraktsiaName.toLowerCase()
        === fraktsia.toLowerCase());
    }
    addDeputat(deputat, fraktsia){
        for (const fraction of this.fraktsiaList) {
            if (fraktsia===fraction.fraktsiaName){
                fraction.list.push(deputat)
            }
        }
    }
    removeDeputat(deputat){
        for (const fraction of this.fraktsiaList) {
            fraction.list.filter()
        }
    }


}

let verhovnaRada = new VerhovnaRada();
verhovnaRada.addFraktsia(fraktsiaFF)
verhovnaRada.addFraktsia(fraktsiaSN)
verhovnaRada.addFraktsia(fraktsiaB)

verhovnaRada.addDeputat(deputat7,'FOR_FUTURE')
console.log(verhovnaRada.showAllFraktions());
verhovnaRada.removeDeputat(deputat7)