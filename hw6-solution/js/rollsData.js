const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};  

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
};

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

let keepOriginal = new ItemG ("Keep Original", 0);
let sugarMilk = new ItemG ("Sugar milk", 0);
let vanillaMilk = new ItemG ("Vanilla milk", 0.5);
let doubleCho = new ItemG ("Double chocolate", 1.5);

let glazingArr = [keepOriginal, sugarMilk, vanillaMilk, doubleCho];

let size1 = new ItemP ("1", 1);
let size3 = new ItemP ("3", 3);
let size6 = new ItemP ("6", 5);
let size12 = new ItemP ("12", 10);

let sizeArr = [size1, size3, size6, size12];