
import {getLocalStorageTasks} from "./task.js";
const tmpFormSearch = document.querySelector("#search_form");
const tmpInputSearch = document.querySelector("#input_search");
const tmpBtnErase = document.querySelector("#btn_erase");
// let tmpDragTaskArray = getLocalStorageTasks();


//add event listener on seach bar and its items
if (tmpFormSearch != null) {
    // verification of form validity
    tmpFormSearch.addEventListener('submit', function (e) {
        // if not valid then display error message
        if (!this.checkValidity()) {
            e.preventDefault();
            this.classList.add('item_not_valid');
            if (!tmpInputSearch.valid) {
                tmpInputSearch.placeholder = tmpInputSearch.dataset.error;
            }
        } else {
            this.classList.remove('item_not_valid');
            tmpInputSearch.placeholder = txtPlaceHolder;
            //import search function here
            // searchTask(e, tmpInputSearch.value);
        }
    });

    // show or hide icon to erase data in input on new focus
    tmpInputSearch.addEventListener('focus', function(){
        if(tmpInputSearch.value != ""){
            tmpBtnErase.classList.add("item_shown");
        }else{
            tmpBtnErase.classList.remove("item_shown");
        }        
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
    });
}




// export function searchTask(evt, word){
//     evt.preventDefault();
//     console.log(word);
//     console.log("tmpDragTaskArray : ", tmpDragTaskArray);
// }

