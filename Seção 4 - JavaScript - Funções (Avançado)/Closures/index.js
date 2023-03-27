function retornaFuncao(nome){
  return function(){
    return nome;
  }
}
const funcao = retornaFuncao('Vitor');
const funcao2 = retornaFuncao('Luciano');
console.log(funcao);
console.log(funcao2);

console.log(funcao(), funcao2());