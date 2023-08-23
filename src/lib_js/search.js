
import {getLocalStorageTasks} from "./task.js";
let tmpDragTaskArray = getLocalStorageTasks();



export function searchTask(evt, word){
    evt.preventDefault();
    console.log(word);
    console.log("tmpDragTaskArray : ", tmpDragTaskArray);
}