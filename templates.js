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

function basketDishTemplate(item) {
    return `
            <div class="basket-card">
                <h3>${myDishes[item].name}</h3>
                <div class="quantity">
                    <i class="fa-solid fa-minus" onclick="removeOneFromBasket(${item})"></i>
                    <p>${myDishes[item].amount}</p>
                    <i class="fa-solid fa-plus" onclick="addOneToBasket(${item})"></i>
                    <p>${myDishes[item].price}</p>
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