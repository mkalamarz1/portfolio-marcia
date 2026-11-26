
const linksMenu = document.querySelectorAll('.menu a');
const secoes = document.querySelectorAll('main section');

function mostrarSecao(id) {
    secoes.forEach((secao) => {
        secao.hidden = secao.id !== id;
    });

    linksMenu.forEach((link) => {
        link.classList.toggle(
            'ativo',
            link.getAttribute('href') === `#${id}`
        );
    });
}

// Clique no menu ou nos links internos
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (evento) => {
        const id = link.getAttribute('href').substring(1);
        const destino = document.getElementById(id);

        if (destino && destino.tagName === 'SECTION') {
            evento.preventDefault();
            mostrarSecao(id);
            history.replaceState(null, '', `#${id}`);
        }
    });
});

// Abre a seção indicada na URL ou a página inicial
const secaoInicial = window.location.hash.substring(1);
const existeSecao = [...secoes].some(
    (secao) => secao.id === secaoInicial
);

mostrarSecao(existeSecao ? secaoInicial : 'inicio');
