/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

// De onde aprendi a colocar o arrow function em um object key: 
// https://stackoverflow.com/questions/36717376/arrow-function-in-object-literal

const createStudent = (studentName) => {
  const studentObject = { 
  name: studentName,
  feedback: () => 'Eita pessoa boa!',
};
return studentObject;
};
module.exports = createStudent;
