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

let keepOriginal = new ItemG ("Keep original", 0);
let sugarMilk = new ItemG ("Sugar milk", 0);
let vanillaMilk = new ItemG ("Vanilla milk", 0.5);
let doubleCho = new ItemG ("Double chocolate", 1.5);

let glazingArr = [keepOriginal, sugarMilk, vanillaMilk, doubleCho];

let selectGlazing = document.querySelector('#glazing-select');

// display glazing options
for (i = 0;i<4;i++) {
    var option = document.createElement('option');
    option.text = glazingArr[i].itemGlazingName;
    option.value = glazingArr[i].itemGlazingValue;
    selectGlazing.add(option);
};

let size1 = new ItemP ("1", 1);
let size3 = new ItemP ("3", 3);
let size6 = new ItemP ("6", 5);
let size12 = new ItemP ("12", 10);

let sizeArr = [size1, size3, size6, size12];

let selectSize = document.querySelector('#pack-size');

// display pack size options
for (i = 0;i<4;i++) {
    var option = document.createElement('option');
    option.text = sizeArr[i].itemPackSize;
    option.value = sizeArr[i].itemPackValue;
    selectSize.add(option);
};

// the current one
const curr = {
    currGText: "Keep Original",
    currGlaze: 0,
    currPText: "1",
    currPack: 1,
};

function glazingChange (element) {
    const priceChange = element.value;
    curr.currGlaze = Number(priceChange);
    const text = element[element.selectedIndex].text;
    curr.currGText = text;
    
    updatePrice();
};

function packChange (element) {
    const text = element[element.selectedIndex].text;
    const packPrice = element.value;
    curr.currPack = Number(packPrice);
    curr.currPText = text;

    updatePrice();
}

// Update the price
function updatePrice() {
    let price = (currentRoll.currBasePrice + curr.currGlaze) * curr.currPack;

    const concluText = document.querySelector('.conclu-text');

    concluText.innerText = '$ ' + price.toFixed(2);
};

let cartArr = [];

// Store info
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
};

function addToCart() {
    const glazText = document.querySelector('#glazing-select');
    
    const packText = document.querySelector('#pack-size');
    
    let detailRoll = new Roll(currentRoll.currentTag, curr.currGText, curr.currPText, currentRoll.currBasePrice);

    cartArr.push(detailRoll);

    for(i = 0; i < cartArr.length; i++) {
        console.log(cartArr[i]);
    };
};

document.querySelector('.add').addEventListener('click', addToCart);
