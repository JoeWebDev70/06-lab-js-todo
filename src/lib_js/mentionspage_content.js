//MENTIONS PAGE CONTENT
export function mentionsPageContentCreate(){
    //create container for alignement
    const mContainer = document.createElement("div");
    mContainer.id = "m_container";

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
    
    return mContainer;
}