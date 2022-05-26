function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'midia/fotomanha.png'
        document.body.style.background = '#D0B074'
        //Bom dia
    } else if (hora >= 12 && hora < 18){
        img.src = 'midia/fototarde.png' //N esquecer do /midia caso a img não esteja na pagina do arquivo principal
        document.body.style.background = '#F47F51'
        //Boa Tarde
    } else{
        img.src = 'midia/fotonoite.png'
        document.body.style.background = '#1E5167'
        //Boa Noite
    }
}
