//TRANSITION BETWEEN PAGES MAIN AND MENTIONS
const body = document.querySelector('body');
let linkPage = document.querySelector(".link_page");
let hrefLink;

linkPage.addEventListener("click", function (evt) {
    evt.preventDefault();
    hrefLink = evt.target.tagName == "IMG" ? evt.target.parentElement.href : evt.target.href;
    body.classList.add("transition_out");
    body.classList.remove("transition_in");
});

document.addEventListener("DOMContentLoaded", function (evt) {
    body.classList.remove("transition_out");
    body.classList.add("transition_in");
});

body.addEventListener("transitionend", function () {
    if(body.classList.contains("transition_out")){
        window.location.href = hrefLink;
    }
});
