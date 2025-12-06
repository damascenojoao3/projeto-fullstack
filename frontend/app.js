const API_URL = 'http://localhost:3000/usuarios';

// função de buscar dados (GET)
async function carregarUsuarios() {
    const resposta = await fetch(API_URL);
    const usuarios = await resposta.json();
    
    const divLista = document.getElementById('lista');
    divLista.innerHTML = ''; 

    usuarios.forEach(user => {
        const item = document.createElement('div');
        item.className = 'card';
        
        item.innerHTML = `
            <span>${user.nome} (${user.email})</span>
            <button onclick="deletarUsuario('${user._id}')" style="color:red; margin-left:10px;">X</button>
        `;
        
        divLista.appendChild(item);
    });
}

// função para deletar dados (DELETE)
async function deletarUsuario(id) {
    if(confirm("Tem certeza que deseja excluir?")) {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        
        // Recarrega a lista para sumir com o item excluído
        carregarUsuarios(); 
    }
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