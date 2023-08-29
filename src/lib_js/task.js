
export function getLocalStorageTasks() {
    let taskArray = new Array();
    //get if local storage contain some tasks 
    if (!localStorage.getItem("taskArray")) {
        localStorage.href = 'index.html';
    }
    if (localStorage.getItem("taskArray") != null) {
        taskArray = JSON.parse(localStorage.getItem("taskArray"));
    }
    taskArray = cleanTaskArray(taskArray);
    setLocalStorageTasks(taskArray);
    
    return taskArray;
}

function cleanTaskArray(taskArray) {
    if (taskArray && Array.isArray(taskArray)) {
        for (let i = 0; i < taskArray.length ; i++) {
            if (taskArray[i].column == null ) {
                taskArray.splice(i, 1);
            }

            if(taskArray[i].id == null || taskArray[i].id != i){
                taskArray[i].id = i;
            }

            if(typeof(taskArray[i].column) != 'number'){
                taskArray[i].column = parseInt(taskArray[i].column);
            }

            if(typeof(taskArray[i].id) != 'number' ){
                taskArray[i].id = parseInt(taskArray[i].id);
            }
        }
    }
    return taskArray;
}

export function setLocalStorageTasks(taskArray) {
    localStorage.removeItem("taskArray");
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
}

export function createTasks(){
    clearTasks();
    const taskArray = getLocalStorageTasks();
    const tmpDropZone = document.querySelectorAll(".drop_zone");
    
    if (taskArray && Array.isArray(taskArray)) {
            taskArray.forEach(function (task) {
                const template = document.querySelector("template");
                const clone = template.content.cloneNode(true);
                const taskItem = clone.querySelector(".item");
                const taskH2 = clone.querySelector(".task_title");
                let taskBtnOption = clone.querySelector(".task_btn_options");
                // let taskCheckBox = clone.querySelector(".task_select");
                const taskDate = clone.querySelector(".task_date");
                const taskDescription = clone.querySelector(".task_description");

                taskItem.id = task.id;
                // taskBtnOption.id = task.id;
                taskH2.textContent = task.title;
                taskH2.style.maxLength = "100";
                taskDate.textContent = task.date;
                taskDescription.textContent = task.description;
                tmpDropZone[task.column].appendChild(clone);

                setLocalStorageTasks(taskArray);
            });
        } else {
            console.log("NO data");
        }
}

function clearTasks(){
    const items = document.querySelectorAll(".item");
    if(items && items.length){
        items.forEach(function (item){
            item.remove();
        });
    }
}