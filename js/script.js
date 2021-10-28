const BUDGET = document.querySelector('.budget');
const FOOD = document.querySelector('.food');
const PHARMACY_S = document.querySelector('.pharm1');
const COMMUNAL_S = document.querySelector('.comm1');
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
    countBudget();
    countFood();
    countPharmacyS();
    countCommunalS();
    countClothes();
    countSchool();
    countHospital();
    countPet();
    countUnexpected();
    countEconomy();
}


function onGetDataClick() {
    budgetData.textContent = localStorage.getItem('budget');
    foodData.textContent = localStorage.getItem('food');
    pharmSdata.textContent = localStorage.getItem('pharm1');
    communalSdata.textContent = localStorage.getItem('comm1');
    clothesData.textContent = localStorage.getItem('clothes');
    schoolData.textContent = localStorage.getItem('school');
    hospitalData.textContent = localStorage.getItem('hospital');
    petData.textContent = localStorage.getItem('pet');
    unexpectedData.textContent = localStorage.getItem('unexpected');
    economy.textContent = localStorage.getItem('economy');
}

function onClearDataClick() {
    if (confirm('Данные удаляются навсегда. Подтвердите выполнение')) {
        localStorage.clear();
        budgetData.textContent = "";
        foodData.textContent = "";
        pharmSdata.textContent = "";
        pharmXdata.textContent = "";
        communalSdata.textContent = "";
        communalXdata.textContent = "";
        clothesData.textContent = "";
        schoolData.textContent = "";
        hospitalData.textContent = "";
        catData.textContent = "";
        unexpectedData.textContent = "";
        economy.textContent = "";
    }
    return;
}

function countBudget() {
    if (localStorage.getItem('budget') !== null && BUDGET.value !== '') {
        let newBudget = parseFloat(BUDGET.value) + parseFloat(localStorage.getItem('budget'));
        localStorage.setItem('budget', newBudget);
        budgetData.textContent = localStorage.getItem('budget');
        BUDGET.value = '';
    } else if (localStorage.getItem('budget') !== null && BUDGET.value === '') {
        let newBudget = localStorage.getItem('budget');
        localStorage.setItem('budget', newBudget);
        budgetData.textContent = localStorage.getItem('budget');
    } else if (localStorage.getItem('budget') === null && BUDGET.value === '') {
        localStorage.setItem('budget', 0);
        budgetData.textContent = localStorage.getItem('budget');
    } else if (localStorage.getItem('budget') === null && BUDGET.value !== '') {
        localStorage.setItem('budget', BUDGET.value);
        budgetData.textContent = localStorage.getItem('budget');
        BUDGET.value = '';
    }
}

function countFood() {
    if (localStorage.getItem('food') !== null && FOOD.value !== '') {
        let newFood = parseFloat(FOOD.value) + parseFloat(localStorage.getItem('food'));
        localStorage.setItem('food', newFood);
        foodData.textContent = localStorage.getItem('food');
        FOOD.value = '';
    } else if (localStorage.getItem('food') !== null && FOOD.value === '') {
        let newFood = localStorage.getItem('food');
        localStorage.setItem('food', newFood);
        foodData.textContent = localStorage.getItem('food');
    } else if (localStorage.getItem('food') === null && FOOD.value === '') {
        localStorage.setItem('food', 0);
        foodData.textContent = localStorage.getItem('food');
    } else if (localStorage.getItem('food') === null && FOOD.value !== '') {
        localStorage.setItem('food', FOOD.value);
        foodData.textContent = localStorage.getItem('food');
        FOOD.value = '';
    }
}

