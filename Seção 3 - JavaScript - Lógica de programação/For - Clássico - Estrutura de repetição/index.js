// Estrutura for(por onde vai iniciar; quando vai parar; incrementa)
//i = index
for(i = 0; i<= 5; i++){
  const numPar = i % 2 === 0 ? 'Par' : 'Impar';
  console.log(numPar);
}

console.log('');

for(i = 5; i >= 0; i--){
  console.log(`Linha ${i}`);
}


const frutas = ['Maça', 'Morango', 'Uva', 'Laranja', 'Pera', 'Mamão'];

for(i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
}
