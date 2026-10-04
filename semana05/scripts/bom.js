const input = document.querySelector('#favchap');
const botao = document.querySelector('#addChapter');
const lista = document.querySelector('#list');

let arrayCapitulos = obterListaDeCapitulos() || [];

arrayCapitulos.forEach(capitulo => {
  exibirLista(capitulo);
});

botao.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    exibirLista(input.value);
    arrayCapitulos.push(input.value);
    definirListaDeCapitulos();
    input.value = '';
    input.focus();
  }
});

function exibirLista(item) {
  const li = document.createElement('li');
  const botaoExcluir = document.createElement('button');

  li.textContent = item;
  botaoExcluir.textContent = '❌';
  botaoExcluir.classList.add('delete');
  li.append(botaoExcluir);
  lista.append(li);

  botaoExcluir.addEventListener('click', () => {
    lista.removeChild(li);
    excluirCapitulo(item); // passa o texto original, sem precisar do slice
    input.focus();
  });
}

function definirListaDeCapitulos() {
  localStorage.setItem('minhaListaFavoritosLDM', JSON.stringify(arrayCapitulos));
}

function obterListaDeCapitulos() {
  return JSON.parse(localStorage.getItem('minhaListaFavoritosLDM'));
}

function excluirCapitulo(capitulo) {
  arrayCapitulos = arrayCapitulos.filter(item => item !== capitulo);
  definirListaDeCapitulos();
}