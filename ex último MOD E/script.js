function tabuada() {
    let num = document.getElementById("txtn")
    let tab = document.getElementById('seltab')

if (num.value.length == 0) {
    window.alert('Por favor, digite um número!')
} else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ``
    while (c <= 10) {
        let item = document.createElement('option') //Aqui ele criou uma tag pelo JS
        item.text = `${n} X ${c} = ${n*c}` 
        item.value = `tab${c}`
        tab.appendChild(item)//Aqui ele disse que na tag de ID "tab", ficaria o resultado dos códgos (tabuada)
        c++
    }
}
}