var idade = 70 
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Nao vota') //ideia para projeto: Um menu onde eu escolho qual tipo de jogo da memoria quero jogar. Se 3x3 ou 6x6 ou 9x9. Totalmente criado com JS 
} else if (idade < 18 || idade > 65) {
    console.log('Voto Opcional')
} else {
    console.log('Voto Obrigatório')
}
