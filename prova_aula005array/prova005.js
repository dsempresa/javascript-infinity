// Array para armazenar as tarefas
let tarefas = [];

// Função para renderizar a lista de tarefas na página
function renderizarTarefas() {
  const listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.innerHTML = '';
  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${tarefa}`;
    listaTarefas.appendChild(li);
  });
}

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
  const novaTarefaInput = document.getElementById('nova-tarefa');
  const novaTarefa = novaTarefaInput.value.trim();
  if (novaTarefa !== '') {
    tarefas.push(novaTarefa);
    novaTarefaInput.value = '';
    renderizarTarefas();
  } else {
    alert('Por favor, insira uma tarefa válida.');
  }
}

// Inicialização
window.onload = function() {
  renderizarTarefas();
};
