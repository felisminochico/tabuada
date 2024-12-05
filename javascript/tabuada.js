// let resultadoFinal = ''
// let resultadoTabuada = window.document.getElementsByClassName('resultado')[0]
// let objeto = {
//     numeroTabuada: window.document.getElementsByTagName('input')[0],
//     inicioTabuada: window.document.getElementById('inicio'),
//     fimTabuada: window.document.querySelector('input#fim'),
//     botaoDivisao: window.document.getElementsByTagName('button')[0],
//     botaoMultiplicacao: window.document.getElementsByTagName('button')[1],
//     botaoSoma: window.document.getElementsByTagName('button')[2],
//     botaoSubtracao: window.document.getElementsByTagName('button')[3],
//     digitar: function(){
//         if((objeto.numeroTabuada.value.length == 0 || objeto.inicioTabuada.value.length == 0) || objeto.fimTabuada.value.length == 0){
//             objeto.botaoDivisao.disabled = true
//             objeto.botaoMultiplicacao.disabled = true
//             objeto.botaoSoma.disabled = true
//             objeto.botaoSubtracao.disabled = true
//             objeto.botaoDivisao.style.backgroundColor = '#0748e081'
//             objeto.botaoDivisao.style.color = 'rgba(0, 0, 0, 0.61)'
//             objeto.botaoMultiplicacao.style.backgroundColor = '#0748e081'
//             objeto.botaoMultiplicacao.style.color = 'rgba(0, 0, 0, 0.61)'
//             objeto.botaoSoma.style.backgroundColor = '#0748e081'
//             objeto.botaoSoma.style.color = 'rgba(0, 0, 0, 0.61)'
//             objeto.botaoSubtracao.style.backgroundColor = '#0748e081'
//             objeto.botaoSubtracao.style.color = 'rgba(0, 0, 0, 0.61)' 
//             objeto.botaoDivisao.style.cursor = 'auto'
//             objeto.botaoMultiplicacao.style.cursor = 'auto'
//             objeto.botaoSoma.style.cursor = 'auto'
//             objeto.botaoSubtracao.style.cursor = 'auto'
//         }else if((objeto.numeroTabuada.value.length >= 0 || objeto.inicioTabuada.value.length >= 0) || objeto.fimTabuada.value.length >= 0){
//             objeto.botaoDivisao.disabled = false
//             objeto.botaoMultiplicacao.disabled = false
//             objeto.botaoSoma.disabled = false
//             objeto.botaoSubtracao.disabled = false
//             objeto.botaoDivisao.style.backgroundColor = '#021c53'
//             objeto.botaoDivisao.style.color = 'white'
//             objeto.botaoMultiplicacao.style.backgroundColor = '#021c53'
//             objeto.botaoMultiplicacao.style.color = 'white'
//             objeto.botaoSoma.style.backgroundColor = '#021c53'
//             objeto.botaoSoma.style.color = 'white'
//             objeto.botaoSubtracao.style.backgroundColor = '#021c53'
//             objeto.botaoSubtracao.style.color = 'white' 
//             objeto.botaoDivisao.style.cursor = 'pointer'
//             objeto.botaoMultiplicacao.style.cursor = 'pointer'
//             objeto.botaoSoma.style.cursor = 'pointer'
//             objeto.botaoSubtracao.style.cursor = 'pointer' 
//         }
//     }
// }

// function divisao(){
//     if(objeto.inicioTabuada.value > objeto.fimTabuada.value){
//         resultadoTabuada.innerHTML = ''
//         for(let c = objeto.inicioTabuada.value; c >= objeto.fimTabuada.value; c--){
//             resultadoTabuada.innerHTML += objeto.numeroTabuada.value + ' / ' + c + ' = ' + (objeto.numeroTabuada.value / c) + '<br>'
//         }
//     }else if(objeto.inicioTabuada.value < objeto.fimTabuada.value){
//         resultadoTabuada.innerHTML = ''
//         for(let c = objeto.inicioTabuada.value; c <= objeto.fimTabuada.value; c++){
//             resultadoTabuada.innerHTML += objeto.numeroTabuada.value + ' / ' + c + ' = ' + (objeto.numeroTabuada.value / c) + '<br>'
//         }
//     }
// }
// objeto.botaoDivisao.addEventListener('click', divisao)
// objeto.numeroTabuada.addEventListener('input', objeto.digitar)
// objeto.inicioTabuada.addEventListener('input', objeto.digitar)
// objeto.fimTabuada.addEventListener('input', objeto.digitar)

