export const mentionsBody = document.querySelector("#body_mentions");

//STRUCTURE
if (mentionsBody != null) {
    //create
    const mentionsHeader = document.createElement("header");
    const mentionsMain = document.createElement("main");
    const mentionsFooter = document.createElement("footer");
    //insert
    mentionsBody.appendChild(mentionsHeader);
    mentionsBody.appendChild(mentionsMain);
    mentionsBody.appendChild(mentionsFooter);

    // HEADER
    //create image 
    const mPImgPrincipale = document.createElement("p");
    mPImgPrincipale.classList.add("p_img_principale");
    const mLinkImgPrincipale = document.createElement("a");
    mLinkImgPrincipale.href = "./index.html";
    const mImgPrincipale = document.createElement("img");
    mImgPrincipale.id = "m_img_princiaple";
    mImgPrincipale.srcset = "../ressources/images/logo_250x104.webp 250w, ../ressources/images/logo_495x205.webp 495w";
    mImgPrincipale.sizes = "(max-width: 1140px) 250px, 495px";
    mImgPrincipale.src = "../ressources/images/logo_495x205.webp";
    mImgPrincipale.alt = "logo To Do List, three post-it first orange with write on to, second yellow with write on do and third green with write on list";
    //insert image
    mentionsHeader.appendChild(mPImgPrincipale);
    mPImgPrincipale.appendChild(mLinkImgPrincipale);
    mLinkImgPrincipale.appendChild(mImgPrincipale)

    //MAIN
    //create container for alignement
    const mContainer = document.createElement("div");
    mContainer.id = "m_container";
    //insert container
    mentionsMain.appendChild(mContainer);
    //create component
    const mComponent = document.createElement("div");
    mComponent.id = "m_component";
    //insert component
    mContainer.appendChild(mComponent);

    //create title
    const mTitle1 = document.createElement("h1");
    const mTitle1Content = document.createTextNode("Legal Mentions");
    //insert title
    mComponent.appendChild(mTitle1);
    mTitle1.appendChild(mTitle1Content);
    //create P1
    const mParagraphe1 = document.createElement("p");
    const mParagraphe1Content = document.createTextNode("This site was created by Joelle Moureu as part of the web developer training course with Online FormaPro in Lure, session 23-24.");
    //insert P1
    mComponent.appendChild(mParagraphe1);
    mParagraphe1.appendChild(mParagraphe1Content);
    //create P2
    const mParagraphe2 = document.createElement("p");
    const mParagraphe2Content = document.createTextNode("No personal informations are collected, it's not declared to the CNIL.");
    //insert P2
    mComponent.appendChild(mParagraphe2);
    mParagraphe2.appendChild(mParagraphe2Content);
    //create P3
    const mParagraphe3 = document.createElement("p");
    const mParagraphe3Content = document.createTextNode("It's hosting by Vercel.");
    //insert P3
    mComponent.appendChild(mParagraphe3);
    mParagraphe3.appendChild(mParagraphe3Content);
    //create P4
    const mParagraphe4 = document.createElement("p");
    const mParagraphe4Content1 = document.createTextNode("You could find on Github the ");
    const mParagraphe4Link1 = document.createElement("a");
    mParagraphe4Link1.href = "https://github.com/JoeWebDev70/06-lab-js-todo";
    const mParagraphe4Link1Content = document.createTextNode("code");
    const mParagraphe4Content2 = document.createTextNode(" and the relative ");
    const mParagraphe4Link2 = document.createElement("a");
    mParagraphe4Link2.href = "https://github.com/JoeWebDev70/06-lab-js-todo_project";
    const mParagraphe4Link2Content = document.createTextNode("project");
    //insert P4
    mComponent.appendChild(mParagraphe4);
    mParagraphe4.appendChild(mParagraphe4Content1);
    mParagraphe4.appendChild(mParagraphe4Link1);
    mParagraphe4Link1.appendChild(mParagraphe4Link1Content);
    mParagraphe4.appendChild(mParagraphe4Content2);
    mParagraphe4.appendChild(mParagraphe4Link2);
    mParagraphe4Link2.appendChild(mParagraphe4Link2Content);
    //create P5
    const mParagraphe5 = document.createElement("p");
    const mParagraphe5Content = document.createTextNode("All pictures and logo was realized by Joelle Moureu except the official logos .");
    //insert P5
    mComponent.appendChild(mParagraphe5);
    mParagraphe5.appendChild(mParagraphe5Content);

    //FOOTER
    //create link for legal mentions
    const mLegalMentions = document.createElement("p");
    const mLinkLegalMentions = document.createElement("a");
    mLinkLegalMentions.href = "./legal_mentions.html";
    const mLinkLegalMentionsContent = document.createTextNode("Legal mentions");
    //create copyright 
    const mCopyright = document.createElement("p");
    const mCopyrightContent = document.createTextNode("Joelle Moureu \u00a9 2023");
    // create a div for logos
    const mDivLogo = document.createElement("div");
    //create link on github
    const mLogoGithub = document.createElement("p");
    const mLinkLogoGithub = document.createElement("a");
    mLinkLogoGithub.href = "https://github.com/JoeWebDev70/JoeWebDev70";
    const mImgLogoGithub = document.createElement("img");
    mImgLogoGithub.src = "./ressources/images/github_25x25.webp";
    mImgLogoGithub.alt = "Github logo";
    //create link on github
    const mLogoLinkedin = document.createElement("p");
    const mLinkLogoLinkedin = document.createElement("a");
    mLinkLogoLinkedin.href = "https://www.linkedin.com/in/joellemoureu";
    const mImgLogoLinkedin = document.createElement("img");
    mImgLogoLinkedin.src = "./ressources/images/linkedin_25x21.webp";
    mImgLogoLinkedin.alt = "Linkedin logo";

    //insert elements in footer
    mentionsFooter.appendChild(mLegalMentions);
    mLinkLegalMentions.appendChild(mLinkLegalMentionsContent);
    mLegalMentions.appendChild(mLinkLegalMentions);

    mentionsFooter.appendChild(mCopyright);
    mCopyright.appendChild(mCopyrightContent);

    mentionsFooter.appendChild(mDivLogo);
    mDivLogo.append(mLogoGithub);
    mLogoGithub.appendChild(mLinkLogoGithub);
    mLinkLogoGithub.appendChild(mImgLogoGithub);
    mDivLogo.appendChild(mLogoLinkedin);
    mLogoLinkedin.appendChild(mLinkLogoLinkedin);
    mLinkLogoLinkedin.appendChild(mImgLogoLinkedin);
}
