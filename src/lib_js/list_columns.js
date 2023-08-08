//LIST COLUMNS
const btnOptionsContent = "...";
const btnAddContent = "+";
const btnAddTxtContent = "Add a task";
const titlesContent = ["TO DO", "ON DOING", "DONE"];
const colClasses = ["col1", "col2", "col3"];

export let columns = new Array();

for (let i = 0; i < 3; i++) {
    //create div col
    columns[i] = document.createElement("div");
    columns[i].classList.add("list_columns");

    //create title
    const divTitle = document.createElement("div");
    divTitle.classList.add("box_titles");
    divTitle.classList.add("border");
    divTitle.classList.add(colClasses[i]);
    const colTitle = document.createElement("h2");
    const colTitleContent = document.createTextNode(titlesContent[i]);
    //insert title in div col
    columns[i].appendChild(divTitle);
    divTitle.appendChild(colTitle);
    colTitle.appendChild(colTitleContent);

    //create zone tasks (drag and drop / button options on list / button Add task)
    const divTasks = document.createElement("div");
    divTasks.classList.add("zone_tasks");
    divTasks.classList.add("border");
    divTasks.classList.add(colClasses[i]);  
    //insert zone tasks in div col
    columns[i].appendChild(divTasks);
    
    //create btn list option
    const pOptions = document.createElement("p");
    pOptions.classList.add("align_self");
    const bOptions = document.createElement("button");
    bOptions.id = `btn_list_option${[i]}`;
    bOptions.classList.add("btn_options");
    const bOptionsContent = document.createTextNode(btnOptionsContent);
    //insert btn list options in column
    divTasks.appendChild(pOptions);
    pOptions.appendChild(bOptions);
    bOptions.appendChild(bOptionsContent);

    //create drop zone
    const dropZone = document.createElement("div");
    dropZone.classList.add("drop_zone");
    // insert drop zone in zone tasks
    divTasks.appendChild(dropZone);

    //create btn add
    const pAdd = document.createElement("p");
    pAdd.classList.add("width_100");
    const bAdd = document.createElement("button");
    bAdd.id = `btn_list_add${[i]}`;
    bAdd.classList.add("btn_add");
    const bAddSpan = document.createElement("span");
    const bAddContent = document.createTextNode(btnAddContent);
    const bAddTxtContent = document.createTextNode(btnAddTxtContent);
    //insert btn add  in zone tasks
    divTasks.appendChild(pAdd);
    pAdd.appendChild(bAdd);
    bAdd.appendChild(bAddContent);
    bAdd.appendChild(bAddSpan);
    bAddSpan.appendChild(bAddTxtContent);
    

}





