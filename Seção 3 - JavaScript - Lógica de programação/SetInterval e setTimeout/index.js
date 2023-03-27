function mostraHora(){
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

function funcaoDeInterval(){
  console.log(mostraHora());
}

const intervaloDeHoras = setInterval(function (){
  console.log(mostraHora());
}, 1000);


setTimeout(function(){
  clearInterval(intervaloDeHoras);
}, 3000);


setTimeout(function(){
  console.log("Sou lindo!");
}, 5000)