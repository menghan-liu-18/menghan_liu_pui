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


// Update gallery links
const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const chosenRoll = params.get('roll');

const baseNumber = document.querySelector(".conclu-text");

const currentRoll = {
    currentTag: chosenRoll,
    currName: "Original cinnamon roll",
    currBasePrice: 2.49,
    currFile: "original-cinnamon-roll.jpg",
}

for (var key in rolls) {
    if (chosenRoll == key) {
        currentRoll.currBasePrice = rolls[key].basePrice;
        currentRoll.currFile = rolls[key].imageFile;
    } else if (chosenRoll == "Double chocolate") {
        currentRoll.currBasePrice = 3.99;
        currentRoll.currFile = "double-chocolate-cinnamon-roll.jpg";
    }
};

// update name
const subTitle = document.querySelector('#product-name');
if(currentRoll.currentTag == null) {
    subTitle.innerText = "Original cinnamon roll";
} else {
    subTitle.innerText = currentRoll.currentTag + " cinnamon roll";
}

// update image
const proImage = document.querySelector('.detail-img');
proImage.src = "products/" + currentRoll.currFile;

// write the current 
const base = document.querySelector(".conclu-text");
base.innerText = '$ ' + currentRoll.currBasePrice.toString();
