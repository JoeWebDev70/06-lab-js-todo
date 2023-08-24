const tmpTitleBtn = document.querySelector("#title_btn");
const tmpTitleList = document.querySelector("#title_list");
const tmpInputTitleList = document.querySelector(".input_title_list");
let titleContent;

//get if local storage contain some value and set it 
if(!localStorage.getItem("titleContent")){
    localStorage.href = 'index.html';
}
if(localStorage.getItem("titleContent") != null){
    titleContent = localStorage.getItem("titleContent");
}

//get if storage change
window.addEventListener("storage", function(){
    titleContent = localStorage.getItem("titleContent");
    titleContentUpdate(titleContent);
});
titleContentUpdate(titleContent);

//event on btn change title
if(tmpTitleBtn != null){
    tmpTitleBtn.addEventListener("click", function(){
        toggleHideItem();
        tmpInputTitleList.focus();
        this.disabled = true; //disable button action
    });
}

//evt on input
if(tmpInputTitleList != null){
    tmpInputTitleList.addEventListener("blur", function(){
        getTitleInputValue(tmpInputTitleList.value);
        titleContentUpdate(titleContent);
        toggleHideItem();
    });

    tmpInputTitleList.addEventListener("keydown", function(e){
        if(e.key == "Enter"){
            tmpInputTitleList.blur();
        }
    });
}else{console.log("inputTitleList is null in list_title_action")}

function getTitleInputValue(txt){
    if(txt == ""){
        titleContent = "Untitled";
    }else{
        titleContent = txt;
    }
    localStorage.setItem("titleContent", titleContent);
}

function toggleHideItem(){
    tmpInputTitleList.classList.toggle("not_display_item"); 
    if(tmpTitleList != null){
        tmpTitleList.classList.toggle("not_display_item");
    }else{console.log("titleList is null in list_title_action")}
}

function titleContentUpdate(txt){
    if(tmpTitleList != null){
        tmpTitleList.textContent = txt;
    }else{console.log("titleList is null in list_title_action")}

    if(tmpTitleBtn != null){
        tmpTitleBtn.disabled = false;
    }else{console.log("titleBtn is null in list_title_action")}
}



