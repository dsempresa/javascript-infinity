function calcular() {
    var p = document.getElementById('ipeso')
    var res = document.getElementById('res')
    var peso = Number(p.value)
    var exc = (peso - 50) * 4
    res.innerHTML = 'Ótimo,você não excedeu peso permitido!'
    if (peso > 50) {
       res.innerHTML = `<p>O peso do seu peixe excedeu o valor máximo permitido! E você será multado em R$${exc}</p>`
    }
    

}

