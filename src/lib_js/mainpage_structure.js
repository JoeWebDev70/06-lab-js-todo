import {divSearchBar} from "./searchbar.js";
import {titleDiv} from "./list_structure.js";
import {listDiv} from "./list_structure.js";


export const mainBody = document.querySelector("#main_body");

const mainDiv = document.querySelector("#main_div");
//STRUCTURE
if (mainBody != null) {
    //create
    const mainHeader = document.createElement("header");
    const mainMain = document.createElement("main");
    const mainFooter = document.createElement("footer");
    //insert
    mainBody.insertBefore(mainHeader, mainDiv);
    mainBody.insertBefore(mainMain, mainDiv);
    mainMain.append(mainDiv);
    mainBody.appendChild(mainFooter);

    //HEADER
    //create button dark/lightmode
    const pBtnMode = document.createElement("p");
    const btnMode = document.createElement("button");
    btnMode.id = "btn_mode";
    //insert button dark/lightmode
    mainHeader.appendChild(pBtnMode);
    pBtnMode.appendChild(btnMode);
    //create image
    const pImgPrincipale = document.createElement("p");
    pImgPrincipale.classList.add("p_img_principale");
    const imgPrincipale = document.createElement("img");
    imgPrincipale.srcset = "../ressources/images/logo_250x104.webp 250w, ../ressources/images/logo_495x205.webp 495w";
    imgPrincipale.sizes = "(max-width: 1140px) 250px, 495px";
    imgPrincipale.src = "../ressources/images/logo_495x205.webp";
    imgPrincipale.alt = "logo To Do List, three post-it first orange with write on to, second yellow with write on do and third green with write on list";
    //insert image
    mainHeader.appendChild(pImgPrincipale);
    pImgPrincipale.appendChild(imgPrincipale);

    //MAIN
    //insert yhe importing search bar in main
    mainMain.insertBefore(divSearchBar, mainDiv);
    //insert structure list in div in main
    mainDiv.appendChild(titleDiv);
    mainDiv.appendChild(listDiv);

    //FOOTER
    //create link for legal mentions
    const legalMentions = document.createElement("p");
    const linkLegalMentions = document.createElement("a");
    linkLegalMentions.href = "./legal_mentions.html";
    const linkLegalMentionsContent = document.createTextNode("Legal mentions");
    //create copyright 
    const copyright = document.createElement("p");
    const copyrightContent = document.createTextNode("Joelle Moureu \u00a9 2023");
    // create a div for logos
    const divLogo = document.createElement("div");
    //create link on github
    const logoGithub = document.createElement("p");
    const linkLogoGithub = document.createElement("a");
    linkLogoGithub.href = "https://github.com/JoeWebDev70/JoeWebDev70";
    const imgLogoGithub = document.createElement("img");
    imgLogoGithub.src = "./ressources/images/github_25x25.webp";
    imgLogoGithub.alt = "Github logo";
    imgLogoGithub.style.width = "25px";
    imgLogoGithub.style.height = "25px";
    //create link on github
    const logoLinkedin = document.createElement("p");
    const linkLogoLinkedin = document.createElement("a");
    linkLogoLinkedin.href = "https://www.linkedin.com/in/joellemoureu";
    const imgLogoLinkedin = document.createElement("img");
    imgLogoLinkedin.src = "./ressources/images/linkedin_25x21.webp";
    imgLogoLinkedin.alt = "Linkedin logo";
    imgLogoLinkedin.style.width = "25px";
    imgLogoLinkedin.style.height = "21px";

    //insert elements in footer
    mainFooter.appendChild(legalMentions);
    linkLegalMentions.appendChild(linkLegalMentionsContent);
    legalMentions.appendChild(linkLegalMentions);

    mainFooter.appendChild(copyright);
    copyright.appendChild(copyrightContent);

    mainFooter.appendChild(divLogo);
    divLogo.append(logoGithub);
    logoGithub.appendChild(linkLogoGithub);
    linkLogoGithub.appendChild(imgLogoGithub);
    divLogo.appendChild(logoLinkedin);
    logoLinkedin.appendChild(linkLogoLinkedin);
    linkLogoLinkedin.appendChild(imgLogoLinkedin);
}
