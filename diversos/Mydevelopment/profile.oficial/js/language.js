const langE1 = document.querySelector('.langwrap');
const link = document.querySelectorAll('#lg');
const hiE1 = document.querySelector('.hi');
const vddE1 = document.querySelector('#vdd');
const mkE1 = document.querySelector('#mk');
const veE1 = document.querySelector('#ve');
const serE1 = document.querySelector('#ser');
const sobE1 = document.querySelector('#sob');
const cah1E1 = document.querySelector('.conteudoh1');
const capE1 = document.querySelector('.conteudop');
const cbh1E1 = document.querySelector('.conteudobh1');
const cbpE1 = document.querySelector('.conteudobp');
const cch1E1 = document.querySelector('.conteudoch1');
const ccpE1 = document.querySelector('.conteudocp');
const cch21E1 = document.querySelector('.conteudoch21');
const ccp1E1 = document.querySelector('.conteudocp1');
const cch22E1 = document.querySelector('.conteudoch22');
const ccp2E1 = document.querySelector('.conteudocp2');
const cch23E1 = document.querySelector('.conteudoch23');
const ccp3E1 = document.querySelector('.conteudocp3');
const servh2E1 = document.querySelector('.serviçosh2');
const cloE1 = document.querySelector('.clo');
const crmpE1 = document.querySelector('.crmp');
const amh3E1 = document.querySelector('.amh3');
const ampE1 = document.querySelector('.amp');
const aspE1 = document.querySelector('.asp');
const bbpE1 = document.querySelector('.bbp');
const bblE1 = document.querySelector('.bbl');
const abipE1 = document.querySelector('.abip');
const fh2E1 = document.querySelector('.fh2');
const fh1E1 = document.querySelector('.fh1');

