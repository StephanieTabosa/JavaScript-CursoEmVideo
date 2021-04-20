function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    // verifica se a caixa está vazia OU se o valor é maior que o ano atual
    if (formAno.value.length == 0 || formAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/criancaMenino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemHomem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/criancaMenina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemMulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
