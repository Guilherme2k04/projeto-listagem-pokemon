// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua

// passo 1 - pegar no JS o elemento HTML correspondente ao de troca de tema

const botaoAlterarTema = document.getElementById("botao-aleterar-tema");

//passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//passo 3 - dar um jeito de identifcar o clique do usuario no botão de troca de tema

botaoAlterarTema.addEventListener("click", () => {
    // passo 6 - verificar se o body tem a classe modo-escuro

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        // passo 7 - remover a classe do modo-escuro do body

        // passo 8 - trocar a imagem do botão de alterar tema para o sol

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")


    } else {
        // passo 4 - adicionar a classe modo-escuro no body

        // passo 5 - trocar a imagem do botão, e alterar o tema para LUA

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");

    }
});

