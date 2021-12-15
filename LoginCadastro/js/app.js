var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function () {
  body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
  body.className = "sign-up-js";
});

// FAGGAGAG
let containerChangeTheme = document.getElementById("changeTheme");
let checkTheme = document.getElementById("theme");
let html = document.querySelector("html");

// Quando houver uma mudança de estado no input(checkTheme) chamar a função que vai realizar a animação de mudança no input e adicionar/remover (toggle) a class 'changeTheme' no html (mudando assim as cores do site)

checkTheme.addEventListener("change", changeTheme);

function changeTheme() {
  containerChangeTheme.classList.toggle("change");

  html.classList.toggle("changeTheme");
}
