const BUDGET = document.querySelector('.budget');
const FOOD = document.querySelector('.food');
const PHARMACY_S = document.querySelector('.pharm1');
const PHARMACY_X = document.querySelector('.pharm2');
const COMMUNAL_S = document.querySelector('.comm1');
const COMMUNAL_X = document.querySelector('.comm2');
const CLOTHES = document.querySelector('.clothes');
const SCHOOL = document.querySelector('.school');
const HOSPITAL = document.querySelector('.hospital');
const CAT = document.querySelector('.cat');
const UNEXPECTED = document.querySelector('.unexpected');
const BUTTON_SAVE = document.querySelector('.field__btn-save');
const BUTTON_SHOW = document.querySelector('.field__btn-show');
const BUTTON_CLEAR = document.querySelector('.field__btn-clear');


let budgetData = document.querySelector('.field__budget-data');
let foodData = document.querySelector('.field__food-data');
let pharmSdata = document.querySelector('.field__pharmacy-s-data');
let pharmXdata = document.querySelector('.field__pharmacy-x-data');
let communalSdata = document.querySelector('.field__communal-s-data');
let communalXdata = document.querySelector('.field__communal-x-data');
let clothesData = document.querySelector('.field__clothes-data');
let schoolData = document.querySelector('.field__school-data');
let hospitalData = document.querySelector('.field__hospital-data');
let catData = document.querySelector('.field__cat-data');
let unexpectedData = document.querySelector('.field__unexpected-data');
let economy = document.querySelector('.field__economy-data');


BUTTON_SAVE.addEventListener('click', onSaveDataClick);
BUTTON_SHOW.addEventListener('click', onGetDataClick);
BUTTON_CLEAR.addEventListener('click', onClearDataClick);


function onSaveDataClick() {
    localStorage.setItem('budget', parseFloat(BUDGET.value));
    budgetData.textContent = localStorage.getItem('budget');

    countFood();
    countPharmacyS();
    countPharmacyX();
    countCommunalS();
    countCommunalX();
    countClothes();
    countSchool();
    countHospital();
    countCat();
    countUnexpected();
    countEconomy();
}


function onGetDataClick() {
    budgetData.textContent = localStorage.getItem('budget');
    foodData.textContent = localStorage.getItem('food');
}


function onClearDataClick() {
    localStorage.clear();
    budgetData.textContent = "";
}

function countFood() {
    if (localStorage.getItem('food') !== null) {
        let newFood = parseFloat(FOOD.value) + parseFloat(localStorage.getItem('food'));
        localStorage.setItem('food', newFood);
        foodData.textContent = localStorage.getItem('food');
    } else {
        localStorage.setItem('food', parseFloat(FOOD.value));
        foodData.textContent = parseFloat(FOOD.value);
    }
    let food = localStorage.getItem('food');
    return food;
}

console.log(FOOD.value)

