let usuario = document.querySelector('#inome')
let salario = document.querySelector('#salariomes')
let resultado = document.querySelector('#res')

function calculo() {
    let nome = usuario.value
    let saldo = Number(salario.value)
    
    if(saldo <= 500) {
        resultado.innerHTML = `${nome},infelizmente com este saldo de R$${saldo} você não terá nenhum crédito no momento.`
    }
    if(saldo >= 501 && saldo <= 1000) {
        resultado.innerHTML = `${nome}, seu saldo para crédito é de R$${saldo*30/100}.`
    }
    if(saldo >= 1001 && saldo <= 3000) {
        resultado.innerHTML = `${nome}, seu saldo para crédito é de R$${saldo*40/100}.`
    }
    if(saldo > 3001) {
        resultado.innerHTML = `${nome}, seu saldo para crédito é de R$${saldo*50/100}.`
    }else{
        resultado.innerHTML = `Preencha todos os campos!!!!`
    }
        
}