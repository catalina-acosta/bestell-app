function init() {
    renderDishCards();
}


function renderDishCards() {
    let mainDishRef = document.getElementById("mainDishCards");
    let appetizersRef = document.getElementById("appetizerCard");
    for (let index = 0; index < myDishes.length; index++) {
        if (myDishes[index].mainDish == true) {
            mainDishRef.innerHTML += dishTemplate(index);
        } else {
            appetizersRef.innerHTML += dishTemplate(index);
        }
    }
}

function addToBasket(index) {
    myDishes[index]["isInBasket?"] = true;
    myDishes[index].amount ++;
    renderBasket();
}

function renderBasket() {
    let basketContentRef = document.getElementById("basketContent");
    basketContentRef.innerHTML = "";
    for (let item = 0; item < myDishes.length; item++) {
        if (myDishes[item]["isInBasket?"] == true) {
            basketContentRef.innerHTML += basketDishTemplate(item);
        }
    }
    renderBasketTotal();
}

function renderBasketTotal() {
    basketTotalRef = document.getElementById("basketTotal");
    let sumItems = 0;
    let deliveryCosts = 5;

    for (let index = 0; index < myDishes.length; index++) {
        if (myDishes[index]["isInBasket?"] == true) {
            let itemPrice = myDishes[index].price;
            let itemAmount = myDishes[index].amount; 
            sumItems += itemPrice * itemAmount;
        }
    }
    basketTotalRef.innerHTML = basketTotalTemplate(sumItems, deliveryCosts);
}

function removeOneFromBasket(item) {
    myDishes[item].amount --; 
    renderBasket();
}

function addOneToBasket(item) {
    myDishes[item].amount ++;
    renderBasket();
}

function deleteFromBasket(item) {
    myDishes[item].amount = 0;
    renderBasket();
}