function countPharmacyS() {
    if (localStorage.getItem('pharm1') !== null && PHARMACY_S.value !== '') {
        let newPharm = parseFloat(PHARMACY_S.value) + parseFloat(localStorage.getItem('pharm1'));
        localStorage.setItem('pharm1', newPharm);
        pharmSdata.textContent = localStorage.getItem('pharm1');
        PHARMACY_S.value = '';
    } else if (localStorage.getItem('pharm1') !== null && PHARMACY_S.value === '') {
        let newPharm = localStorage.getItem('pharm1');
        localStorage.setItem('pharm1', newPharm);
        pharmSdata.textContent = localStorage.getItem('pharm1');
    } else if (localStorage.getItem('pharm1') === null && PHARMACY_S.value === '') {
        localStorage.setItem('pharm1', 0);
        pharmSdata.textContent = localStorage.getItem('pharm1');
    } else if (localStorage.getItem('pharm1') === null && PHARMACY_S.value !== '') {
        localStorage.setItem('pharm1', PHARMACY_S.value);
        pharmSdata.textContent = localStorage.getItem('pharm1');
        PHARMACY_S.value = '';
    }
}

function countCommunalS() {
    if (localStorage.getItem('comm1') !== null && COMMUNAL_S.value !== '') {
        let newComm = parseFloat(COMMUNAL_S.value) + parseFloat(localStorage.getItem('comm1'));
        localStorage.setItem('comm1', newComm);
        communalSdata.textContent = localStorage.getItem('comm1');
        COMMUNAL_S.value = '';
    } else if (localStorage.getItem('comm1') !== null && COMMUNAL_S.value === '') {
        let newComm = localStorage.getItem('comm1');
        localStorage.setItem('comm1', newComm);
        communalSdata.textContent = localStorage.getItem('comm1');
    } else if (localStorage.getItem('comm1') === null && COMMUNAL_S.value === '') {
        localStorage.setItem('comm1', 0);
        communalSdata.textContent = localStorage.getItem('comm1');
    } else if (localStorage.getItem('comm1') === null && COMMUNAL_S.value !== '') {
        localStorage.setItem('comm1', COMMUNAL_S.value);
        communalSdata.textContent = localStorage.getItem('comm1');
        COMMUNAL_S.value = '';
    }
}

