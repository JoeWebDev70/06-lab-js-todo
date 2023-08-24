
export function createDialog(){
    // create dialog for adding task
    const dialog = document.createElement("dialog");
    dialog.classList.add("dialog_container");

    //create header of dialog
    //btn close
    const btnCloseDialog = document.createElement("button");
    btnCloseDialog.classList.add("btn_close_dialog");
    const btnCloseDialogContent = document.createTextNode("X");
    //title
    const dialogTitle = document.createElement("h2");
    const dialogTiteleContent = document.createTextNode("Task");
    //insert header of dialog
    dialog.appendChild(btnCloseDialog);
    btnCloseDialog.appendChild(btnCloseDialogContent);
    dialog.appendChild(dialogTitle);
    dialogTitle.appendChild(dialogTiteleContent);

    //create form
    const formTask = document.createElement("form");
    formTask.noValidate = true;
    formTask.id = "form_task";
    //insert form 
    dialog.appendChild(formTask);

    //create input title
    const divTitle = document.createElement("div");
    divTitle.classList.add("col_in_dialog");
    const labelTitle = document.createElement("label");
    labelTitle.for = "task_title";
    labelTitle.id = "task_title_lbl";
    const labelTitleContent = document.createTextNode("Title");
    const inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.name = "task_title";
    inputTitle.id = "task_title";
    inputTitle.classList.add("border_in_dialog");
    //insert input title
    formTask.appendChild(divTitle);
    divTitle.appendChild(labelTitle);
    labelTitle.appendChild(labelTitleContent);
    divTitle.appendChild(inputTitle)

    //create input date
    const divDate = document.createElement("div");
    divDate.classList.add("col_in_dialog");
    const labelDate = document.createElement("label");
    labelDate.for = "task_date";
    labelDate.id = "task_date_lbl";
    const labelDateContent = document.createTextNode("Due date");
    const inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.name = "task_date";
    inputDate.id = "task_date";
    inputDate.valueAsDate = new Date();
    inputDate.classList.add("border_in_dialog");
    //insert input date
    formTask.appendChild(divDate);
    divDate.appendChild(labelDate);
    labelDate.appendChild(labelDateContent);
    divDate.appendChild(inputDate)

    //create textarea description
    const divDescription = document.createElement("div");
    divDescription .classList.add("col_in_dialog");
    const labelDescription  = document.createElement("label");
    labelDescription.for = "task_description_area";
    labelDescription.id = "task_description_lbl";
    const labelDescriptionContent = document.createTextNode("Description");
    const txtareaDescription  = document.createElement("textarea");
    txtareaDescription.name = "task_description_area";
    txtareaDescription.id = "task_description_area";
    txtareaDescription.classList.add("border_in_dialog");
    //insert textarea description
    formTask.appendChild(divDescription);
    divDescription.appendChild(labelDescription);
    labelDescription.appendChild(labelDescriptionContent);
    divDescription.appendChild(txtareaDescription)

    //create buttons 
    //validate
    const divButtons = document.createElement("div");
    divButtons.id = "div_task_btns";
    const btnValidate = document.createElement("button");
    btnValidate.id = "validate";
    btnValidate.type = "submit";
    btnValidate.classList.add("task_btns");
    const btnValidateContent = document.createTextNode("Validate");
    //cancel
    const btnCancel = document.createElement("button");
    btnCancel.id = "cancel";
    btnCancel.type = "button";
    btnCancel.classList.add("task_btns");
    const btnCancelContent = document.createTextNode("Cancel");
    //insert buttons
    formTask.appendChild(divButtons);
    divButtons.appendChild(btnValidate);
    btnValidate.appendChild(btnValidateContent);
    divButtons.appendChild(btnCancel);
    btnCancel.appendChild(btnCancelContent);

    return dialog;
}