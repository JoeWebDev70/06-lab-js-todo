const mentionsBody = document.querySelector("#body_mentions");

//STRUCTURE
if (mentionsBody != null) {
    //create
    const mentionsHeader = document.createElement("header");
    const mentionsMain = document.createElement("main");
    const mentionsFooter = document.createElement("footer");
    //insert
    mentionsBody.appendChild(mentionsHeader);
    mentionsBody.insertBefore(mentionsMain);
    mentionsBody.appendChild(mentionsFooter);

    //HEADER
    //create image 
    const mPImgPrincipale = document.createElement("p");
    mPImgPrincipale.classList.add("p_img_principale");
    const mLinkImgPrincipale = document.createElement("a");
    mLinkImgPrincipale.href = "./index.html";
    const mImgPrincipale = document.createElement("img");
    mImgPrincipale.srcset = "../ressources/images/logo_250x104.webp 250w, ../ressources/images/logo_495x205.webp 495w";
    mImgPrincipale.sizes = "(max-width: 1140px) 250px, 495px";
    mImgPrincipale.src = "../ressources/images/logo_495x205.webp";
    mImgPrincipale.alt = "logo To Do List, three post-it first orange with write on to, second yellow with write on do and third green with write on list";
    //insert image
    mentionsHeader.appendChild(mPImgPrincipale);
    mPImgPrincipale.appendChild(mLinkImgPrincipale);
    mLinkImgPrincipale.appendChild(mImgPrincipale)

    //MAIN
    // //create search bar
    // const divSearchBar = document.createElement("div");
    // divSearchBar.id = "search_bar";
    // //create form
    // const formSearch = document.createElement("form");
    // formSearch.id = "search_form";
    // formSearch.noValidate = true;
    // //create tooltip for label on input
    // const divTooltip = document.createElement("div");
    // divTooltip.classList.add("tooltip_container");
    // //create input for searching word
    // const inputSearch = document.createElement("input");
    // inputSearch.type = "text";
    // inputSearch.id = "input_search";
    // inputSearch.name = "input_search";
    // inputSearch.dataError = "Can't be blank!";
    // inputSearch.placeholder = "Search in your lists";
    // inputSearch.required = true;
    // //create label for input
    // const labelSearch = document.createElement("label");
    // labelSearch.for = "input_search";
    // labelSearch.textContent = "Enter your word";
    // labelSearch.classList.add("tooltip_content");
    // //create erase button
    // const btnErase = document.createElement("button");
    // btnErase.type = "button";
    // btnErase.id = "btn_erase";
    // btnErase.textContent = "X";
    // btnErase.classList.add("hide_item");
    // //create submit button
    // const btnSearch = document.createElement("button");
    // btnSearch.type = "submit";
    // btnSearch.id = "submit";

    // //insert elements in main
    // mainMain.insertBefore(divSearchBar, mainDiv);
    // divSearchBar.appendChild(formSearch);
    // formSearch.appendChild(divTooltip);
    // divTooltip.appendChild(inputSearch);
    // divTooltip.appendChild(labelSearch);
    // formSearch.appendChild(btnErase);
    // formSearch.append(btnSearch);


    // //FOOTER
    // //create link for legal mentions
    // const mLegalMentions = document.createElement("p");
    // const mLinkLegalMentions = document.createElement("a");
    // mLinkLegalMentions.href = "./legal_mentions.html";
    // const mLinkLegalMentionsContent = document.createTextNode("Legal mentions");
    // //create copyright 
    // const mCopyright = document.createElement("p");
    // const mCopyrightContent = document.createTextNode("Joelle Moureu \u00a9 2023");
    // // create a div for logos
    // const mDivLogo = document.createElement("div");
    // //create link on github
    // const mLogoGithub = document.createElement("p");
    // const mLinkLogoGithub = document.createElement("a");
    // mLinkLogoGithub.href = "https://github.com/JoeWebDev70/JoeWebDev70";
    // const mImgLogoGithub = document.createElement("img");
    // mImgLogoGithub.src = "./ressources/images/github_25x25.webp";
    // mImgLogoGithub.alt = "Github logo";
    // //create link on github
    // const mLogoLinkedin = document.createElement("p");
    // const mLinkLogoLinkedin = document.createElement("a");
    // mLinkLogoLinkedin.href = "https://www.linkedin.com/in/joellemoureu";
    // const mImgLogoLinkedin = document.createElement("img");
    // mImgLogoLinkedin.src = "./ressources/images/linkedin_25x21.webp";
    // mImgLogoLinkedin.alt = "Linkedin logo";

    // //insert elements in footer
    // mentionsFooter.appendChild(mLegalMentions);
    // mLinkLegalMentions.appendChild(mLinkLegalMentionsContent);
    // mLegalMentions.appendChild(mLinkLegalMentions);

    // mentionsFooter.appendChild(mCopyright);
    // mCopyright.appendChild(mCopyrightContent);

    // mentionsFooter.appendChild(mDivLogo);
    // mDivLogo.append(mLogoGithub);
    // mLogoGithub.appendChild(mLinkLogoGithub);
    // mLinkLogoGithub.appendChild(mImgLogoGithub);
    // mDivLogo.appendChild(mLogoLinkedin);
    // mLogoLinkedin.appendChild(mLinkLogoLinkedin);
    // mLinkLogoLinkedin.appendChild(mImgLogoLinkedin);
}
// mainBody.classList.add("dark_mode");