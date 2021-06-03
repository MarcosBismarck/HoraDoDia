function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são <strong>${hora} horas</strong>. Bom dia!`
        img.src = 'fotomanha.png'
        document.body.style.background = '#c8a846'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Agora são <strong>${hora} horas</strong>. Boa tarde!`
        img.src = 'fototarde.png'
        document.body.style.background = '#fa6e00'
        //BOA TARDE
    } else {
        msg.innerHTML = `Agora são <strong>${hora} horas</strong>. Boa noite!`
        img.src = 'fotonoite.png'
        document.body.style.background = '#025889'
    }
}