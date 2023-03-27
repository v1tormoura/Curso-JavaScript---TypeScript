// Qualquer coisa diferente dessas abaixo avalia-se "true" em JS.
/*
Falsy 
false
0
'' "" ``
null / undefined
NaN
*/
console.log('Luiz' && null && 'Maria');

const usuario = 'Vermelho';
const corUsuario = null;
const corPadrao = 'Roxo';

console.log(usuario);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

