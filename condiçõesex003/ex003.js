let n1 = document.querySelector('#pnum')
let n2 = document.querySelector('#snum')
let resposta = document.querySelector('#res')

function calcular() {
    let numero1 = Number(n1.value)
    let numero2 = Number(n2.value)
    let soma = numero1 + numero2
    if(soma > 20) {
         return resposta.innerHTML += `Slimani ja tinha 8 bananas em casa, e com a compra de ${soma} desses dois dias ele ficou com um total de ${soma+8} bananas!`
    } else {
        return resposta.innerHTML += `Slimani comprou ${soma} bananas nesses dois dias,comeu 5 e ficou com apenas ${soma-5} bananas!`
    }
}