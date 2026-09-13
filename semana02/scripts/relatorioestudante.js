const DIAS = 6;
const LIMITE = 30;
let relatorioEstudante = [11, 42, 33, 64, 29, 37, 44];

// loop for
  for (let i = 0; i < relatorioEstudante.length; i++) {
    if (relatorioEstudante[i] < LIMITE) {
      console.log(relatorioEstudante[i]);
    }
  }

  // loop while
  let i = 0;
  while (i < relatorioEstudante.length) {
    if (relatorioEstudante[i] < LIMITE) {
      console.log(relatorioEstudante[i]);
    }
    i++;
  }

  // loop forEach
  relatorioEstudante.forEach(function (item) {
    if (item < LIMITE) {
      console.log(item);
    }
  });

  // loop for...in
  for (let i in relatorioEstudante) {
    if (relatorioEstudante[i] < LIMITE) {
      console.log(relatorioEstudante[i]);
    }
  }