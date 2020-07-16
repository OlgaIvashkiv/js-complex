// Створити функцію конструктор для об'єкту який описує теги
function Tag(titleOfTag,action,titleOfAttr1,actionOfAttr1,titleOfAttr2,actionOfAttr2, ) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = [
        {titleOfAttr: titleOfAttr1, actionOfAttr: actionOfAttr1},
        {titleOfAttr: titleOfAttr2, actionOfAttr: actionOfAttr2},
    ];

}

let a = new Tag('a', '<a> предназначен для создания ссылок','href',
    'Задает адрес документа, на который следует перейти',
    'target','Имя окна или фрейма, куда браузер будет загружать документ')
console.log(a);

let div = new Tag('div', ' <div> является блочным элементом', 'align',
    'Задает выравнивание содержимого тега <div>', 'title',
    'Добавляет всплывающую подсказку к содержимому');
console.log(div);

let h1 = new Tag('h1','тег <h1> представляет собой наиболее важный заголовок первого уровня',
    'align','Определяет выравнивание заголовка',);
console.log(h1);

let span = new Tag('span','Тег <span> предназначен для определения строчных элементов документа',
    'dir','Задает направление и отображение текста — слева направо или справа налево',
    'class','Определяет имя класса');
console.log(span);

let input = new Tag('input','<input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков',
    'accept','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов',
    'value','Значение элемента');
console.log(input);

let form = new Tag('form','Связывает поле с формой по её идентификатору');
console.log(form);

let option = new Tag('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
    'disabled','Заблокировать для доступа элемент списка',
    'label','Указание метки пункта списка');
console.log(option);

let select = new Tag('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
    'form','Связывает список с формой','required','Список обязателен для выбора перед отправкой формы');
console.log(select);

//Створити класс  для об'єкту який описує теги
class Tags {
    constructor(titleOfTag,action,titleOfAttr1,actionOfAttr1,titleOfAttr2,actionOfAttr2, ){
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [
            {titleOfAttr: titleOfAttr1, actionOfAttr: actionOfAttr1},
            {titleOfAttr: titleOfAttr2, actionOfAttr: actionOfAttr2},
        ];
    }
}
let a1 = new Tags('a', '<a> предназначен для создания ссылок','href',
    'Задает адрес документа, на который следует перейти',
    'target','Имя окна или фрейма, куда браузер будет загружать документ')
console.log(a1);

let div1 = new Tags('div', ' <div> является блочным элементом', 'align',
    'Задает выравнивание содержимого тега <div>', 'title',
    'Добавляет всплывающую подсказку к содержимому');
console.log(div1);

let h11 = new Tags('h1','тег <h1> представляет собой наиболее важный заголовок первого уровня',
    'align','Определяет выравнивание заголовка');
console.log(h11);

let span1 = new Tags('span','Тег <span> предназначен для определения строчных элементов документа',
    'dir','Задает направление и отображение текста — слева направо или справа налево',
    'class','Определяет имя класса');
console.log(span1);

let input1 = new Tags('input','<input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков',
    'accept','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов',
    'value','Значение элемента');
console.log(input1);

let form1 = new Tags('form','Связывает поле с формой по её идентификатору');
console.log(form1);

let option1 = new Tags('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
    'disabled','Заблокировать для доступа элемент списка',
    'label','Указание метки пункта списка');
console.log(option1);

let select1 = new Tags('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
    'form','Связывает список с формой','required','Список обязателен для выбора перед отправкой формы');
console.log(select1);

