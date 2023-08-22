import { mainBody } from "./mainpage_structure.js";
import { dropZones } from "./list_columns.js";
// import { taskArray } from "./dialog_action.js";

export let taskArray = new Array();
export let task_btn_options; 

export function getLocalStorageTasks() {
    //get if local storage contain some tasks 
    if (!localStorage.getItem("taskArray")) {
        localStorage.href = 'index.html';
    }
    if (localStorage.getItem("taskArray") != null) {
        taskArray = JSON.parse(localStorage.getItem("taskArray"));
    }
}

export function setLocalStorageTasks() {
    localStorage.removeItem("taskArray");
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
}

if (mainBody != null) {
    getLocalStorageTasks();
    // console.log("taskArray : ", taskArray);

    if (taskArray && Array.isArray(taskArray)) {
        taskArray.forEach(function (task) {
            // console.log("task : ", task);
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

            task_btn_options = document.querySelectorAll(".task_btn_options");
            //set all node for erasing after
            // nodeToErase = resultZone.childNodes;
        });
    } else {
        console.log("NO data");
    }
}

