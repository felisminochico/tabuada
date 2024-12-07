//Variaveis
let botaoDivisao = window.document.getElementsByTagName('button')[0];
let botaoMultiplicacao = window.document.getElementsByTagName('button')[1];
let botaoSoma = window.document.getElementsByTagName('button')[2];
let botaoSubtracao = window.document.getElementsByTagName('button')[3];
let resultadoTabuada = window.document.getElementById('resultado');
let numeroTabuada = window.document.querySelector('input#numero');
let inicioContagem = window.document.getElementsByName('inicio')[0];
let fimContagem = window.document.getElementById('fim');
let resultadoFinal = 0;

//Eventos
botaoDivisao.addEventListener('click', divisao)
botaoMultiplicacao.addEventListener('click', multiplicacao)
botaoSoma.addEventListener('click', soma)
botaoSubtracao.addEventListener('click', subtracao)

numeroTabuada.addEventListener('input', digitar)
inicioContagem.addEventListener('input', digitar)
fimContagem.addEventListener('input', digitar)

//Funções de eventos
function divisao(){
    let n = Number(numeroTabuada.value);
    let i = Number(inicioContagem.value);
    let f = Number(fimContagem.value);

    if(i < f){
        resultadoTabuada.innerHTML = 'Calculando... <br>';
        for(let c = i; c <= f; c++){
            resultadoFinal = n / c;
            resultadoTabuada.innerHTML += `${n} / ${c} = ${resultadoFinal.toFixed(6).replace('.', ',')} <br >`;
        }
        resultadoTabuada.innerHTML += `Cálculo Termiado.`
    }else if(i > f){
        resultadoTabuada.innerHTML = 'Calculando... <br>';
        for(let c = i; c >= f; c--){
            resultadoFinal = n / c;
            resultadoTabuada.innerHTML += `${n} / ${c} = ${resultadoFinal.toFixed(6).replace('.', ',')} <br>`;
        }
        resultadoTabuada.innerHTML += 'Cálculo Terminado.'
    }else if(i == f){
        resultadoTabuada.innerHTML = `Os valores dos campos Início da Contagem e Fim da Contagem são iguais. Diferencie-os.`;
    }
    
}

function multiplicacao(){
    if(Number(inicioContagem.value) < Number(fimContagem.value)){
        resultadoTabuada.innerHTML = 'Calculando... <br>';
        for(let c = Number(inicioContagem.value); c <= Number(fimContagem.value); c++){
            resultadoFinal = Number(numeroTabuada.value) * c;
            resultadoTabuada.innerHTML += `${Number(numeroTabuada.value)} x ${c} = ${resultadoFinal} <br>`;
        }
        resultadoTabuada.innerHTML += `Cálculo Terminado.`;
    }else if(Number(inicioContagem.value) > Number(fimContagem.value)){
        resultadoTabuada.innerHTML = `Calculando... <br>`;
        for(let c = Number(inicioContagem.value); c >= Number(fimContagem.value); c--){
            resultadoFinal = Number(numeroTabuada.value) * c;
            resultadoTabuada.innerHTML += `${Number(numeroTabuada.value)} x ${c} = ${resultadoFinal} <br>`;
        }
        resultadoTabuada.innerHTML += `Cálculo Terminado.`;
    }else if(Number(inicioContagem.value) == Number(fimContagem.value)){
        resultadoTabuada.innerHTML = 'Os valores dos campos Início da Contagem e Fim da Contagem são iguais. Diferencie-os.'
    }
}

