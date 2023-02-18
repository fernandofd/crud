

let user = {
    nome: ["Fernando", "Ana", "Rodrigo", "Letícia", "Julia", "Ricardo"],
    senha: ["123", "123", "123", "123", "123", "123"]
}
let cont = 0;
let controlecont = 0
let lista = ""


function listarusuarios() {
    cont = 0
    lista = document.querySelector('div.lista');
    lista.innerHTML = ``;
    lista.innerHTML += "Listar usuário <br><br>"
    while (cont < user.nome.length) {
        lista.innerHTML += `Usuário ${cont} - ${user.nome[cont]}      (Senha - ${user.senha[cont]}) <br>`
        cont++
    }
}

function limparusuarios() {
    lista = document.querySelector('div.lista');
    lista.innerHTML = ``
    cont = 0

}

function deletarusuarios() {
    lista = document.querySelector('div.lista');
    lista.innerHTML = ``;
    cont = 0
    lista.innerHTML += "Deletar usuário <br><br>"
    while (cont < user.nome.length) {
        lista.innerHTML += `<div><input type="checkbox" id="${cont}" name="${cont}" value="${user[cont]}"><label for="user${cont}">  -${user.nome[cont]}</label></div>`
        cont++
        if (cont == user.nome.length) {
            lista.innerHTML += `<input type="button" value="Deletar" class="botao" onclick="deletarusuarios2()">`
        }
    }
}


function deletarusuarios2() {
    cont = 0
    
    while (cont < user.nome.length) {
        lista = document.getElementById(`${cont}`).checked; //.checked verifica qual input está marcada, retornando true ou false
        
        if (lista == true) {
            alert(`O usuário ${user.nome[cont]} foi deletado!`)
            user.nome.splice(cont, 1)  // exclui um  elemento da posição correspondente a cont
            user.senha.splice(cont, 1)  // exclui um  elemento da posição correspondente a cont
        }
        cont++
    }
    listarusuarios()
}


function adicionarusuarios() {
    lista = document.querySelector('div.lista');
    lista.innerHTML = ``;
    lista.innerHTML += "Adicionar usuário <br><br>"
    lista.innerHTML += `<form>
                        <label for="inputuser">Nome usuário:</label><br>
                        <input type="text" class="inputuser"> <br>
                        <label for="inputsenha">Digite a senha:</label><br>
                        <input type="password" class="inputsenha"><br>  <br>              
                        <input type="button" value="Adicionar User" class="botao" onclick="adicionarusuarios1()">
                        </form>`
}


function adicionarusuarios1() {
    let nome = document.querySelector('input.inputuser').value;
    let senha = document.querySelector('input.inputsenha').value;
    cont = 0
    let repetida = 0
    while (cont < user.nome.length) {
        if (user.nome[cont] == nome) {
            repetida = 1
        }
        cont++
    }
    if (repetida == 0) {
        user.nome.push(nome) // adiciona valores na ultima posição do vetor
        user.senha.push(senha) // adiciona valores na ultima posição do vetor
        alert("Usuário adicionado com sucesso!")
        lista.innerHTML = ``;
        lista.innerHTML += "Adicionar usuário <br><br>"
        listarusuarios()
    } else {
        alert("Usuário já existe no cadastro, digite outro nome")
        adicionarusuarios()
    }
}


function atualizar() {
    lista = document.querySelector('div.lista');
    lista.innerHTML = ``;
    lista.innerHTML += "Trocar usuário <br><br>"
    lista.innerHTML += `<form>
                        <label for="inputuser">Nome usuário:</label><br>
                        <input type="text" class="inputuser"> <br>
                        <label for="inputsenha">Digite a senha atual:</label><br>
                        <input type="password" class="inputsenha"><br> 
                        <label for="inputuser1">Novo usuário:</label><br>
                        <input type="text" class="inputuser1"> <br>
                        <label for="inputsenha1">Nova Senha:</label><br>
                        <input type="password" class="inputsenha1"> <br>
                        <label for="inputsenha2">Confirma senha:</label><br>
                        <input type="password" class="inputsenha2"><br>           
                        <input type="button" value="trocar" class="botao" onclick="trocarsenha1()">
                        </form>`
}