// //Função para Divisão
// function divisão(){
//     //Declaração de variaveis
//     let Número = window.document.getElementById('numero');
//     let Inicio = window.document.getElementsByTagName('input')[1];
//     let Fim = window.document.getElementsByName('fim')[0];
//     let tabuada = window.document.querySelector('select#tabuada');
//     let caixa = window.document.getElementsByTagName('div')[0];
//     let parágrafo = window.document.getElementsByTagName('p')[3];
//     let N = Number(Número.value);
//     let I = Number(Inicio.value);
//     let F = Number(Fim.value);

//     //Validação dos campos
//     if(Número.value.length == 0 && Inicio.value.length == 0 && Fim.value.length == 0){
//         alert('[ERRO] Todos os campos estão vazios. Por favor, preencha-os.');
//         Número.focus()
//     }else if(Número.value.length == 0 && Inicio.value.length == 0){
//         alert('[ERRO] Os campos Número da Tabuada e Inicio da Contagem estão vazios.');
//         Número.focus()
//     }else if(Número.value.length == 0 && Fim.value.length == 0){
//         alert('[ERRO] Os campos Número da Tabuada e Fim da Contagem estão vazios.');
//         Número.focus()
//     }else if(Inicio.value.length == 0 && Fim.value.length == 0){
//         alert('[ERRO] Os campos Inicio da Contagem e Fim da Contagem estão vazios.');
//         Inicio.focus()
//     }else if(Número.value.length == 0){
//         alert('[ERRO O campo Número da Tabuada está vazio.');
//         Número.focus()
//     }else if(Inicio.value.length == 0){
//         alert('[ERRO] O campo Inicio da Contagem está vazio.');
//         Inicio.focus()
//     }else if(Fim.value.length == 0){
//         alert('[ERRO] O campo Fim da Contagem está vazio.')
//         Fim.focus()
//     }else if(I == F){
//         alert('[ERRO] Os campos Inicio da Contagem e Fim da Contagem devem ser diferentes.');
//         Inicio.focus()
//     }else if(I < 1 && F < 1){
//         alert('[ERRO] Os campos Inicio da Contagem e Fim da Contagem não devem ser menores que 1.')
//         Inicio.focus()
//     }else if(I < 1){
//         alert('[ERRO] O campo Inicio da Contagem não deve ser menor que 1.')
//         Inicio.focus()
//     }else if(F < 1){
//         alert('[ERRO] O campo Fim da Contagem não deve ser menor que 1.')
//         Fim.focus()
//     }else if(I < F){
//         parágrafo.innerHTML = '';

//         for(let c = I; c <= F; c++){
//             parágrafo.innerHTML += `${N} / ${c} = ${N / c} <br>`;
//             caixa.appendChild(parágrafo)
//         }
//     }else if(I > F){
//         parágrafo.innerHTML = '';

//         for(let c = I; c >= F; c--){
//             parágrafo.innerHTML += `${N} / ${c} = ${N / c} <br>`;
//             caixa.appendChild(parágrafo);
//         }

//     }
// }

