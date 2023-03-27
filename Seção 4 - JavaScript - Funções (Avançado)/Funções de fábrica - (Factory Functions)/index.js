function criaPessoa(nome, sobreNome, idade, endereco, peso, altura){
  return{

    nome, sobreNome, idade, endereco,

    //método
    fala: function(){
      return `Meu nome é ${nome}, tenho ${idade} anos, moro na ${endereco}, peso ${this.peso} Kls, e tenho ${this.altura} de altura.`;
    },

    peso: peso,
    altura: altura,

    //método
    //Getter
    get nomeCompleto(){
      return `${this.nome} ${this.sobreNome}`
    },

    //get -> getter, só para obter valor
    get imc(){
      const indice = this.peso / (this.altura * this.altura);
        if(indice < 18.5){
          console.log("Abaixo do peso!");
        }if(indice >= 18.5 && indice <= 24.9){
          console.log("Peso Normal!");
        }if(indice >= 25 && indice <= 29.9){
          console.log("Acima do Peso (sobrepeso)!");
        }if(indice >= 30 && indice <= 34.9){
          console.log("Obesidade!");
        }
      return indice.toFixed(2);
    }

  }
}

const p1 = criaPessoa('Vitor', 'Moura', 20, 'Av Oscar Antonio da Costa', 60, 1.80);
console.log(p1.fala());
console.log("Seu IMC = ", p1.imc);
console.log(p1.altura.toFixed(2));

console.log(" ");

const p2 = criaPessoa('Fatima', 'Moura', 47, 'Rua São Paulo', 70, 1.63)
console.log(p2.fala());
console.log("Seu IMC = ", p2.imc);

console.log(p1.nomeCompleto);


