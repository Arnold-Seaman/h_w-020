const product = {
    plainBurger: {
        name: 'Гамбургер простой',
        cost: 10000,
        kcall: 400,
        amount: 0,
        get summ() {
            return this.cost * this.amount;
        },
        get summkcall() {
            return this.kcall * this.amount;
        },
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        cost: 20500,
        kcall: 500,
        amount: 0,
        get summ() {
            return this.cost * this.amount;
        },
        get summkcall() {
            return this.kcall * this.amount;
        },
    },
    freshCombo: {
        name: 'FRESH COMBO',
        cost: 31900,
        kcall: 700,
        amount: 0,
        get summ() {
            return this.cost * this.amount;
        },
        get summkcall() {
            return this.kcall * this.amount;
        },
    },
};

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

const btn = document.querySelectorAll('.main__product-btn');
for (let i = 0; i < btn.length; i++) {
    const element = btn[i];
    element.addEventListener('click', function (e) {
        e.preventDefault();
        add(this)
    })
};

function add(button) {
    let symbl = button.getAttribute('data-symbol');
    let parent = button.closest('.main__product');
    let id = parent.getAttribute('id')
    if (symbl == '+') {
        product[id].amount++;
    } else if (product[id].amount > 0) {
        product[id].amount--;
    }
    let output = parent.querySelector('.main__product-num');
    output.innerHTML = product[id].amount;
    let productPrice = parent.querySelector('.main__product-price span');
    productPrice.innerHTML = product[id].summ;
    let productKcall = parent.querySelector('.main__product-kcall span');
    productKcall.innerHTML = product[id].summkcall;

};

const checkbox = document.querySelectorAll('.main__product-checkbox');
for (let x = 0; x < checkbox.length; x++) {
    const elem = checkbox[x];
    elem.addEventListener('click', function () {
        addExtraProduct(this)
    })
};

function addExtraProduct(check) {
    let parent = check.closest('.main__product');
    let parentId = parent.getAttribute('id');
    let checkId = check.getAttribute('data-extra');
    let checked = check.checked;
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
    let controlTime = (lvlNum.innerHTML < 50) ? setTimeout(() => { animationLogo(); }, 100) : setTimeout(() => { animationLogo(); }, 200);
};

animationLogo();
