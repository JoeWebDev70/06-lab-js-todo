import {taskArray} from "./task.js"; //for research function

//create search bar
export const divSearchBar = document.createElement("div");
divSearchBar.id = "search_bar";

//create form
const formSearch = document.createElement("form");
formSearch.id = "search_form";
formSearch.noValidate = true;

//create tooltip for label on input
const divTooltip = document.createElement("div");
divTooltip.classList.add("tooltip_container");
//create input for searching word
const inputSearch = document.createElement("input");
inputSearch.type = "text";
inputSearch.id = "input_search";
inputSearch.name = "input_search";
inputSearch.dataError = "Can't be blank!";
const txtPlaceHolder = "Search in your lists";
inputSearch.placeholder = txtPlaceHolder;
inputSearch.required = true;

//create label for input
const labelSearch = document.createElement("label");
labelSearch.for = "input_search";
labelSearch.textContent = "Enter your word";
labelSearch.classList.add("tooltip_content");

//create erase button
const btnErase = document.createElement("button");
btnErase.type = "button";
btnErase.id = "btn_erase";
btnErase.textContent = "X";
btnErase.classList.add("item_hiden");

//create submit button
const btnSearch = document.createElement("button");
btnSearch.type = "submit";
btnSearch.id = "submit";

//insert 
divSearchBar.appendChild(formSearch);
formSearch.appendChild(divTooltip);
divTooltip.appendChild(inputSearch);
divTooltip.appendChild(labelSearch);
formSearch.appendChild(btnErase);
formSearch.append(btnSearch);

//add event listener on seach bar and its items
if (formSearch != null) {
    // verification of form validity
    formSearch.addEventListener('submit', function (e) {
        // if not valid then display error message
        if (!this.checkValidity()) {
            e.preventDefault();
            this.classList.add('item_not_valid');
            if (!inputSearch.valid) {
                inputSearch.placeholder = inputSearch.dataset.error;
            }
        } else {
            this.classList.remove('item_not_valid');
            inputSearch.placeholder = txtPlaceHolder;
            //import search function here
            searchTask(inputSearch.value);
        }
    });

    // show or hide icon to erase data in input on new focus
    inputSearch.addEventListener('focus', function(){
        if(inputSearch.value != ""){
            btnErase.classList.add("item_shown");
        }else{
            btnErase.classList.remove("item_shown");
        }        
    });

    // show or hide icon to erase data in input on change
    inputSearch.addEventListener('change', function(){
        if(inputSearch.value != ""){
            btnErase.classList.add("item_shown");
        }else{
            btnErase.classList.remove("item_shown");
        }        
    });

    // erase data in input for new research on click icon
    btnErase.addEventListener('click', function(){
        inputSearch.value = "";
        btnErase.classList.remove("item_shown");
    });
}

function searchTask(word){
    console.log("inputSearch value : ", word);
    console.log("taskArray : ",taskArray);
}