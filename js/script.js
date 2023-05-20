// console.clear(); // отключить если не live-сервер
// для того чтобы очистить консоль при live-сервере VS-Code 
// чтобы не показывал лишние данные у консоли разработчика chrome
// (типичный пример, расширение антивируса добавляет всякого рода лишнего информации в консоль разработчика)
// также можно фильтровать информацию в консоли разработчика изменив свойство default levels на: 
// default levels: 'false' Verbose, 'true' Info, 'true' Warnings, 'true' Errors

// Немножко ТЕОРИЙ - cвойство-аксессоры 
// свойства-аксессоры нужны либо для присвоения либо для получения каких-либо данных
// но в отличие от функции они создаются с помощью ключевых слов get и set
// getter по сути создает новый ключ со значением, никаких параметров не принимает и следовательно не может быть изменен 
/* let user = {
    name: 'John',
    surname: 'Uick',
    get fullname(){
        return `${this.name} ${this.surname}`
    },
}

console.log(user.fullname); // John Uick
console.log(user); // {name: 'John', surname: 'Uick'}

// но его невозможно изменить т.к getter не принимает каких либо параметров:
user.fullname = 'Peter Parker';
console.log(user.fullname); // John Uick
console.log(user); // {name: 'John', surname: 'Uick'} */

// setter работает в точности наоборот 
// принимает ТОЛЬКО ОДИН ПАРАМЕТР, ничего не возвращает (возвращает undefined) соответственно писать return бесполезно
// она может менять значения в объекте (если написать кусок кода который делает это - конечно!)
/* let user = {
    name: 'John',
    surname: 'Uick',
    get fullname(){
        return `${this.name} ${this.surname}`;
    },
    set fullname(value){
        [this.name, this.surname] = value.split(' ');
        // ['John', 'Uick'] = ['Peter', 'Parker'] - изменяет значения user.name и user.fullname, т.к
        // console.log([this.name, this.surname]); // (2) ['John', 'Uick']
        // console.log(value.split(' ')); // (2) ['Peter', 'Parker']

        // это код можно развернуто написать так:
        // let arr = value.split(' ')
        // console.log(arr); // (2) ['Peter', 'Parker']
        // this.name = arr[0]; // изменяет user.name
        // this.surname = arr[1]; // изменяет user.surname
    }
}

console.log(user.fullname); // John Uick
console.log(user);
// CONSOLE:
// {name: 'John', surname: 'Uick'}

user.fullname = 'Peter Parker' // обращаемся на setter
console.log(user.fullname); // Peter Parker
console.log(user);
// CONSOLE:
// {name: 'John', surname: 'Uick'} */

// ПРАКТИКА

// некая база данных из типа: объект, в котором: продукты, стоимость, калорий, количество, общая стоимость (учитывая стоимость и количество) и общая количество калорий (учитывая калорийность продукта и количество)
const product = {
    plainBurger: {
        name: 'Гамбургер простой',
        cost: 10000,
        kcall: 400,
        amount: 0,
        get summ(){
            return this.cost * this.amount;
        },
        get summkcall(){
            return this.kcall * this.amount;
        },
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        cost: 20500,
        kcall: 500,
        amount: 0,
        get summ(){
            return this.cost * this.amount;
        },
        get summkcall(){
            return this.kcall * this.amount;
        },
    },
    freshCombo: {
        name: 'FRESH COMBO',
        cost: 31900,
        kcall: 700,
        amount: 0,
        get summ(){
            return this.cost * this.amount;
        },
        get summkcall(){
            return this.kcall * this.amount;
        },
    },
};

// некая база данных из типа: объект, в котором: дополнительные продукты, стоимость и калорийность
const extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        cost: 500,
        kcall: 50,
    },
    lettuce: {
        name: 'Двойной майонез',
        cost: 300,
        kcall: 20,
    },
    cheese: {
        name: 'Сыр',
        cost: 800,
        kcall: 60,
    }

};

const btn = document.querySelectorAll('.main__product-btn'); // подключимся ко всем кнопкам добавления и удаления продукта
for (let i = 0; i < btn.length; i++) {
    // перебежим к каждой кнопке массива
    const element = btn[i];
    element.addEventListener('click', function (e) {
        // console.log(e); // [object PointerEvent]
        // это PointEvent событие, 
        // любая функция внутри метода .addEventListener() 
        // может принять в качестве аргумента (называете как хотите - аргумент) ссылку на объект [object PointerEvent],
        // И с помощью ссылки мы вызываем метод preventDefault(), который не отменяет стандартное поведение браузера.
        e.preventDefault();
        // навещали preventDefault который не дает переходит по ссылкам 
        // (т.к если посмотреть внимательно, мы работаем с ссылками <a href> - html)
        add(this) // this = element
    })
};

// [object PointerEvent].preventDefault() - это вызов метода preventDefault() объекта PointerEvent. 
// Метод preventDefault() вызывается на объекте события и используется для отмены естественного поведения события. 
// В случае с событием указателя (pointer event) метод preventDefault() используется для отмены стандартного поведения браузера при интерактивных действиях пользователя, например, для предотвращения прокрутки страницы или убирания контекстного меню.

// Объекты в JavaScript характеризуются наличием у них свойств. Свойство - это пара «ключ: значение», где ключ - это строка, а значением может быть что угодно: число, строка, булево значение, массив или даже другой объект. Если же значением ключа будет функция, то такое свойство будет называться методом  --- просто дополнительная и никому не мешающая информация :)