//Função para Multiplicação
function multiplicação(){
    //Declaração de variaveis
    let Número = window.document.getElementById('numero');
    let Inicio = window.document.getElementsByTagName('input')[1];
    let Fim = window.document.getElementsByName('fim')[0];
    let tabuada = window.document.querySelector('select#tabuada');
    let caixa = window.document.getElementsByTagName('div')[0];
    let parágrafo = window.document.getElementsByTagName('p')[3];
    let N = Number(Número.value);
    let I = Number(Inicio.value);
    let F = Number(Fim.value);

    //Validação dos campos
    if(Número.value.length == 0 && Inicio.value.length == 0 && Fim.value.length == 0){
        alert('[ERRO] Todos os campos estão vazios. Por favor, preencha-os.');
        Número.focus()
    }else if(Número.value.length == 0 && Inicio.value.length == 0){
        alert('[ERRO] Os campos Número da Tabuada e Inicio da Contagem estão vazios.');
        Número.focus()
    }else if(Número.value.length == 0 && Fim.value.length == 0){
        alert('[ERRO] Os campos Número da Tabuada e Fim da Contagem estão vazios.');
        Número.focus()
    }else if(Inicio.value.length == 0 && Fim.value.length == 0){
        alert('[ERRO] Os campos Inicio da Contagem e Fim da Contagem estão vazios.');
        Inicio.focus()
    }else if(Número.value.length == 0){
        alert('[ERRO O campo Número da Tabuada está vazio.');
        Número.focus()
    }else if(Inicio.value.length == 0){
        alert('[ERRO] O campo Inicio da Contagem está vazio.');
        Inicio.focus()
    }else if(Fim.value.length == 0){
        alert('[ERRO] O campo Fim da Contagem está vazio.')
        Fim.focus()
    }else if(I == F){
        alert('[ERRO] Os campos Inicio da Contagem e Fim da Contagem devem ser diferentes.');
    }else if(I < 1 && F < 1){
        alert('[ERRO] Os campos Inicio da Contagem e Fim da Contagem não devem ser menores que 1.')
    }else if(I < 1){
        alert('[ERRO] O campo Inicio da Contagem não deve ser menor que 1.')
        Inicio.focus()
    }else if(F < 1){
        alert('[ERRO] O campo Fim da Contagem não deve ser menor que 1.')
        Fim.focus()
    }else if(I < F){
        parágrafo.innerHTML = '';

        for(let c = I; c <= F; c++){
            parágrafo.innerHTML += `${N} x ${c} = ${N * c} <br>`;
            caixa.appendChild(parágrafo)
        }
    }else if(I > F){
        parágrafo.innerHTML = '';

        for(let c = I; c >= F; c--){
            parágrafo.innerHTML += `${N} x ${c} = ${N * c} <br>`;
            caixa.appendChild(parágrafo);
        }

    }
}

//Função para Soma
function soma(){
    //Declaração de variaveis
    let Número = window.document.getElementById('numero');
    let Inicio = window.document.getElementsByTagName('input')[1];
    let Fim = window.document.getElementsByName('fim')[0];
    let tabuada = window.document.querySelector('select#tabuada');
    let caixa = window.document.getElementsByTagName('div')[0];
    let parágrafo = window.document.getElementsByTagName('p')[3];
    let N = Number(Número.value);
    let I = Number(Inicio.value);
    let F = Number(Fim.value);

    //Validação dos campos
    if(Número.value.length == 0 && Inicio.value.length == 0 && Fim.value.length == 0){
        alert('[ERRO] Todos os campos estão vazios. Por favor, preencha-os.');
        Número.focus()
    }else if(Número.value.length == 0 && Inicio.value.length == 0){
        alert('[ERRO] Os campos Número da Tabuada e Inicio da Contagem estão vazios.');
        Número.focus()
    }else if(Número.value.length == 0 && Fim.value.length == 0){
        alert('[ERRO] Os campos Número da Tabuada e Fim da Contagem estão vazios.');
        Número.focus()
    }else if(Inicio.value.length == 0 && Fim.value.length == 0){
        alert('[ERRO] Os campos Inicio da Contagem e Fim da Contagem estão vazios.');
        Inicio.focus()
    }else if(Número.value.length == 0){
        alert('[ERRO O campo Número da Tabuada está vazio.');
        Número.focus()
    }else if(Inicio.value.length == 0){
        alert('[ERRO] O campo Inicio da Contagem está vazio.');
        Inicio.focus()
    }else if(Fim.value.length == 0){
        alert('[ERRO] O campo Fim da Contagem está vazio.')
        Fim.focus()
    }else if(I == F){
        alert('[ERRO] Os campos Inicio da Contagem e Fim da Contagem devem ser diferentes.');
    }else if(I < 1 && F < 1){
        alert('[ERRO] Os campos Inicio da Contagem e Fim da Contagem não devem ser menores que 1.')
    }else if(I < 1){
        alert('[ERRO] O campo Inicio da Contagem não deve ser menor que 1.')
        Inicio.focus()
    }else if(F < 1){
        alert('[ERRO] O campo Fim da Contagem não deve ser menor que 1.')
        Fim.focus()
    }else if(I < F){
        parágrafo.innerHTML = '';

        for(let c = I; c <= F; c++){
            parágrafo.innerHTML += `${N} + ${c} = ${N + c} <br>`;
            caixa.appendChild(parágrafo)
        }
    }else if(I > F){
        parágrafo.innerHTML = '';

        for(let c = I; c >= F; c--){
            parágrafo.innerHTML += `${N} + ${c} = ${N + c} <br>`;
            caixa.appendChild(parágrafo);
        }
        
    }
}

