// DADOS ESTATISTICOS CLIMA
const temperatura = 28; // °C
const velocidadeVento = 5; // km/h

// FUNÇÃO SENSAÇÃO TÉRMICA (fórmula métrica: °C e km/h)
function calcularSensacaoTermica(temp, vento) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16);
}

// CALCULO SENSAÇÃO TÉRMICA(Só calcula se as condições forem viáveis)
let sensacaoTermica = "N/A";

if (temperatura <= 10 && velocidadeVento > 4.8) {
    sensacaoTermica = `${calcularSensacaoTermica(temperatura, velocidadeVento).toFixed(1)} °C`;
}

document.querySelector("#sensacao").textContent = sensacaoTermica;

// FOOTER: ANO ATUAL e ÚLTIMA LOCALIZAÇÃO
document.querySelector("#ano").textContent = new Date().getFullYear();

document.querySelector("#ultima-modificacao").textContent =
    new Date(document.lastModified).toLocaleString("pt-BR");