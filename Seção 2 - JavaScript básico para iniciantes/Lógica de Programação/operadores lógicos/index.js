/* 
Operadores Lógicos 
&& -> AND -> E - ambas tem que ser verdadeiras.
|| -> OR --> OU - pelo menos 1 tem que ser verdadeira.
! -> NOT -> NÃO - negação, sé for verdadeira fica falso e sé for falso fica verdadeiro.  
*/

const usuario = 'Vitor';
const senha = '123';

const vaiLogar = usuario === 'Vitor' && senha === '78';

console.log(vaiLogar);
