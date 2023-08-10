import {listBtnsAdds} from "./list_columns.js";
import {dialog} from "./dialog_create.js";
import {btnValidate} from "./dialog_create.js";
import {btnCancel} from "./dialog_create.js";

listBtnsAdds.forEach(function(listBtnAdd){
    listBtnAdd.addEventListener("click", function(){
        onOpen();
    });
});

btnValidate.addEventListener("click", function(){
    onClose(btnValidate.id);
});

btnCancel.addEventListener("click", function(){
    onClose(btnCancel.id);
});

function onOpen(){
    dialog.showModal();
}

function onClose(btnId) {
    console.log("On close btnId : ", btnId);
    dialog.close();
};