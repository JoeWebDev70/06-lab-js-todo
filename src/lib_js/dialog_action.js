
import {createTasks} from "./task.js";
const tmpListBtnsAdd = document.querySelectorAll(".btn_add");
const tmpDialog = document.querySelector(".dialog_container");
const tmpDialogBtnClose = document.querySelector(".btn_close_dialog");
const tmpFormTask = document.querySelector("#form_task");
const tmpInputTitle = document.querySelector("#task_title");
const tmpInputDate = document.querySelector("#task_date");
const tmpTxtareaDescription = document.querySelector("#task_description_area");
const tmpBtnCancel = document.querySelector("#cancel");

import {getLocalStorageTasks} from "./task.js";
import {setLocalStorageTasks} from "./task.js";

let currentList = "";
let tmpTask = "";
let btnClickAdd = false;

if(tmpListBtnsAdd != null) {
    tmpListBtnsAdd.forEach(function(listBtnAdd){
        listBtnAdd.addEventListener("click", function(){
            currentList = listBtnAdd.id;
            onOpen(listBtnAdd);
        });
    });
}

//evt on close btn
if(tmpDialogBtnClose != null) {
    tmpDialogBtnClose.addEventListener("click", function(){
        onClose();
    });
}

//evt on cancel btn
if(tmpBtnCancel != null) {
    tmpBtnCancel.addEventListener("click", function(){
        onClose();
    });
}

if(tmpFormTask != null) {
    tmpFormTask.addEventListener("submit", function(e){
        e.preventDefault();
        const newDataTask = getTaskInForm();
        if(btnClickAdd){
            addTask(newDataTask);
        }else{
            if(tmpTask != ""){
                updateTask(tmpTask, newDataTask);
            }
        }
        createTasks();
        tmpDialog.close();
    });
}

export function onOpen(btnClick){
    if(tmpDialog != null){
        tmpDialog.showModal();
    }else{console.log("dialog is null in dialog_action")}

    if(btnClick.classList.contains("btn_add")){
        btnClickAdd = true;
    }else{
        btnClickAdd = false;
    }
}

function onClose() {
    if(tmpDialog != null){
        tmpDialog.close();
    }
};

export function setTaskInForm(item){
    let taskArray = getLocalStorageTasks();
    for(let i = 0; i < taskArray.length; i++){
        if(taskArray[i].id == item){
            tmpInputTitle.value = taskArray[i].title;
            tmpInputDate.value = taskArray[i].date;
            tmpTxtareaDescription.value = taskArray[i].description;
            tmpTask = getTaskData(taskArray[i].colum, taskArray[i].id, taskArray[i].title, taskArray[i].date,taskArray[i].description);
            return;
        }
    } 
}

function getTaskInForm(){
    let titleTask = "";
    let dateTask = "";
    let descriptionTask = "";
  
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

    clearForm();
    
    return [titleTask, dateTask, descriptionTask];
}

function clearForm(){
    tmpInputTitle.value = "";
    tmpInputDate.valueAsDate = new Date();
    tmpTxtareaDescription.value = "";

}

function addTask(informations) {
    let taskArray = getLocalStorageTasks();
    const task = getTaskData(getColumnId(), taskArray.length, informations[0],informations[1], informations[2])
    taskArray.push(task);
    setLocalStorageTasks(taskArray);
}

function getColumnId(){
    if(currentList.split("add")[1] == '0'){
        return 0;
    }else if(currentList.split("add")[1] == '1'){
        return 1;
    }else {
        return 2;
    }
}

function getTaskData(column, id, title, date, description) {
    let Task = {
        column: column,
        id: id,
        title: title,
        date: date,
        description: description,
    }
    return Task;
}

function updateTask(task, newData){
    let taskArray = getLocalStorageTasks();
    for(let i = 0; i < taskArray.length; i++){
        if(taskArray[i].id == task.id){
            taskArray[i].title = newData[0];
            taskArray[i].date = newData[1];
            taskArray[i].description = newData[2];
        }
    }
    setLocalStorageTasks(taskArray);
}