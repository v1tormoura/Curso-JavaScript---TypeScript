//for in -> lê os indices ou chaves do objeto.
const frutas = ['Pera', 'Maça', 'Uva'];

const pessoa = {
  nome: 'Vitor',
  sobreNome: 'Marcelo',
  idade: 20
}

console.log(pessoa.nome);//maneira de acessar usando objetos = {}
console.log(pessoa['nome']);//maneira de acessar usando arrays = []

for(let i in pessoa){
  console.log(i, pessoa[i]);
}

// for(let i in frutas){
//   console.log(frutas[i]);
// }

// for(i = 0; i < frutas.length; i++){
//   console.log(frutas[i]);
// }
//