// Contador de avaliações usando localStorage
let total = Number(localStorage.getItem("contadorAvaliacoes")) || 0;

total = total + 1;
localStorage.setItem("contadorAvaliacoes", total);

document.querySelector("#contador").textContent = total;

// Rodapé: ano e última modificação
document.querySelector("#ano").textContent = new Date().getFullYear();
document.querySelector("#ultima-modificacao").textContent = document.lastModified;
