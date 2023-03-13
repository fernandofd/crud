

let usuario = [
    {
        nome: "admin",
        senha: "admin"
    }
   
]

// lendo o conteúdo do navegador
let nomepag2 = localStorage.getItem("usuarioLogado")


if (nomepag2 != undefined) {
   
    let h2nome = document.querySelector("h2#nome")
    h2nome.innerHTML += ` ${nomepag2}`

    const sair = document.querySelector("input#sair");
    sair.addEventListener("click", function () {

        localStorage.removeItem("usuarioLogado")
        window.location.href = "./index.html"
    })

    window.addEventListener('beforeunload', function (e) {
     
        localStorage.removeItem('usuarioLogado');
       
      });

} else {
    
    const botao = document.querySelector("#botao");
   
    botao.addEventListener("click", function () {
      
        let nome = document.querySelector("input#user").value
        let senha1 = document.querySelector("input#senha").value
        let controle = 0

        for (let index = 0; index < usuario.length; index++) {
            if (nome == usuario[index].nome && senha1 == usuario[index].senha) {
                alert("Acesso liberado")
                // enviando o nome do usuário validado para o navegador
                localStorage.setItem("usuarioLogado", usuario[index].nome)
                index = usuario.length
                controle = 1
                window.location.href = "./pag2.html"
            }
        }
        if (controle == 0) {
            alert("usuário ou senha incorreta")
        }

       

    });
}
