const pessoas = {
  nome: 'Vitor',
  sobreNome: 'Marcelo',
  escola: 'E.E Oscar Antonio da Costa',
  endereco: {
    rua: 'Av Oscar Antonio da Costa',
    numero: 542,
    bairro: 'Centro'
  }

};

//atribuição normal
// const nome = pessoa.nome;


//atribuição via desestruturação
                 //objeto
const {nome, endereco: {rua: r, bairro}, endereco} = pessoas;
console.log(nome, r, endereco);