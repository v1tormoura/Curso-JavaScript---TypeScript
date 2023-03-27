//Escreva uma função chamada ePaisagem que 
//recebe dois argumentos, largura e altura
//de uma imagem (number) e retorne true se a
//imagem estiver no modo paisagem.

function ePaisagem(largura, altura){
  return largura > altura ? true : false;
}
console.log(ePaisagem(1080, 890));


//utilizando arroy function
const paisagem =  (largura, altura) => {
  return largura > altura ? true : false;
}
console.log(paisagem(1080, 900));