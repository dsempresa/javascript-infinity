let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear(); 
let ano = document.querySelector('#nasc')
resposta = document.querySelector('#res') 


function analisar() {
    let datanasc = Number(ano.value)
    let atual = anoAtual - datanasc
    if(datanasc >= anoAtual || datanasc < 1900){
        alert('Data inválida!')
    } else {
        resposta.innerHTML = atual
    }
    
}