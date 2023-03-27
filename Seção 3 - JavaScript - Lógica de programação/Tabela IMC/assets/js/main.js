//Capturar evento de submit do formulário.

const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
  event.preventDefault();
  const inputPeso = event.target.querySelector('#peso');
  const inputAltura = event.target.querySelector('#altura');
  
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if(!peso){
    setResultado('Peso inválido!', false);
    return;
  } 
  if(!altura){
    setResultado('Altura inválida!', false);
    return;
  } 
  const imc = getIMC(peso, altura);
  const nivelImc = getNivelIMC(imc);
  const msg = `Seu IMC é ${imc} (${nivelImc})`;

  setResultado(msg, true);
});

function criaP(){
  const p = document.createElement('p');
  return p;
}

function getIMC(peso, altura){
  const imc = peso/(altura * altura);
  return imc.toFixed(2);
}

function setResultado(msg, isValid){
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  
  const p = criaP();

  if(isValid) {
    p.classList.add('paragrafo-resultado')
  } else {
   p.classList.add('bad'); 
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

function getNivelIMC(imc){
  const nivel = ['Abaixo do peso','Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if(imc >= 39.9) return nivel[5];
  if(imc >= 34.9) return nivel[4];
  if(imc >= 29.9) return nivel[3];
  if(imc >= 24.9) return nivel[2];
  if(imc >= 18.5) return nivel[1];
  if(imc < 18.5) return nivel[0];
}