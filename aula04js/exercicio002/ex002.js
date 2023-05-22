function gerar() {
    let n1 = document.getElementById('primeiro')
    let n2 = document.getElementById('segundo')
    let n3 = document.getElementById('terceiro')
    let n4 = document.getElementById('quarto')
    let n5 = document.getElementById('quinto')
    let res = document.getElementById('res')
    if(n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0 || n4.value.length == 0 || n5.value.length == 0) {
        res.innerHTML = '[ERRO] Preencha todos os campos para que possamos gerar o resultado!'
    }else {
        res.innerHTML = 'Calculando...<br>'
        let prin = Number(n1.value)
        let segn = Number(n2.value)
        let tern = Number(n3.value)
        let quan = Number(n4.value)
        let quin = Number(n5.value)
        soma = prin + segn + tern + quan + quin
        media = soma / 5
        res.innerHTML += `A soma entre todos os números é <strong>${soma}</strong> que dar uma média de <strong>${media}</strong> !`
    }
}