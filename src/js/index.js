

//OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado
//passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles

const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem");

//passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        console.log(botaoSelecionado);
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");
        personagens[indice].classList.add("selecionado");