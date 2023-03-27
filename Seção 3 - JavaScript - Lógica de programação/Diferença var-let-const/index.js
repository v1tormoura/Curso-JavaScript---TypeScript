const verdadeira = true;

//let tem escopo de bloco {bloco}.
//var só tem escopo de função.
let nome = 'Vitor';//criando
var nome2 = 'Vitor';// criando

var nome2 = 'Marcelo';//redeclarando

if(verdadeira){
  let nome = 'Lucas';//criando
  var nome2 = 'Silva';//redeclarando
  console.log(nome, nome2);

  if(verdadeira){
    let nome = 'Outra coisa';//criando
    var nome2 = 'Matheus';//redeclarando
  }
}
console.log(nome, nome2);

// var sobreNome = "Silva";

function falaOi(){
  var nome = 'Vitor';
  console.log(nome, nome2);
}
falaOi();

//váriavel let você só poder usar ela dentro do bloco que ela está
//sendo declarada.

console.log(sobreNome);
var sobreNome = 'Miranda';