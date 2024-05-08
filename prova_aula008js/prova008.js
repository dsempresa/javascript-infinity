function converter() {
    const metros = parseFloat(document.getElementById('metros').value);
    const unidadeDestino = document.getElementById('unidadeDestino').value;
    let resultado;
  
    switch (unidadeDestino) {
      case 'jardas':
        resultado = metros * 1.094;
        break;
      case 'pes':
        resultado = metros * 3.281;
        break;
      case 'polegadas':
        resultado = metros * 39.37;
        break;
      case 'milhas':
        resultado = metros * 0.000621;
        break;
      default:
        resultado = 'Escolha uma unidade de destino válida';
    }
  
    document.getElementById('resultado').innerText = `Resultado: ${resultado} ${unidadeDestino}`;
  }
  