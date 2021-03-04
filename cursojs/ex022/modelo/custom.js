//alert('Ola')
let cal = window.document.getElementById('calc') /*.value */
let con = window.document.getElementById('cont')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
       return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(cal.value) && !inLista(cal.value, valores)) {
        //window.alert(`Tudo Ok!`)
        valores.push(Number(cal.value))
        let c = document.createElement('option')
        c.text = `Valor ${cal.value} adicionado.`
        con.appendChild(c)
        res.innerHTML = ''
    } else {
        window.alert(`Valor inválido ou já encontrado na lista.`)
    }
    cal.value = ''
    cal.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert(`Adicione valores antes de finalizar!`)
    } else {
        let tot = valores.length
        let last = valores[0]
        let men = valores[0]
        let totv = 0
        let med = 0
        for (let pos in valores) {
            totv += valores[pos]
            if (valores[pos] > last)
            last = valores[pos]
            if (valores[pos] < men)
            men = valores[pos]
        }
        med = totv / tot
        //valores.sort()
        //let men = valores[0]
        //let totv = ${valores[1]}//for(s = 0; )
        //let med = ${totv} % ${tot}

        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${last}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${men}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${totv}.</p>`
        res.innerHTML += `<p>A média dos valores digitados ${med}.</p>`

    }
}

/*
if (cal < 1 || cal > 100) {
    alert('O valor já adicionado ou é inválido.')
    
} else {
    //for(res = cal; res )
    //let c = Number(cal.value)
    //con.innerHTML += (`Valor ${[cal]} adicionado.`)
    let c = document.createElement('option')
    c.text = `Valor ${cal} adicionado.`
    con.appendChild(c)
} 
}
function finalizar(){
}
*/