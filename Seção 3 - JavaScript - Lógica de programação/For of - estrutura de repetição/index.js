//for clássico -> geralmente com interáveis (arrays ou strings).
//for in -> retorna o índice ou chave (string, arrays, ou objetos).
//for of -> retorna o valor em si (iteráveis, arrays ou strings).

const fruta = 'Mamão';
const nome = ['Vitor', 'Henrique', 'Marcos'];

//Utilizando for clássico 
for(let i = 0; i <nome.length; i++){
  console.log(nome[i]);
}

console.log('#####');

//utilizando for in
for(let i in nome){
  console.log(nome[i]);
}

console.log('#####');

//utilizando for of -> só retorna o valor, não e possivel retornar o índice.
for(let nomeFruta of fruta){
  console.log(nomeFruta);
}

nome.forEach(function(valor, indice){
  console.log(valor, indice);
})