//Variaveis
let botaoDivisao = window.document.getElementsByTagName('button')[0];
let botaoMultiplicacao = window.document.getElementsByTagName('button')[1];
let botaoSoma = window.document.getElementsByTagName('button')[2];
let botaoSubtracao = window.document.getElementsByTagName('button')[3];
let resultadoTabuada = window.document.getElementById('resultado');
let numeroTabuada = window.document.querySelector('input#numero');
let inicioContagem = window.document.getElementsByName('inicio')[0];
let fimContagem = window.document.getElementById('fim');

//Eventos
botaoDivisao.addEventListener('click', divisao)
botaoMultiplicacao.addEventListener('click', multiplicacao)
botaoSoma.addEventListener('click', soma)
botaoSubtracao.addEventListener('click', subtracao)

//Funções de eventos
function divisao(){
    let n = Number(numeroTabuada.value);
    let i = Number(inicioContagem.value);
    let f = Number(fimContagem.value);
    let resultadoFinal = 0;

    if(i < f){
        resultadoTabuada.innerHTML = '';
        for(let c = i; c <= f; c++){
            resultadoFinal = n / c;
            resultadoTabuada.innerHTML += `${n} / ${c} = ${resultadoFinal.toFixed(2).replace('.', ',')} <br >`;
        }
    }else if(i > f){
        resultadoTabuada.innerHTML = '';
        for(let c = i; c >= f; c--){
            resultadoFinal = n / c;
            resultadoTabuada.innerHTML += `${n} / ${c} = ${resultadoFinal.toFixed(2).replace('.', ',')} <br>`;
        }
    }else if(i == f){
        resultadoTabuada.innerHTML = `Os valores dos campos Início da Contagem e Fim da Contagem são iguais. Diferencie-os.`;
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