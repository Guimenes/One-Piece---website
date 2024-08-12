const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
let indiceAtual = 0;
const intervalo = 7000; // Intervalo de tempo (7 segundos)
let timer; // Referência para o temporizador

function alternarPersonagem(indice) {
    // Remove a classe 'selecionado' do botão e do personagem atual
    document.querySelector(".botao.selecionado").classList.remove("selecionado");
    document.querySelector(".personagem.selecionado").classList.remove("selecionado");

    // Adiciona a classe 'selecionado' ao botão e ao personagem correspondente ao índice atual
    botoes[indice].classList.add("selecionado");
    personagens[indice].classList.add("selecionado");
}

// Função para avançar para o próximo personagem
function proximoPersonagem() {
    indiceAtual = (indiceAtual + 1) % personagens.length;
    alternarPersonagem(indiceAtual);
}

// Adiciona evento de clique para cada botão
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        clearInterval(timer); // Limpa o temporizador para evitar que a mudança automática continue durante o atraso
        indiceAtual = indice;
        alternarPersonagem(indiceAtual);
        timer = setInterval(proximoPersonagem, intervalo); // Reinicia o temporizador após 7 segundos
    });
});

// Inicia a alternância automática
timer = setInterval(proximoPersonagem, intervalo);
