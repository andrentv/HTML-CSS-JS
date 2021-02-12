//alert('Ola')
//var day = new Date()

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var hora = 0
    //var minuto = 10
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 6 && hora < 12) {
        //Bom dia!
        img.src = 'manha.png'
        document.body.style.background = '#fcdb9e'
        
    }  else if (hora >= 12 && hora < 18) {
        //Boa tarde 
        img.src = 'tarde.png'
        document.body.style.background = '#d87623'
        
    }  else if (hora >= 18 && hora <24) {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#106cab'
    
    }  else { 
        //Bom dia Madrugada
        img.src = 'manha.png'
        document.body.style.background = '#697eab'
    }


}
