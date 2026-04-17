const lista = document.getElementById('listaProjetos')

const Projetos = [
    {
        nome: 'Login',
        descricao: 'Formulário com validação em JavaScript',
        link: '#'
    },
    {
        nome: 'Lista de Tarefas',
        descricao: 'Aplicação com localStorage',
        link: '#'
    },
    {
        nome: 'Buscador de CEP',
        descricao: 'consumo de API com fetch',
        link: '#'
    }
]

Projetos.forEach(projeto => {
    const div = document.createElement('div')
    div.classList.add('projeto')

    div.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver projeto</a>
        `


    lista.appendChild(div)
})