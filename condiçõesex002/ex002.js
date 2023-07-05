let n1 = document.querySelector('#pnum')
let n2 = document.querySelector('#snum')
let resultado = document.querySelector('#res')

function calcular() {
let pnumero = Number(n1.value)
let snumero = Number(n2.value)
let soma = pnumero + snumero
    if(soma > 10) {
        resultado.innerHTML += `${soma}!`
    }
}