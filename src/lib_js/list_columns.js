export function createListColumns(){

    const btnOptionsContent = "...";
    const btnAddContent = "+";
    const btnAddTxtContent = "Add a task";
    const titlesContent = ["TO DO", "ON DOING", "DONE"];
    const colClasses = ["col1", "col2", "col3"];

    const listDiv = document.createElement("div");
    listDiv.id = "list_div";

    let columns = new Array();
    let dropZones = new Array();
    let listBtnsOptions = new Array();
    let listBtnsAdd = new Array();

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
        dropZones[i].id = `dropZone_${i}`;
        dropZones[i].classList.add("drop_zone");
        // insert drop zone in zone tasks
        divTasks.appendChild(dropZones[i]);

        if (i != 2) {
            //create btn add -- not column : Done
            const pAdd = document.createElement("p");
            pAdd.classList.add("width_100");
            listBtnsAdd[i] = document.createElement("button");
            listBtnsAdd[i].id = `btn_list_add${[i]}`;
            listBtnsAdd[i].classList.add("btn_add");
            const bAddSpan = document.createElement("span");
            const bAddContent = document.createTextNode(btnAddContent);
            const bAddTxtContent = document.createTextNode(btnAddTxtContent);
            //insert btn add  in zone tasks
            divTasks.appendChild(pAdd);
            pAdd.appendChild(listBtnsAdd[i]);
            listBtnsAdd[i].appendChild(bAddContent);
            listBtnsAdd[i].appendChild(bAddSpan);
            bAddSpan.appendChild(bAddTxtContent);
        }
        listDiv.appendChild(columns[i]);
    }

    return listDiv;
        
}


