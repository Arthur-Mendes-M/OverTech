let boxToggle = document.getElementById("boxToggleMenu");
let toggle = document.getElementById("toggleMenu");
let menu = document.getElementById("menu");
let linksMenu = document.querySelectorAll("#menu ul li");
let closeMenu = document.getElementById("closeMenu");
let body = document.querySelector("body");
let boxPreloader = document.getElementById("preloader");
// Ao clicar no botão 'closeMenu' remove a class 'show' do menu

linksMenu.forEach((link) => {
  link.addEventListener("click", Menuclose);
});

closeMenu.addEventListener("click", Menuclose);

function Menuclose() {
  let menu = closeMenu.closest("#menu");
  menu.classList.remove("show");

  toggle.classList.remove("show");
  boxToggle.classList.remove("menuActive");
}

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

let url = window.location.href;

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

let logout = document.getElementById("logout");

if (url.includes("?")) {
  if (url.includes("?i=")) {
    logout.style.display = "none";
  } else {
    url = url.split("?");
    url = url[1];
    url = url.replaceAll("%20", " ");
    url = url.split(" ");
    url = url[0];

    if (url.includes("#")) {
      url = url.split("#");
      url = url[0];
    }

    url = decodeURI(url);

    btnCadastro.style.display = "none";
    user.appendChild(container);
    nomeUser.innerHTML = url;
  }
} else {
  logout.style.display = "none";
}

