// ===== Seleção dos elementos da página =====

// Pega o formulário de contato pelo id
const formulario = document.querySelector(`#form-contato`);

// Pega o parágrafo onde aparecem os avisos (erro ou sucesso)
const aviso = document.querySelector(`#aviso`);


// ===== Funções =====

// Preenche o campo "nome" com o nome salvo no navegador (se existir)
function preencherNome() {
  // Busca no localStorage o nome guardado anteriormente
  const nomeSalvo = localStorage.getItem(`nomeContato`);

  // Se encontrou um nome, coloca ele dentro do campo
  if (nomeSalvo) {
    formulario.elements.nome.value = nomeSalvo;
  }
}

// Mostra um aviso na tela
// texto = a mensagem que será mostrada
// erro = true se for um aviso de erro, false se for de sucesso
function mostrarAviso(texto, erro) {
  aviso.textContent = texto;  // escreve o texto no parágrafo
  aviso.hidden = false;       // deixa o parágrafo visível

  // Liga a classe "erro" quando for erro e desliga quando não for
  aviso.classList.toggle(`erro`, erro);
}

// Roda quando o visitante clica em "Enviar"
function enviarFormulario(evento) {
  // Impede que a página recarregue ao enviar o formulário
  evento.preventDefault();

  // Pega o nome e a mensagem, tirando espaços sobrando no começo e no fim
  const nome = formulario.elements.nome.value.trim();
  const mensagem = formulario.elements.mensagem.value.trim();

  // Confere se a mensagem tem pelo menos 10 caracteres
  if (mensagem.length < 10) {
    // Mensagem curta demais: mostra aviso de erro
    mostrarAviso(`Escreva uma mensagem com pelo menos 10 caracteres.`, true);
  } else {
    // Tudo certo: guarda o nome no navegador para a próxima visita
    localStorage.setItem(`nomeContato`, nome);

    // Limpa o formulário
    formulario.reset();

    // Coloca o nome salvo de volta no campo
    preencherNome();

    // Mostra o aviso de agradecimento
    mostrarAviso(`Obrigado, ${nome}! Recebemos a sua dúvida.`, false);
  }
}


// ===== Início do programa =====

// Ao abrir a página, preenche o nome se ele já estiver salvo
preencherNome();

// Quando o formulário for enviado, chama a função enviarFormulario
formulario.addEventListener(`submit`, enviarFormulario);
