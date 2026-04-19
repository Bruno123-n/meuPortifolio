const lista = document.getElementById('listaProjetos')

//banco de dados
const projetos = [
    {
        nome: 'Login',
        descricao: 'Formulário com validação de campos e feedback visual ao usuário',
        link: 'https://github.com/Bruno123-n/alinhando-codigos/tree/main/formulario2',
        imagem: 'imagens/Login.png'
    },
    {
        nome: 'Lista de Tarefas',
        descricao: 'Aplicação com armazenamento local (localStorage) para gerenciar tarefas',
        link: 'https://github.com/Bruno123-n/alinhando-codigos/tree/main/listadetarefas',
        imagem: 'imagens/Lista-de-Tarefa.png'
    },
    {
        nome: 'Buscador de CEP',
        descricao: 'Busca automática de endereço via API, tratando erros e exibindo dados em tempo real',
        link: 'https://github.com/Bruno123-n/alinhando-codigos/tree/main/buscarCep',
        imagem: 'imagens/BuscadordeCEP.png'
        
    }
]

projetos.forEach(({nome, descricao, link, imagem},index)=> {
    const div = document.createElement('div')
    div.classList.add('projeto')

    div.innerHTML = `
    <img src="${imagem}" 
         alt="Projeto ${nome}" 
         onerror="this.src='https://via.placeholder.com/300'">
    <h3>${nome}</h3>
    <p>${descricao}</p>
    <a href="${link}" target="_blank" rel="noopener noreferrer">Ver projeto</a>
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