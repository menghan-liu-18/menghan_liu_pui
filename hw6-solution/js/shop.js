//initialize cart array
let cartArr = initializeCart();

function initializeCart() {
    let cartArr = [];
    if (localStorage.getItem('storedCart') != null) {
        const getCartArray = localStorage.getItem('storedCart');
        cartArr = JSON.parse(getCartArray);
    } else {
        cartArr = [];
    } 

    return cartArr;
}

// calculate price for one item
function updateOnePrice(roll) {
    let currG = "Keep Original";
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
// function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
//     const newRoll = new Roll(rollType, rollGlazing, packSize, rollPrice);
//     cartArr.push(newRoll);
// };

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
    if(cartArr.length == 0) {
        return;
    };
    const priceOne = updateOnePrice(roll);
    totalPrice -= parseFloat(priceOne);
    roll.element.remove();
    cartArr.splice(cartArr.indexOf(roll), 1);
    saveToLocal()
    updatePriceAll();
}

function updatePriceAll() {
    const totalText = document.querySelector('.total-price');
    if(cartArr.length == 0) {
        totalText.innerText = "$ 0";
    } else {
        totalText.innerText = "$ " +  totalPrice.toFixed(2);
    }
}


if (localStorage.getItem('storedCart') != null) {
    retrieveFromLocal();
  }

function saveToLocal() {
    const cartArrString = JSON.stringify(cartArr);
    localStorage.setItem('storedCart', cartArrString);

    const getCartArray = localStorage.getItem('storedCart');
    const parsedCartArray = JSON.parse(getCartArray);
    console.log(parsedCartArray);
}

function retrieveFromLocal() {
    const getCartArray = localStorage.getItem('storedCart');
    const cartFromLocal = JSON.parse(getCartArray);
    console.log(cartFromLocal);
    for(const roll of cartFromLocal){
        createRoll(roll);
    }
}