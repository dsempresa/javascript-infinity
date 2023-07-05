let n = document.querySelector('#inum')
let resposta = document.querySelector('#res')

function calcular() {
    let numero = Number(n.value)
    if(numero % 3 == 0 && numero % 7 == 0) {
        return resposta.innerHTML = `O número ${numero} é divisível por 3 e 7!`
    } if(numero % 3 == 0 && numero % 7 != 0) {
        return resposta.innerHTML = `Onúmero ${numero} é divisível por 3 mas não por 7!`
    } if(numero % 3 != 0 && numero % 7 == 0) {
        return resposta.innerHTML = `O número ${numero} é divisível por 7 mas não por 3!`
    } else {
        return resposta.innerHTML = `O número ${numero} não é divisível por 3 e nem por 7!`
    }
}