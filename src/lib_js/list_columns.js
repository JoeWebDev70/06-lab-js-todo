const btnOptionsContent = "...";
const btnAddContent = "+";
const btnAddTxtContent = "Add a task";
const titlesContent = ["TO DO", "ON DOING", "DONE"];
const colClasses = ["col1", "col2", "col3"];

export let columns = new Array();
export let dropZones = new Array();
export let listBtnsOptions = new Array();
export let listBtnsAdds = new Array();

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
    listBtnsOptions[i] = document.createElement("button");
                    // listBtnsOptions[i].id = `btn_list_option${[i]}`;
    listBtnsOptions[i].classList.add("btn_options");
    const bOptionsContent = document.createTextNode(btnOptionsContent);
    //insert btn list options in column
    divTasks.appendChild(pOptions);
    pOptions.appendChild(listBtnsOptions[i]);
    listBtnsOptions[i].appendChild(bOptionsContent);

    //create drop zone
    dropZones[i] = document.createElement("div");
    dropZones[i].id = `drop_zone${i}`;
    dropZones[i].classList.add("drop_zone");
    // insert drop zone in zone tasks
    divTasks.appendChild(dropZones[i]);

    if (i != 2) {
        //create btn add -- not column : Done
        const pAdd = document.createElement("p");
        pAdd.classList.add("width_100");
        listBtnsAdds[i] = document.createElement("button");
        listBtnsAdds[i].id = `btn_list_add${[i]}`;
        listBtnsAdds[i].classList.add("btn_add");
        const bAddSpan = document.createElement("span");
        const bAddContent = document.createTextNode(btnAddContent);
        const bAddTxtContent = document.createTextNode(btnAddTxtContent);
        //insert btn add  in zone tasks
        divTasks.appendChild(pAdd);
        pAdd.appendChild(listBtnsAdds[i]);
        listBtnsAdds[i].appendChild(bAddContent);
        listBtnsAdds[i].appendChild(bAddSpan);
        bAddSpan.appendChild(bAddTxtContent);
    }

}





