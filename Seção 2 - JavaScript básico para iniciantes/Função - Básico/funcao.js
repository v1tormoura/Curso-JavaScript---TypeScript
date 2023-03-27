//(aqui vai o parametro para passar um valor);
// function Saudacao(nome){
//   console.log(`Boa Noite, ${nome}`);
//   return nome;
// }

function Saudacao(nome){
  return`Boa Noite, ${nome}`;
}

const variavel = Saudacao('Vitor');
// Saudacao('Luciano');
// Saudacao('Fátima');

console.log(variavel);

function soma(x = 1, y = 1){
const resultado = x + y;
return resultado;
}
console.log(soma(8));


//criando função anônima
const raiz  = function(n) {
  return n ** 0.5;
};

console.log(raiz(9));


//criando uma arrow function, utiliza =>.
//vieram para simplificar, quando tenho somente uma linha na função posso eliminar as chaves
const subtracao = n => 
  n - 1;

console.log(subtracao(9));