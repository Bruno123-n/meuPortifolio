const lista = document.getElementById('listaProjetos')

//banco de dados
const Projetos = [
    {
        nome: 'Login',
        descricao: 'Formulário com validação em JavaScript',
        link: 'https://github.com/Bruno123-n/alinhando-codigos/tree/main/formulario2',
        imagem: 'imagens/Login.png'
    },
    {
        nome: 'Lista de Tarefas',
        descricao: 'Aplicação com localStorage',
        link: 'https://github.com/Bruno123-n/alinhando-codigos/tree/main/listadetarefas',
        imagem: 'imagens/Lista-de-Tarefa.png'
    },
    {
        nome: 'Buscador de CEP',
        descricao: 'consumo de API com fetch',
        link: 'https://github.com/Bruno123-n/alinhando-codigos/tree/main/buscarCep',
        imagem: '/imagens/BuscadordeCEP.png'
        
    }
]

Projetos.forEach(projeto => {
    const div = document.createElement('div')
    div.classList.add('projeto')

    div.innerHTML = `
        <img src='${projeto.imagem}' alt='${projeto.nome}'>
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver projeto</a>
        `


    lista.appendChild(div)
})