const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");




let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){
    
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas. textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSeleciionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSeleciionada(opcaoSelencionada){
    const afirmacoes = opcaoSelencionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Se fosse possível pausar o avanço da tecnologia por um instante, talvez pudéssemos entender melhor os impactos que ela causa nas relações humanas, na privacidade e na nossa própria identidade.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();