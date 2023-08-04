//MAIN PAGE STRUCTURE
import {globalHeader} from "./header_structure.js";
import {pBtnMode} from "./header_structure.js";
import {pImgPrincipale} from "./header_structure.js";
import {divSearchBar} from "./searchbar.js";
// import {titleDiv} from "./list_col_structure.js";
// import {listDiv} from "./list_col_structure.js";
import {globalFooter} from "./footer_structure.js";
import {legalMentions} from "./footer_structure.js";
import {copyright} from "./footer_structure.js";
import {divLogo} from "./footer_structure.js";

export const mainBody = document.querySelector("#main_body");

const mainDiv = document.querySelector("#main_div");
//STRUCTURE
if (mainBody != null) {
    //create
    const mainHeader = globalHeader;
    const mainMain = document.createElement("main");;
    const mainFooter = globalFooter;
    //insert
    mainBody.insertBefore(mainHeader, mainDiv);
    mainBody.insertBefore(mainMain, mainDiv);
    mainMain.append(mainDiv);
    mainBody.appendChild(mainFooter);

    //HEADER
    mainHeader.appendChild(pBtnMode); //insert button dark/lightmode
    mainHeader.appendChild(pImgPrincipale); //insert image

    //MAIN
    //insert yhe importing search bar in main
    mainMain.insertBefore(divSearchBar, mainDiv);
    //insert structure list in div in main
    // mainDiv.appendChild(titleDiv);
    // mainDiv.appendChild(listDiv);

    //FOOTER
    mainFooter.appendChild(legalMentions);
    mainFooter.appendChild(copyright);
    mainFooter.appendChild(divLogo);
}
