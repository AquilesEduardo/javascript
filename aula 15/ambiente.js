let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(`Nosso vetor tem ${num.length} elementos ${num}`)
console.log(`O primeiro valor é ${num[0]}`)

let pos = num.indexOf(9)
    if (pos == -1){
        console.log(`O valor não foi encontrado!`)
    } else{
        console.log(`O valor está na posição ${pos} (ele não ta nessa posição não senhor)`) /*perceba que o 8 não vai ta na posição 3 pois tenho um NUM.SORT() logo após a declaração do vetor.*/
    }