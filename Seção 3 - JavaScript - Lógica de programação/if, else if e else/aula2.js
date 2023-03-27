//"else if" e usado para checar mais de uma condição.

const num = 89;

if (num >= 0 && num <= 5){
  console.log("O número está entre 0 e 5.");
} else if (num >= 6 && num <= 20){
  console.log("O número está entre 6 e 20");
} else if (num >= 21 && num <= 40){
  console.log("O número está entre 21 e 40");
} else {
  console.log("Número não identiicado!!");
}