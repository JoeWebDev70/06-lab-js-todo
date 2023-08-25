//header
import {createHeader} from "./header_structure.js";
import {createSearchBar} from "./searchbar_create.js";
//main
import {createMenuContainer} from "./menu_create.js";
import {createDialog} from "./dialog_create.js";
import {createTitleList} from "./list_title_create.js";
import {createListColumns} from "./list_columns.js";
//footer
import {createFooter} from "./footer_structure.js";

export function displayMainPage(mainBody){

        //HEADER ET DIALOG / MODAL
        const mainDiv = document.querySelector("#main_div");

        const menuContainer = createMenuContainer();
        if (menuContainer != null) {
            mainBody.insertBefore(menuContainer, mainDiv);
        }else{console.log("menuContainer is null in mainpage_structure");}

        const optionsDialog = createDialog();
        if (optionsDialog != null) {
            mainBody.insertBefore(optionsDialog, mainDiv);
        }else{console.log("optionsDialog is null in mainpage_structure");}
        
        const mainHeader = createHeader();
        if (mainHeader != null) {
            mainBody.insertBefore(mainHeader, mainDiv);
        }else{console.log("Header is null in mainpage_structure");}

        //MAIN
        const mainMain = document.createElement("main");
        mainBody.insertBefore(mainMain, mainDiv);
        mainMain.append(mainDiv);
        //insert the importing search bar in main
        const divSearchBar = createSearchBar();
        mainMain.insertBefore(divSearchBar, mainDiv);
        //insert structure list in div in main
        const titleDiv = createTitleList();
        mainDiv.appendChild(titleDiv);
        //create a div for list : titles h2 and tasks
        const listDiv = createListColumns();
        mainDiv.appendChild(listDiv);

        //FOOTER
        const mainFooter = createFooter();
        if(mainFooter != null){mainBody.appendChild(mainFooter);
        }else{
            console.log("Footer is null in mainpage_structure");
        }
}