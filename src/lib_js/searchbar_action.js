import {txtPlaceHolder} from "./searchbar_create";
import {getLocalStorageTasks} from "./task.js";
const tmpFormSearch = document.querySelector("#search_form");
const tmpInputSearch = document.querySelector("#input_search");
const tmpBtnErase = document.querySelector("#btn_erase");
const notFound = document.querySelector("#not_found");

//add event listener on seach bar and its items
if (tmpFormSearch != null) {
    // verification of form validity
    tmpFormSearch.addEventListener('submit', function (e) {
        // if not valid then display error message
        if (!this.checkValidity()) {
            e.preventDefault();
            this.classList.add('item_not_valid');
            if (!tmpInputSearch.valid) {
                tmpInputSearch.placeholder = txtPlaceHolder[1];
            }
        } else {
            this.classList.remove('item_not_valid');
            tmpInputSearch.placeholder = txtPlaceHolder[0];
            //import search function here
            searchTask(e, tmpInputSearch.value);
        }
    });

    // show or hide icon to erase data in input on new focus
    tmpInputSearch.addEventListener('focus', function(){
        window.addEventListener("keydown", function(){
            tmpFormSearch.classList.remove("item_not_valid");
            tmpInputSearch.placeholder = txtPlaceHolder[0];
            if(tmpInputSearch.value != ""){
                tmpBtnErase.classList.add("item_shown");
            }else{
                tmpBtnErase.classList.remove("item_shown");
            }    
            notFound.classList.remove("item_shown");
        });    
    });

    // show or hide icon to erase data in input on change
    tmpInputSearch.addEventListener('change', function(){
        if(tmpInputSearch.value != ""){
            tmpBtnErase.classList.add("item_shown");
        }else{
            tmpBtnErase.classList.remove("item_shown");
        }        
    });

    // erase data in input for new research on click icon
    tmpBtnErase.addEventListener('click', function(){
        tmpInputSearch.value = "";
        tmpBtnErase.classList.remove("item_shown");
        const taskDide = document.querySelectorAll(".task_hide");
        if(taskDide && taskDide.length > 0){
            taskDide.forEach(function(task){
                task.classList.remove("task_hide");
            })
        }
        notFound.classList.remove("item_shown");
    });
}


function searchTask(evt, word){
    evt.preventDefault();
    let taskArray = getLocalStorageTasks();
    let taskFound = new Array();
    for(let i = 0; i < taskArray.length; i ++) {
        if(taskArray[i].title.match(word) || taskArray[i].description.match(word)){
            taskFound.push(taskArray[i]);
        }
    }
    displayResult(taskFound);
}

function displayResult(taskFound) {
    if (taskFound && taskFound.length > 0) {
        const taskAll = document.querySelectorAll(".item");
        taskAll.forEach(function (task) {
            task.classList.add("task_hide");
            for (let i = 0; i < taskFound.length; i++) {
                if (taskFound[i].id == task.id) {
                    task.classList.remove("task_hide");
                }
            }
        });
    } else {
        notFound.classList.add("item_shown");
    }
}