function trocarsenha1() {
    let nome = document.querySelector('input.inputuser').value; // nome atual
    let nome1 = document.querySelector('input.inputuser1').value;//novo nome
    let senha = document.querySelector('input.inputsenha').value;//senha atual
    let senha1 = document.querySelector('input.inputsenha1').value;//nova senha
    let senha2 = document.querySelector('input.inputsenha2').value;//confirmação senha
    let errosenha = 1 // erro de senha inicia com 1 e coloca 0 se tudo der certo
    let errousuario = 0 // erro de usuário 
    let indice=0 // usado para pegar a posição no vetor para salvar nome e senha
    cont = 0 // usado para iniciar a varredura nos loops
   
    while (cont < user.nome.length) { // varredura nos nomes dos usuários para testar duplicidade

        if (user.nome[cont] == nome1) { // usado para teste se já existe nome na lista
            if(user.nome[cont!= nome]){ // usado para permitir o mesmo nome e trocar somente a senha
               errousuario=1  // usado para descrever erro de nome usuário
            }
        }
        cont++ // incremento do loop
    }
    cont = 0 // zerando o incremento para o proximo uso

    if(errousuario==0){ // somente executar se não tiver erro anterior
        errousuario=1 // coloco o erro para limpar nos testes internos, pois preciso achar um usuário
         while (cont < user.nome.length) { // loop de teste de usuário
        if (user.nome[cont] == nome) { // testa se o nome digitado é valido no sistema para liberar a alteração
            errousuario = 0 // se sim zero a variável de erro afinal se achar uma vez ta correto
            if ((user.senha[cont] == senha)&&(senha1==senha2)) {// verifica se a senha atual está correta e se a validação da nova senha está correta
                errosenha = 0 // zero o erro de senha pois passou no teste
                indice=cont // gravo o indice do vetor para poder alterar
                
            } 
        } 
        cont++// incremento do loop
    }
    }
   

    if (errousuario == 0) {
        
        if (errosenha == 0) {
            lista = document.querySelector('div.lista');
            lista.innerHTML = ``;
            user.nome[indice]=nome1
            user.senha[indice]=senha1
            alert("Dados atualizado com sucesso")
            atualizar()
        } else {
            alert("Login incorreto, favor verificar os dados, senha incorreta")
            atualizar()
        }

    } else {
        alert("Login incorreto, favor verificar os dados, usuário incorreto")
        atualizar()
    }

}









function testarusersenha() {
    lista = document.querySelector('div.lista');
    lista.innerHTML = ``;
    lista.innerHTML += "Teste usuário <br><br>"
    lista.innerHTML += `<form>
                        <label for="inputuser">Nome usuário:</label><br>
                        <input type="text" class="inputuser"> <br>
                        <label for="inputsenha">Digite a senha:</label><br>
                        <input type="password" class="inputsenha"><br>  <br>              
                        <input type="button" value="Logar" class="botao" onclick="testarusersenha1()">
                        </form>`
}


function testarusersenha1() {
    let nome = document.querySelector('input.inputuser').value;
    let senha = document.querySelector('input.inputsenha').value;
    let errosenha = 0
    let errousuario = 0
    cont = 0
    errosenha = 1
    errousuario = 1
    while (cont < user.nome.length) {
        if (user.nome[cont] == nome) {
            errousuario = 0
            if (user.senha[cont] == senha) {
                errosenha = 0
            } 
        } 
        cont++
    }

    if (errousuario == 0) {
        if (errosenha == 0) {
            alert("Login realizado com sucesso!")
            testarusersenha()
        } else {
            alert("Login incorreto, favor verificar os dados, senha incorreta")
            testarusersenha()
        }

    } else {
        alert("Login incorreto, favor verificar os dados, usuário incorreto")
        testarusersenha()
    }

}
