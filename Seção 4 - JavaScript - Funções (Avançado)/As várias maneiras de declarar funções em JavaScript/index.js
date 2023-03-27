//declaração de função (function hoisting)
function falaOi(){
  console.log("Oi");
}
falaOi();

//First-class objects (Objetos de primeira classe).
//Function expression
const souUmDado = function(){
  console.log("Sou um dado");
};

function executaFuncao(funcao){
  console.log("Vou executar sua função abaixo:");
  funcao();
}
executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
}
funcaoArrow();

//Dentro de um objeto
const obj = {
  //método dentro de um objeto
  falar(){
    console.log("Estou falando...");
  }
}
obj.falar();