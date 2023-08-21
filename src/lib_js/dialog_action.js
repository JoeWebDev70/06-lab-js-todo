import {listBtnsAdds} from "./list_columns.js";
import {dialog} from "./dialog_create.js";
import {btnCloseDialog} from "./dialog_create.js";
import {btnCancel} from "./dialog_create.js";
import {formTask} from "./dialog_create.js";
import {inputTitle} from "./dialog_create.js";
import {inputDate} from "./dialog_create.js";
import {txtareaDescription} from "./dialog_create.js";
let currentList = "";



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
    let titleTask = "";
    let dateTask = "";
    let descriptionTask = "";

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

    
    console.log(titleTask);
    console.log(dateTask);
    console.log(descriptionTask);
    console.log(currentList);
}