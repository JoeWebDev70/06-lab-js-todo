export function createSearchBar(){
    //create search bar
    const divSearchBar = document.createElement("div");
    divSearchBar.id = "search_bar";

    //create form
    const formSearch = document.createElement("form");
    formSearch.id = "search_form";
    formSearch.noValidate = true;

    //create tooltip for label on input
    const divTooltip = document.createElement("div");
    divTooltip.classList.add("tooltip_container");
    //create input for searching word
    const inputSearch = document.createElement("input");
    inputSearch.type = "text";
    inputSearch.id = "input_search";
    inputSearch.name = "input_search";
    inputSearch.dataError = "Can't be blank!";
    const txtPlaceHolder = "Search in your lists";
    inputSearch.placeholder = txtPlaceHolder;
    inputSearch.required = true;

    //create label for input
    const labelSearch = document.createElement("label");
    labelSearch.for = "input_search";
    labelSearch.textContent = "Enter your word";
    labelSearch.classList.add("tooltip_content");

    //create erase button
    const btnErase = document.createElement("button");
    btnErase.type = "button";
    btnErase.id = "btn_erase";
    btnErase.textContent = "X";
    btnErase.classList.add("item_hiden");

    //create submit button
    const btnSearch = document.createElement("button");
    btnSearch.type = "submit";
    btnSearch.id = "submit";

    //insert 
    divSearchBar.appendChild(formSearch);
    formSearch.appendChild(divTooltip);
    divTooltip.appendChild(inputSearch);
    divTooltip.appendChild(labelSearch);
    formSearch.appendChild(btnErase);
    formSearch.append(btnSearch);

    return divSearchBar;

}
