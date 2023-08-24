
const tmpListBtnsAdd = document.querySelectorAll(".btn_add");
const tmpDialog = document.querySelector(".dialog_container");
const tmpDialogBtnClose = document.querySelector(".btn_close_dialog");
const tmpFormTask = document.querySelector("#form_task");
const tmpInputTitle = document.querySelector("#task_title");
const tmpInputDate = document.querySelector("#task_date");
const tmpTxtareaDescription = document.querySelector("#task_description_area");
// const tmpBtnValidate = document.querySelector("#validate");
const tmpBtnCancel = document.querySelector("#cancel");

import {getLocalStorageTasks} from "./task.js";
import {setLocalStorageTasks} from "./task.js";
import {createTasks} from "./task.js";
let tmpAddTaskArray = getLocalStorageTasks();
let currentList = "";

if(tmpListBtnsAdd != null) {
    tmpListBtnsAdd.forEach(function(listBtnAdd){
        listBtnAdd.addEventListener("click", function(){
            currentList = listBtnAdd.id;
            onOpen();
        });
    });
}else{console.log("listBtnsAdds is null in dialog_action")}

//evt on close btn
if(tmpDialogBtnClose != null) {
    tmpDialogBtnClose.addEventListener("click", function(){
        onClose();
    });
}else{console.log("btnCloseDialog is null in dialog_action")}

//evt on cancel btn
if(tmpBtnCancel != null) {
    tmpBtnCancel.addEventListener("click", function(){
        onClose();
    });
}else{console.log("btnCancel is null in dialog_action")}

if(tmpFormTask != null) {
    tmpFormTask.addEventListener("submit", function(e){
        e.preventDefault();
        getTaskInformations(currentList);
        window.location.reload();
        tmpDialog.close();
    });
}else{console.log("formTask is null in dialog_action")}

function onOpen(){
    if(tmpDialog != null){
        tmpDialog.showModal();
    }else{console.log("dialog is null in dialog_action")}
}

function onClose() {
    if(tmpDialog != null){
        tmpDialog.close();
    }else{console.log("dialog is null in dialog_action")}
};



//TODO : revoir 
function getTaskInformations(){
    let taskArray = getLocalStorageTasks();
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
  
    if(tmpInputTitle.value == ""){
        titleTask = "Untitled";
    }else{
        titleTask = tmpInputTitle.value;
    }    
    
    dateTask = tmpInputDate.value;

    if(tmpTxtareaDescription.value == ""){ 
        descriptionTask = "";
    }else{
        descriptionTask = tmpTxtareaDescription.value;
    }
    
    let newTask = {
        column: columnId, 
        id: taskArray.length, 
        title: titleTask, 
        date: dateTask, 
        description: descriptionTask
    }
    
    taskArray.push(newTask);
    setLocalStorageTasks(taskArray);
}

