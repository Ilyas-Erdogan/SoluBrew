let cupSizes = [
    "Short",
    "Tall",
    "Grande",
    "Venti"
];

let syrupOptions = [
    "Blossoming Rose Syrup",
    "Caramel Syrup",
    "Chestnut Praline Syrup",
    "Cinnamon Dolce Syrup",
    "Classic Syrup",
    "Gingerbread Syrup",
    "Hazelut Syrup",
    "Raspberry Syrup",
    "Sugar Free Cinnamon Dolce Syrup",
    "Sugar Free Vanilla Syrup",
    "Toffee Nut Syrup",
    "Vanilla Syrup"
    ];

let foamAmountOptions = [
    "None",
    "Light",
    "Regular",
    "Extra"
];

let milkOptions = [
    "Breve (Half & Half)",
    "Soy Beverage",
    "Oat Beverage",
    "Eggnog",
    "Nonfat Milk",
    "Coconut Beverage",
    "Whole Milk",
    "Heavy Cream",
    "2% Milk",
    "Lactose-Free",
    "Almond Beverage"
];

milkTemp = [
    "Steamed",
    "Exra Hot",
    "Warm"
];

function getRandomInt(max,min=0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function generateSize() {
    let size = document.getElementById('size')
    size.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + cupSizes[getRandomInt(cupSizes.length)];
}

function generateFoamAmount() {
    let foam_amount = document.getElementById('foam');
    foam_amount.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + foamAmountOptions[getRandomInt(foamAmountOptions.length)];
}

function generateNumEspressoShots() {
    let espresso_shots = document.getElementById('espresso-shots');
    espresso_shots.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;${getRandomInt(6,1)} Shots`;
}

function generateMilkType() {
    let milk_type = document.getElementById('milk-type');
    milk_type.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + milkOptions[getRandomInt(milkOptions.length)];
}

function generateMilkTemp() {
    let milk_temp = document.getElementById('milk-temp');
    milk_temp.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp" + milkTemp[getRandomInt(milkTemp.length)];
}


function generateEverything() {
    generateSize();
    generateFoamAmount();
    generateNumEspressoShots();
    generateMilkType();
    generateMilkTemp();
}
