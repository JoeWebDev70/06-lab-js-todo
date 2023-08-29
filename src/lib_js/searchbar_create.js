export const txtPlaceHolder = ["Search in your list", "Can't be blank!"];

export function createSearchBar(){
    const divSearch = document.createElement("div");
    divSearch.id = "search_div";

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
    inputSearch.placeholder = txtPlaceHolder[0];
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

    //p for display error message
    const pNotFound = document.createElement("p");
    pNotFound.id = "not_found";
    pNotFound.classList.add("word_not_found");
    pNotFound.classList.add("item_hiden");
    const pNotFoundContent = document.createTextNode("Word not found !");

    //insert 
    divSearch.appendChild(divSearchBar);
    divSearchBar.appendChild(formSearch);
    formSearch.appendChild(divTooltip);
    divTooltip.appendChild(inputSearch);
    divTooltip.appendChild(labelSearch);
    formSearch.appendChild(btnErase);
    formSearch.append(btnSearch);
    divSearch.appendChild(pNotFound);
    pNotFound.appendChild(pNotFoundContent);

    return divSearch;

}