function add(button) {  
    // чтобы определить именно из какой секции нажата кнопка + или - , мы воспользуемся искусственным классом тега (data-) который создал сам программист, для работы с атрибутами тегов класс нам необходим методы .getAttribute(), .setAttribute(), hasAttribute() и .removeAttribute
    // button.getAttribute('name') - Вернет значение атрибута
    // button.setAttribute('name', 'value') - Добавляет атрибут и значение для него
    // button.hasAttribute('name') - Проверяет наличие атрибута (вернет true/false)
    // button.removeAttribute('name') - Удаляет атрибут
    let symbl = button.getAttribute('data-symbol');
    // console.log(symbl);
    // CONSOLE: (clicked: "button_name" button in #plainBurger=html)
    // undefined

    // чтобы определить именно в какой из трех секции была нажата кнопка "+" и "-" нам нужен метод .closest()
    // метод .closest('name') возвращает тег родителя схожий с "названием" внутри скобок, т.е он будет идти до <body> (html) пока не найдет написанный тег в скобках:
    let parent = button.closest('.main__product');
    // console.log(parent); 
    // CONSOLE: (clicked: "+" <button> in #freshBurger=html)
    // <section class="main__product" id="freshBurger">…</section>

    // получаем id этого родителя для того, чтобы работать с базой данных продуктов, а точнее с ключом amount в объекте
    // т.к название продукта в объекте (name: ...) и id секции схожи, нам нужно получить id и изменить при клике product[id].amount
    let id = parent.getAttribute('id')
    // console.log(id); // воспользовались методом .getAttribute('id') возвращающий значение атрибута
    // CONSOLE: (clicked: "button_name" <button> in #freshCombo=html)
    // freshCombo
    
    // теперь необходимо увеличивать/уменьшать значение amount из базы данных product исходя из того что нажали (+/-)
    if (symbl == '+') {
        product[id].amount++;
    }else if(product[id].amount > 0){
        // это условие для того чтобы amount не доходил до отрицательных чисел(-1, -2, -4 и т.д)
        product[id].amount--;
    }

    // ниже работаем с output - количества, штук продукта; с span - ценой продукта в суме; c span - калорией продукта в количестве
    // код для подключения к output (<output class="main__product-num">0</output>)
    let output = parent.querySelector('.main__product-num');
    // console.log(output); // <output class="main__product-num">0</output>
    // код для изменения значения output на значение amount
    output.innerHTML = product[id].amount;

    // код для изменения значения значения цены в сумов (<div class="main__product-price">…</div>)
    let productPrice = parent.querySelector('.main__product-price span');
    // console.log(productPrice); // <span>0</span>
    // код для изменения значения цены в сумов на значение summ
    productPrice.innerHTML = product[id].summ;

    // код для изменения значения значения калорий в main__product-kcall (<div class="main__product-kcall">…</div>)
    let productKcall = parent.querySelector('.main__product-kcall span');
    // console.log(productKcall); // <span>0</span>
    // код для изменения значения калорий на значение summkcall
    productKcall.innerHTML = product[id].summkcall;

};

// кусок кода для работы с дополнительными продуктами
const checkbox = document.querySelectorAll('.main__product-checkbox');
// console.log(checkbox); // NodeList(9) [label.main__product-label (+8)...]
for (let x = 0; x < checkbox.length; x++) {
    const elem = checkbox[x];
    elem.addEventListener('click', function () {  
        // preventDefault который не дает переходит по ссылкам, нам не нужнон
        // (т.к сейчас мы работаем с метками <label> - html)
        addExtraProduct(this) // this = elem
    })
};

function addExtraProduct(check) {  
    let parent = check.closest('.main__product');
    let parentId = parent.getAttribute('id');
    let checkId = check.getAttribute('data-extra');
    
    // у любого нашего checkbox тега html есть ключик checked: true/false
    // console.dir(check); // чтобы посмотреть на тег как на объект
    // ...
    // autofocus: false
    // checked: true - это ключик отвечает за то, что выбран ли (активен) этот checkbox или нет
    // childElementCount: 0
    // ...
    let checked = check.checked;
    // console.log(checked);
    // CONSOLE: (clicked: "[checkbox]Двойной майонез" <checkbox> in #main__product-check::before=html)
    // true

    product[parentId][checkId] = checked;

    if (product[parentId][checkId] === true) {
        product[parentId].cost += extraProduct[checkId].cost;
    };

    console.log(product[parentId]);
};  

// Ниже Д/З

let lvlNum = document.querySelector('.header__timer-extra');

function animationLogo() {  
    let controlNum = (lvlNum.innerHTML >= 100) ? lvlNum.innerHTML = 0 : lvlNum.innerHTML++;
    let controlTime = (lvlNum.innerHTML < 50) ? setTimeout(() => {animationLogo();}, 100) : setTimeout(() => {animationLogo();}, 200);
};

animationLogo();

// проверка на количество заказанных продуктов - не входит в программе курса Proweb
checkAmount = document.querySelector('.addCart');
checkAmount.addEventListener('click', function () {  
    console.log(`plainBurger ${product.plainBurger.amount}\nfreshBurger ${product.freshBurger.amount}\nfreshCombo ${product.freshCombo.amount}`);
});