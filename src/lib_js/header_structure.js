 //HEADER STRUCTURE
 export const globalHeader = document.createElement("header");
 //create button dark/lightmode
 export const pBtnMode = document.createElement("p");
 const btnMode = document.createElement("button");
 btnMode.id = "btn_mode";
 //insert button dark/lightmode
 pBtnMode.appendChild(btnMode);
 //create image
export const pImgPrincipale = document.createElement("p");
 pImgPrincipale.classList.add("p_img_principale");
export const imgPrincipale = document.createElement("img");
 imgPrincipale.id = "m_img_princiaple"; //for hover to do list logo in mentions page
 imgPrincipale.srcset = "../ressources/images/logo_250x104.webp 250w, ../ressources/images/logo_495x205.webp 495w";
 imgPrincipale.sizes = "(max-width: 750px) 250px, 495px";
 imgPrincipale.src = "../ressources/images/logo_495x205.webp";
 imgPrincipale.alt = "logo To Do List, three post-it first orange with write on to, second yellow with write on do and third green with write on list";
 //insert image
 pImgPrincipale.appendChild(imgPrincipale);