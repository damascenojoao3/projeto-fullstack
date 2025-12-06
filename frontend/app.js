const API_URL = 'http://localhost:3000/usuarios';
let idParaEditar = null; // guarga o ID se estiver editando

// função de buscar dados (GET) e mostrar na tela
async function carregarUsuarios() {
    const resposta = await fetch(API_URL);
    const usuarios = await resposta.json();
    
    const divLista = document.getElementById('lista');
    divLista.innerHTML = ''; 

    usuarios.forEach(user => {
        // 1. PRIMEIRO cria o elemento
        const item = document.createElement('div');
        item.className = 'card';
        
        // 2. DEPOIS define o que vai dentro (HTML com os dois botões)
        item.innerHTML = `
            <span>${user.nome} (${user.email})</span>
            <div style="margin-top: 10px;">
                <button onclick="preencherFormulario('${user._id}', '${user.nome}', '${user.email}')" style="color:blue; margin-right:10px;">Editar</button>
                <button onclick="deletarUsuario('${user._id}')" style="color:red;">Excluir</button>
            </div>
        `;
        
        // 3. POR FIM, adiciona na lista
        divLista.appendChild(item);
    });
}

// função para deletar dados (DELETE)
async function deletarUsuario(id) {
    if(confirm("Tem certeza que deseja excluir?")) {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        
        // recarrega a lista para sumir com o item excluído
        carregarUsuarios(); 
    }
}

// função de enviar dados (POST) ou atualizar (PUT)
async function criarUsuario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (idParaEditar === null) {
        // MODO CRIAÇÃO (POST)
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email })
        });
    } else {
        // MODO EDIÇÃO (PUT)
        await fetch(`${API_URL}/${idParaEditar}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email })
        });
        
        idParaEditar = null; // voltar para modo criação
        document.querySelector('button[onclick="criarUsuario()"]').innerText = "Salvar"; // voltar texto do botão
    }

    // Limpar campos e recarregar
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    carregarUsuarios();
}
function preencherFormulario(id, nome, email) {
    document.getElementById('nome').value = nome;
    document.getElementById('email').value = email;
    idParaEditar = id; // "Ligar" o modo edição

    document.querySelector('button[onclick="criarUsuario()"]').innerText = "Atualizar";
}

// carregar a lista ao abrir a página
carregarUsuarios();