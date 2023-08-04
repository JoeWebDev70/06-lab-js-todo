//MENTIONS PAGE STRUCTURE
import {globalHeader} from "./header_structure.js";
import {pImgPrincipale} from "./header_structure.js";
import {imgPrincipale} from "./header_structure.js";
import {mContainer} from "./mentionspage_content.js";

import {globalFooter} from "./footer_structure.js";
import {legalMentions} from "./footer_structure.js";
import {copyright} from "./footer_structure.js";
import {divLogo} from "./footer_structure.js";

export const mentionsBody = document.querySelector("#body_mentions");

//STRUCTURE
if (mentionsBody != null) {
    //create
    const mentionsHeader = globalHeader;
    const mentionsMain = document.createElement("main");
    const mentionsFooter = globalFooter;
    //insert
    mentionsBody.appendChild(mentionsHeader);
    mentionsBody.appendChild(mentionsMain);
    mentionsBody.appendChild(mentionsFooter);

    // HEADER
    //create link
    const mLinkImgPrincipale = document.createElement("a");
    mLinkImgPrincipale.href = "./index.html";
    mLinkImgPrincipale.classList.add("link_page");
    //insert image
    mentionsHeader.appendChild(pImgPrincipale);
    pImgPrincipale.appendChild(mLinkImgPrincipale);
    mLinkImgPrincipale.appendChild(imgPrincipale);

    //MAIN
    mentionsMain.appendChild(mContainer);

    //FOOTER
    mentionsFooter.appendChild(legalMentions);
    mentionsFooter.appendChild(copyright);
    mentionsFooter.appendChild(divLogo);
}
