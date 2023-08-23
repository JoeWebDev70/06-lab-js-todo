import { mainBody } from "./mainpage_structure.js";
import { dropZones } from "./list_columns.js";

// export let taskArray = new Array();
let taskArray = new Array();
export let taskBtnOptions; 
export let taskItems;

export function getLocalStorageTasks() {
    //get if local storage contain some tasks 
    if (!localStorage.getItem("taskArray")) {
        localStorage.href = 'index.html';
    }
    if (localStorage.getItem("taskArray") != null) {
        taskArray = JSON.parse(localStorage.getItem("taskArray"));
    }
    return taskArray;
}

export function setLocalStorageTasks(taskArray) {
    localStorage.removeItem("taskArray");
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
}

if (mainBody != null) {
    taskArray = getLocalStorageTasks();

    if (taskArray && Array.isArray(taskArray)) {
        taskArray.forEach(function (task) {
            let template = document.querySelector("template");
            let clone = template.content.cloneNode(true);
            let taskItem = clone.querySelector(".item");
            let taskH2 = clone.querySelector(".task_title");
            // let taskBtnOption = clone.querySelector(".task_btn_options");
            // let taskCheckBox = clone.querySelector(".task_select");
            let taskDate = clone.querySelector(".task_date");
            let taskDescription = clone.querySelector(".task_description");

            taskItem.id = task.id;
            taskH2.textContent = task.title;
            taskDate.textContent = task.date;
            taskDescription.textContent = task.description;
            dropZones[task.column].appendChild(clone);

            // for export drag and drop and menu options
            taskItems = document.querySelectorAll(".item");
            taskBtnOptions = document.querySelectorAll(".task_btn_options");
        });
    } else {
        console.log("NO data");
    }
}

