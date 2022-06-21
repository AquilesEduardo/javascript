var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var dif = fim - inicio
var cont = inicio

while(dif <= fim && cont <= fim){
    cont.innerHTML = `${cont}`
    cont = cont + 1
}
