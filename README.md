# P2 - Linguagem de Programação Java  
Projeto simples para adicionar, listar e deletar usuários no MongoDB.  
Projeto fullstack usando:  
- JavaScript;  
- Node.js;  
- MongoDB;  
- HTML  
# Processo  
Criação de um cluster no MongoDB;  
Criação de uma pasta para backend e frontend;  
No terminal (dentro da pasta backend):  
```npm init -y```  
Em seguida:  
```npm install express mongoose cors```  
- ```express``` cria o servidor;  
- ```mongoose``` para facilitar a conexão com o MongoDB;  
- ```cors``` para permitir a comunicação entre Front e Back;  
- ```npm install dotenv``` para o .env funcionar  
Após isso, na pasta do backend, teve a criação do [server.js](backend/server.js);  
Ainda na pasta backend, é bom criar o arquivo ```.env``` para não expor dados sensíveis.  
Isso vai no .env:  
```MONGO_URI=mongodb+srv://seu_usuario:sua_senha@cluster...```  
```PORT=3000```  
Depois, apenas a criação do [index.html](frontend/index.html) (a cara do site) e o [app.js](frontend/app.js) (como o site funciona);  
Para rodar o site, no terminal dentro de backend, basta digitar ```node server.js``` e abrir o [site](frontend/index.html);  
E estará funcionando.  
# Artefatos  
Comando:  
![img1](Artefatos/comando.png)
Site:  
![img2](Artefatos/site.png)  
Teste (print tirado depois):  
![img3](Artefatos/teste.png)  
MongoDB (antes do Delete):  
![img5](Artefatos/mongodb.png)  
Teste do Delete:  
![img4](Artefatos/testedelete.png)  
MongoDB (depois do Delete):  
![img5](Artefatos/mongodbdelete.png)  
Conclusão:  
![img7](Artefatos/conclusao.png)

