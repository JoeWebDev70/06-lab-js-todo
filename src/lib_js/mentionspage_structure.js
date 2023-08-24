//MENTIONS PAGE STRUCTURE
import {createHeader} from "./header_structure.js";
import {mentionsPageContentCreate} from "./mentionspage_content.js";
import {createFooter} from "./footer_structure.js";


export const mentionsBody = document.querySelector("#body_mentions");

//STRUCTURE
export function displayMentionsPage() {
    if (mentionsBody != null) {
        // HEADER
        const mentionsHeader = createHeader();
        if (mentionsHeader != null) {
            mentionsBody.appendChild(mentionsHeader);
            //create link home page
            const mLinkImgPrincipale = document.createElement("a");
            mLinkImgPrincipale.href = "./index.html";
            mLinkImgPrincipale.classList.add("link_page");
            //insert Link home page  
            const imgLinkHomePage = document.querySelector("#m_img_princiaple");
            const pLinkHomePage = imgLinkHomePage.parentElement;
            pLinkHomePage.appendChild(mLinkImgPrincipale);
            mLinkImgPrincipale.appendChild(imgLinkHomePage);
        }else{
            console.log("Header is null in mentionspage_structure");
        }

        //MAIN
        const mentionsMain = document.createElement("main");
        const mentionsContent = mentionsPageContentCreate();
        if(mentionsContent != null) {
            mentionsBody.appendChild(mentionsMain);  
            mentionsMain.appendChild(mentionsContent);  
        }else{
            console.log("mentionsContent is null in mentionspage_structure");
        }

        //FOOTER
        const mentionsFooter = createFooter();
        if (mentionsFooter != null) {
            mentionsBody.appendChild(mentionsFooter);
        }else{
            console.log("Footer is null in mentionspage_structure");
        }  
    }
}