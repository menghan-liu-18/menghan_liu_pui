const item = {
    glazingAdd: 0,
    packAdd: 1
};

function glazingChange (element) {
    const priceChange = element.value;
    if (priceChange == "Keep original") {
        item.glazingAdd = 0;
    }

    if (priceChange == "Sugar milk") {
        item.glazingAdd = 0;
    }

    if (priceChange == "Vanilla milk") {
        item.glazingAdd = 0.5;
    }

    if (priceChange == "Double chocolate") {
        item.glazingAdd = 1.5;
    }

    updatePrice(item.glazingAdd, item.packAdd);
};

function packChange (element) {
    const packPrice = element.value;
    if (packPrice == "1") {
        item.packAdd = 1;
    }

    if (packPrice == "3") {
        item.packAdd = 3;
    }

    if (packPrice == "6") {
        item.packAdd = 5;
    }

    if (packPrice == "12") {
        item.packAdd = 10;
    }

    updatePrice(item.glazingAdd, item.packAdd);
}

function updatePrice(glazingPrice, packPrice) {
    let price = (2.49 + glazingPrice) * packPrice;

    const concluText = document.querySelector('.conclu-text');

    concluText.innerText = '$' + price.toFixed(2);
};