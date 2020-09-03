// клас Верховна рада
// поля:
// масив фракцій
// методи:
// додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції

class VerhovnaRada {
    fraktsia: Array<Array<any>>
    constructor(fraktsia: Array<Array<any>>) {
        this.fraktsia = fraktsia
    }
    addRemoveFraktsia(fraktsiaName){
        if(this.fraktsia === fraktsiaName){
            this.fraktsia = null
        }

    }
    showAllFractsions(){

    }
    showFraktsia(){

    }

    removeAddDeputat(){

    }
}

interface IDeputat {
    deputatName: string
    habar: number
    fraktsia: EFraktsia
}

enum EFraktsia{
    SLUGA_NARODU = 'sluga_narodu',
    BATKIVSCHYNA = 'batkivschyna',
    FOR_FUTURE = 'for_future'
}

let slugaNarodu = [
    {
    deputatName: 'Корнієнко Олександр Сергійович',
    habar: 50000,
    fraktsia: EFraktsia.SLUGA_NARODU
},

{
    deputatName: 'Арахамія Давид Георгійович',
    habar: 1000000,
    fraktsia: EFraktsia.SLUGA_NARODU
},

{
    deputatName: 'Тищенко Микола Миколайович',
    habar: 150000,
    fraktsia: EFraktsia.SLUGA_NARODU
}
];
let batkivschuna = [
{
    deputatName: 'Тимошенко Юлія Володимирівна',
    habar: 10000000,
    fraktsia: EFraktsia.BATKIVSCHYNA
},

{
    deputatName: 'Соболєв Сергій Владиславович',
    habar: 400000,
    fraktsia: EFraktsia.BATKIVSCHYNA
},

{
    deputatName: 'Тарута Сергій Олексійович',
    habar: 0,
    fraktsia: EFraktsia.BATKIVSCHYNA
}
];
let forFoture = [
{
    deputatName: 'Бондар Віктор Васильович',
    habar: 340000,
    fraktsia: EFraktsia.FOR_FUTURE
},

{
    deputatName: 'Батенко Тарас Іванович',
    habar: 250000,
    fraktsia: EFraktsia.FOR_FUTURE
},

{
    deputatName: 'Скороход Анна Костянтинівна',
    habar: 0,
    fraktsia: EFraktsia.FOR_FUTURE
}
]



