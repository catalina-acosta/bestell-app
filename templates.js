function dishTemplate(index) {
    return `
            <div class="dish-card">
                <div class="title">
                    <h3>${myDishes[index].name}</h3>
                    <i onclick="addToBasket(${index})" class="fa-solid fa-plus"></i>
                </div>
                <p>${myDishes[index].description}</p>
                <p class="price">${myDishes[index].price.toFixed(2)}€</p>
            </div>
        `
}

function basketDishTemplate(item) {
    return `
            <div class="basket-card">
                <h3>${myDishes[item].name}</h3>
                <div class="quantity">
                    <div class="add-remove-item">
                        <i class="fa-solid fa-minus" onclick="removeOneFromBasket(${item})"></i>
                        <p>${myDishes[item].amount}</p>
                        <i class="fa-solid fa-plus" onclick="addOneToBasket(${item})"></i>
                    </div>
                    <p>${(myDishes[item].price * myDishes[item].amount).toFixed(2)}€</p>
                    <i class="fa-solid fa-trash-can" onclick="deleteFromBasket(${item})"></i>
                </div>
            </div>
            `
}

function basketTotalTemplate(sumItems, deliveryCosts){
    return `
            <div class="basket-total">
                <div class="subtotal">
                    <p>Zwischensumme</p>
                    <p>${sumItems.toFixed(2)}€</p>
                </div>
                <div class="delivery-costs">
                    <p>Lieferkosten</p>
                    <p>${deliveryCosts.toFixed(2)}€</p>
                </div>
                <div class="total">
                    <h3>Gesamt</h3>
                    <h3>${(sumItems + deliveryCosts).toFixed(2)}€</h3>
                </div>
                <div class="order-div"><button id="orderBtn" onclick="openDialog()">bestellen</button></div>
            </div>        
        `
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