const lista = document.getElementById('listaProjetos')

//banco de dados
const projetos = [
    {
        nome: 'Login',
        descricao: 'Formulário com validação de campos e feedback visual ao usuário',
        link: 'https://github.com/Bruno123-n/alinhando-codigos/tree/main/formulario2',
        demo: null,
        imagem: 'imagens/Login.png'
    },
    {
        nome: 'Lista de Tarefas',
        descricao: 'Aplicação com armazenamento local (localStorage) para gerenciar tarefas',
        link: 'https://github.com/Bruno123-n/alinhando-codigos/tree/main/listadetarefas',
        demo: null,
        imagem: 'imagens/Lista-de-Tarefa.png'
    },
    {
        nome: 'Buscador de CEP',
        descricao: 'Busca automática de endereço via API, tratando erros e exibindo dados em tempo real',
        link: 'https://github.com/Bruno123-n/alinhando-codigos/tree/main/buscarCep',
        demo: null,
        imagem: 'imagens/BuscadordeCEP.png'
    },
    {
        nome: 'Orizon Prime Studio - Landing Page',
        descricao: 'Landing page moderna e responsiva, com HTML5, CSS3 e JavaScript (ES6+)',
        link: 'https://github.com/Bruno123-n/orizon-prime-studio',
        demo: 'https://bruno123-n.github.io/orizon-prime-studio/',
        imagem: 'imagens/orizonPrimeStudio.png'
    },
    {
        nome: 'Cafe Vitalle - Landing Page',
        descricao: 'Landing page simples com HTML5 e CSS3',
        link: 'https://github.com/Bruno123-n/cafeteria',
        demo: 'https://bruno123-n.github.io/cafeteria/',
        imagem: 'imagens/cafeVitalle.png'
    },
    {
        nome: 'taskboard-js',
        descricao: 'Gerenciador de tarefas estilo Kanban interativo focado em produtividade. Desenvolvido de forma nativa com JavaScript puro (Vanilla JS), HTML5 e CSS3. Apresenta interface limpa, manipulação dinâmica do DOM para organização de fluxos de trabalho e persistência de dados local.',
        link: 'https://github.com/Bruno123-n/taskboard-js',
        demo: 'https://bruno123-n.github.io/taskboard-js/',
        imagem: 'imagens/to-do-list.png'
    }
]

projetos.forEach(({nome, descricao, link, imagem, demo},index)=> {
    const div = document.createElement('div')
    div.classList.add('projeto')

    //funciona junto com transiton dentro de css
    div.style.transitionDelay = `${index * 0.1}s`

    div.innerHTML = `
        <div class="card">
            <img src="${imagem}" alt="Projeto ${nome}" 
                onerror="this.src='https://via.placeholder.com/300'">

            <div class="card-content">
                <h3>${nome}</h3>
                <p>${descricao}</p>

                <div class="tags">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JS</span>
                </div>

                <div class="botoes">
                    <a href="${link}" target="_blank">Código</a>
                    ${demo ? `<a href="${demo}">Ver site</a>` : ''}
                </div>
            </div>
        </div>
    `



    lista.appendChild(div)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
           if (entry.isIntersecting) {
                entry.target.classList.add('aparecer')
            }
        })
    }, {
    threshold: 0.2
    })

    document.querySelectorAll('.projeto').forEach(projeto => {
    observer.observe(projeto)
    })


})

