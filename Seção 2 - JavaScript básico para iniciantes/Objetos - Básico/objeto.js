/*
Quando preciso criar um array eu utilizo colchetes = [], por outro lado quando crio um objeto eu utilizo chaves = {}
*/
const pessoa1 = {
  nome: 'Vitor',
  idade: 20,
  peso: 60,
  endereco: 'Av. Oscar Antonio da Costa',

  fala(){
    console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos!!`)
  },
  incrementaIdade(){
    this.idade++;
  } 
}
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

// console.log(pessoa1.endereco)

function criaPessoa(nome, sobrenome, idade, peso, endereco){
  return {
    nome,
    sobrenome,
    idade,
    peso,
    endereco
  }
}

//quando eu envio "Luiz" e um argumento que vai ser passado para o parametro da função "criarPessoa".
//Argumento e o valor que e passado para o parâmetro.
const pessoa2 = criaPessoa('Luiz', 'Moura', 27, 78, 'Rua São Paulo')
const pessoa3 = criaPessoa('Marcos', 'Andrade', 32, 54, 'Rua Pará')
const pessoa4 = criaPessoa('Andre', 'Silva', 65, 88, 'Av Vasconselos')
const pessoa5 = criaPessoa('Lucia', 'Souza', 38, 93, 'Rua Bahia')
const pessoa6 = criaPessoa('Damares', 'Costa', 49, 65, 'Bairro Santo Antonio')

// console.log(pessoa2.peso, pessoa4.sobrenome, pessoa6.endereco);