const dancing = document.getElementById("js--dancing");
const lato = document.getElementById("js--lato");
const merriweather = document.getElementById("js--merriweather");
const input = document.getElementById("js--input");

input.oninput = function(event){
    dancing.innerText = event.target.value;
    lato.innerText = event.target.value;
    merriweather.innerText = event.target.value;
}


/* Javascript for favorites */

const hearts = document.getElementsByClassName("heart");
for(let i = 0; i < hearts.length; i++){
    hearts[i].onclick = function(){
        for(let i = 0; i < hearts.length; i++){
            hearts[i].children[0].classList = "fa-regular fa-heart heart__logo";
        }
        hearts[i].children[0].classList = "fa-solid fa-heart heart__logo";
    }
}

const toggle = document.getElementById("toggle");
const showcase = document.querySelector(".showcase");
const header = document.querySelector(".header");

toggle.addEventListener("change", function () {
    if (toggle.checked) {
        // Quando o toggle está marcado (checked)
        showcase.classList.add("showcase--black");
        header.classList.add("header--black");
    } else {
        // Quando o toggle não está marcado (unchecked)
        showcase.classList.remove("showcase--black");
        header.classList.remove("header--black");
    }
});

