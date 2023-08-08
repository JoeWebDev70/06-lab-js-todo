let titleContentBase = "Untitled";
let titleContent = titleContentBase;

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


//create title list
export const titleDiv = document.createElement("div");
titleDiv.id = "title_div";
const titleList = document.createElement("h1");
titleList.id = "title_list"; //need for rename by user
const titleListContent = document.createTextNode(titleContent);
const titlePBtn = document.createElement("p");
const titleBtn = document.createElement("button");
titleBtn.id = "title_btn"; //need for rename by user
//insert title
titleDiv.appendChild(titleList);
titleList.appendChild(titleListContent);
titleDiv.appendChild(titlePBtn);
titlePBtn.appendChild(titleBtn);

//create input for changing title by user
const inputTitleList = document.createElement("input");
inputTitleList.type = "text";
inputTitleList.maxLength = 150;
inputTitleList.classList.add("input_title_list");
//insert
titleDiv.insertBefore(inputTitleList, titlePBtn);
inputTitleList.classList.add("not_display_item");//not display

//event on btn change title
if(titleBtn != null){
    titleBtn.addEventListener("click", function(){
        toggleHideItem();
        inputTitleList.focus();
        this.disabled = true; //disable button action
    });
}

inputTitleList.addEventListener("blur", function(){
    getTitleInputValue(inputTitleList.value);
    titleContentUpdate(titleContent);
    toggleHideItem();
});

inputTitleList.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        inputTitleList.blur();
    }
});

function getTitleInputValue(txt){
    if(txt == ""){
        titleContent = titleContentBase;
    }else{
        titleContent = txt;
    }
    localStorage.setItem("titleContent", titleContent);
}

function toggleHideItem(){
    inputTitleList.classList.toggle("not_display_item"); 
    titleList.classList.toggle("not_display_item");
}

function titleContentUpdate(txt){
    titleListContent.textContent = txt;
    titleBtn.disabled = false;
}