function soma(){
    if(Number(inicioContagem.value) < Number(fimContagem.value)){
        resultadoTabuada.innerHTML = `Calculando... <br>`;
        for(let c = Number(inicioContagem.value); c <= Number(fimContagem.value); c++){
            resultadoFinal = Number(numeroTabuada.value) + c;
            resultadoTabuada.innerHTML += `${Number(numeroTabuada.value)} + ${c} = ${resultadoFinal} <br>`;
        }
        resultadoTabuada.innerHTML += `Cálculo Terminado...`;
    }else if(Number(inicioContagem.value) > Number(fimContagem.value)){
        resultadoTabuada.innerHTML = `Calculando... <br>`;
        for(let c = Number(inicioContagem.value); c >= Number(fimContagem.value); c--){
            resultadoFinal = Number(numeroTabuada.value) + c;
            resultadoTabuada.innerHTML += `${Number(numeroTabuada.value)} + ${c} = ${resultadoFinal} <br>`;
        }
        resultadoTabuada.innerHTML += `Cálculo Terminado.`;
    }else if(Number(inicioContagem.value) == Number(fimContagem.value)){
        resultadoTabuada.innerHTML = `Os valores dos campos Início da Contagem e Fim da Contagem são iguais. Diferencie-os.`;
    }
}

function subtracao(){
    if(Number(inicioContagem.value) < Number(fimContagem.value)){
        resultadoTabuada.innerHTML = 'Calculando... <br>'
        for(let c = Number(inicioContagem.value); c <= Number(fimContagem.value); c++){
            resultadoFinal = Number(numeroTabuada.value) - c;
            resultadoTabuada.innerHTML += `${Number(numeroTabuada.value)} - ${c} = ${resultadoFinal} <br>`;
        }
        resultadoTabuada.innerHTML += `Cálculo Terminado.`;
    }else if(Number(inicioContagem.value) > Number(fimContagem.value)){
        resultadoTabuada.innerHTML = 'Calculando... <br>';
        for(let c = Number(inicioContagem.value); c >= Number(fimContagem.value); c--){
            resultadoFinal = Number(numeroTabuada.value) - c
            resultadoTabuada.innerHTML += `${Number(numeroTabuada.value)} - ${c} = ${resultadoFinal} <br>`;
        }
        resultadoTabuada.innerHTML += `Cálculo Terminado.`;
    }else if(Number(inicioContagem.value) == Number(fimContagem.value)){
        resultadoTabuada.innerHTML = `Os valores dos campos Início da Contagem e Fim da Contagem são iguais. Diferencie-os`;
    }
}

function digitar(){
    if((numeroTabuada.value.length > 0 && inicioContagem.value.length > 0) && (fimContagem.value.length > 0)){
        botaoDivisao.disabled = false
        botaoMultiplicacao.disabled = false
        botaoSoma.disabled = false
        botaoSubtracao.disabled = false
        botaoDivisao.style.backgroundColor = '#021c53'
        botaoDivisao.style.color = 'white'
        botaoMultiplicacao.style.backgroundColor = '#021c53'
        botaoMultiplicacao.style.color = 'white'
        botaoSoma.style.backgroundColor = '#021c53'
        botaoSoma.style.color = 'white'
        botaoSubtracao.style.backgroundColor = '#021c53'
        botaoSubtracao.style.color = 'white'
        botaoDivisao.style.cursor = 'pointer';
        botaoMultiplicacao.style.cursor = 'pointer'
        botaoSoma.style.cursor = 'pointer'
        botaoSubtracao.style.cursor = 'pointer'
    }else{
        botaoDivisao.disabled = true
        botaoMultiplicacao.disabled = true
        botaoSoma.disabled = true
        botaoSubtracao.disabled = true
        botaoDivisao.style.backgroundColor = '#0748e081'
        botaoDivisao.style.color = 'rgba(0, 0, 0, 0.473)'
        botaoMultiplicacao.style.backgroundColor = '#0748e081'
        botaoMultiplicacao.style.color = 'rgba(0, 0, 0, 0.473)'
        botaoSoma.style.backgroundColor = '#0748e081'
        botaoSoma.style.color = 'rgba(0, 0, 0, 0.473)'
        botaoSubtracao.style.backgroundColor = '#0748e081'
        botaoSubtracao.style.color = 'rgba(0, 0, 0, 0.473)'
        botaoDivisao.style.cursor = 'auto';
        botaoMultiplicacao.style.cursor = 'auto'
        botaoSoma.style.cursor = 'auto'
        botaoSubtracao.style.cursor = 'auto'
    }
}