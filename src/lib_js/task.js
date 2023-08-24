export function getLocalStorageTasks() {
    let taskArray = new Array();
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

export function createTasks(body, taskArray){
    const tmp2DropZone = document.querySelectorAll(".drop_zone");

        if (taskArray && Array.isArray(taskArray)) {
            taskArray.forEach(function (task) {
                const template = document.querySelector("template");
                const clone = template.content.cloneNode(true);
                const taskItem = clone.querySelector(".item");
                const taskH2 = clone.querySelector(".task_title");
                // let taskBtnOption = clone.querySelector(".task_btn_options");
                // let taskCheckBox = clone.querySelector(".task_select");
                const taskDate = clone.querySelector(".task_date");
                let taskDescription = clone.querySelector(".task_description");

                taskItem.id = task.id;
                taskH2.textContent = task.title;
                taskDate.textContent = task.date;
                taskDescription.textContent = task.description;
                tmp2DropZone[task.column].appendChild(clone);

            });
        } else {
            console.log("NO data");
        }
}