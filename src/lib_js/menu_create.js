export let menuContent = new Array();

//create container for context menu
export const menuContainer = document.createElement("div");
menuContainer.classList.add("menu_container");

// create component for menu
export const menuComponent = document.createElement("div");
menuComponent.classList.add("menu_component");
//insert component in container
menuContainer.appendChild(menuComponent);

//create content of Component menu
export const btnCloseMenu = document.createElement("button");
btnCloseMenu.classList.add("btn_close_menu");
const btnCloseMenuContent = document.createTextNode("X");
const menuTitle = document.createElement("h2");
menuContent[0] = document.createTextNode("");
const menuListe = document.createElement("menu");
const menuChoice1 = document.createElement("li");
menuContent[1] = document.createTextNode("");
const menuChoice2 = document.createElement("li");
menuContent[2] = document.createTextNode("");
//insert content in component
menuComponent.appendChild(btnCloseMenu);
btnCloseMenu.appendChild(btnCloseMenuContent);
menuComponent.appendChild(menuTitle);
menuTitle.appendChild(menuContent[0]);
menuComponent.appendChild(menuListe);
menuListe.appendChild(menuChoice1);
menuChoice1.appendChild(menuContent[1]);
menuListe.appendChild(menuChoice2);
menuChoice2.appendChild(menuContent[2]);