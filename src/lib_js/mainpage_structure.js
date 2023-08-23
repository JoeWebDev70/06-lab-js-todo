//header
import {createHeader} from "./header_structure.js";
            // import {globalHeader} from "./header_structure.js";
            // import {pBtnMode} from "./header_structure.js";
            // import {pImgPrincipale} from "./header_structure.js";
import {divSearchBar} from "./searchbar.js";
//main
import {titleDiv} from "./list_title";
import {columns} from "./list_columns.js";
import {menuContainer} from "./menu_create.js";
import {dialog} from "./dialog_create.js";

//footer
import {globalFooter} from "./footer_structure.js";
import {legalMentions} from "./footer_structure.js";
import {copyright} from "./footer_structure.js";
import {divLogo} from "./footer_structure.js";

export const mainBody = document.querySelector("#main_body");
const mainDiv = document.querySelector("#main_div");

//STRUCTURE
if (mainBody != null) {
    //create
    const mainHeader = createHeader();
                // const mainHeader = globalHeader;
    const mainMain = document.createElement("main");;
    const mainFooter = globalFooter;
    
    //insert
    mainBody.insertBefore(menuContainer, mainDiv);
    mainBody.insertBefore(dialog, mainDiv);
    mainBody.insertBefore(mainHeader, mainDiv);
    mainBody.insertBefore(mainMain, mainDiv);
    mainMain.append(mainDiv);
    mainBody.appendChild(mainFooter);

                    //HEADER
                    // mainHeader.appendChild(pBtnMode); //insert button dark/lightmode
                    // mainHeader.appendChild(pImgPrincipale); //insert image

    //MAIN
    //insert the importing search bar in main
    mainMain.insertBefore(divSearchBar, mainDiv);
    //insert structure list in div in main
    mainDiv.appendChild(titleDiv);
    //create a div for list : titles h2 and tasks
    const listDiv = document.createElement("div");
    listDiv.id = "list_div";
    mainDiv.appendChild(listDiv);
    columns.forEach(function(column) {
        listDiv.appendChild(column);
    });

    //FOOTER
    mainFooter.appendChild(legalMentions);
    mainFooter.appendChild(copyright);
    mainFooter.appendChild(divLogo);
}
