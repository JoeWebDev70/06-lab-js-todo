const tmpMenuContainer = document.querySelector(".menu_container");
const tmpMenuComponent = document.querySelector(".menu_component");
const tmpMenuContents = document.querySelectorAll(".menu_content");
const tmpMenuBtnClose = document.querySelector(".btn_close_menu");
const tmpListBtnsOptions = document.querySelectorAll(".btn_options");
const tmpTaskBtnOptions = document.querySelectorAll(".taskBtnOptions");
const listOptionContent = ["On list", "Delete selection", "Delete All"];
const taskOptionContent = ["On task", "Modify", "Delete"];

//add event on options bts in list
if (tmpListBtnsOptions != null){
    tmpListBtnsOptions.forEach(function(listBtnOption){
        listBtnOption.addEventListener("click", function(){
            // move menu if scroll page 
            window.addEventListener("scroll", function() {
                calculPosition(listBtnOption);
            });
            displayMenu(listBtnOption, listOptionContent);
            if(tmpMenuContainer != null){
                tmpMenuContainer.classList.toggle("active"); 
            }else{console.log("menuContainer null in menu_action");}
        })
    });
}else{console.log("listBtnsOptions is null in menu_action")}

//add event on options bts in task
if(tmpTaskBtnOptions != null){
    tmpTaskBtnOptions.forEach(function(taskBtnOption){
        taskBtnOption.addEventListener("click", function(){
            // move menu if scroll page 
            window.addEventListener("scroll", function() {
                calculPosition(taskBtnOption);
            });
            displayMenu(taskBtnOption, taskOptionContent);
            if(tmpMenuContainer != null){
                tmpMenuContainer.classList.toggle("active"); 
            }else{console.log("menuContainer is null  in menu_action");}
        })
    });
}else{console.log("taskBtnOptions is null in menu_action")}

//close menu on clic out component
window.addEventListener("click", function(e) {
    if(e.target.classList.contains("menu_container")){
        if(tmpMenuContainer != null){
            tmpMenuContainer.classList.toggle("active"); 
        }else{console.log("menuContainer null in menu_action");}
    }
});

//close menu on clic btn close
if(tmpMenuBtnClose != null){
    tmpMenuBtnClose.addEventListener("click", function() {
        if(tmpMenuContainer != null){
            tmpMenuContainer.classList.toggle("active"); 
        }else{console.log("menuContainer null in menu_action");}
    });
}else{console.log("btnCloseMenu is null in menu_action")}

function displayMenu(btnOpen, arrayContent){
    calculPosition(btnOpen);
    updateContent(arrayContent);
}

function calculPosition(btnOpen){
    if(tmpMenuComponent != null){
        let posX = btnOpen.getBoundingClientRect().left + btnOpen.getBoundingClientRect().width;
        posX -= tmpMenuComponent.getBoundingClientRect().width;
        let posY = btnOpen.getBoundingClientRect().bottom;
        tmpMenuComponent.style.transform = `translate(${posX}px, ${posY}px)`;
    }else{console.log("menuComponent is null in menu_action")}
}

function updateContent(arrayContent){
    if(tmpMenuContents != null){
        for (let i = 0; i < arrayContent.length; i++){
            tmpMenuContents[i].textContent = arrayContent[i];
        }
    }else{console.log("menuContent is null in menu_action")}
}