
export function createTitleList(){
    //create title list
    const titleDiv = document.createElement("div");
    titleDiv.id = "title_div";
    const titleList = document.createElement("h1");
    titleList.id = "title_list"; //need for rename by user
    const titleListContent = document.createTextNode("");
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

    return titleDiv;
}


