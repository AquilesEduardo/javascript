function verificar() {
    var idade = document.getElementById('pesquisar')
    var msg = document.getElementById('msg')
    var data = new Date()
    var datahoje = data.getFullYear()
    var nasc = Number(idade.value)

    if(nasc == 0 || nasc > datahoje){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('rsexo') //Se um INPUT, tem valor, e aqui eu peguei o o valor do input do tipo RADIO
        var idd =  datahoje - nasc
        var gênero = ''//Criou essa variável mas deixou vazia
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
            if(fsex[0].checked){
            gênero = 'Homem' //Aqui ele deu valor pra variável vazia
                if(idd >= 0 && idd < 10){
                    //criança
                    img.setAttribute('src', 'fotos/hcrianca.png')
                } else if(idd < 21){
                    //jovem
                    img.setAttribute('src', 'fotos/hjovem.png')
                } else if(idd < 50 ){
                    //adulto
                    img.setAttribute('src', 'fotos/hadulto.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'fotos/hveio.png')
                }
            } else if(fsex[1].checked){
                gênero = 'Mulher'
                if(idd >= 0 && idd < 10){
                    //crianca
                    img.setAttribute('src', 'fotos/mcrianca.png')
                } else if(idd < 21){
                    //jovem
                    img.setAttribute('src', 'fotos/mjovem.png')
                } else if(idd < 50){
                    //Adulto
                    img.setAttribute('src', 'fotos/madulta.png')
                } else {
                    //Idoso
                    img.setAttribute('src', 'fotos/mveia.png')
                }
            }
            msg.style.textAlign = 'center'
            msg.innerHTML = `Detectamos ${gênero} com ${idd} anos.`
            msg.appendChild(img)
    }
}