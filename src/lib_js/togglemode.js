import {mainBody} from "./mainpage_structure.js";
import {mentionsBody} from "./mentionspage_structure.js";

const toggleModeBtn = document.querySelector("#btn_mode");
const preferColor = window.matchMedia("(prefers-color-scheme: dark)");
let toggleModeChoice;

if(mainBody != null) {
    let tmpToggle = mainBody.getAttribute("class").split(" ");
    tmpToggle.forEach(function(classIn){
        if(classIn.includes("_mode")){
            toggleModeChoice = classIn; //get default mode
        }
    });
}

//! sometimes need to change favicon on dark mode
//*const faviconElement = document.querySelector("link[rel='shortcut icon']");
//! when elements are created direcly in HTML sometimes need to select all of them and apply classes for changing mode 
//*example :
//*const elementsMain = document.querySelectorAll("#body_main *"); 
//! SEE : 05-lab-js-dictionary

//get if local storage contain some value and set it 
if(!localStorage.getItem("toggleModeChoice")){
    localStorage.href = 'index.html';
}
if(localStorage.getItem("toggleModeChoice") != null){
    toggleModeChoice = localStorage.getItem("toggleModeChoice");
}
setTheme(toggleModeChoice);

//get if storage change
window.addEventListener("storage", function(){
    toggleModeChoice = localStorage.getItem("toggleModeChoice");
    setTheme(toggleModeChoice);
});

//if prefer color of computer change set it
preferColor.addEventListener("change", (e) =>{
    if(e.matches){
        toggleModeChoice = "dark_mode";
        setTheme("dark_mode");
    }else{
        toggleModeChoice = "light_mode";
        setTheme("light_mode");
    }
    setToggleModeChoice();
});

//else get the color prefer set with toggle on local storage
if(toggleModeChoice == null){
    if (preferColor.matches || toggleModeChoice == "dark_mode") {
        setTheme("dark_mode");
    } else{
        setTheme("light_mode");
    }
}else{
    if(toggleModeBtn != null){
        toggleModeBtn.addEventListener("click", function () {
            if(mainBody != null) {
                mainBody.classList.toggle("dark_mode");
                mainBody.classList.toggle("light_mode");
                toggleModeChoice = mainBody.className;
                setToggleModeChoice();
            }
        });
    }
}

function setToggleModeChoice(){
    localStorage.removeItem("toggleModeChoice");
    let tmpToggle = toggleModeChoice.split(" ");
    tmpToggle.forEach(function(classIn){
        if(classIn.includes("_mode")){
            toggleModeChoice = classIn; //get default 
        }
    })
    localStorage.setItem("toggleModeChoice", toggleModeChoice);
}

//set color on various elements
function setTheme(color){
    if (color == "dark_mode") {
        if(mainBody != null) {
            mainBody.classList.add("dark_mode");
            mainBody.classList.remove("light_mode");
        }

        if(mentionsBody != null){
            mentionsBody.classList.add("dark_mode");
            mentionsBody.classList.remove("light_mode");
        }
    } else {
        if(mainBody != null) {
            mainBody.classList.remove("dark_mode");
            mainBody.classList.add("light_mode");
        }

        if(mentionsBody != null){
            mentionsBody.classList.remove("dark_mode");
            mentionsBody.classList.add("light_mode");
        }
    }
}

