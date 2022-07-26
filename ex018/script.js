let num = document.querySelector(`input#fnum`)
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true 
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) { //assunto de arrays: o -1 quer dizer que não esta na lista
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { //Esse sinal de exclamação quer dizer "NÂO" em JS
        valores.push(Number(num.value)) //Push é pra adicionar valores ao vetor(aula 15 do curso)
        let item = document.createElement('option') //aqui criei uma tag pelo JS e disse que ela ficaria dentro de option
        item.text = `Valor ${num.value} adicionado.` //aqui eu disse que ela seria string(txt), e o que conteria nela
        lista.appendChild(item) //aqui eu disse pra mostrar o conteudo da tag que criei
        res.innerHTML = '' //quando eu adicionar um elemento, o resultado é limpo pra não parecer que o resultado ja foi verificado
    } else {
        window.alert('Valor inválido ou ja encontrado na lista')
    }
    num.value = '' //aqui eu limpo o input após usar
    num.focus() //com isso aqui o cursor volta pro input então ja posso digitar outros numeros
}

function finalizar() {
    if(valores.length == 0) {
    window.alert('Adicione valores antes de finalizar')
} else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0   
    for(let pos in valores) {
        soma += valores[pos]
        if (valores[pos] > maior) 
            maior = valores[pos]
        if(valores[pos] < menor)
            menor = valores[pos]
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é ${media}</p>`
}
}
