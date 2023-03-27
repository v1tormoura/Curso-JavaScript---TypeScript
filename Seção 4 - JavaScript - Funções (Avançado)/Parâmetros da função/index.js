//arguments que sustenta todos os argumentos enviados.
function funcao(a, b, c){
  let total = 0;
  for(let argumento of arguments){
    total += argumento;
  }
  console.log(total);
}
funcao(5, 9, 8, 2, 4, 5);


function soma(a, b=4, c=2){
  console.log(a + b + c);
}
soma(2, null, 10);

//atribuição via desestruturação
function pessoa({nome, sobreNome, idade}){
  console.log(nome, sobreNome, idade);
}
pessoa({nome:'Vitor', sobreNome:'Marcelo', idade:20})

//desestruturação de array
function array([v1, v2, v3]){
  console.log(v1, v2, v3);
}
array(['Vitor', 'Moura', 6]);

////////////////////////////////////////////////////////
// ... -> hast operation
//o parâmetro resto precisa ser o último parâmetro da função
const conta = function(operador, acumulador, ...numeros){
  for(let numero of numeros){
    if(operador === '+'){
      acumulador += numero;
    }
    if(operador === '-'){
      acumulador -= numero;
    }
    if(operador === '/'){
      acumulador /= numero;
    }
    if(operador === '*'){
      acumulador *= numero;
    }
  }
  console.log(acumulador);
};
conta('+', 1, 34, 56, 78, 8);


//arroy function 
const conta2 = (...args) => {
  console.log(args);
};
conta2('+', 1, 34, 56, 78, 8);