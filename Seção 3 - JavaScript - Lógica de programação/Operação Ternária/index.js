// (condição) ? 'Valor para verdadeiro : 'VAlor para falso';

const pontuacaoUsuario = 2000;
const nivelUsuario = pontuacaoUsuario >=  1000 ? 'Usuário Vip!' : 'Usuário Normal!';

const corUsuario = '#c91f3b';
const corPadrao = corUsuario || 'Vermelho';

console.log(nivelUsuario);
console.log(corPadrao);

// if(pontuacaoUsuario >= 1000){
//   console.log("Usuário VIP!")
// } else {
//   console.log("Usuário Normal!")
// }