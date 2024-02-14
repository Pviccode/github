// select the meal list and price button
const mealList = document.getElementById('meal-list');
const price = document.getElementById('price');
const mealOne = document.getElementById('rice-and-stew');
const mealTwo = document.getElementById('jollof');
const mealThree = document.getElementById('ofada');
const mealFour = document.getElementById('Efo-riro');
const mealFive = document.getElementById('african-salad');
const mealSix = document.getElementById('asun');
const mealSeven = document.getElementById('moin-moin');
const mealEight = document.getElementById('ewa-agoyin');
const mealNine = document.getElementById('boli');
const mealTen = document.getElementById('akara');
const mealEleven = document.getElementById('fried-yam');
const mealTwelve = document.getElementById('nkwobi');
const mealThirteen = document.getElementById('ewa-riro');
const mealFourteen = document.getElementById('ogbono');
const mealFifteen = document.getElementById('egusi');
const mealSixteen = document.getElementById('amala-ewedu');
const mealSeventeen = document.getElementById('pepper-soup');
const mealEighteen = document.getElementById('banga-soup');
const mealNineteen = document.getElementById('edikang-ikong');
const mealTwenty = document.getElementById('afang');
const chooseAMeal = document.getElementById('choose-meal');

// function to choose meal and set price of chose meal
function chooseMeal() {
    const mealType = mealList.value;

    if (mealType === mealOne.value) {
        price.value = '#3,500';
    } else if (mealType === mealTwo.value) {
        price.value = '#2,500'
    } else if (mealType === mealThree.value) {
        price.value = '#800'
    } else if (mealType === mealFour.value) {
        price.value = '#1,300'
    } else if (mealType === mealFive.value) {
        price.value = '#2,000'
    } else if (mealType === mealSix.value) {
        price.value = '#1,500'
    } else if (mealType === mealSeven.value) {
        price.value = '#700'
    } else if (mealType === mealEight.value) {
        price.value = '#2,000'
    } else if (mealType === mealNine.value) {
        price.value = '#1,200'
    } else if (mealType === mealTen.value) {
        price.value = '#1,000'
    } else if (mealType === mealEleven.value) {
        price.value = '#1,500'
    } else if (mealType === mealTwelve.value) {
        price.value = '#4,000'
    } else if (mealType === mealThirteen.value) {
        price.value = '#1,500'
    } else if (mealType === mealFourteen.value) {
        price.value = '#2,500'
    } else if (mealType === mealFifteen.value) {
        price.value = '#2,000'
    } else if (mealType === mealSixteen.value) {
        price.value = '#3,500'
    } else if (mealType === mealSeventeen.value) {
        price.value = '#4,500'
    } else if (mealType === mealEighteen.value) {
        price.value = '#3,500'
    } else if (mealType === mealNineteen.value) {
        price.value = '#2,500'
    } else if (mealType === mealTwenty.value) {
        price.value = '#3,000'
    } else {
        price.value = '#?'
    }
}