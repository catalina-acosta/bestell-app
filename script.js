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
    
    for (let index = 0; index < myDishes.length; index++) {
        if (myDishes[index]["isInBasket?"] == true) {
            let itemPrice = myDishes[index].price;
            let itemAmount = myDishes[index].amount; 
            sumItems += itemPrice * itemAmount;
        }
    }

    let deliveryCosts = calcDeliveryCosts(sumItems);
    basketTotalRef.innerHTML = basketTotalTemplate(sumItems, deliveryCosts);
}

function calcDeliveryCosts(sumItems) {
    if (sumItems == 0 || sumItems > 20) {
        return 0;
    } else {
        return 5;
    }
}

function removeOneFromBasket(item) {
    myDishes[item].amount --; 
    if (myDishes[item].amount == 0) {
        myDishes[item]["isInBasket?"] = false;
    }
    renderBasket();
}

function addOneToBasket(item) {
    myDishes[item].amount ++;
    renderBasket();
}

function deleteFromBasket(item) {
    myDishes[item].amount = 0;
    myDishes[item]["isInBasket?"] = false;
    renderBasket();
}

// order button + dialog page

function openDialog() {
    let dialogRef = document.getElementById("dialog");
    dialogRef.classList.remove("d-none");
    dialogRef.innerHTML += dialogTemplate();
}

function closeDialog() {
    let dialogRef = document.getElementById("dialog");
    dialogRef.classList.add("d-none");
    dialogRef.innerHTML = "";
}

function dialogTemplate() {
    return `
            <div class="order-confirmation">
                <div class="close-button"><i class="fa-solid fa-square-xmark" onclick="closeDialog()"></i></div>
                <div class="order-information">
                    <h2>Danke für deine Bestellung!</h2>
                    <p>Lieferzeit: 25 Minuten</p>
                    <div class="avatar-container-dialog">
                        <img src="./assets/img/noodle-logo.png" id="restaurantLogo" alt="">
                    </div>
                </div>
            </div>
        `
}

// footer stylen

// check images... object-position center not working // check kochwelt

// responsivness

