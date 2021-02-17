const langE1 = document.querySelector('.langwrap')
const link = document.querySelectorAll('#lg')
const hiE1 = document.querySelector('.hi');
const vddE1 = document.querySelector('#vdd');
const mkE1 = document.querySelector('#mk');
const veE1 = document.querySelector('#ve');
const serE1 = document.querySelector('#ser');
const volE1 = document.querySelector('#vol');
const cah1E1 = document.querySelector('.conteudoh1');
const capE1 = document.querySelector('.conteudop');


link.forEach(el => {
    el.addEventListener('click', () => {
        langE1.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        hiE1.textContent = data[attr].hi;
        vddE1.textContent = data[attr].vdd
        mkE1.textContent = data[attr].mk
        veE1.textContent = data[attr].ve
        serE1.textContent = data[attr].ser
        volE1.textContent = data[attr].vol
        cah1E1.textContent = data[attr].conteudoh1
        capE1.textContent = data[attr].conteudop


    });

});

var data = {
    "pt":
    {
        "hi": "Seja bem vindo!",
        "vdd": "Vendas",
        "mk": "MKT DIGITAL",
        "ve": "VENDAS ESTATÉGICAS",
        "ser": "ÁREAS DE ATUAÇÃO",
        "vol": "Voltar",
        "conteudoh1": "Vendas",
        "conteudop": "A transformação digital tem trazido ferramentas que potencializam nossa força de vendas, eficiência no atendimento e evidência na divulgação de produtos e serviços.",



    },
    "en":
    {
        "hi": "Welcome to my page!",
        "vdd": "Sales",
        "mk": "DIGITAL MKT",
        "ve": "STRATEGIC SALES",
        "ser": "AREAS OF PERFORMANCE",
        "vol": "Back",
        "conteudoh1": "Sales",
        "conteudop": "The digital transformation has brought tools that enhance our sales force, efficient service and evidence in the dissemination of products and services.",
    }
}






/*
var dataReload = document.querySelectorAll('[data-reload]')
var hi = document.getElementById('hi')
var language = {
    pt: {
        welcome: 'Seja bem vindo!'
    },
    eng: {
        welcome: 'Welcome to my page!'
    }
};
var setLanguage = () => {

    // if (window.location.hash) {
    if (window.location.hash === '#eng') {
        hi.textContent = language.eng.welcome;
    } else {
        hi.textContent = language.pt.welcome;

    }
}

for (i = 0; i < dataReload.length; i++) {
    dataReload[i].onclick = function (e) {
        window.location.hash = this.getAttribute("href");
        //    location.reload(true);
        setLanguage();
    };
}
setLanguage();

// TRADUÇÃO MENU //

var dataReload = document.querySelectorAll('[data-reload]')
var vdd = document.getElementById('vdd')
var language = {
    pt: {
        wel: 'Vendas'
    },
    eng: {
        wel: 'Sales'
    }
};
var setLanguage = () => {

    // if (window.location.hash) {
    if (window.location.hash === '#eng') {
        vdd.textContent = language.eng.wel;
    } else {
        vdd.textContent = language.pt.wel;

    }
}

for (i = 0; i < dataReload.length; i++) {
    dataReload[i].onclick = function (e) {
        window.location.hash = this.getAttribute("href");
        //    location.reload(true);
        setLanguage();
    };
}
setLanguage();
*/