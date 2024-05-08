// criar um módulo JavaScript que ofereça aos usuários a possibilidade de inserir um número inteiro positivo e, em resposta, calcular o fatorial desse número e também a sequência de Fibonacci até aquele número. Isso ajudará os investidores a realizar análises mais detalhadas sobre suas decisões financeiras.

// Módulo FibonacciFatorial.js


function calcular() {
    const numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero) || numero <= 0) {
      alert('Por favor, insira um número inteiro positivo válido.');
      return;
    }
  
    const fatorial = calcularFatorial(numero);
    const fibonacci = gerarSequenciaFibonacci(numero);
  
    document.getElementById('fatorial').innerText = fatorial;
    document.getElementById('fibonacci').innerText = fibonacci.join(', ');
  
    document.getElementById('resultado').style.display = 'block';
  }
  
  function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
  
  function gerarSequenciaFibonacci(numero) {
    let fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <= numero) {
      fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }
    return fibonacci;
  }
  
  