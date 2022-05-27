function verificar() {
    var idade = document.getElementById('pesquisar')
    var msg = document.getElementById('msg')
    var data = new Date()
    var datahoje = data.getFullYear()
    var nasc = Number(idade.value)
    var idd =  datahoje - nasc
   msg.innerHTML = `SUa idade é ${idd}`
    document.body.style.img = 'fotos/hveio.jpg'
    /*if(idd <= 15){
        msg.innerHTML = `Detectamos criança de ${idd} anos.`

    } else if(idd <= 45 ){
        msg.innerHTML = `Detectamos adulto de ${idd} anos.`
    } else (idd > 45){
        msg.innerHTML = `Detectamos idoso de ${idd} anos.`
    }*/
}