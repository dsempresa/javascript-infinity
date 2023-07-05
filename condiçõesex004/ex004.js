let n = document.querySelector('#inum')
let resposta = document.querySelector('#res')

function calcular() {
    let numero = Number(n.value)
    if(numero % 3 == 0) {
        return resposta.innerHTML = `O número ${numero} é multiplo de 3!`
    } else {
        return resposta.innerHTML = `O número ${numero} não é multiplo de 3!`
    }
}
