/*arrays básicamente e uma lista uma coleção de coisas.
 para criar um array e utilizado colchetes = []
cada array pode ser coloado um tipo de coisa, como por exp: nome, esporte, profissão
porém o JavaScript não restringe de colocar coisas aleátorias no mesmo array.


array = objeto indexado
 */ 
const alunos = ['Vitor', 'Fátima', 'Luciano', 'Nathieli'];
alunos[0] = 'Marcelo';// Altera
alunos[4] = 'Gabriel'; // Altera

alunos.unshift('Periclés'); // adiciona no começo do array.
alunos.unshift('Antonio'); // adiciona no começo do array.
alunos.unshift('Artur'); // adiciona no começo do array.
console.log(alunos);

//Dessa forma eu não preciso saber o tamanho do array para inserir um novo item.
alunos[alunos.length] = 'Caio';//adiciona no final.
alunos[alunos.length] = 'Marcos';//adiciona no final.
alunos[alunos.length] = 'Andre';//adiciona no final.

//utiliza length para saber o tamanho do array
console.log(alunos.length);

//o push e basicamente para colocar um elemento no final do array.
alunos.push('Luiza');//adiciona no final.
alunos.push('Otavio');//adiciona no final.
console.log(alunos);

console.log(alunos);
console.log(alunos[3]);//imprime o nome que ta na posição  do array.

const removido = alunos.pop(); //remove o ultimo elemento do array.
console.log(removido);
console.log(alunos);

const removidoInicial = alunos.shift(); //remove o primeiro elemento do array
console.log(removidoInicial);
console.log(alunos);

//deleta o elemento 2 do array porém o indice vai ficar vazio.
delete alunos[2];
console.log(alunos);

//no javaScript e possivel acessar valores que não existe, porém aparece um valor para as coisas que não existe que e "undefined".
console.log(alunos[90]);

//imprime os elementos entre 0 a 3
console.log(alunos.slice(0, 3));

//retorna o tipo da váriavel
console.log(typeof alunos);

//basicamente eu estou perguntando sé "alunos" e um array, sé retornar true e um array, caso retorne false não e um array.
console.log(alunos instanceof Array);
