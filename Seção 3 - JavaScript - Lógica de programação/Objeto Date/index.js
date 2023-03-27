// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);

// const data = new Date();// a, m, d, h, M, s, ms.
// const data = new Date('2023-03-13 09:52:50');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); //Mês começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minuto', data.getMinutes());
// console.log('Segundo', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia', data.getDay());//0 - Domingo, 1 - Segunda
// console.log(data.toString());
// // console.log(Date.now());

function zeroAEsquerda(num){
  return num >= 10 ? num : `0${num}`;
}

function formatDate(data){
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const minuto = zeroAEsquerda(data.getMinutes());
  const sc = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${sc}`
}

const data = new Date();
const dataBrasil = formatDate(data);
console.log(dataBrasil)
