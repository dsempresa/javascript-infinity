// Função para calcular a gorjeta
const calculateTip = () => {
    const total = parseFloat(document.getElementById('total').value);
    const service = parseFloat(document.getElementById('service').value);
    
    if (isNaN(total) || isNaN(service)) {
      alert('Por favor, insira um valor válido para o total da conta.');
      return;
    }
    
    const tip = total * service;
    const formattedTip = tip.toFixed(2);
    
    document.getElementById('tipAmount').innerText = `Valor da Gorjeta: R$ ${formattedTip}`;
  };
  