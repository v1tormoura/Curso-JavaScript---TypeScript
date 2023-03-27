/*
Primitivos (imutáveis) - string, number, boolean, undefined, null,
(bigint, simbol).
 */

let nome = 'Vitor';
let b = nome;//cópia

// console.log(nome, b);

// nome = 'Silva';
// console.log(nome, b);

//Referência (mutável) - array, object, function
let a = [1, 2, 3];
let c = [...a];
let d = c;
console.log(a, c);

c.push(9);
console.log(a, c)  

a.push(44);
console.log(a, c);

c.pop();
console.log(a, c);

console.log(a, c, d);

const pessoa = {
  nome: 'Vitor',
  sobreNome: 'Silva'
}

const e = pessoa;
const y = {...e};
pessoa.nome = 'Berma';
console.log(e);
console.log(y);

