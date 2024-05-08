// Você foi contratado(a) para desenvolver um programa que irá auxiliar um professor a calcular algumas estatísticas das notas de seus alunos. O programa deve solicitar ao professor o número total de estudantes na turma e, em seguida, pedir que ele insira as notas de cada aluno individualmente. Após receber todas as notas, o programa deverá calcular a média da turma e identificar a maior e a menor nota obtida.



// Instruções:

// Solicite ao professor que digite o número total de estudantes na turma.
// Em seguida, peça que o professor insira a nota de cada aluno individualmente, uma por vez.
// Calcule a média da turma somando todas as notas e dividindo pelo número total de estudantes.
// Identifique e registre a maior nota obtida na turma.
// Ao final, exiba a média da turma e a maior e a menor nota encontrada.

// Dicas:

// Utilize um loop while para coletar as notas de todos os alunos.
// Armazene as notas em uma variável e vá atualizando o valor da soma a cada nova nota inserida.
// Compare cada nota com a maior nota atualmente registrada para encontrar a maior nota.
// Para calcular a média, divida a soma das notas pelo número total de estudantes.
// Exiba os resultados de forma clara e organizada.


function coletarNotas() {
    const numEstudantes = parseInt(document.getElementById('numEstudantes').value);
    if (isNaN(numEstudantes) || numEstudantes <= 0) {
      alert('Por favor, insira um número válido de estudantes.');
      return;
    }
  
    let notas = [];
    for (let i = 1; i <= numEstudantes; i++) {
      const nota = prompt(`Insira a nota do estudante ${i}:`);
      if (nota === null || nota.trim() === '') {
        alert('Por favor, insira uma nota válida.');
        return;
      }
      notas.push(parseFloat(nota));
    }
  
    const media = calcularMedia(notas);
    const maiorNota = Math.max(...notas);
    const menorNota = Math.min(...notas);
  
    document.getElementById('notasInput').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('media').innerText = media.toFixed(2);
    document.getElementById('maiorNota').innerText = maiorNota.toFixed(2);
    document.getElementById('menorNota').innerText = menorNota.toFixed(2);
  }
  
  function calcularMedia(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
  }
  