/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - verificar se o bady já tem a classe nodo-escuro, remover a classe para mudar para o modo claro, e mudar a imagem pro sol
        - passo 7 - remover a classe do modo-escuro do body
        - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

// Objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua.

// Passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema.
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// Passo 2 - Dar um jeito de pegar no JS o elemento HTML corresponde ao body.
const body = document.querySelector("body");
const imagemBotaoTrocadeTema = document.querySelector(".imagem-botao");

// Passo 3 - Dar um jeito de identificar o clique do usuário no botão de troca de tema.
botaoAlterarTema.addEventListener("click", () => {

    // Objetivo 2 - Quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol.

    // Passo 6 - Verificar se o bady já tem a classe nodo-escuro, remover a classe para mudar para o modo claro, e mudar a imagem pro sol.
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    // Substitui o remove e add abaixo
    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {
        // Passo 7 - Remover a classe do modo-escuro do body.
        // body.classList.remove("modo-escuro");

        // Passo 8 - Trocar a imagem do botão de alterar tema pra sol.
        imagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/imagens/sun.png");

    } else {
        // Passo 4 - Adicionar a classe modo-escuro no body.
        // body.classList.add("modo-escuro");

        // Passo 5 - Trocar a imagem do botão de alterar tema pra lua.
        imagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/imagens/moon.png");
    };
});