export const mainBody = document.querySelector("#main_body");
import {displayMainPage} from "./mainpage_structure.js";
export const mentionsBody = document.querySelector("#body_mentions");
import {displayMentionsPage} from "./mentionspage_structure.js";

import {getLocalStorageTasks} from "./task.js";
import {createTasks} from "./task.js";

if (mainBody != null) {
    displayMainPage(mainBody);

    const taskArray = getLocalStorageTasks();
    if (taskArray != null) {
        createTasks(taskArray);
    }

}


if (mentionsBody != null) {
    displayMentionsPage(mentionsBody);
}