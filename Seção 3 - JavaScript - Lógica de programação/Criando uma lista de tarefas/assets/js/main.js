const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

//função para criar li dentro da ul.
function criaLi(){
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});


//função para criar tarefa.
function criaTarefa(textImput){
  const li = criaLi();
  li.innerHTML = textImput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

//função para limpar o input após adicionar algum input.
function limpaInput(){
  inputTarefa.value = '';
  inputTarefa.focus();
}

//função para criar botão "apagar", quando crio uma tarefa.
function criaBotaoApagar(li){
  li.innerHTML += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class', 'apagar');//serve para setar o nome da classe no atributo.
  botaoApagar.setAttribute('title', 'Apagar está tarefa');//serve para setar o nome do title do atributo.
  li.appendChild(botaoApagar);
}

function salvarTarefas(){
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for(let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas);//stringify -> converte valores em javascript para uma String JSON.
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);
  
  for(let tarefa of listaDeTarefas){
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();

btnTarefa.addEventListener('click', function() {
  if(!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
  const el = e.target;
  
  if(el.classList.contains('apagar')){
    el.parentElement.remove();
    salvarTarefas();
  }
})