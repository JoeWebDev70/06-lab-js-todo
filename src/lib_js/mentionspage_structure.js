//MENTIONS PAGE STRUCTURE
import {createHeader} from "./header_structure.js";
            // import {globalHeader} from "./header_structure.js";
            // import {pImgPrincipale} from "./header_structure.js";
            // import {imgPrincipale} from "./header_structure.js";
            // import {mContainer} from "./mentionspage_content.js";
import {mentionsPageContentCreate} from "./mentionspage_content.js";


import {globalFooter} from "./footer_structure.js";
import {legalMentions} from "./footer_structure.js";
import {copyright} from "./footer_structure.js";
import {divLogo} from "./footer_structure.js";

export const mentionsBody = document.querySelector("#body_mentions");

//STRUCTURE
if (mentionsBody != null) {
    //create
    const mentionsHeader = createHeader();
                // const mentionsHeader = globalHeader;
    const mentionsMain = document.createElement("main");
    const mentionsFooter = globalFooter;
    //insert
    mentionsBody.appendChild(mentionsHeader);
    mentionsBody.appendChild(mentionsMain);
    mentionsBody.appendChild(mentionsFooter);

    // HEADER
    //create link home page
    const mLinkImgPrincipale = document.createElement("a");
    mLinkImgPrincipale.href = "./index.html";
    mLinkImgPrincipale.classList.add("link_page");
    //insert Link home page  
    const imgLinkHomePage = document.querySelector("#m_img_princiaple");
    const pLinkHomePage = imgLinkHomePage.parentElement;
    pLinkHomePage.appendChild(mLinkImgPrincipale);
    mLinkImgPrincipale.appendChild(imgLinkHomePage);
                // mentionsHeader.appendChild(pImgPrincipale);
                // pImgPrincipale.appendChild(mLinkImgPrincipale);
                // mLinkImgPrincipale.appendChild(imgPrincipale);

    //MAIN
    
    mentionsMain.appendChild(mentionsPageContentCreate());
                        // mentionsMain.appendChild(mContainer);

    //FOOTER
    mentionsFooter.appendChild(legalMentions);
    mentionsFooter.appendChild(copyright);
    mentionsFooter.appendChild(divLogo);
}
