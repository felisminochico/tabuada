//Variaveis
let botaoDivisao = window.document.getElementsByTagName('button')[0];
let botaoMultiplicacao = window.document.getElementsByTagName('button')[1];
let botaoSoma = window.document.getElementsByTagName('button')[2];
let botaoSubtracao = window.document.getElementsByTagName('button')[3];
let resultado = window.document.getElementById('resultado');
let numeroTabuada = window.document.querySelector('input#numero');
let inicioContagem = window.document.getElementsByName('inicio')[0];
let fimContagem = window.document.getElementById('fim');
let resultadoFinal = 0;
let c = 0;

//Eventos
botaoDivisao.addEventListener('click', divisao)
botaoMultiplicacao.addEventListener('click', multiplicacao)
botaoSoma.addEventListener('click', soma)
botaoSubtracao.addEventListener('click', subtracao)

//Funções de eventos
function divisao(){
    if(inicioContagem.value < fimContagem.value){
        resultado.innerHTML = '';
        for(c = inicioContagem.value; c <= fimContagem.value; c++){
            resultadoFinal = Number(numeroTabuada.value) / Number(c)
            resultado.innerHTML += `${numeroTabuada.value} / ${c} = ${resultadoFinal} <br>`;
        }
    }else if(inicioContagem.value > fimContagem.value){
        resultado.innerHTML = '';
        for(c = inicioContagem.value; c >= fimContagem.value; c--){
            resultadoFinal = Number(numeroTabuada.value) / Number(c)
            resultado.innerHTML += `${numeroTabuada.value} / ${c} = ${resultadoFinal} <br>`;
        }
    }
    
}

function multiplicacao(){
    alert('Clicaste no Botão de Multiplicação.')
}

function soma(){
    alert('Clicaste no Botão de Soma.')
}

function subtracao(){
    alert('Clicaste no Botão de Subtração.')
}