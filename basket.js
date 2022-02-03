"use strict";

let itemsCount = 0;

function addItem(event) {
    addItemsCount();
    addToCard(event);
}

function addItemsCount() {
    itemsCount = itemsCount + 1;
    let itemNumber = document.querySelector('.itemNumber');
    itemNumber.innerHTML = itemsCount;
};

function addToCard(event) {
    let buttonId = event.target.id;
    let infoId = "icon_info_" + buttonId.replace('btn_', '');
    let iconInfo = document.querySelector("#" + infoId);
    console.log(iconInfo);
}


let buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", addItem)
});