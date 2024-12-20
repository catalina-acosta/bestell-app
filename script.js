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

function dishTemplate(index) {
    return `
            <div class="dish-card">
                <div class="title">
                    <h3>${myDishes[index].name}</h3>
                    <i onclick="addToBasket(${index})" class="fa-solid fa-plus"></i>
                </div>
                <p>${myDishes[index].description}</p>
                <p class="price">${myDishes[index].price}€</p>
            </div>
        `
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

function basketDishTemplate(item) {
    return `
            <div class="basket-card">
                <h3>${myDishes[item].name}</h3>
                <div class="quantity">
                    <i class="fa-solid fa-minus"></i>
                    <p>${myDishes[item].amount}</p>
                    <i class="fa-solid fa-plus"></i>
                    <p>${myDishes[item].price}</p>
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>
            `
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

function basketTotalTemplate(sumItems, deliveryCosts){
    return `
            <div class="basket-total">
                <div class="subtotal">
                    <p>Zwischensumme</p>
                    <p>${sumItems}</p>
                </div>
                <div class="delivery-costs">
                    <p>Lieferkosten</p>
                    <p>${deliveryCosts}</p>
                </div>
                <div class="total">
                    <h3>Gesamt</h3>
                    <h3>${sumItems + deliveryCosts}</h3>
                </div>
            </div>        
    `
}