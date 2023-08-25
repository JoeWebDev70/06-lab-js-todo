import {mainBody} from "./display.js";
import {mentionsBody} from "./display.js";

const toggleModeBtn = document.querySelector("#btn_mode");
const preferColor = window.matchMedia("(prefers-color-scheme: dark)");
let toggleModeChoice;

//set default mode on local storage
if(mainBody != null) {
    toggleModeChoice = mainBody.className;
    setToggleModeChoice(); 
}

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
        if(mainBody != null) { classListToggle(mainBody, "light_mode", "dark_mode");}
        if(mentionsBody != null){classListToggle(mentionsBody, "light_mode", "dark_mode");}
    } else {
        if(mainBody != null) {classListToggle(mainBody, "dark_mode", "light_mode");}
        if(mentionsBody != null){classListToggle(mentionsBody, "dark_mode", "light_mode");}
    }
}

function classListToggle(item, classRemove, classAdd){
    item.classList.remove(classRemove);
    item.classList.add(classAdd);
}