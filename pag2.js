let user = [
    {
        nome: "admin",
        senha: "admin"
    }
   
]



// função e evento para testar o botão de listar usuários

const inputlistarusuarios = document.querySelector("#listarusuarios");
inputlistarusuarios.addEventListener("click", listarusuarios0)

// função e evento para limpar a lista exibida
const inputlimpar = document.querySelector("#limparusuarios");
inputlimpar.addEventListener("click", limpartela)

// função e evento para mostrar os usuários para escolha deletar
const inputdeletar1 = document.querySelector("#deletarusuarios1");
inputdeletar1.addEventListener("click", deletarusuario1)


// função e evento para adicionar os usuários 
const inputadicionar1 = document.querySelector("#adicionarusuarios1");
inputadicionar1.addEventListener("click", adicionarusuarios1)

// função e evento para atualizar os usuários 
const inputatualizar1 = document.querySelector("#atualizarusuarios1");
inputatualizar1.addEventListener("click", atualizarusuarios1)

// função e evento para testar os usuários 
const inputtestar1 = document.querySelector("#testarusersenha");
inputtestar1.addEventListener("click", testarusersenha1)








// função para listar todos os usuários na tela

function listarusuarios0() {
    let lista = document.querySelector('div.lista');
    lista.innerHTML = "";
    lista.innerHTML += "Listar usuário <br><br>"
    for (let index = 0; index < user.length; index++) {

        lista.innerHTML += `Usuário ${index + 1} - ${user[index].nome}      (Senha - ${user[index].senha}) <br>`
    }

}


// função para limpar a  tela onde exibimos os usuários 
function limpartela() {
    let lista = document.querySelector('div.lista');
    lista.innerHTML = ""
}


 // função para listar todos os usuários na tela para escolha de quem será deletado
function deletarusuario1() {
    let lista = document.querySelector('div.lista');
    lista.innerHTML = "";

    lista.innerHTML += "Deletar usuário <br><br>"
    for (let index = 0; index < user.length; index++) {
       
        lista.innerHTML += `<div><input type="checkbox" id="${index}"><label>  -${user[index].nome}</label></div>`
    }
    lista.innerHTML += `<input type="button" value="Deletar" class="botao" id="deletarusuarios2" >`

    // função e evento para deletar os escolhidos
    const inputdeletar2 = document.querySelector("#deletarusuarios2");
    inputdeletar2.addEventListener("click", deletarusuario2)
}



// função para deletar os usuários depois da escolha
function deletarusuario2() {
   let userdeletado = [""]
    for (let index = 0; index < user.length; index++) {
        let checkbox = document.getElementById(`${index}`);
        if (checkbox.checked == true) {
            userdeletado[index] = 1
        } else {
            userdeletado[index] = 0
        }
    }
    for (let index = userdeletado.length - 1; index >= 0; index--) {
        if (userdeletado[index] == 1) {
            user.splice(index, 1);
        }
    }
    listarusuarios0();
}







// função para mostrar o html form para adicionar usuários

function adicionarusuarios1() {
    let lista = document.querySelector('div.lista');
    lista.innerHTML = "";
    lista.innerHTML += "Adicionar usuário <br><br>"
    lista.innerHTML += `<form>
                        <label>Nome usuário:</label><br>
                        <input type="text" class="inputuser"> <br>
                        <label>Digite a senha:</label><br>
                        <input type="password" class="inputsenha"><br>  <br>              
                        <input type="button" value="Adicionar User" class="botao" id="adicionarusuarios2">
                        </form>`


// testando e gerenciando se o botão adicionar foi clicado
const inputadicionar2 = document.querySelector("#adicionarusuarios2");
inputadicionar2.addEventListener("click", adicionarusuarios2)
}





// funcão para executar os processos para adicionar os usuários
function adicionarusuarios2() {
    let novousuario = {
        nome: document.querySelector('input.inputuser').value,
        senha: document.querySelector('input.inputsenha').value
    }
    let repetida = 0
    for (let index = 0; index < user.length; index++) {
        if (user[index].nome == novousuario.nome) {
            repetida = 1
        }
    }
    if (repetida == 0) {
        user.push(novousuario) // adiciona valores na ultima posição do vetor
        alert("Usuário adicionado com sucesso!")
        listarusuarios0()
    } else {
        alert("Usuário já existe no cadastro, digite outro nome")
        adicionarusuarios1()
    }
}