function countPharmacyS() {
    if (localStorage.getItem('pharm1') !== null) {
        let newPharm = parseFloat(PHARMACY_S.value) + parseFloat(localStorage.getItem('pharm1'));
        localStorage.setItem('pharm1', newPharm);
        pharmSdata.textContent = localStorage.getItem('pharm1');
    } else {
        localStorage.setItem('pharm1', parseFloat(PHARMACY_S.value));
        pharmSdata.textContent = parseFloat(PHARMACY_S.value);
    }
    let pharm1 = localStorage.getItem('pharm1');
    return pharm1;
}
function countPharmacyX() {
    if (localStorage.getItem('pharm2') !== null) {
        let newPharm = parseFloat(PHARMACY_X.value) + parseFloat(localStorage.getItem('pharm2'));
        localStorage.setItem('pharm2', newPharm);
        pharmXdata.textContent = localStorage.getItem('pharm2');
    } else {
        localStorage.setItem('pharm2', parseFloat(PHARMACY_X.value));
        pharmXdata.textContent = parseFloat(PHARMACY_X.value);
    }
    let pharm2 = localStorage.getItem('pharm2');
    return pharm2;
}
function countCommunalS() {
    if (localStorage.getItem('comm1') !== null) {
        let newComm = parseFloat(COMMUNAL_S.value) + parseFloat(localStorage.getItem('comm1'));
        localStorage.setItem('comm1', newComm);
        communalSdata.textContent = localStorage.getItem('comm1');
    } else {
        localStorage.setItem('comm1', parseFloat(COMMUNAL_S.value));
        communalSdata.textContent = parseFloat(COMMUNAL_S.value);
    }
    let communal1 = localStorage.getItem('communal1');
    return communal1;
}
function countCommunalX() {
    if (localStorage.getItem('comm2') !== null) {
        let newComm = parseFloat(COMMUNAL_X.value) + parseFloat(localStorage.getItem('comm2'));
        localStorage.setItem('comm2', newComm);
        communalXdata.textContent = localStorage.getItem('comm2');
    } else {
        localStorage.setItem('comm2', parseFloat(COMMUNAL_X.value));
        communalXdata.textContent = parseFloat(COMMUNAL_X.value);
    }
    let communal2 = localStorage.getItem('communal2');
    return communal2;
}
function countClothes() {
    if (localStorage.getItem('clothes') !== null) {
        let newClothe = parseFloat(CLOTHES.value) + parseFloat(localStorage.getItem('clothes'));
        localStorage.setItem('clothes', newClothe);
        clothesData.textContent = localStorage.getItem('clothes');
    } else {
        localStorage.setItem('clothes', parseFloat(CLOTHES.value));
        clothesData.textContent = parseFloat(CLOTHES.value);
    }
    let clothes = localStorage.getItem('clothes');
    return clothes;
}
function countSchool() {
    if (localStorage.getItem('school') !== null) {
        let newSchool = parseFloat(SCHOOL.value) + parseFloat(localStorage.getItem('school'));
        localStorage.setItem('school', newSchool);
        schoolData.textContent = localStorage.getItem('school');
    } else {
        localStorage.setItem('school', parseFloat(SCHOOL.value));
        schoolData.textContent = parseFloat(SCHOOL.value);
    }
    let school = localStorage.getItem('school');
    return school;
}
function countHospital() {
    if (localStorage.getItem('hospital') !== null) {
        let newHospital = parseFloat(HOSPITAL.value) + parseFloat(localStorage.getItem('hospital'));
        localStorage.setItem('hospital', newHospital);
        hospitalData.textContent = localStorage.getItem('hospital');
    } else {
        localStorage.setItem('hospital', parseFloat(HOSPITAL.value));
        hospitalData.textContent = parseFloat(HOSPITAL.value);
    }
    let hospital = localStorage.getItem('hospital');
    return hospital;
}
function countCat() {
    if (localStorage.getItem('cat') !== null) {
        let newCat = parseFloat(CAT.value) + parseFloat(localStorage.getItem('cat'));
        localStorage.setItem('cat', newCat);
        catData.textContent = localStorage.getItem('cat');
    } else {
        localStorage.setItem('cat', parseFloat(CAT.value));
        catData.textContent = parseFloat(CAT.value);
    }
    let cat = localStorage.getItem('cat');
    return cat;
}
function countUnexpected() {
    if (localStorage.getItem('unexpected') !== null) {
        let newUnexpected = parseFloat(UNEXPECTED.value) + parseFloat(localStorage.getItem('unexpected'));
        localStorage.setItem('unexpected', newUnexpected);
        unexpectedData.textContent = localStorage.getItem('unexpected');
    } else {
        localStorage.setItem('unexpected', parseFloat(UNEXPECTED.value));
        unexpectedData.textContent = parseFloat(UNEXPECTED.value);
    }
    let unexpected = localStorage.getItem('unexpected');
    return unexpected;
}
function countEconomy() {
    let result;
    result = BUDGET.value - parseFloat(food) - parseFloat(pharm1) - parseFloat(pharm2)
        - parseFloat(communal1) - parseFloat(communal2) - parseFloat(clothes) - parseFloat(school)
        - parseFloat(hospital) - parseFloat(cat) - parseFloat(unexpected);

    localStorage.setItem('economy', result);
    budgetData.textContent = localStorage.getItem('economy');
}