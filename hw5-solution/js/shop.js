const cart = new Set();

class Roll {
    totelP;

    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

const default1 = new Roll("Original", "Sugar milk", 1, 2.49);
const default2 = new Roll("Walnut", "Vanilla milk", 12, 3.49);
const default3 = new Roll("Raisin", "Sugar milk", 3, 2.99);
const default4 = new Roll("Apple", "Original", 3, 3.49);

cart.add(default1);
cart.add(default2);
cart.add(default3);
cart.add(default4);

// create glazing items
class ItemG {
    itemGlazingName;
    itemGlazingValue;

    constructor(itemGlazingName, itemGlazingValue) {
        this.itemGlazingName = itemGlazingName;
        this.itemGlazingValue = itemGlazingValue;
    }
};

// create pack size items
class ItemP {
    itemPackSize;
    itemPackValue;

    constructor(packSize, packValue) {
        this.itemPackSize = packSize;
        this.itemPackValue = packValue;
    }
}

// set glazing and price

let original = new ItemG ("Original", 0);
let sugarMilk = new ItemG ("Sugar milk", 0);
let vanillaMilk = new ItemG ("Vanilla milk", 0.5);
let doubleCho = new ItemG ("Double chocolate", 1.5);
let glazingArr = [original, sugarMilk, vanillaMilk, doubleCho];

let size1 = new ItemP ("1", 1);
let size3 = new ItemP ("3", 3);
let size6 = new ItemP ("6", 5);
let size12 = new ItemP ("12", 10);
let sizeArr = [size1, size3, size6, size12];

// calculate price for one item
function updateOnePrice(roll) {
    let currG = "Original";
    let currP = 1;

    for (i = 0;i<4;i++) {
        if(roll.glazing == glazingArr[i].itemGlazingName) {
            currG = glazingArr[i].itemGlazingValue;
        };
    };
    for(i = 0;i<4;i++) {
        if(roll.size == sizeArr[i].itemPackSize) {
            currP = sizeArr[i].itemPackValue;
        };
    };

    let price = (roll.basePrice + currG) * currP;
    return(price.toFixed(2));
    // console.log(price.toFixed(2));
} 

// create total price
let totalPrice = 0;

// add new roll
function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
    const newRoll = new Roll(rollType, rollGlazing, packSize, rollPrice);
    cart.add(newRoll);
    createRoll(newRoll);
};

for (const roll of cart) {
    createRoll(roll);
};

function createRoll (roll) {
    const template = document.querySelector('#cart-sum-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.cart-summ');

    const cartRightList = document.querySelector('.cart-right');
    cartRightList.prepend(roll.element);

    const removeBtn = document.querySelector('.cart-rem');
    removeBtn.addEventListener('click', () => {
        deleteRoll(roll);
    });

    updateRollList(roll);
};

function updateRollList(roll) {
    const cartImg = document.querySelector('.cart-img');
    const setRight = document.querySelector('.set-right');
    let summText = document.createElement('p');
    summText.className = "summ-text";
    let summP = document.createElement('p');
    summP.className = "summ-price";
    setRight.prepend(summP);
    setRight.prepend(summText);

    const imgURL = "products/"+roll.type.toLowerCase()+"-cinnamon-roll.jpg";
    cartImg.src = imgURL;
    summText.innerText = roll.type + " Cinnamon Roll" + '\n' + "Glazing: " + roll.glazing + '\n' + "Pack Size: " + roll.size;
    let priceOne = updateOnePrice(roll);
    summP.innerText = "$ " + priceOne;
    totalPrice += parseFloat(priceOne);

    updatePriceAll();
};

function deleteRoll(roll) {
    if(cart.size == 0) {
        return;
    };
    const priceOne = updateOnePrice(roll);
    totalPrice -= parseFloat(priceOne);
    roll.element.remove();
    cart.delete(roll);
    updatePriceAll();
}

function updatePriceAll() {
    const totalText = document.querySelector('.total-price');
    if(cart.size == 0) {
        totalText.innerText = "$ 0";
    } else {
        totalText.innerText = "$ " +  totalPrice.toFixed(2);
    }
}