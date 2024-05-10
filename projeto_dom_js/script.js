// script.js
document.addEventListener('DOMContentLoaded', function() {
    const tarefaInput = document.getElementById('tarefaInput');
    const adicionarTarefaBtn = document.getElementById('adicionarTarefa');
    const listaTarefas = document.getElementById('listaTarefas');

    adicionarTarefaBtn.addEventListener('click', function() {
        const novaTarefa = tarefaInput.value.trim();
        if (novaTarefa !== '') {
            adicionarTarefa(novaTarefa);
            tarefaInput.value = '';
        }
    });

    function adicionarTarefa(texto) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        const descricao = document.createElement('span');
        descricao.textContent = texto;
        li.appendChild(checkbox);
        li.appendChild(descricao);
        listaTarefas.appendChild(li);

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                descricao.classList.add('completed');
            } else {
                descricao.classList.remove('completed');
            }
        });

        const removerBtn = document.createElement('button');
        removerBtn.textContent = 'Remover';
        li.appendChild(removerBtn);

        removerBtn.addEventListener('click', function() {
            li.remove();
        });
    }
});
