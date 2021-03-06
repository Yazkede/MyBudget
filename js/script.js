const BUDGET = document.querySelector('.budget');
const FOOD = document.querySelector('.food');
const PHARMACY = document.querySelector('.pharm1');
const COMMUNAL = document.querySelector('.comm1');
const MOBI = document.querySelector('.mobi');
const PROEZD = document.querySelector('.proezd');
const CLOTHES = document.querySelector('.clothes');
const SCHOOL = document.querySelector('.school');
const HOSPITAL = document.querySelector('.hospital');
const PET = document.querySelector('.pet');
const UNEXPECTED = document.querySelector('.unexpected');
const BUTTON_SAVE = document.querySelector('.field__btn-save');
const BUTTON_SHOW = document.querySelector('.field__btn-show');
const BUTTON_CLEAR = document.querySelector('.field__btn-clear');


let budgetData = document.querySelector('.field__budget-data');
let foodData = document.querySelector('.field__food-data');
let pharmSdata = document.querySelector('.field__pharmacy-s-data');
let communalSdata = document.querySelector('.field__communal-s-data');
let mobiData = document.querySelector('.field__mobi-data');
let proezdData = document.querySelector('.field__proezd-data');
let clothesData = document.querySelector('.field__clothes-data');
let schoolData = document.querySelector('.field__school-data');
let hospitalData = document.querySelector('.field__hospital-data');
let petData = document.querySelector('.field__pet-data');
let unexpectedData = document.querySelector('.field__unexpected-data');
let economy = document.querySelector('.field__economy-data');


BUTTON_SAVE.addEventListener('click', onSaveDataClick);
BUTTON_SHOW.addEventListener('click', onGetDataClick);
BUTTON_CLEAR.addEventListener('click', onClearDataClick);


function onSaveDataClick() {
    budget.count();
    food.count();
    pharmacy.count();
    communal.count();
    mobi.count();
    proezd.count();
    clothes.count();
    school.count();
    hospital.count();
    pet.count();
    unexpected.count();
    countEconomy();
    changeColor();
}


function onGetDataClick() {
    budgetData.textContent = localStorage.getItem('budget');
    foodData.textContent = localStorage.getItem('food');
    pharmSdata.textContent = localStorage.getItem('pharm1');
    communalSdata.textContent = localStorage.getItem('comm1');
    mobiData.textContent = localStorage.getItem('mobi');
    proezdData.textContent = localStorage.getItem('proezd');
    clothesData.textContent = localStorage.getItem('clothes');
    schoolData.textContent = localStorage.getItem('school');
    hospitalData.textContent = localStorage.getItem('hospital');
    petData.textContent = localStorage.getItem('pet');
    unexpectedData.textContent = localStorage.getItem('unexpected');
    economy.textContent = localStorage.getItem('economy');
    changeColor();
}


function onClearDataClick() {
    if (confirm('???????????? ?????????????????? ????????????????. ?????????????????????? ????????????????????')) {
        localStorage.clear();
        budgetData.textContent = "";
        foodData.textContent = "";
        pharmSdata.textContent = "";
        communalSdata.textContent = "";
        mobiData.textContent = "";
        proezdData.textContent = "";
        clothesData.textContent = "";
        schoolData.textContent = "";
        hospitalData.textContent = "";
        petData.textContent = "";
        unexpectedData.textContent = "";
        economy.textContent = "";
    }
    return;
}


function countEconomy() {
    let result;
    result = (parseFloat(localStorage.getItem('budget'))
        - parseFloat(localStorage.getItem('food'))
        - parseFloat(localStorage.getItem('pharm1'))
        - parseFloat(localStorage.getItem('comm1'))
        - parseFloat(localStorage.getItem('mobi'))
        - parseFloat(localStorage.getItem('proezd'))
        - parseFloat(localStorage.getItem('clothes'))
        - parseFloat(localStorage.getItem('school'))
        - parseFloat(localStorage.getItem('hospital'))
        - parseFloat(localStorage.getItem('pet'))
        - parseFloat(localStorage.getItem('unexpected')));

    localStorage.setItem('economy', result);
    economy.textContent = localStorage.getItem('economy');
}

class Subject {

    constructor(options) {
        this.class = options.class
        this.selector = options.selector
        this.data = options.data
    }

    count() {
        if (localStorage.getItem(this.class) !== null && this.selector.value !== '') {
            let newOpt = parseFloat(this.selector.value) + parseFloat(localStorage.getItem(this.class));
            localStorage.setItem(this.class, newOpt);
            this.data.textContent = localStorage.getItem(this.class);
            this.selector.value = '';
        } else if (localStorage.getItem(this.class) !== null && this.selector.value === '') {
            let newOpt = localStorage.getItem(this.class);
            localStorage.setItem(this.class, newOpt);
            this.data.textContent = localStorage.getItem(this.class);
        } else if (localStorage.getItem(this.class) === null && this.selector.value === '') {
            localStorage.setItem(this.class, 0);
            this.data.textContent = localStorage.getItem(this.class);
        } else if (localStorage.getItem(this.class) === null && this.selector.value !== '') {
            localStorage.setItem(this.class, this.selector.value);
            this.data.textContent = localStorage.getItem(this.class);
            this.selector.value = '';
        }
    }
}

const budget = new Subject({
    class: 'budget',
    selector: BUDGET,
    data: budgetData
})
const food = new Subject({
    class: 'food',
    selector: FOOD,
    data: foodData
})
const pharmacy = new Subject({
    class: 'pharm1',
    selector: PHARMACY,
    data: pharmSdata
})
const communal = new Subject({
    class: 'comm1',
    selector: COMMUNAL,
    data: communalSdata
})
const mobi = new Subject({
    class: 'mobi',
    selector: MOBI,
    data: mobiData
})
const proezd = new Subject({
    class: 'proezd',
    selector: PROEZD,
    data: proezdData
})
const clothes = new Subject({
    class: 'clothes',
    selector: CLOTHES,
    data: clothesData
})
const school = new Subject({
    class: 'school',
    selector: SCHOOL,
    data: schoolData
})
const hospital = new Subject({
    class: 'hospital',
    selector: HOSPITAL,
    data: hospitalData
})
const pet = new Subject({
    class: 'pet',
    selector: PET,
    data: petData
})
const unexpected = new Subject({
    class: 'unexpected',
    selector: UNEXPECTED,
    data: unexpectedData
})

function changeColor() {
    if (localStorage.getItem('economy') <= 0) {
        economy.classList.add('minus');
    } else {
        economy.classList.remove('minus');
    }
}