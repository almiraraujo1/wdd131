// ===== Dados das turmas =====

// Lista (array) com um objeto para cada turma
const turmas = [
  {
    nome: `Iniciante – Noite`,
    nivel: `iniciante`,
    dias: `Terças e quintas`,
    horario: `18h às 19h`,
    descricao: `Para quem nunca treinou: guarda, deslocamento, jab, direto e chute circular.`,
    imagem: `imagens/turma-iniciante.svg`
  },
  {
    nome: `Iniciante – Sábado`,
    nivel: `iniciante`,
    dias: `Sábados`,
    horario: `9h às 10h30`,
    descricao: `Fundamentos do Muay Thai em um ritmo tranquilo, ideal para começar o fim de semana.`,
    imagem: `imagens/turma-iniciante.svg`
  },
  {
    nome: `Intermediário`,
    nivel: `intermediario`,
    dias: `Segundas e quartas`,
    horario: `19h às 20h30`,
    descricao: `Combinações de golpes, joelhadas, cotoveladas e treino de manopla.`,
    imagem: `imagens/turma-intermediario.svg`
  },
  {
    nome: `Avançado`,
    nivel: `avancado`,
    dias: `Terças e quintas`,
    horario: `19h30 às 21h`,
    descricao: `Clinch, sparring leve e condicionamento intenso para quem já tem experiência.`,
    imagem: `imagens/turma-avancado.svg`
  }
];

// Valores permitidos para o filtro (usado para conferir o que foi salvo no navegador)
const niveisValidos = [`todas`, `iniciante`, `intermediario`, `avancado`];


// ===== Seleção dos elementos da página =====

// Lista de opções (select) para escolher o nível
const filtro = document.querySelector(`#filtro-nivel`);

// Div onde os cartões das turmas vão aparecer
const lista = document.querySelector(`#lista-turmas`);

// Parágrafo que mostra quantas turmas foram encontradas
const resumo = document.querySelector(`#resumo-turmas`);


// ===== Funções =====

// Recebe uma turma e devolve o HTML do cartão dela
function criarCartao(turma) {
  return `<article class="cartao">
    <img src="${turma.imagem}" alt="" width="80" height="80" loading="lazy">
    <p class="nivel">${turma.nivel}</p>
    <h3>${turma.nome}</h3>
    <p>${turma.dias}, ${turma.horario}</p>
    <p>${turma.descricao}</p>
  </article>`;
}

// Mostra na tela as turmas do nível escolhido
function mostrarTurmas(nivel) {
  // Começa com todas as turmas
  let escolhidas = turmas;

  // Se o nível não for "todas", guarda só as turmas daquele nível
  if (nivel !== `todas`) {
    escolhidas = turmas.filter(turma => turma.nivel === nivel);
  }

  // Cria um cartão para cada turma, junta tudo e coloca na página
  lista.innerHTML = escolhidas.map(criarCartao).join(``);

  // Atualiza o texto com a quantidade de turmas encontradas
  resumo.textContent = `${escolhidas.length} turma(s) encontrada(s).`;
}

// Roda quando o visitante troca o nível no filtro
function mudarFiltro() {
  // Guarda a escolha no navegador para a próxima visita
  localStorage.setItem(`nivelTurmas`, filtro.value);

  // Mostra as turmas do nível escolhido
  mostrarTurmas(filtro.value);
}

// ===== Início do programa =====

// Busca no navegador o nível que o visitante escolheu da última vez
const salvo = localStorage.getItem(`nivelTurmas`);

// Se o valor salvo for válido, coloca ele no filtro
if (niveisValidos.includes(salvo)) {
  filtro.value = salvo;
}

// Quando o filtro mudar, chama a função mudarFiltro
filtro.addEventListener(`change`, mudarFiltro);

// Mostra as turmas assim que a página carrega
mostrarTurmas(filtro.value);
