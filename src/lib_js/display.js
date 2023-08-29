export const mainBody = document.querySelector("#main_body");
import {displayMainPage} from "./mainpage_structure.js";
export const mentionsBody = document.querySelector("#body_mentions");
import {displayMentionsPage} from "./mentionspage_structure.js";
import {createTasks} from "./task.js";


if (mainBody != null) {
    displayMainPage(mainBody);
    createTasks();
  
}


if (mentionsBody != null) {
    displayMentionsPage(mentionsBody);
}