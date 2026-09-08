const dataAtual = new Date();

document.querySelector("#anoatual").textContent = dataAtual.getFullYear();

document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${document.lastModified}`;