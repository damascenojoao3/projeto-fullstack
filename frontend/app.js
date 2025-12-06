const API_URL = 'http://localhost:3000/usuarios';

// função de buscar dados (GET)
async function carregarUsuarios() {
    const resposta = await fetch(API_URL);
    const usuarios = await resposta.json();
    
    const divLista = document.getElementById('lista');
    divLista.innerHTML = ''; // limpa a lista antes de renderizar

    usuarios.forEach(user => {
        const item = document.createElement('div');
        item.className = 'card';
        item.innerText = `${user.nome} - ${user.email}`;
        divLista.appendChild(item);
    });
}

// função de enviar dados (POST)
async function criarUsuario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email })
    });

    // limpar campos e recarregar a lista
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    carregarUsuarios();
}

// carregar a lista ao abrir a página
carregarUsuarios();