link.forEach(el => {
    el.addEventListener('click', () => {
        langE1.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');


        hiE1.textContent = data[attr].hi;
        vddE1.textContent = data[attr].vdd;
        mkE1.textContent = data[attr].mk;
        veE1.textContent = data[attr].ve;
        serE1.textContent = data[attr].ser;
        sobE1.textContent = data[attr].sob;
        cah1E1.textContent = data[attr].conteudoh1;
        capE1.textContent = data[attr].conteudop;
        cbh1E1.textContent = data[attr].conteudobh1;
        cbpE1.textContent = data[attr].conteudobp;
        cch1E1.textContent = data[attr].conteudoch1;
        ccpE1.textContent = data[attr].conteudocp;
        cch21E1.textContent = data[attr].conteudoch21;
        ccp1E1.textContent = data[attr].conteudocp1;
        cch22E1.textContent = data[attr].conteudoch22;
        ccp2E1.textContent = data[attr].conteudocp2;
        cch23E1.textContent = data[attr].conteudoch23;
        ccp3E1.textContent = data[attr].conteudocp3;
        servh2E1.textContent = data[attr].serviçosh2;
        cloE1.textContent = data[attr].clo;
        crmpE1.textContent = data[attr].crmp;
        amh3E1.textContent = data[attr].amh3;
        ampE1.textContent = data[attr].amp;
        aspE1.textContent = data[attr].asp;
        bbpE1.textContent = data[attr].bbp;
        bblE1.textContent = data[attr].bbl;
        abipE1.textContent = data[attr].abip;
        fh2E1.textContent = data[attr].fh2;
        fh1E1.textContent = data[attr].fh1;
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
        "sob": "Sobre nós",
        "conteudoh1": "Vendas",
        "conteudop": "A transformação digital tem trazido ferramentas que potencializam nossa força de vendas, eficiência no atendimento e evidência na divulgação de produtos e serviços.",
        "conteudobh1": "MKT Digital",
        "conteudobp": "Dar aos seus clientes e consumidores uma jornada atrativa, descomplicada e preparando sempre a próxima etapa na aquisição de seus produtos e serviços.",
        "conteudoch1": "Vendas Estratégicas",
        "conteudocp": "Incluir a cultura digital nas empresas, alinhando todos os departamentos, vendas, marketing e serviços em uma única direção e apresentando o valor destas mudanças e ferramentas.",
        "conteudoch21": "Atração",
        "conteudocp1": "Conscientização, demonstração, avaliação, descoberta, geração de tráfego e visitantes(leads).",
        "conteudoch22": "Consideração",
        "conteudocp2": "Demonstrar, qualificar, negociar.",
        "conteudoch23": "Venda",
        "conteudocp3": "Novos clientes, ampliação de vendas com outros produtos de linha (cross - sell e up - sell), alcançando a fidelização dos clientes.",
        "serviçosh2": "Áreas Importantes",
        "clo": "Os principais aspectos da Computação em Nuvem são a economia e escalabilidade, isto é, manter uma infraestrutura de aplicações e de servidores físicos (on-premises), se tornam custosas, considerando equipamentos e toda despesa envolvida com suas manutenções. Ainda, a computação em nuvem oferece o crescimento escalonado de acordo com seu volume e necessidade, pagando de acordo com seu uso. Deve-se considerar também todos os demais recuros, segurança, aplicativos que são incontáveis, e as atualizações que ocorrem constantemente.",
        "crmp": "A relação com os clientes estão cada dia mais próximas, e com isso a exigência de informações e dados para rápida ação. Agilidade na resposta e gerenciamento de dados dos clientes são importantes atributos do CRM. Pensando em como seria nossas vidas sem os apps de chats que temos hoje, o CRM tem o mesmo caminho ao meu ver, difícil viver sem.",
        "amh3": "Automação em Marketing",
        "amp": "São tantas informações importantes e atualizações de produtos, aplicações e promoções, e queremos alcançar nosso público alvo imediatamente. Ferramentas automatizadas nestas tarefas são impressindíveis e estão à nossa disposição, como envio de emails, sms, os chatbots, etc...",
        "asp": "Você que deseja encontrar o cliente, no momento e no local certo, otimizar sua classificação nos resultados de busca, são necessárias ações SEO de maneira estratégica com palavras chaves, conteúdos e links em sua página na web e redes sociais.Fortalecer a geração de tráfego com anúncios pagos, desenvolvendo atuações nas plataformas de buscas, videos, displays, Apps e shoppping.",
        "bbp": "Temos conhecimento de reconhecidas plataformas de e-commerce e b2b que deram viabilidade e maior segurança para iniciar sua loja virtual e ou serviço de b2b de forma rápida e acessível, abaixo link para a plataforma.Também desenvolver um website moderno e interativo para apresentar seus produtos e serviços na interntet.",
        "bbl": "Acesse aqui",
        "abip": "Você conhece o seu público? Como reagem às ações que promove? Os dados nunca foram tão importantes quanto na atualidade para avaliar resultados e nas tomadas de decisões. Além da captação destes dados, qual a melhor forma de analisá-los, gráficos e dashboards ajudam na melhor visualização e compreensão destes.",
        "fh2": "A transformação digital é uma realidade ocorrendo de forma rápida, pecisamos explorar estes serviços. O conhecimento que alcaçamos no estudo de alguns recursos tem gerado grande desejo de colocá-los em prática.Focamos em ajudar no desenvolvimento das aplicações digitais, aumentando a eficiência, potencializando as vendas e fortalecendo o posicionamento de marca.",
        "fh1": "Estamos disposição, queremos conhecer o seu negócio, faça contato conosco!",
    },
    "en":
    {
        "hi": "Welcome to my page!",
        "vdd": "Sales",
        "mk": "DIGITAL MKT",
        "ve": "STRATEGIC SALES",
        "ser": "AREAS OF PERFORMANCE",
        "sob": "ABOUT US",
        "conteudoh1": "Sales",
        "conteudop": "The digital transformation has brought tools that enhance our sales force, efficient service and evidence in the dissemination of products and services.",
        "conteudobh1": "Digital MKT",
        "conteudobp": "Give your customers and consumers an attractive, uncomplicated journey and always preparing the next step in the acquisition of your products and services.",
        "conteudoch1": "Strategic Sales",
        "conteudocp": "Include digital culture in companies, aligning all departments, sales, marketing and services in a single direction and presenting the value of these changes and tools.",
        "conteudoch21": "Attraction",
        "conteudocp1": "Awareness, demonstration, evaluation, discovery, generation of traffic and visitors(leads).",
        "conteudoch22": "Consideration",
        "conteudocp2": "Demonstrate, qualify, negotiate.",
        "conteudoch23": "Sale",
        "conteudocp3": "New customers, increased sales with other line products (cross - sell and up - sell), achieving customer loyalty.",
        "serviçosh2": "Important Areas",
        "clo": "The main aspects of Cloud Computing are economy and scalability, maintaining an infrastructure of applications and on-premises servers are high investment, considering equipment and all expenses involved in maintenance. In addition, cloud computing offers scalable growth in according to its volume and needs, paying as you go (usage). Also should be considered all other features, security, applications are countless and updates that occur constantly.",
        "crmp": "The relationship with customers is getting closer every day, and with that the requirement for information and data for quick action. Agility in responding and managing customer data is important CRM attributes. Thinking about how our lives would be like without the chat apps we have today, CRM has the same path in my view, difficult to live without.",
        "amh3": "Marketing Automation",
        "amp": "There is so much important information and product updates, applications and promotions, and we want to achieve our target audience immediately.Automated tools for these tasks are essential and are at our disposal disposition, how sending emails, chatbots, sms, etc ...",
        "asp": "If you want to find the client, at the right time and in the right place, to optimize your ranking in the search results, SEO actions are needed strategically with keywords, content and links on your web page and social networks. Strengthen traffic generation with paid ads, developing actions in the search, video, display, Apps and shoppping platforms.",
        "bbp": "We are aware of recognized e-commerce platforms and b2b that gave viability and greater security to start your store virtual and or b2b service quickly and affordably, below link to the platform.Also develop a modern and interactive website to present your products and services on the internet.",
        "bbl": "Click here",
        "abip": "Do you know your audience? How do you react to the actions you promote? Data has never been more important than it is today for evaluate results and decision making.In addition to of these data, what is the best way to analyze them, graphs and dashboards help to better visualize and understand them.",
        "fh2": "The digital transformation is a reality occurring quickly, we need to explore these services. The knowledge we reach the study of some resources has generated a great desire to place them into practice.We focus on helping in the development of digital applications, increasing efficiency, leveraging sales and strengthening brand positioning.",
        "fh1": "We are available, we want to know your business, contact us!",
    }
}