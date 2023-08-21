import { mainBody } from "./mainpage_structure.js";
import { dropZones } from "./list_columns.js";
// import { formTask } from "./dialog_create.js";

let data;


//get if local storage contain some tasks 
if(!localStorage.getItem("taskArray")){
    localStorage.href = 'index.html';
}
if(localStorage.getItem("taskArray") != null){
    data = JSON.parse(localStorage.getItem("taskArray"));
}

if (mainBody != null) {
    for(let i = 0; i < data.length; i++) {

        console.log("data : ", i,  data[i]);
        let template = document.querySelector("template");
        let clone = template.content.cloneNode(true);
        let taskItem = clone.querySelector(".item");
        // let taskH2 = clone.querySelector(".task_title");
        // let taskBtnOption = clone.querySelector(".task_btn_options");
        // let taskCheckBox = clone.querySelector(".task_select");
        // let taskDate = clone.querySelector(".task_date");
        // let taskDescription = clone.querySelector(".task_description");

        dropZones[data[i].column].appendChild(clone);
    }

}