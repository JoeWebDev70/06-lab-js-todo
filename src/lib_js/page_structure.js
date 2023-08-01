const mainBody = document.querySelector("#main_body");
const mainDiv = document.querySelector("#main_div");
const mainHeader = document.createElement("header");
const mainMain = document.createElement("main");
const mainFooter = document.createElement("footer");

//STRUCTURE
mainBody.insertBefore(mainHeader, mainDiv);
mainBody.insertBefore(mainMain, mainDiv);
mainMain.append(mainDiv);
mainBody.appendChild(mainFooter);

//HEADER
//button dark/lightmode
const pBtnMode = document.createElement("p");
const btnMode = document.createElement("button");
btnMode.id = "btn_mode";
mainHeader.appendChild(pBtnMode);
pBtnMode.appendChild(btnMode);
//image
const imgPrincipale = document.createElement("img");
imgPrincipale.srcset = "../ressources/images/logo_250x104.webp 250w, ../ressources/images/logo_495x205.webp 495w";
imgPrincipale.sizes = "(max-width: 1140px) 250px, 495px";
imgPrincipale.src = "../ressources/images/logo_495x205.webp";
imgPrincipale.alt = "logo To Do List, three post-it first orange with write on to, second yellow with write on do and third green with write on list";
mainHeader.appendChild(imgPrincipale);

//MAIN
//search bar
const divSearchBar = document.createElement("div");
divSearchBar.id = "search_bar";
const formSearch = document.createElement("form");
formSearch.id = "search_form";
formSearch.noValidate = true;
const divTooltip = document.createElement("div");
divTooltip.classList.add("tooltip_container");
const inputSearch = document.createElement("input");
inputSearch.type = "text";
inputSearch.id = "input_search";
inputSearch.name = "input_search";
inputSearch.dataError = "Can't be blank!";
inputSearch.placeholder = "Search in your lists";
inputSearch.required = true;
const labelSearch = document.createElement("label");
labelSearch.for = "input_search";
labelSearch.textContent = "Enter your word";
labelSearch.classList.add("tooltip_content");
const btnErase = document.createElement("button");
btnErase.type = "button";
btnErase.id = "btn_erase";
btnErase.textContent = "X";
// btnErase.classList.add("hide_item");
const btnSearch = document.createElement("button");
btnSearch.type = "submit";
btnSearch.id = "submit";

mainMain.insertBefore(divSearchBar, mainDiv);
divSearchBar.appendChild(formSearch);
formSearch.appendChild(divTooltip);
divTooltip.appendChild(inputSearch);
divTooltip.appendChild(labelSearch);
formSearch.appendChild(btnErase);
formSearch.append(btnSearch);


// mainBody.classList.add("dark_mode");