
let resultado = document.querySelector('#res')


function calcular() {
    
    let idade = document.querySelector('#iidade').value
    let nome = document.querySelector('#inome').value
        if(idade > 0 && idade <= 10) {
        resultado.innerHTML = `${nome}, seu plano nessa idade de ${idade} anos ficará o valor de R$30,00.`
    } if(idade > 10 && idade <= 29) {
        resultado.innerHTML = `${nome}, seu plano nessa idade de ${idade} anos ficará o valor de R$60,00.`
    } if(idade > 29 && idade <= 45) {
        resultado.innerHTML = `${nome}, seu plano nessa idade de ${idade} anos ficará o valor de R$120,00.`
    } if(idade > 45 && idade <= 59) {
        resultado.innerHTML = `${nome}, seu plano nessa idade de ${idade} anos ficará o valor de R$150,00.`
    } if(idade > 59 && idade <= 65) {
        resultado.innerHTML = `${nome}, seu plano nessa idade de ${idade} anos ficará o valor de R$250,00.`
    } else{
        resultado.innerHTML = `${nome}, seu plano nessa idade de ${idade} anos ficará o valor de R$400,00.`
    }
}
