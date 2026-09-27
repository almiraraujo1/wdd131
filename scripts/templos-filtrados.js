// ATUALIZAÇÃO FOOTER

const dataAtual = new Date();

document.querySelector("#anoatual").textContent = dataAtual.getFullYear();

document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${document.lastModified}`;

// MENU HAMBÚRGUER

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("show");

    if (navigation.classList.contains("show")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Fechar menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Abrir menu");
    }

});

// ARRAY DE TEMPLOS

const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // --- Templos adicionados ---
  {
    nomeDoTemplo: "Fortaleza Brasil",
    localizacao: "Fortaleza, Ceará, Brasil",
    consagracao: "2019, 15 de dezembro",
    area: 51000,
    urlDaImagem: "https://www.thechurchnews.com/resizer/v2/S6FBLLKQZBJZKQRKYFIS3KBH4M.jpg?auth=1e6a927815f0054fe5dc9f4c02cb06b51a0bc11f8d8db6fcb68d1c72bd41b37b&focal=640%2C510&width=800&height=637"
  },
  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 25423,
    urlDaImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo53zcaeO4R8347yrf6uKzRUFjHADHTP8rGb1aGnzEZw&s=10"
  },
  {
    nomeDoTemplo: "Provo City Center",
    localizacao: "Provo, Utah, Estados Unidos",
    consagracao: "2016, 20 de março",
    area: 87000,
    urlDaImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMji6w0a4r1jqxHRf5_sEN7awAuNzCvuBhCSSTOAJeww&s=10"
  }
];

// GERAÇÃO DOS CARTÕES E FILTROS

const listaTemplos = document.querySelector("#lista-templos");
const titulo = document.querySelector("#titulo-pagina");
const linksFiltro = document.querySelectorAll(".link-filtro");

// Extrai o ano da string de consagração, ex: "2005, 7 de agosto" -> 2005
function extrairAno(consagracao) {
  return parseInt(consagracao.split(",")[0], 10);
}

// Gera os cartões de templo no DOM a partir de uma lista
function criarCards(lista) {
  listaTemplos.innerHTML = "";

  lista.forEach((templo) => {
    const card = document.createElement("figure");
    card.classList.add("templo-card");

    card.innerHTML = `
      <img src="${templo.urlDaImagem}" alt="${templo.nomeDoTemplo}" loading="lazy">
      <figcaption>
        <h2>${templo.nomeDoTemplo}</h2>
        <p><strong>Localização:</strong> ${templo.localizacao}</p>
        <p><strong>Consagração:</strong> ${templo.consagracao}</p>
        <p><strong>Área:</strong> ${templo.area.toLocaleString("pt-BR")} pés²</p>
      </figcaption>
    `;

    listaTemplos.appendChild(card);
  });
}

// Filtra o array de templos conforme o critério escolhido no menu
function filtrarTemplos(tipo) {
  let filtrados = templos;
  let tituloTexto = "Página Inicial";

  switch (tipo) {
    case "antigo":
      filtrados = templos.filter((t) => extrairAno(t.consagracao) < 1900);
      tituloTexto = "Templos Antigos (antes de 1900)";
      break;
    case "novo":
      filtrados = templos.filter((t) => extrairAno(t.consagracao) > 2000);
      tituloTexto = "Templos Novos (depois de 2000)";
      break;
    case "grande":
      filtrados = templos.filter((t) => t.area > 90000);
      tituloTexto = "Templos Grandes (mais de 90.000 pés²)";
      break;
    case "pequeno":
      filtrados = templos.filter((t) => t.area < 10000);
      tituloTexto = "Templos Pequenos (menos de 10.000 pés²)";
      break;
    default:
      filtrados = templos;
      tituloTexto = "Página Inicial";
  }

  titulo.textContent = tituloTexto;
  criarCards(filtrados);
}

// Liga os cliques do menu à função de filtro
linksFiltro.forEach((link) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();
    const tipo = link.dataset.filtro;
    filtrarTemplos(tipo);

    // Fecha o menu hambúrguer no mobile após clicar num item
    navigation.classList.remove("show");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-label", "Abrir menu");
  });
});

// Carrega todos os templos ao abrir a página
criarCards(templos);