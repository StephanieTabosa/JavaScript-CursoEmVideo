function carregar() {
    var msg = window.document.getElementById('msg');
    var imagem = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}h${minuto}min`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        imagem.src = 'imagens/manha.png'
        document.body.style.background = '#eec4a5'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        imagem.src = 'imagens/tarde.png'
        document.body.style.background = '#d4824a'

    } else {
        // BOA NOITE
        imagem.src = 'imagens/noite.png'
        document.body.style.background = '#0d132e'

    }
}
