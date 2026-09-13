// ATUALIZAÇÃO FOOTER

const dataAtual = new Date();

document.querySelector("#anoatual").textContent = dataAtual.getFullYear();

document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${document.lastModified}`;

// MENU HAMBÚRGUER

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

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