function countClothes() {
    if (localStorage.getItem('clothes') !== null && CLOTHES.value !== '') {
        let newClothes = parseFloat(CLOTHES.value) + parseFloat(localStorage.getItem('clothes'));
        localStorage.setItem('clothes', newClothes);
        clothesData.textContent = localStorage.getItem('clothes');
        CLOTHES.value = '';
    } else if (localStorage.getItem('clothes') !== null && CLOTHES.value === '') {
        let newClothes = localStorage.getItem('clothes');
        localStorage.setItem('clothes', newClothes);
        clothesData.textContent = localStorage.getItem('clothes');
    } else if (localStorage.getItem('clothes') === null && CLOTHES.value === '') {
        localStorage.setItem('clothes', 0);
        clothesData.textContent = localStorage.getItem('clothes');
    } else if (localStorage.getItem('clothes') === null && CLOTHES.value !== '') {
        localStorage.setItem('clothes', CLOTHES.value);
        clothesData.textContent = localStorage.getItem('clothes');
        CLOTHES.value = '';
    }
}
function countSchool() {
    if (localStorage.getItem('school') !== null && SCHOOL.value !== '') {
        let newSchool = parseFloat(SCHOOL.value) + parseFloat(localStorage.getItem('school'));
        localStorage.setItem('school', newSchool);
        schoolData.textContent = localStorage.getItem('school');
        SCHOOL.value = '';
    } else if (localStorage.getItem('school') !== null && SCHOOL.value === '') {
        let newSchool = localStorage.getItem('school');
        localStorage.setItem('school', newSchool);
        schoolData.textContent = localStorage.getItem('school');
    } else if (localStorage.getItem('school') === null && SCHOOL.value === '') {
        localStorage.setItem('school', 0);
        schoolData.textContent = localStorage.getItem('school');
    } else if (localStorage.getItem('school') === null && SCHOOL.value !== '') {
        localStorage.setItem('school', SCHOOL.value);
        schoolData.textContent = localStorage.getItem('school');
        SCHOOL.value = '';
    }
}
function countHospital() {
    if (localStorage.getItem('hospital') !== null && HOSPITAL.value !== '') {
        let newHospital = parseFloat(HOSPITAL.value) + parseFloat(localStorage.getItem('hospital'));
        localStorage.setItem('hospital', newHospital);
        hospitalData.textContent = localStorage.getItem('hospital');
        HOSPITAL.value = '';
    } else if (localStorage.getItem('hospital') !== null && HOSPITAL.value === '') {
        let newHospital = localStorage.getItem('hospital');
        localStorage.setItem('hospital', newHospital);
        hospitalData.textContent = localStorage.getItem('hospital');
    } else if (localStorage.getItem('hospital') === null && HOSPITAL.value === '') {
        localStorage.setItem('hospital', 0);
        hospitalData.textContent = localStorage.getItem('hospital');
    } else if (localStorage.getItem('hospital') === null && HOSPITAL.value !== '') {
        localStorage.setItem('hospital', HOSPITAL.value);
        hospitalData.textContent = localStorage.getItem('hospital');
        HOSPITAL.value = '';
    }
}
function countPet() {
    if (localStorage.getItem('pet') !== null && PET.value !== '') {
        let newPet = parseFloat(PET.value) + parseFloat(localStorage.getItem('pet'));
        localStorage.setItem('pet', newPet);
        petData.textContent = localStorage.getItem('pet');
        PET.value = '';
    } else if (localStorage.getItem('pet') !== null && PET.value === '') {
        let newPet = localStorage.getItem('pet');
        localStorage.setItem('pet', newPet);
        petData.textContent = localStorage.getItem('pet');
    } else if (localStorage.getItem('pet') === null && PET.value === '') {
        localStorage.setItem('pet', 0);
        petData.textContent = localStorage.getItem('pet');
    } else if (localStorage.getItem('pet') === null && PET.value !== '') {
        localStorage.setItem('pet', PET.value);
        petData.textContent = localStorage.getItem('pet');
        PET.value = '';
    }
}
function countUnexpected() {
    if (localStorage.getItem('unexpected') !== null && UNEXPECTED.value !== '') {
        let newUnexpected = parseFloat(UNEXPECTED.value) + parseFloat(localStorage.getItem('unexpected'));
        localStorage.setItem('unexpected', newUnexpected);
        unexpectedData.textContent = localStorage.getItem('unexpected');
        UNEXPECTED.value = '';
    } else if (localStorage.getItem('unexpected') !== null && UNEXPECTED.value === '') {
        let newUnexpected = localStorage.getItem('unexpected');
        localStorage.setItem('unexpected', newUnexpected);
        unexpectedData.textContent = localStorage.getItem('unexpected');
    } else if (localStorage.getItem('unexpected') === null && UNEXPECTED.value === '') {
        localStorage.setItem('unexpected', 0);
        unexpectedData.textContent = localStorage.getItem('unexpected');
    } else if (localStorage.getItem('unexpected') === null && UNEXPECTED.value !== '') {
        localStorage.setItem('unexpected', UNEXPECTED.value);
        unexpectedData.textContent = localStorage.getItem('unexpected');
        UNEXPECTED.value = '';
    }
}
function countEconomy() {
    let result;
    result = (parseFloat(localStorage.getItem('budget'))
        - parseFloat(localStorage.getItem('food'))
        - parseFloat(localStorage.getItem('pharm1'))
        - parseFloat(localStorage.getItem('comm1'))
        - parseFloat(localStorage.getItem('clothes'))
        - parseFloat(localStorage.getItem('school'))
        - parseFloat(localStorage.getItem('hospital'))
        - parseFloat(localStorage.getItem('pet'))
        - parseFloat(localStorage.getItem('unexpected')));

    localStorage.setItem('economy', result);
    economy.textContent = localStorage.getItem('economy');
}