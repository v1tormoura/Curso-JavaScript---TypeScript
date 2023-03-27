/*
Try - Catch -> basicamente trata exceções que o programador
não tem como prever que irão acontecer ou controlar. Como,
por exemplo, erros de execução, ou ainda erros como o usuário
perder a conexão com a internet, entre outros.
*/

//sé ocorrer qualquer erro dentro do bloco "try" o "catch" será
//executado, é sé não ocorrer nenhum erro no bloco "try" o bloco "catch"
//será executado.

try{
  console.log(naoExisto);
} catch(err) {
  console.log('Não existe');
}

function soma(x, y){
  if(typeof x !== 'number' || typeof y !== 'number'){
    throw new SyntaxError('x e y precisam ser números');
  }
  return x + y;
}

try {
  console.log(soma(7, 2));
  console.log(soma('v', 9));
}catch(err){
  console.log(err);
  console.log('Algo está errado!!!');
}

