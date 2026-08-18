const lista = document.getElementById('listaProjetos')

// Banco de dados de projetos atualizado
const projetos = [
    {
        nome: 'Delícias da Lari (React)',
        descricao: 'E-commerce de doces artesanais com carrinho via Custom Hooks, busca de CEP via ViaCEP API e envio de pedidos no WhatsApp.',
        link: 'https://github.com/Bruno123-n/Delicias-da-Lari-React',
        demo: 'https://bruno123-n.github.io/Delicias-da-Lari-React/',
        imagem: 'imagens/deliciasDaLari.png', // Lembre-se de salvar uma imagem do site nesta pasta
        tags: ['React', 'JavaScript', 'CSS3', 'API REST']
    },
    {
        nome: 'Orizon Prime Studio (React)',
        descricao: 'Landing page moderna em React com fluxo de agendamento de serviços integrado diretamente ao WhatsApp.',
        link: 'https://github.com/Bruno123-n/orizon-prime-studio-react',
        demo: 'https://bruno123-n.github.io/orizon-prime-studio-react/',
        imagem: 'imagens/orizonPrimeStudioorizonPrimeStudio.png',
        tags: ['React', 'JavaScript', 'Vite', 'CSS3']
        
    },
    {
        nome: 'taskboard-js',
        descricao: 'Gerenciador de tarefas estilo Kanban interativo focado em produtividade. Desenvolvido com Vanilla JS, manipulação do DOM e localStorage.',
        link: 'https://github.com/Bruno123-n/taskboard-js',
        demo: 'https://bruno123-n.github.io/taskboard-js/',
        imagem: 'imagens/to-do-list.png',
        tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
        nome: 'Buscador de CEP',
        descricao: 'Busca automática de endereço via API, tratando erros e exibindo dados em tempo real.',
        link: 'https://github.com/Bruno123-n/alinhando-codigos/tree/main/buscarCep',
        demo: null,
        imagem: 'imagens/BuscadordeCEP.png',
        tags: ['HTML', 'CSS', 'JavaScript', 'API REST']
    },
    {
        nome: 'Lista de Tarefas',
        descricao: 'Aplicação com armazenamento local (localStorage) para gerenciar tarefas.',
        link: 'https://github.com/Bruno123-n/alinhando-codigos/tree/main/listadetarefas',
        demo: null,
        imagem: 'imagens/Lista-de-Tarefa.png',
        tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
        nome: 'Login',
        descricao: 'Formulário com validação de campos e feedback visual ao usuário.',
        link: 'https://github.com/Bruno123-n/alinhando-codigos/tree/main/formulario2',
        demo: null,
        imagem: 'imagens/Login.png',
        tags: ['HTML', 'CSS', 'JavaScript']
    }
]

projetos.forEach(({nome, descricao, link, imagem, demo, tags}, index) => {
    const div = document.createElement('div')
    div.classList.add('projeto')
    div.style.transitionDelay = `${index * 0.1}s`

    div.innerHTML = `
        <div class="card">
            <img src="${imagem}" alt="Projeto ${nome}" 
                onerror="this.src='https://via.placeholder.com/300?text=Projeto+Front-End'">

            <div class="card-content">
                <h3>${nome}</h3>
                <p>${descricao}</p>

                <div class="tags">
                    ${tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>

                <div class="botoes">
                    <a href="${link}" target="_blank">Código</a>
                    ${demo ? `<a href="${demo}" target="_blank">Ver site</a>` : ''}
                </div>
            </div>
        </div>
    `

    lista.appendChild(div)
})

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