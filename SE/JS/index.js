let boxToggle = document.getElementById("boxToggleMenu");
let toggle = document.getElementById("toggleMenu");
let menu = document.getElementById("menu");
let closeMenu = document.getElementById("closeMenu");
let body = document.querySelector("body");
let boxPreloader = document.getElementById("preloader");
// Ao clicar no botão 'closeMenu' remove a class 'show' do menu

closeMenu.addEventListener("click", () => {
  let menu = closeMenu.closest("#menu");
  menu.classList.remove("show");

  toggle.classList.remove("show");
  boxToggle.classList.remove("menuActive");
});

// Ao clicar no botão .... //

// Ao clicar no botão 'boxToggle' chama a função 'showMenu' que por sua vez adiciona a class 'show' no menu e no próprio 'boxToggle' (animação)

boxToggle.addEventListener("click", showMenu);

function showMenu() {
  menu.classList.add("show");
  boxToggle.classList.add("menuActive");
}

// Ao clicar no botão... //

let html = document.querySelector("html");
let checkTheme = document.getElementById("theme");
let containerChangeTheme = document.getElementById("changeTheme");
let header = document.querySelector("header");

// Quando realizar o scroll, adicionar a classe 'stickyHeaderMb' no header e remover caso o scrollY for maior que 0;

window.addEventListener("scroll", () => {
  header.classList.toggle("stickyHeaderMb", window.scrollY > 0);
});

// Quando realizar o scroll... //

// Quando mudar o estado do input 'checkTheme', chamar a função que anima o mesmo e muda a cor do site

let theme = "dark";

checkTheme.addEventListener("change", changeTheme);

function changeTheme() {
  verification();
}

function replaceTheme() {
  theme === "dark" ? (theme = "light") : (theme = "dark");
  localStorage.setItem("theme", theme);
}

function verification() {
  if (localStorage.theme === "dark" || !localStorage.theme) {
    containerChangeTheme.classList.add("change");
    html.classList.add("changeTheme");
    localStorage.setItem("theme", "light");
  } else if (localStorage.theme === "light") {
    containerChangeTheme.classList.remove("change");
    html.classList.remove("changeTheme");
    localStorage.setItem("theme", "dark");
  }
}

// Quando mudar o estado do... //

// Ao clicar em um item de alguma lista do site, realizar a adição ou remoção da class 'showUl'

let ulsContents = document.querySelectorAll(".content ul li");

ulsContents.forEach((ulContent) => {
  ulContent.addEventListener("click", () => {
    if (ulContent.children[1].className == "description") {
      ulContent.classList.toggle("showUl");
    }
  });
});

// Ao clicar em um item.. //

// pega o evento de load da página e executa a função preloader com um time definido.

window.addEventListener("load", preloader);

function preloader() {
  if (localStorage.theme) {
    if (localStorage.theme === "light") {
      containerChangeTheme.classList.add("change");
      html.classList.add("changeTheme");
    } else if (localStorage.theme === "dark") {
      containerChangeTheme.classList.remove("change");
      html.classList.remove("changeTheme");
    }
  }
  setTimeout(() => {
    body.style.overflow = "visible";
    boxPreloader.style.display = "none";
  }, 3500);
}

window.addEventListener("load", videoContent);

function videoContent() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    closeEmbedVideo();
  } else {
    embedVideo();
  }
}

let closeEmbed = document.getElementById("closeEmbed");
let embed = document.getElementById("embed");

let player = document.getElementById("player");
let src = "https://www.youtube.com/watch?v=NM9VqwyQG2Y";

function embedVideo() {
  body.style.overflow = "hidden";
  embed.style.position = "fixed";
  embed.style.display = "";

  closeEmbed.addEventListener("click", closeEmbedVideo);
}

function closeEmbedVideo() {
  body.style.overflow = "visible";
  embed.style.display = "none";
}

let playVideo = document.querySelector("#controlsContent #goToVideo");
let btnVideo = document.querySelector("#playersContents #video");

playVideo.addEventListener("click", video);
btnVideo.addEventListener("click", video);

