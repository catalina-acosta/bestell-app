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
    myBasket.push(myDishes[index]);

}

// build basket counter function that counts how many of one item are in the basket. maybe if ? 