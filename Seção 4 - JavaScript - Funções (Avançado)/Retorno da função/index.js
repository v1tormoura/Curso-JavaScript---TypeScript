//return
//retorna um valor
//termina a função

function soma(n1, n2) {
  return n1 + n2
}
console.log(soma(2, 5))

/////////////////////////////////
function soma2(n1, n2) {
  console.log(n1 + n2)
}
soma2(2, 5)

/////////////////////////////////
function criaPessoa(nome, sobreNome) {
  return  nome, sobreNome
}

/////////////////////////////////
const p1 = criaPessoa('Vitor', 'Moura');
console.log(p1);

/////////////////////////////////
const p2 = {
  nome: 'Fátima',
  sobreNome: 'Moura',
}
console.log(p2);

/////////////////////////////////
function falaFrase(comeco){
  function falaResto(resto){
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const comeco = falaFrase('Olá');
const resto = comeco('Mundo');
console.log(resto);

/////////////////////////////////
function criaMultiplicador(multiplicador){
  //multiplicador
  function multiplicacao(n){
    return n * multiplicador;
  }
  return multiplicacao;
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(4));
console.log(triplica(4));
console.log(quadruplica(4));

/////////////////////////////////

// function duplica(n){
//   return n * 2;
// }
// function triplica(n){
//   return n * 3;
// }
// function quadruplica(n){
//   return n * 4;
// }

// console.log(duplica(3));
// console.log(triplica(3));
// console.log(quadruplica(3));