//Função para Subtração
function subtração(){
    //Declaração de variaveis
    let Número = window.document.getElementById('numero');
    let Inicio = window.document.getElementsByTagName('input')[1];
    let Fim = window.document.getElementsByName('fim')[0];
    let tabuada = window.document.querySelector('select#tabuada');
    let caixa = window.document.getElementsByTagName('div')[0];
    let parágrafo = window.document.getElementsByTagName('p')[3];
    let N = Number(Número.value);
    let I = Number(Inicio.value);
    let F = Number(Fim.value);

    //Validação dos campos
    if(Número.value.length == 0 && Inicio.value.length == 0 && Fim.value.length == 0){
        alert('[ERRO] Todos os campos estão vazios. Por favor, preencha-os.');
        Número.focus()
    }else if(Número.value.length == 0 && Inicio.value.length == 0){
        alert('[ERRO] Os campos Número da Tabuada e Inicio da Contagem estão vazios.');
        Número.focus()
    }else if(Número.value.length == 0 && Fim.value.length == 0){
        alert('[ERRO] Os campos Número da Tabuada e Fim da Contagem estão vazios.');
        Número.focus()
    }else if(Inicio.value.length == 0 && Fim.value.length == 0){
        alert('[ERRO] Os campos Inicio da Contagem e Fim da Contagem estão vazios.');
        Inicio.focus()
    }else if(Número.value.length == 0){
        alert('[ERRO O campo Número da Tabuada está vazio.');
        Número.focus()
    }else if(Inicio.value.length == 0){
        alert('[ERRO] O campo Inicio da Contagem está vazio.');
        Inicio.focus()
    }else if(Fim.value.length == 0){
        alert('[ERRO] O campo Fim da Contagem está vazio.')
        Fim.focus()
    }else if(I == F){
        alert('[ERRO] Os campos Inicio da Contagem e Fim da Contagem devem ser diferentes.');
    }else if(I < 1 && F < 1){
        alert('[ERRO] Os campos Inicio da Contagem e Fim da Contagem não devem ser menores que 1.')
    }else if(I < 1){
        alert('[ERRO] O campo Inicio da Contagem não deve ser menor que 1.')
        Inicio.focus()
    }else if(F < 1){
        alert('[ERRO] O campo Fim da Contagem não deve ser menor que 1.')
        Fim.focus()
    }else if(I < F){
        parágrafo.innerHTML = '';

        for(let c = I; c <= F; c++){
            parágrafo.innerHTML += `${N} - ${c} = ${N - c} <br>`;
            caixa.appendChild(parágrafo)
        }
    }else if(I > F){
        parágrafo.innerHTML = '';

        for(let c = I; c >= F; c--){
            parágrafo.innerHTML += `${N} - ${c} = ${N - c} <br>`;
            caixa.appendChild(parágrafo);
        }

    }
    
}