let selectGlazing = document.querySelector('#glazing-select');

// display glazing options
for (i = 0;i<4;i++) {
    var option = document.createElement('option');
    option.text = glazingArr[i].itemGlazingName;
    option.value = glazingArr[i].itemGlazingValue;
    selectGlazing.add(option);
};

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


// Update gallery links
const queryString = window.location.search;

const params = new URLSearchParams(queryString);

let chosenRoll = params.get('roll');

// if(chosenRoll == "Double-chocolate") {
//     chosenRoll = "Double chocolate";
// };

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
    } else if (chosenRoll == "Double-chocolate") {
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





// Store info
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


function addToCart() {
    const glazText = document.querySelector('#glazing-select');
    
    const packText = document.querySelector('#pack-size');
    
    let detailRoll = new Roll(currentRoll.currentTag, curr.currGText, curr.currPText, currentRoll.currBasePrice);

    cartArr.push(detailRoll);

    // for(i = 0; i < cartArr.length; i++) {
    //     console.log(cartArr[i]);
    // };
    saveToLocal();
};

document.querySelector('.add').addEventListener('click', addToCart);


//Storing to local
function saveToLocal() {
    const cartArrString = JSON.stringify(cartArr);
    localStorage.setItem('storedCart', cartArrString);

    const getCartArray = localStorage.getItem('storedCart');
    const parsedCartArray = JSON.parse(getCartArray);
    console.log(parsedCartArray);
}



