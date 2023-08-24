//TRANSITION BETWEEN PAGES MAIN AND MENTIONS
const bodyTransition = document.querySelector('body');
let linkPage = document.querySelector(".link_page");
let hrefLink;

if (linkPage != null) {
    linkPage.addEventListener("click", function (evt) {
        evt.preventDefault();
        hrefLink = evt.target.tagName == "IMG" ? evt.target.parentElement.href : evt.target.href;
        bodyTransition.classList.add("transition_out");
        bodyTransition.classList.remove("transition_in");
    });
}

document.addEventListener("DOMContentLoaded", function () {
    bodyTransition.classList.remove("transition_out");
    bodyTransition.classList.add("transition_in");
});

if(bodyTransition != null) {
    bodyTransition.addEventListener("transitionend", function () {
        if(bodyTransition.classList.contains("transition_out")){
            window.location.href = hrefLink;
        }
    });
}