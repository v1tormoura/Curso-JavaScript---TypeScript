// if pode ser usado sozinho, sem "else" e "else if";
// else if não pode ser executado sozinho, e preciso de um if antes.
// posso ter vários else if na condição.
//só pode ter um else por último na condição.


const hora = 27;

if (hora >= 0 && hora <= 11){
  console.log("Bom-dia!");
} else if (hora >= 12 && hora <= 17){
  console.log("Boa-tarde!");
} else if (hora >= 18 && hora <= 24){
  console.log("Boa Noite!");
} else {
  console.log("Erro 404 Not Found!");
}
