          //(parâmetros)
(function(idade, peso, altura){
  const nome = 'Vitor';
  const sobreNome = 'Moura';

  function falaOi(nome){
    return nome;
  }

  function criaNome(nome){
    return nome + ' ' + sobreNome;
  }

  function falaNome(){
  console.log(criaNome('Vitor'));
  }
  falaNome();

  console.log(idade, peso, altura);

  //(argumento dos parâmetros)
})(20, 60, 1.82)

const nome = 'Qualquer coisa';
console.log(nome);
