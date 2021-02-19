//FUNCTION MENU MOBILE
const $btnMenuOpen = document.querySelector('.btnMenu_open')
const $btnMenuClose = document.querySelector('.btnMenu_close')
const $menuul = document.querySelector('.menuul')

$btnMenuOpen.addEventListener('click', function() {
    $menuul.classList.add('menu_open')
})

$btnMenuClose.addEventListener('click', function () {
    $menuul.classList.remove('menu_open')
})



//EFEITO ITENS MENU//
{var a = window.document.querySelector('a#vdd')
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function entrar() {
    a.style.opacity = '0.4'
    //a.style.font.color = 'white'
    //a.style.border.bottom = '1px solid rgba(167, 152, 152, .4)'
    
}

function sair () {
    a.style.opacity = '1'
    //a.style.background = '#00c9e6'
    
}
}


{var b = window.document.querySelector('a#mk')
b.addEventListener('mouseenter', entrar)
b.addEventListener('mouseout', sair)

    function entrar() {
        b.style.opacity = '0.4'
        //b.style.font.color = 'white'
        //a.style.border.bottom = '1px solid rgba(167, 152, 152, .4)'

    }

    function sair() {
        b.style.opacity = '1'
        //b.style.background = '#00c9e6'
}
}


{var c = window.document.querySelector('a#ve')
c.addEventListener('mouseenter', entrar)
c.addEventListener('mouseout', sair)

    function entrar() {
        c.style.opacity = '0.4'
        //c.style.font.color = 'white'
        //c.style.border.bottom = '1px solid rgba(167, 152, 152, .4)'

    }

    function sair() {
        c.style.opacity = '1'
        //c.style.background = '#00c9e6'

}
}


{var dd = window.document.querySelector('a#ser')
dd.addEventListener('mouseenter', entrar)
dd.addEventListener('mouseout', sair)

    function entrar() {
        dd.style.opacity = '0.4'
        //dd.style.font.color = 'white'
        //dd.style.border.bottom = '1px solid rgba(167, 152, 152, .4)'

    }

    function sair() {
        dd.style.opacity = '1'
        //dd.style.background = '#00c9e6'

}
}


{var ee = window.document.querySelector('a#sob')
ee.addEventListener('mouseenter', entrar)
ee.addEventListener('mouseout', sair)

    function entrar() {
        ee.style.opacity = '0.4'
        //ee.style.font.color = 'white'
        //ee.style.border.bottom = '1px solid rgba(167, 152, 152, .4)'

    }

    function sair() {
        ee.style.opacity = '1'
        //ee.style.background = '#00c9e6'

}
}

//EFEITO IMG AREAS DE ATUALÇÃO

{
    var o = window.document.querySelector('img#clo')
    o.addEventListener('mouseenter', entrar)
    o.addEventListener('mouseout', sair)

    function entrar() {
        o.style.opacity = '0.4'
        o.style.background = '#00c9e6'
        

    }

    function sair() {
        o.style.opacity = '1'
        o.style.background = '#00c9e6'
    }
}

{
    var d = window.document.querySelector('img#crm')
    d.addEventListener('mouseenter', entrar)
    d.addEventListener('mouseout', sair)

    function entrar() {
        d.style.opacity = '0.4'
        d.style.background = '#00c9e6'
        

    }

    function sair() {
        d.style.opacity = '1'
        d.style.background = '#00c9e6'
    }
}

{
    var e = window.document.querySelector('img#am')
    e.addEventListener('mouseenter', entrar)
    e.addEventListener('mouseout', sair)

    function entrar() {
        e.style.opacity = '0.4'
        e.style.background = '#00c9e6'

    }

    function sair() {
        e.style.opacity = '1'
        e.style.background = '#00c9e6'
    }
}

{
    var f = window.document.querySelector('img#as')
    f.addEventListener('mouseenter', entrar)
    f.addEventListener('mouseout', sair)

    function entrar() {
        f.style.opacity = '0.4'
        f.style.background = '#00c9e6'

    }

    function sair() {
        f.style.opacity = '1'
        f.style.background = '#00c9e6'
    }
}

{
    var g = window.document.querySelector('img#bb')
    g.addEventListener('mouseenter', entrar)
    g.addEventListener('mouseout', sair)

    function entrar() {
        g.style.opacity = '0.4'
        g.style.background = '#00c9e6'

    }

    function sair() {
        g.style.opacity = '1'
        g.style.background = '#00c9e6'
    }
}

{
    var h = window.document.querySelector('img#ab')
    h.addEventListener('mouseenter', entrar)
    h.addEventListener('mouseout', sair)

    function entrar() {
        h.style.opacity = '0.4'
        h.style.background = '#00c9e6'

    }

    function sair() {
        h.style.opacity = '1'
        h.style.background = '#00c9e6'
    }
}