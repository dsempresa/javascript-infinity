let nome = document.querySelector('#jogador')
let e1n1 = document.querySelector('.notajog1e1')
let e1n2 = document.querySelector('.notajog2e1')
let e1n3 = document.querySelector('.notajog3e1')
let resultadoe1 = document.querySelector('#mediae1')

function calculare1() {
    let nota1e1 = Number(e1n1.value)
    let nota2e1 = Number(e1n2.value)
    let nota3e1 = Number(e1n3.value)
    let pontose1 = nota1e1 + nota2e1 + nota3e1
    let media1 = pontose1 / 3
    if(pontose1 > 100) {
        resultadoe1.innerHTML = `A média da equipe 1 é ${media1}.` 
    }else {
        resultadoe1.innerHTML = `Equipe desclassificada!!!!!!`
    }    
}
//let nome = document.querySelector('#jogador')
let e2n1 = document.querySelector('.notajog1e2')
let e2n2 = document.querySelector('.notajog2e2')
let e2n3 = document.querySelector('.notajog3e2')
let resultadoe2 = document.querySelector('#mediae2')
function calculare2() {
    let nota1e2 = Number(e2n1.value)
    let nota2e2 = Number(e2n2.value)
    let nota3e2 = Number(e2n3.value)
    let pontose2 = nota1e2 + nota2e2 + nota3e2
    let media2 = pontose2 / 3
    if(pontose2 > 100) {
        resultadoe2.innerHTML = `A média da equipe 2 é ${media2}.` 
    }else {
        resultadoe2.innerHTML = `Equipe desclassificada!!!!!!`
    }
}
let e3n1 = document.querySelector('.notajog1e3')
let e3n2 = document.querySelector('.notajog2e3')
let e3n3 = document.querySelector('.notajog3e3')
let resultadoe3 = document.querySelector('#mediae3')
function calculare3() {
    let nota1e3 = Number(e3n1.value)
    let nota2e3 = Number(e3n2.value)
    let nota3e3 = Number(e3n3.value)
    let pontose3 = nota1e3 + nota2e3 + nota3e3
    let media3 = pontose3 / 3
    if(pontose3 > 100) {
        resultadoe3.innerHTML = `A média da equipe 3 é ${media3}.` 
    }else {
        resultadoe3.innerHTML = `Equipe desclassificada!!!!!!`
    }
}