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
    let iconChildren = iconInfo.children;
    let iconChildrenH3 = iconChildren[0].children[0].innerHTML;
    let iconChildrenStrong = iconChildren[2].innerHTML;
    let productCount = document.querySelector('.productCount' + infoId);
    let amount = iconChildrenStrong.replace('$', '');
    let totalAmount = document.querySelector('.productTotalRow' + infoId);
    if (productCount) {
        productCount.innerHTML = Number(productCount.innerHTML) + 1;
        totalAmount.innerHTML = Number(totalAmount.innerHTML) + Number(amount);
    } else {
        let basketItem = `<div class="basketRow">
                            <div>${iconChildrenH3}</div>
                            <div>
                                <span class="productCount${infoId}">1</span> шт.
                            </div>
                            <div>${iconChildrenStrong}</div>
                            <div>
                                <span class="productTotalRow${infoId}">${Number(amount)}</span>$
                            </div>
                        </div>`;
        let addDiv = document.querySelector('.addDiv');
        addDiv.innerHTML += basketItem;
    }
}


let buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", addItem)
});

let cartIconWrap = document.querySelector(".cartIconWrap");

cartIconWrap.addEventListener("mouseover", (event) => {
    document.querySelector(".basket").classList.remove('hidden');
});

cartIconWrap.addEventListener("mouseout", (event) => {
    document.querySelector(".basket").classList.add('hidden');
});