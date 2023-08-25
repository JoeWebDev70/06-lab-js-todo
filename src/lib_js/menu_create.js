export function createMenuContainer(){

    //create container for context menu
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu_container");

    // create component for menu
    const menuComponent = document.createElement("div");
    menuComponent.classList.add("menu_component");
    //insert component in container
    menuContainer.appendChild(menuComponent);

    //create content of Component menu
    const btnCloseMenu = document.createElement("button");
    btnCloseMenu.classList.add("btn_close_menu");
    const btnCloseMenuContent = document.createTextNode("X");
    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("menu_content");
    const menuTitleContent = document.createTextNode("");
    const menuListe = document.createElement("menu");
    const menuChoice1 = document.createElement("li");
    menuChoice1.classList.add("menu_content");
    menuChoice1.classList.add("menu_choice");
    const menuChoice1Content = document.createTextNode("");
    const menuChoice2 = document.createElement("li");
    menuChoice2.classList.add("menu_content");
    menuChoice2.classList.add("menu_choice");
    const menuChoice2Content = document.createTextNode("");

    //insert content in component
    menuComponent.appendChild(btnCloseMenu);
    btnCloseMenu.appendChild(btnCloseMenuContent);
    menuComponent.appendChild(menuTitle);
    menuTitle.appendChild(menuTitleContent);
    menuComponent.appendChild(menuListe);
    menuListe.appendChild(menuChoice1);
    menuChoice1.appendChild(menuChoice1Content);
    menuListe.appendChild(menuChoice2);
    menuChoice2.appendChild(menuChoice2Content);

    return menuContainer;
}
