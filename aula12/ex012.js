var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora} horas.`)
if (hora < 5){
    console.log('É madrugada carai')
} else if (hora < 12) {
    console.log('Ainda é manhã')
} else if (hora < 18){
    console.log('Ja é atarde')
} else {
    console.log('Já é noite')
}