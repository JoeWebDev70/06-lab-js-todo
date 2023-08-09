export const globalFooter = document.createElement("footer");
//create link for legal mentions
export const legalMentions = document.createElement("p");
const linkLegalMentions = document.createElement("a");
linkLegalMentions.href = "./legal_mentions.html";
linkLegalMentions.classList.add("link_page");
const linkLegalMentionsContent = document.createTextNode("Legal mentions");
//create copyright 
export const copyright = document.createElement("p");
const copyrightContent = document.createTextNode("Joelle Moureu \u00a9 2023");
// create a div for logos
export const divLogo = document.createElement("div");
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
// mainFooter.appendChild(legalMentions);
linkLegalMentions.appendChild(linkLegalMentionsContent);
legalMentions.appendChild(linkLegalMentions);

// mainFooter.appendChild(copyright);
copyright.appendChild(copyrightContent);

// mainFooter.appendChild(divLogo);
divLogo.append(logoGithub);
logoGithub.appendChild(linkLogoGithub);
linkLogoGithub.appendChild(imgLogoGithub);
divLogo.appendChild(logoLinkedin);
logoLinkedin.appendChild(linkLogoLinkedin);
linkLogoLinkedin.appendChild(imgLogoLinkedin);