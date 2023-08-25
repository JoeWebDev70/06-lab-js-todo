import {onOpen} from "./dialog_action.js";
import {setTaskInForm}  from "./dialog_action.js";
import {getLocalStorageTasks} from "./task.js";
import {setLocalStorageTasks} from "./task.js";

const tmpMenuContainer = document.querySelector(".menu_container");
const tmpMenuComponent = document.querySelector(".menu_component");
const tmpMenuContents = document.querySelectorAll(".menu_content");
const tmpMenuBtnClose = document.querySelector(".btn_close_menu");
const tmpListBtnsOptions = document.querySelectorAll(".btn_options");
const tmpTaskBtnOptions = document.querySelectorAll(".task_btn_options");

const listOptionContent = ["On list", "Delete selection", "Delete All"];
const taskOptionContent = ["On task", "Modify", "Delete"];

//add event on options bts in list
if (tmpListBtnsOptions != null && tmpListBtnsOptions.length > 0) {
    tmpListBtnsOptions.forEach(function (listBtnOption) {
        listBtnOption.addEventListener("click", function () {
            // move menu if scroll page 
            window.addEventListener("scroll", function () {
                calculPosition(listBtnOption);
            });
            displayMenu(listBtnOption, listOptionContent);
            setBtnsMenuChoiceAction(listBtnOption);
        })
    });
} else { console.log("listBtnsOptions is null in menu_action") }

//add event on options bts in task
if (tmpTaskBtnOptions != null && tmpTaskBtnOptions.length > 0) {
    tmpTaskBtnOptions.forEach(function (taskBtnOption) {
        taskBtnOption.addEventListener("click", function () {
            // move menu if scroll page 
            window.addEventListener("scroll", function () {
                calculPosition(taskBtnOption);
            });
            displayMenu(taskBtnOption, taskOptionContent);
            setBtnsMenuChoiceAction(taskBtnOption);
        })
    });
} else { console.log("taskBtnOptions is null in menu_action") }

//close menu on clic out component
window.addEventListener("click", function (e) {
    if (e.target.classList.contains("menu_container")) {
        if (tmpMenuContainer != null) {
            tmpMenuContainer.classList.toggle("active");
        } else { console.log("menuContainer null in menu_action"); }
    }
});

//close menu on clic btn close
if (tmpMenuBtnClose != null) {
    tmpMenuBtnClose.addEventListener("click", function () {
        closeMenu();
    });
} else { console.log("btnCloseMenu is null in menu_action") }

function openMenu(){
    tmpMenuContainer.classList.add("active");
}

function closeMenu(){
    tmpMenuContainer.classList.remove("active");
}

function displayMenu(btnOpen, arrayContent) {
    calculPosition(btnOpen);
    updateMenuContent(arrayContent);
    openMenu();
}

function calculPosition(btnOpen) {
    if (tmpMenuComponent != null) {
        let posX = btnOpen.getBoundingClientRect().left + btnOpen.getBoundingClientRect().width;
        posX -= tmpMenuComponent.getBoundingClientRect().width;
        let posY = btnOpen.getBoundingClientRect().bottom;
        tmpMenuComponent.style.transform = `translate(${posX}px, ${posY}px)`;
    } else { console.log("menuComponent is null in menu_action") }
}

function updateMenuContent(arrayContent) {
    if (tmpMenuContents != null && tmpMenuContents.length > 0) {
        for (let i = 0; i < arrayContent.length; i++) {
            tmpMenuContents[i].textContent = arrayContent[i];
        }
    } else { console.log("menuContent is null in menu_action") }
}

function setBtnsMenuChoiceAction(btnClick) {
    const btnsMenuChoice = document.querySelectorAll(".menu_choice");
    const taskItem = getTaskItem(btnClick);
    const ListItem = getListItem(btnClick);

    btnsMenuChoice.forEach(function (btnMenuChoice) {
        switch (btnMenuChoice.textContent){
            case listOptionContent[1]:
                btnMenuChoice.addEventListener("click", function () {
                    deleteSelection(ListItem);
                    closeMenu();
                });
                break;
            case listOptionContent[2]:
                btnMenuChoice.addEventListener("click", function () {
                    deleteAll();
                    closeMenu();
                });
                break;
            case taskOptionContent[1]:
                btnMenuChoice.addEventListener("click", function () {
                    modifyTask(btnMenuChoice, taskItem);
                    closeMenu();
                });
                break;
            case taskOptionContent[2]:
                btnMenuChoice.addEventListener("click", function () {
                    deleteTask(taskItem);
                    closeMenu();
                });
                break;
        }
    });

}

function getTaskItem(item) {
    let parentItem = item.parentNode;
    if(item.classList.contains("task_btn_options")){
        while (!parentItem.classList.contains("item")) {
            parentItem = parentItem.parentNode;
        }
    }
    return parentItem;
}

function getListItem(item) {
    let listItem = item.parentNode;
    if(item.classList.contains("btn_options")){
        listItem = listItem.nextElementSibling
    }
    return listItem;
}

//TODO :: finir
function deleteSelection(ListItem) {
    let taskArray = getLocalStorageTasks();
    let listChildren = ListItem.children;
    let taskToDelete = new Array();
    let checkbox;
    console.log("childrens", listChildren);
    Array.from(listChildren).forEach(function(child){
        checkbox = document.querySelector("input[type=checkbox]");
        console.log("child", child, "checkbox", checkbox);
    })

}

function deleteAll() {
    console.log("delete All");
}

function modifyTask(btnClick, item) {
    setTaskInForm(item);
    onOpen(btnClick);
}

function deleteTask(item) {
    let taskArray = getLocalStorageTasks();
    for (let i = 0; i < taskArray.length; i++) {
        if (taskArray[i].id == item.id) {
            taskArray.splice(i, 1);
        }
    }
    setLocalStorageTasks(taskArray);
    window.location.reload();
}