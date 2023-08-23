//get the dragables items and drop zone
import { dropZones } from "./list_columns.js";
import { taskItems } from "./task.js";

import {taskArray} from "./task.js";
// import {getLocalStorageTasks} from "./task.js";
import {setLocalStorageTasks} from "./task.js";

//event on items
if(taskItems != null){
    taskItems.forEach(function(item){
        item.addEventListener("dragstart", function(e){
            dragStart(e);
        });
    });
}

//get when the drag start on item
function dragStart(evt){
    evt.dataTransfer.setData('text/plain', evt.target.id);
}

//event on dropZone
dropZones.forEach(function(dropZone){
    dropZone.addEventListener("dragover", function(e){dragOver(e);});
    dropZone.addEventListener("drop", function(e){drop(e);});
});

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

    //get children of drop zone = divs class : item // and rect of third column 
    let TmpDropChildrens = new Array();
    let rectColumn = new Array();
    dropZones.forEach(function(dropZone){
        TmpDropChildrens.push(Array.from(dropZone.children));
        rectColumn.push(dropZone.getBoundingClientRect());
    });
    const dropChildrens  = [].concat(TmpDropChildrens[0], TmpDropChildrens[1], TmpDropChildrens[2]);

    //find the element before whom the drag element need to be insert 
    let insertBeforeElement = null;
    for (const child of dropChildrens) {
        
        //get child rec
        const rect = child.getBoundingClientRect();
        console.log("rect", rect);
        // const rectX = rect.left + rect.width;
        // const centerY = rect.top + rect.height / 2;
    
        //get the element whom center is > or = to the mouse position || dropX > centerX
        if ((dropY >= rect.top && dropY <= rect.bottom) && (dropX >= rect.left && dropX <= rect.right)) { 
            insertBeforeElement = child;
            break;
        }
    }
    
    //if not element then appendChild in drop zone
    let newCol;
    if (insertBeforeElement == null) {
        for(let i = 0; i < rectColumn.length ; i++){
            if((dropY >= rectColumn[i].top && dropY <= rectColumn[i].bottom) && (dropX >= rectColumn[i].left && dropX <= rectColumn[i].right)){
                dropZones[i].appendChild(draggableItem);
                newCol = dropZones[i].id.split("drop_zone");
                updateTaskColumn(draggableItem,parseInt(newCol[1]));
            }
        }
    }else{
        // get the column/dropzone where insert the element and modify the arrayTask data
        let tmpCol = insertBeforeElement.parentNode;
        newCol = tmpCol.id.split("drop_zone");
        updateTaskColumn(draggableItem,parseInt(newCol[1]));
        
        //insert the draggable element before the element found in the parent (dropZone)
        tmpCol.insertBefore(draggableItem, insertBeforeElement);
    }
}

function updateTaskColumn(item, col){
    taskArray[item.id].column = col;
    setLocalStorageTasks();
}