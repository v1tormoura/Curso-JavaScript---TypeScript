function random(min, max){
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

//while chega a condição e executa o código.
while(rand !== 10){
  rand = random(min, max);
  console.log(rand);
}

console.log('###############################')

//Do While -> executa o código primeiro, depois executa a função.
do {
  rand = random(min, max);
  console.log(rand);
} while(rand !== 10);