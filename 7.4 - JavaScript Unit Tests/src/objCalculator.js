/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

// como aprendi a descartar a parte inteira do number: 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

// De onde aprendi a colocar o arrow function em um object key: 
// https://stackoverflow.com/questions/36717376/arrow-function-in-object-literal

const calculator = {

  add: (a, b) => Math.trunc(a + b),
  mult: (a, b) => Math.trunc(a * b),
  div: (a, b) => Math.trunc(a / b),
  sub: (a, b) => Math.trunc(a - b),
};

module.exports = calculator;
