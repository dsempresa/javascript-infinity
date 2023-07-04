let nome = document.querySelector('#nome')
let n1 = document.querySelector('#nota1')
let n2 = document.querySelector('#nota2')
let resultado = document.querySelector('#res')

function analisar() {
    let aluno = nome.value
    let nota01 = Number(n1.value)
    let nota02 = Number(n2.value)
    let media = (nota01 + nota02) / 2
    if(media >= 7) {
     resultado.innerHTML = `${aluno}, sua 1ª nota foi ${nota01}, sua 2ª nota foi ${nota02},logo sua média é ${media}.<br>Você está aprovado!!!! `
}
    if(media >= 3 && media < 7) {
        resultado.innerHTML = `${aluno}, sua 1ª nota foi ${nota01}, sua 2ª nota foi ${nota02},logo sua média é ${media}.<br>Você terá que refazer uma prova final!`
    }
    if(media < 3) {
        resultado.innerHTML = `${aluno}, sua 1ª nota foi ${nota01}, sua 2ª nota foi ${nota02}, logo sua média é ${media}.<br>Sinto muito,mas você está REPROVADO!`
    }
}

