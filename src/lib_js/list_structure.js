const btnOptionsContent = "...";
const btnAddContent = "+";
const btnAddTxtContent = "Add a task";


//create title list
export const titleDiv = document.createElement("div");
titleDiv.id = "title_div";
const titleList = document.createElement("h1");
titleList.id = "title_list";
let titleContent = "Untitled"
const titleListContent = document.createTextNode(titleContent);
const titlePBtn = document.createElement("p");
const titleBtn = document.createElement("button");
titleBtn.id = "title_btn";
//insert title
titleDiv.appendChild(titleList);
titleList.appendChild(titleListContent);
titleDiv.appendChild(titlePBtn);
titlePBtn.appendChild(titleBtn);


//create div list
export const listDiv = document.createElement("div");
listDiv.id = "list_div";

//create col 1 : TO DO
const col1Div = document.createElement("div");
col1Div.id = "col1_div";
//insert col 1 
listDiv.appendChild(col1Div);
//create title
const col1Title = document.createElement("h2");
const col1TitleContent = document.createTextNode("TO DO");
//insert title
col1Div.appendChild(col1Title);
col1Title.appendChild(col1TitleContent);
//create task zone
const col1TaskZone = document.createElement("div");
col1TaskZone.classList.add("task_zone"); 
//insert task zone 
col1Div.appendChild(col1TaskZone);
//create btn option
const col1POptions = document.createElement("p");
col1POptions.classList.add("align_self");
const col1BOptions = document.createElement("button");
col1BOptions.id = "col1_btn_options";
col1BOptions.classList.add("btn_options");
const col1BOptContent = document.createTextNode(btnOptionsContent);
//insert btn options
col1TaskZone.appendChild(col1POptions);
col1POptions.appendChild(col1BOptions);
col1BOptions.appendChild(col1BOptContent);
//create drop zone
const col1DropZone = document.createElement("div");
col1DropZone.classList.add("drop_zone");
// insert drop zone
col1TaskZone.appendChild(col1DropZone);
//create btn add
const col1PAdd = document.createElement("p");
col1PAdd.classList.add("width_percent");
const col1BAdd = document.createElement("button");
col1BAdd.id = "col1_btn_add";
col1BAdd.classList.add("btn_add");
const col1BAddSpan = document.createElement("span");
const col1BAddContent = document.createTextNode(btnAddContent);
const col1BAddTxtContent = document.createTextNode(btnAddTxtContent);
//insert btn add
col1TaskZone.appendChild(col1PAdd);
col1PAdd.appendChild(col1BAdd);
col1BAdd.appendChild(col1BAddContent);
col1BAdd.appendChild(col1BAddSpan);
col1BAddSpan.appendChild(col1BAddTxtContent);

