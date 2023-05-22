function gerar() {
    let numero = document.getElementById('impar')
    let res = document.getElementById('res')
    if(numero.value.length == 0 || numero.value != 1) {
        res.innerHTML = '[ERRO] Número ínvalido! Digite o número 1 pra começarmos a contagem.'
    }else {
        res.innerHTML = 'Contando...<br>'
        let i = Number(numero.value)
        let f = 51
        let p = 2
        for(let c = i; c <= f; c = c + p) {
            res.innerHTML += ` ${c} \u{1F449}`
            
        }
            res.innerHTML += ` \u{1F3C1}`
    }

    
}