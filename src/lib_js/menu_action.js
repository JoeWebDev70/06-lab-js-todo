
import {menuContent} from "./menu_create.js";
import {menuContainer} from "./menu_create.js";
import {menuComponent} from "./menu_create.js";
const btnsOption = document.querySelectorAll(".btn_options");
const listOptionContent = ["On list", "Delete selection", "Delete All"];
const taskOptionContent = ["On task", "Modify", "Delete"];


btnsOption.forEach(function(btnOption){
    btnOption.addEventListener("click", function(e){
        displayMenu(btnOption, listOptionContent);
        menuContainer.classList.toggle("active");  
    })
});

//close menu on clic out component
window.addEventListener("click", function(e) {
    if(e.target.classList.contains("menu_container")){
        menuContainer.classList.toggle("active");  
    }
});


function displayMenu(btnOpen, arrayContent){
    calculPosition(btnOpen);
    updateContent(arrayContent);
}

function calculPosition(btnOpen){
    let posX = btnOpen.getBoundingClientRect().left + btnOpen.getBoundingClientRect().width;
    posX -= menuComponent.getBoundingClientRect().width;
    let posY = btnOpen.getBoundingClientRect().bottom;
    menuComponent.style.transform = `translate(${posX}px, ${posY}px)`;
}

function updateContent(arrayContent){
    for (let i = 0; i < 2; i++){
        //TODO Finir passage
    }
}