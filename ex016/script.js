function contar() {
let ini = document.getElementById('txti')
let fim = document.getElementById('txtf')
let passo = document.getElementById('txtp')
let res = document.getElementById(`res`)

if (ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0) {
    window.alert(`Impossível contar!`)
     res.innerHTML = `Faltam Dados`
} else {
   res.innerHTML = 'Contando: <br> '
   let i = Number(ini.value)
   let f = Number(fim.value)
   let p = Number(passo.value)
    if (i < f) {
        window.alert(`Passo inválido! Considerando PASSO 1`)
        p = 1
    }
   //Contagem crescente
    if (i < f) {
        for (let c = i; c <= f; c += p)
        res.innerHTML += `${c} \u{1f449}`
    } else {
        //Contagem regressiva  
        for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1f449}`
    } 
}
res.innerHTML += `\u{1f3c1}`
}
}