function analise() {
    let candidato = document.getElementById('seunome')
    let nascimento = document.getElementById('data')
    let res = document.getElementById('cadastro')
    if(candidato.value.length == 0 || nascimento.value.length == 0){
        res.innerHTML = '[ERRO] Preencha todos os campos para que possamos gerar o resultado!'
    }else {
        res.innerHTML = 'Segue os dados solicitados:<br/>'
        let nome = (candidato.value)
        let nasc = Number(nascimento.value)
        let idade = 2023 - nasc
        res.innerHTML += `${nome} ${idade} anos`
    }
}