function video() {
  window.open(src);
}

let btnSound = document.querySelector("#playersContents #sound");
let playSound = document.querySelector("#controlsContent #playSound");

btnSound.addEventListener("click", (e) => {
  sound(e);
});
playSound.addEventListener("click", (e) => {
  sound(e);
});

let audio = new Audio("img/ConteudoEmAudioOverTech.mp3");
let stateAudio = false;

function sound(e) {
  e.preventDefault();
  if (stateAudio === false) {
    audio.play();
    stateAudio = true;
    btnSound.innerHTML = '<i class="fas fa-pause"></i>';
    playSound.innerHTML =
      '<i class="fas fa-pause"></i><p>Conteúdo em áudio</p>';
  } else if (stateAudio === true) {
    audio.pause();
    stateAudio = false;
    btnSound.innerHTML = '<i class="fas fa-play"></i>';
    playSound.innerHTML = '<i class="fas fa-play"></i><p>Conteúdo em áudio</p>';
  }
}

// pega o evento de load... //

// Conforme o estado do usuario (estar ou não logado), é feito a troca do botão de login/cadastro pelo de logout, juntamente com o nome do usuario.

let btnCadastro = document.getElementById("BtnCadastro");
let user = document.getElementById("user");
let nomeUser = document.createElement("h3");
nomeUser.style.fontStyle = "italic";
let container = document.createElement("div");
container.setAttribute("id", "container");
let userIcon = document.createElement("i");
userIcon.className = "far fa-user";

userIcon.style.color = "rgba(97, 25, 253, 1)";
container.appendChild(userIcon);
container.appendChild(nomeUser);
container.style.display = "flex";
container.style.gap = "1rem";
container.style.width = "100%";
container.style.alignItems = "center";
container.style.justifyContent = "center";

let url = window.location.href;
let logout = document.getElementById("logout");

if (url.includes("?")) {
  url = url.split("?");
  url = url[1];
  url = url.replaceAll("%20", " ");
  url = url.split(" ");
  url = url[0];

  url = decodeURI(url);

  btnCadastro.style.display = "none";
  user.appendChild(container);
  nomeUser.innerHTML = url;
} else {
  logout.style.display = "none";
  logout.style.backgroundColor = "white";
}

// Conforme o estado do usuario... //

let logoContainer = document.querySelector("header .logo");
let logoLink = document.querySelector("header .logo a");
let urlSemicompleta = window.location.href;
let urlCompleta = `../index.html?${url}`;

logoContainer.addEventListener("click", () => {
  if (urlSemicompleta.includes("?")) {
    logoLink.setAttribute("href", urlCompleta);
  }
});

// Conforme é feito o click na logo... //

// Pega os links do menu, se ele contiver '?' e '#', o link será transformado para levar consigo o nome do úsuario, de forma que também direcione para a página apontada pelo link.
let linksMenu = document.querySelectorAll("#menu ul li a");

linksMenu.forEach((link) => {
  if (link.href !== "http://overtech.epizy.com/OverTech/overTech.html") {
    link.addEventListener("click", changeLink(link));
  } else {
    link.addEventListener("click", () => {
      if (urlSemicompleta.includes("?") && !urlSemicompleta.includes("i=")) {
        link.setAttribute("href", `../OverTech/overTech.html?${url}`);
      }
    });
  }
});

let linkAutor = document.querySelector(".infoNoticia #autores a");

linkAutor.addEventListener("click", changeLink(linkAutor));

function changeLink(el) {
  if (urlSemicompleta.includes("?") && !urlSemicompleta.includes("?i=")) {
    let hrefLink = el.href;
    if (hrefLink.includes("#")) {
      hrefLink = hrefLink.split("#");
      hrefLink = hrefLink[0] + "?" + url + "%20" + "#" + hrefLink[1];
      el.setAttribute("href", hrefLink);
    } else {
      el.setAttribute("href", hrefLink);
    }
  }
}

// Resultado Final = index.html?ADM%20#blocoNoticia2
// Pega os links do menu.... //
