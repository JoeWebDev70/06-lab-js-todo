import { onOpen } from "./dialog_action.js";
import { setTaskInForm } from "./dialog_action.js";
import { createTasks } from "./task.js";
import { getLocalStorageTasks } from "./task.js";
import { setLocalStorageTasks } from "./task.js";

const tmpMenuContainer = document.querySelector(".menu_container");
const tmpMenuComponent = document.querySelector(".menu_component");
const tmpMenuContents = document.querySelectorAll(".menu_content");
const tmpMenuBtnClose = document.querySelector(".btn_close_menu");
const tmpListBtnsOptions = document.querySelectorAll(".btn_options");
const listOptionContent = ["On list", "Delete selection", "Delete All"];
const taskOptionContent = ["On task", "Modify", "Delete"];

//add actions before and after creating new tasks
window.addEventListener("click", function (e) {
    //close menu on clic out component
    if (e.target.classList.contains("menu_container")) {
        if (tmpMenuContainer != null) {
            tmpMenuContainer.classList.toggle("active");
        }
    }
    //add event on options bts in task
    if (e.target.classList.contains("task_btn_options")) {
        evtOnBtnsOptions(e.target, taskOptionContent);
    }
});

// add event on options bts in list
if (tmpListBtnsOptions != null && tmpListBtnsOptions.length > 0) {
    tmpListBtnsOptions.forEach(function (listBtnOption) {
        listBtnOption.addEventListener("click", function () {
            evtOnBtnsOptions(listBtnOption, listOptionContent);
        })
    });
}

function evtOnBtnsOptions(btn, content) {// move menu if scroll page 
    window.addEventListener("scroll", function () {
        calculPosition(btn);
    });
    displayMenu(btn, content);
    setBtnsMenuChoiceAction();
}

//close menu on clic btn close
if (tmpMenuBtnClose != null) {
    tmpMenuBtnClose.addEventListener("click", function () {
        closeMenu();
    });
}

function openMenu() {
    tmpMenuContainer.classList.add("active");
}

function closeMenu() {
    tmpMenuContainer.classList.remove("active");
}

function displayMenu(btnOpen, arrayContent) {
    setIdOfItem(btnOpen);
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

function setIdOfItem(btnOpen) {
    let item;
    let idToSet;
    if (btnOpen.classList.contains("task_btn_options")) {
        item = getTaskItem(btnOpen);
        idToSet = `item_${item.id}`
    } else if (btnOpen.classList.contains("btn_options")) {
        item = getListItem(btnOpen);
        idToSet = `item${item.id}`
    }
    tmpMenuComponent.childNodes[2].id = idToSet;
}

function getTaskItem(item) {
    let parentItem = item.parentNode;
    while (!parentItem.classList.contains("item")) {
        parentItem = parentItem.parentNode;
    }
    return parentItem;

}

function getListItem(item) {
    let listItem = item.parentNode;
    listItem = listItem.nextElementSibling
    return listItem;
}


function setBtnsMenuChoiceAction() {
    const btnsMenuChoice = document.querySelectorAll(".menu_choice");
    let idItem;

    btnsMenuChoice.forEach(function (btnMenuChoice) {
        btnMenuChoice.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            idItem = e.target.parentNode.id.split("_");
            idItem = idItem[1];
            switch (btnMenuChoice.textContent) {
                case listOptionContent[1]:
                    deleteTask("selection", idItem);
                    closeMenu();
                    break;
                case listOptionContent[2]:
                    deleteTask("all", idItem);
                    closeMenu();
                    break;
                case taskOptionContent[1]:
                    modifyTask(btnMenuChoice, idItem);
                    closeMenu();
                    break;
                case taskOptionContent[2]:
                    deleteTask("one", idItem);
                    closeMenu();
                    break;
            }
        });

    });
}

function deleteTask(what, itemid) {
    let taskArray = getLocalStorageTasks();
    if (what == "selection" || what == "all") {
        const dropZone = document.querySelectorAll(".drop_zone");
        let listChildren = Array.from(dropZone[itemid].children);
        for (let i = 0; i < listChildren.length; i++) {
            if (what == "selection") {
                if (getCheckBox(listChildren[i]).checked) {
                    listChildren[i].remove();
                    taskArray = spliceArray(taskArray, listChildren[i].id);
                }
            } else {
                listChildren[i].remove();
                taskArray = spliceArray(taskArray, listChildren[i].id);
            }
        }
    } else if (what == "one") {
        taskArray = spliceArray(taskArray, itemid);
    }
    
    setLocalStorageTasks(taskArray);
    createTasks();
}

function modifyTask(btnClick, itemid) {
    setTaskInForm(itemid);
    onOpen(btnClick);
}

function getCheckBox(parent) {
    return parent.childNodes[0].childNodes[1].childNodes[1].childNodes[0];
}

function spliceArray(taskArray, item) {
    for (let i = 0; i < taskArray.length; i++) {
        if (taskArray[i].id == item) {
            taskArray.splice(i, 1);
        }
    }
    return taskArray;
}