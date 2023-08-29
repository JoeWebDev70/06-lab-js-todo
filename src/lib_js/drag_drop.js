//get the dragables items and drop zone
let tmpDropZone;
let tmpTaskItems;

import {getLocalStorageTasks} from "./task.js";
import {setLocalStorageTasks} from "./task.js";

//add actions before and after creating new tasks
window.addEventListener("mousedown", function(e) {
        //event on items
        tmpTaskItems = document.querySelectorAll(".item");
        if(tmpTaskItems != null && tmpTaskItems.length > 0){
            tmpTaskItems.forEach(function(item){
                item.addEventListener("dragstart", function(evt){
                    dragStart(evt);
                });
            });
        }
        //event on dropZone
        tmpDropZone = document.querySelectorAll(".drop_zone");
        if(tmpDropZone != null && tmpDropZone.length > 0){
            tmpDropZone.forEach(function(dropZone){
                dropZone.addEventListener("dragover", function(evt){dragOver(evt);});
                dropZone.addEventListener("drop", function(evt){drop(evt);});
            });
        }
});

//get when the drag start on item
function dragStart(evt){
    evt.dataTransfer.setData('text/plain', evt.target.id);
}

//need to make the drop target valid
function dragOver(evt){evt.preventDefault();}

function drop(evt){
    evt.preventDefault();

    //get the draggable element
    const idItem = evt.dataTransfer.getData("text/plain");
    const draggableItem = document.getElementById(idItem); //the dive who is drag now

    //get mouse position 
    const dropX = evt.clientX;
    const dropY = evt.clientY;

    //get children of drop zone = divs class : item // and rect of columns
    const dropChildrens  = getChildren();
    const rectColumns = getColumnsRect();

    //find the element before whom the drag element need to be insert 
    const insertBeforeElement = getInsertBeforeElement(dropChildrens, dropX, dropY);
    let newCol;
    if (insertBeforeElement == null) { //if not element then appendChild in drop zone
        for(let i = 0; i < rectColumns.length ; i++){
            if((dropY >= rectColumns[i].top && dropY <= rectColumns[i].bottom) && (dropX >= rectColumns[i].left && dropX <= rectColumns[i].right)){
                                newCol = getNewCol(tmpDropZone[i]);
                updateTaskColumn(draggableItem,newCol);
                //insert the draggable element
                tmpDropZone[i].appendChild(draggableItem);
            }
        }
    }else{
        // get the column/dropzone where insert the element and modify the arrayTask data
        let tmpCol = insertBeforeElement.parentNode;
        newCol = getNewCol(tmpCol);
        updateTaskColumn(draggableItem, newCol);
        //insert the draggable element before the element found in the parent (dropZone)
        tmpCol.insertBefore(draggableItem, insertBeforeElement);
    }
}

function updateTaskColumn(item, col){
    let taskArray = getLocalStorageTasks();
    for(let i = 0; i < taskArray.length ; i++){
        if(taskArray[i].id == item.id){
            taskArray[i].column = col;
        }
    }
    setLocalStorageTasks(taskArray);
}

function getChildren(){
    let TmpDropChildrens = new Array();
    tmpDropZone.forEach(function(dropZone){
        TmpDropChildrens.push(Array.from(dropZone.children));
    });
    return [].concat(TmpDropChildrens[0], TmpDropChildrens[1], TmpDropChildrens[2]);
}

function getColumnsRect(){
    let rectColumns = new Array();
    tmpDropZone.forEach(function(dropZone){
        rectColumns.push(dropZone.getBoundingClientRect());
    });
    return rectColumns;
}

function getInsertBeforeElement(items, dropX, dropY){
    for (const item of items) {
        //get child rec
        const rect = item.getBoundingClientRect();
        //get the element whom center is > or = to the mouse position || dropX > centerX
        if ((dropY >= rect.top && dropY <= rect.bottom) && (dropX >= rect.left && dropX <= rect.right)) { 
            return item;
        }
    }
}

function getNewCol(item){
    let newCol = item.id.split("_")
    return parseInt(newCol[1]);
}
