import {listBtnsAdds} from "./list_columns.js";
import {dialog} from "./dialog_create.js";
import {btnCloseDialog} from "./dialog_create.js";
import {btnCancel} from "./dialog_create.js";
import {formTask} from "./dialog_create.js";
import {inputTitle} from "./dialog_create.js";
import {inputDate} from "./dialog_create.js";
import {txtareaDescription} from "./dialog_create.js";
let currentList = "";
let taskArray = new Array();



listBtnsAdds.forEach(function(listBtnAdd){
    listBtnAdd.addEventListener("click", function(){
        currentList = listBtnAdd.id;
        onOpen();
    });
});

btnCloseDialog.addEventListener("click", function(){
    onClose();
});


btnCancel.addEventListener("click", function(){
    onClose();
});

formTask.addEventListener("submit", function(e){
    e.preventDefault();
    getTaskInformations(currentList);
});

function onOpen(){
    dialog.showModal();
}

function onClose() {
    dialog.close();
};

function getTaskInformations(){
    
    let columnId = "";
    let titleTask = "";
    let dateTask = "";
    let descriptionTask = "";

    if(currentList.split("add")[1] == '0'){
        columnId = 0;
    }else if(currentList.split("add")[1] == '1'){
        columnId = 1;
    }else {
        columnId = 2;
    }
  
    if(inputTitle.value == ""){
        titleTask = "Untitled";
    }else{
        titleTask = inputTitle.value;
    }    
    
    dateTask = inputDate.value;

    if(txtareaDescription.value == ""){ 
        descriptionTask = "";
    }else{
        descriptionTask = txtareaDescription.value;
    }
    
    let newTask = {
        column: columnId, 
        id: taskArray.length, 
        title: titleTask, 
        date: dateTask, 
        description: descriptionTask
    }
    
    taskArray.push(newTask);
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
}