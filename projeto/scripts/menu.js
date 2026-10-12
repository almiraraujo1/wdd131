// ===== Seleção dos elementos da página =====

// Botão que abre e fecha o menu (aparece no celular)
const botaoMenu = document.querySelector(`#botao-menu`);

// Lista de links do menu
const menu = document.querySelector(`#menu-principal`);

// Span do rodapé onde fica o ano
const ano = document.querySelector(`#ano`);


// ===== Funções =====

// Abre o menu se estiver fechado e fecha se estiver aberto
function alternarMenu() {
  // Liga ou desliga a classe "aberto" no menu
  // O resultado (true ou false) fica guardado em "aberto"
  const aberto = menu.classList.toggle(`aberto`);

  // Avisa aos leitores de tela se o menu está aberto ou fechado
  botaoMenu.setAttribute(`aria-expanded`, aberto);

  // Troca o texto do botão conforme o estado do menu
  botaoMenu.textContent = aberto ? `✕ Fechar` : `☰ Menu`;
}

// Escreve o ano atual no rodapé
function mostrarAno() {
  ano.textContent = `${new Date().getFullYear()}`;
}

// ===== Início do programa =====

// Quando clicar no botão, chama a função alternarMenu
botaoMenu.addEventListener(`click`, alternarMenu);

// Mostra o ano atual assim que a página carrega
mostrarAno();
