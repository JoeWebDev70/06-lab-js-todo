import { mainBody } from "./mainpage_structure.js";
import { dropZones } from "./list_columns.js";

if (mainBody != null) {

    const template = document.querySelector("template");
    let clone = template.content.cloneNode(true);
    let taskItem = clone.querySelector(".item");
    // let taskH2 = clone.querySelector(".task_title");
    // let taskBtnOption = clone.querySelector(".task_btn_options");
    // let taskCheckBox = clone.querySelector(".task_select");
    // let taskDate = clone.querySelector(".task_date");
    // let taskDescription = clone.querySelector(".task_description");

    dropZones[0].appendChild(clone);

}