//Escreva uma função que recebe 2 números e retorne o maior deles

function num(n1, n2){
  if(n1 > n2){
    return n1;
  }
    return n2;
}

console.log(num(34, 78));

console.log("--//--//--//--//--//--//--//");

//outra maneira que posso fazer mais simples
function max(x, y){
  return x > y ? x : y;
}

console.log(max(98, 7));

console.log("--//--//--//--//--//--//--//");

//utilizando arroy function
const max2 = (x, y) => {
  return x > y ? x : y;
}
console.log(max2(23, 17));