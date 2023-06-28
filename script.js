function carregar (){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos} !`

    if (hora >= 0 && hora < 12) {
        imagem.src = "manha.png"
        document.body.style.backgroundColor = '#EACB85'
    } else if(hora >= 12 && hora < 18){
        imagem.src = "tarde.png"
        document.body.style.backgroundColor = '#A95146'
    }else {
        imagem.src= "noite.png"
        document.body.style.background = '#121A1C'
}
}
setInterval(carregar , 1000)