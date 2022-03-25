// classList--shows/gets all the classes
// contains --checks classlist for specific class
// add-add class
// remove--remove class
// toggle--toggle class

let navbar = document.querySelector(".nav-toggle");

document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    information.classList.remove("active");
}

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    information.classList.remove("active");
}

let information = document.querySelector(".information");

document.querySelector("#info-btn").onclick = () =>{
    cartItem.classList.toggle("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
}

window.onscroll = () =>{
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    information.classList.remove("active");
}