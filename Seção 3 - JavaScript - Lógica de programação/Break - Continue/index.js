//continue continua para próxima iteração.
//break sai do laço.

const numeros = [32, 45,67, 2, 87, 84, 74];

let i = 0;
do{
  let numero = numeros[i];

  if(numero === 2){
    console.log("Pulei o número 2");
    i++;
    continue;
  }
  console.log(numero);

  if(numero === 87){
    console.log("87 encontrado saindo!!!");
    i++;
    break;
  }
  i++;
}while(0 < numeros.length)