let noticias = [
  {
    titulo:
      "Sistemas Embarcados, entenda tudo sobre essas 'pequenas' tecnologias.",
    categoria: "Tecnologia1",
    src: "https://images.unsplash.com/photo-1620283085068-5aab84e2db8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    titulo: "Novo rôbo criado pela Tesla, o promissor Tesla bot.",
    categoria: "Tecnologia2",
    src: "https://images.pexels.com/photos/258083/pexels-photo-258083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    titulo: "Iphone sem carregador e Apple sendo processada novamente.",
    categoria: "Tecnologia3",
    src: "https://images.unsplash.com/photo-1608421334558-2414ca992e79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  },
  {
    titulo:
      "Metaverso, entenda de uma vez por todas a nova aposta do facebook.",
    categoria: "Tecnologia4",
    src: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/11/metaverso-capa.jpg",
  },
  {
    titulo: "5G, entenda a tecnologia que esta mudando o mundo.",
    categoria: "Tecnologia5",
    src: "https://img.ibxk.com.br/2021/09/23/tecnologia-5g-23173455119452.jpg",
  },
  {
    titulo: "Eleições em 2022 terão novos concorrentes.",
    categoria: "Política1",
    src: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    titulo: "Dilma poderá participar das eleições em 2026.",
    categoria: "Política2",
    src: "https://blogs.correiobraziliense.com.br/vicente/wp-content/uploads/sites/16/2019/10/Dilma.jpg",
  },
  {
    titulo: "Invasões ao capitólio se agravam e Biden se pronuncia.",
    categoria: "Política3",
    src: "https://images.unsplash.com/photo-1633295966955-d829b5491176?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  },
  {
    titulo: "Lula tem 48% das intenções de voto para 2022, e Bolsonaro 21%.",
    categoria: "Política4",
    src: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/Bolsonaro-Lula-16-9.jpg?w=360&h=200&crop=1",
  },
  {
    titulo:
      "Entenda o passo a passo para tirar o título de eleitor pela internet.",
    categoria: "Política5",
    src: "https://c.pxhere.com/photos/09/16/smartphone_mobile_phone_touch_finger_touch_screen_continents_earth_globe-893132.jpg!d",
  },
  {
    titulo: "Futuro da medicia pós pandemia.",
    categoria: "Saúde1",
    src: "https://c.pxhere.com/photos/d8/55/medical_appointment_doctor_healthcare_clinic_health_hospital_medicine-917209.jpg!d",
  },
  {
    titulo: "Pela 1ª desde 2020 São Paulo não registra óbitos por Covid.",
    categoria: "Saúde2",
    src: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  },
  {
    titulo:
      "Rastreamento genético, entenda a técnica que levantando debates éticos.",
    categoria: "Saúde3",
    src: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=452&q=80",
  },
  {
    titulo: "Ao menos até dezembro, o uso de máscaras será obrigatório.",
    categoria: "Saúde4",
    src: "https://cdn.stocksnap.io/img-thumbs/960w/holiday-coronavirus_W5DT7RDBM1.jpg",
  },
  {
    titulo: "Estudos sobre a cura do cancêr avançam.",
    categoria: "Saúde5",
    src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    titulo: "Novo sistema de educação é tema de debate no senado.",
    categoria: "Educação1",
    src: "https://c.pxhere.com/photos/c1/76/paper_romance_symbol_valentine_love_book_day_old-835669.jpg!d",
  },
  {
    titulo: "Taxa de reprovação durante o EAD aumenta.",
    categoria: "Educação2",
    src: "https://images.pexels.com/photos/9534164/pexels-photo-9534164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    titulo:
      "Etec de Carapicuíba abre as inscrições para os vestibulares de 2022.",
    categoria: "Educação3",
    src: "https://static.uniandrade.br/wp-content/uploads/2020/07/simulado-tem-varias-questoes-vestibular-57d9a8d50b0b0.jpg",
  },
  {
    titulo: "Retorno das aulas presenciais se torna obrigatório.",
    categoria: "Educação4",
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    titulo: "Cerébro dos patos evoluem e transcendem a ciência moderna.",
    categoria: "Educação5",
    src: "https://c.pxhere.com/photos/bb/a1/mallard_anas_platyrhynchos_drake_green_metallic_sparkle_bill_yellow-1362404.jpg!d",
  },
];

let contentCategs = document.querySelectorAll(".card .categoria h4");
contentCategs.forEach((contentCateg) => {
  let containerCateg = contentCateg.closest(".categoria");
  let card = containerCateg.closest(".card");
  let categoria = card.getAttribute("data-categ");
  let num = categoria.slice(categoria.length - 1);
  categoria = categoria.replace(num, "");
  contentCateg.innerHTML = categoria;
});

let cards = document.querySelectorAll(".card");
let titulos = document.querySelectorAll(".card .titulo h3");

cards.forEach((card) => {
  let categoria = card.getAttribute("data-categ");

  noticias.forEach((noticia) => {
    if (noticia.categoria == categoria) {
      let tituloContainer = card.childNodes[3];
      tituloContainer.setAttribute("title", noticia.titulo);
      noticia.titulo = noticia.titulo.slice(0, 28);
      noticia.titulo = noticia.titulo + "...";
      tituloContainer.innerHTML = noticia.titulo;
      card.style.backgroundImage = `url("${noticia.src}")`;
      card.style.backgroundPosition = "center";
      card.style.backgroundSize = "cover";
    }
  });
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (
      card.className == "card SE" &&
      window.location.href.includes("?") &&
      !window.location.href.includes("?i=")
    ) {
      window.location.href = `SE/sistemasEmbarcados.html?${url}`;
    } else if (
      card.className == "card SE" &&
      window.location.href.includes("?i=")
    ) {
      window.location.href = "SE/sistemasEmbarcados.html";
    } else if (
      card.className == "card SE" &&
      !window.location.href.includes("?")
    ) {
      window.location.href = "SE/sistemasEmbarcados.html";
    } else {
      window.location.href = "Landing/erroNotFound.html";
    }
  });
});

// Conforme é feito o click na logo, dependendo do estado do usuario (logado ou não), a logo leva para a página com ou sem o nome do usuario.

let urlSemicompleta = window.location.href;
let urlCompleta = `OverTech/overTech.html?${url}`;
let linkAboutTech = document.querySelector(
  "#menu ul li a[href='OverTech/overTech.html']"
);

if (urlSemicompleta.includes("?") && !urlSemicompleta.includes("?i=")) {
  if (urlSemicompleta.includes("#")) {
    urlSemicompleta = urlSemicompleta.split("#");
    urlSemicompleta = urlSemicompleta[0] + "%20" + "#" + urlSemicompleta[1];
  }
}

// Resultado Final = index.html?ADM%20#blocoNoticia2

linkAboutTech.addEventListener("click", () => {
  if (urlSemicompleta.includes("?") && !urlSemicompleta.includes("i=")) {
    linkAboutTech.setAttribute("href", urlCompleta);
  }
});

// Conforme é feito o click na logo... //
