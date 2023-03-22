const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
   // assert.fail();
    const obj1 = {
      name: 'Borracha',
      details: {
        productId: 'descricao123',
    },
  }
    const obj2 = {
      name: 'lapis',
      details: { 
        productId: 'descricao123',
    },
  } 
    //função para fazer possibilitar o teste se as productIds terminam com 123
    const objSlice1 = productDetails()[0].details.productId.slice(-3); 
    const objSlice2 = productDetails()[1].details.productId.slice(-3); 
    const test123 = () => (objSlice1 === '123' && objSlice2 === '123') ? true:false;
   
    //testes
    //o primeiro teste eu tive a mesma dificuldade que o Hector colocou no Slack e a ajuda do pessoal tambem me fez entender como solucionar o problema.
    assert.strictEqual(productDetails(obj1, obj2) instanceof Array, true);
    assert.strictEqual(typeof productDetails(), 'object');
    assert.strictEqual(productDetails().length, 2);
    assert.notDeepStrictEqual(productDetails(obj1), productDetails(obj2));
    assert.notDeepStrictEqual(productDetails(obj1), productDetails(obj2));
    assert.strictEqual(test123(), true);

    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro. ok
    // Teste que os dois itens dentro do array retornado pela função são objetos. ok
    // Teste que os dois objetos são diferentes entre si. ok
    // Teste que os dois productIds terminam com 123.
  });
});