// função para mostrar a tela html de atualizar os usuários

function atualizarusuarios1() {
    let lista = document.querySelector('div.lista');
    lista.innerHTML = "";
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
                        <input type="button" value="trocar" class="botao" id="trocarsenha">
                        </form>`

// função e evento para atualizar os usuários 
const inputtrocarsenha1 = document.querySelector("#trocarsenha");
inputtrocarsenha1.addEventListener("click", atualizarusuarios2)
}





//função para realizar todos os processos de troca de senha
function atualizarusuarios2() {
    let nome = document.querySelector('input.inputuser').value; // nome atual
    let nome1 = document.querySelector('input.inputuser1').value;//novo nome
    let senha = document.querySelector('input.inputsenha').value;//senha atual
    let senha1 = document.querySelector('input.inputsenha1').value;//nova senha
    let senha2 = document.querySelector('input.inputsenha2').value;//confirmação senha
    let errosenha = 1 // erro de senha inicia com 1 e coloca 0 se tudo der certo
    let errousuario = 0 // erro de usuário 
    let indice = 0 // usado para pegar a posição no vetor para salvar nome e senha


    for (let index = 0; index < user.length; index++) { // varredura nos nomes dos usuários para testar duplicidade

        if (user[index].nome == nome1) { // usado para teste se já existe nome na lista
            if (user[index].nome != nome) { // usado para permitir o mesmo nome e trocar somente a senha
                errousuario = 1  // usado para descrever erro de nome usuário
            }
        }

    }
    if (errousuario == 0) { // somente executar se não tiver erro anterior
        errousuario = 1 // coloco o erro para limpar nos testes internos, pois preciso achar um usuário
        for (let index = 0; index < user.length; index++) { // loop de teste de usuário
            if (user[index].nome == nome) { // testa se o nome digitado é valido no sistema para liberar a alteração
                errousuario = 0 // se sim zero a variável de erro afinal se achar uma vez ta correto
                if ((user[index].senha == senha) && (senha1 == senha2)) {// verifica se a senha atual está correta e se a validação da nova senha está correta
                    errosenha = 0 // zero o erro de senha pois passou no teste
                    indice = index // gravo o indice do vetor para poder alterar

                }
            }

        }
    }


    if (errousuario == 0) {

        if (errosenha == 0) {
            let lista = document.querySelector('div.lista');
            lista.innerHTML = "";
            user[indice].nome = nome1
            user[indice].senha = senha1
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


//função para executar teste de usuário
function testarusersenha1() {
    let lista = document.querySelector('div.lista');
    lista.innerHTML = "";
    lista.innerHTML += "Teste usuário <br><br>"
    lista.innerHTML += `<form>
                        <label for="inputuser">Nome usuário:</label><br>
                        <input type="text" class="inputuser"> <br>
                        <label for="inputsenha">Digite a senha:</label><br>
                        <input type="password" class="inputsenha"><br>  <br>              
                        <input type="button" value="Logar" class="botao" id="testarusersenha2">
                        </form>`
                        // função e evento para testar os usuários 
const inputtestar2 = document.querySelector("#testarusersenha2");
inputtestar2.addEventListener("click", testarusersenha2)
}


function testarusersenha2() {
    let dados = {
        nome: document.querySelector('input.inputuser').value,
        senha: document.querySelector('input.inputsenha').value
    }


    let erro = 1

    for (let index = 0; index < user.length; index++) {
        if (user[index].nome == dados.nome && user[index].senha == dados.senha) {
            erro = 0
            index = user.length
        }
    }

    if (erro == 0) {

        alert("Login realizado com sucesso!")
        testarusersenha()

    } else {
        alert("Login incorreto, favor verificar os dados, usuário ou senha incorretos")
        testarusersenha()
    }

}
