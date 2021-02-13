
function contar() {
var inix = window.document.getElementById('ini')
var fimx = window.document.getElementById('fim')
var pasx = window.document.getElementById('pas')
var res = window.document.getElementById('res')

if (inix.value.length == 0 || fimx.value.length == 0 || pasx.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
    //window.alert('[ERRO] Faltam dados!')
} else { 
    //window.alert('tudo Ok!')
    res.innerHTML = `Contando: <br>`    
    let inx = Number(inix.value)
    let fix = Number(fimx.value)
    let pax = Number(pasx.value)
    if (pax <= 0) {
        window.alert('Passo inválido! Considerando passo 1')
        pax = 1
    }
    if (inx < fix) {
        //CONTAGEM CRESCENTE
        for(let c = inx; c <= fix; c += pax) {
            res.innerHTML += `${c} \u{1F449}`
        } 
    }   else {
        //CONTAGEM REGRESSIVA
        for(let c = inx; c >= fix; c -= pax) {
            res.innerHTML += `${c} \u{1F449}`
        }
            
    }  
    res.innerHTML += `\u{1f3c1}`
}
    
}
    
//`\u{1F609}`

//for (var res = inx;inx <= fix ;inx++ ) {
//res.innerHTML(inx)








