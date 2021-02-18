//FUNCTION MENU
const $btnMenuOpen = document.querySelector('.btnMenu_open')
const $btnMenuClose = document.querySelector('.btnMenu_close')
const $menuul = document.querySelector('.menuul')

$btnMenuOpen.addEventListener('click', function() {
    $menuul.classList.add('menu_open')
})

$btnMenuClose.addEventListener('click', function () {
    $menuul.classList.remove('menu_open')
})


//ANIMAÇÃO ITENS MENU//
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


{var ee = window.document.querySelector('a#vol')
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