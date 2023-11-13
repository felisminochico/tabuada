//Função para Divisão
function divisão(){
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
        Inicio.focus()
    }else if(I < 1 && F < 1){
        alert('[ERRO] Os campos Inicio da Contagem e Fim da Contagem não devem ser menores que 1.')
        Inicio.focus()
    }else if(I < 1){
        alert('[ERRO] O campo Inicio da Contagem não deve ser menor que 1.')
        Inicio.focus()
    }else if(F < 1){
        alert('[ERRO] O campo Fim da Contagem não deve ser menor que 1.')
        Fim.focus()
    }else if(I < F){
        parágrafo.innerHTML = '';

        for(let c = I; c <= F; c++){
            parágrafo.innerHTML += `${N} / ${c} = ${N / c} <br>`;
            caixa.appendChild(parágrafo)
        }
    }else if(I > F){
        parágrafo.innerHTML = '';

        for(let c = I; c >= F; c--){
            parágrafo.innerHTML += `${N} / ${c} = ${N / c} <br>`;
            caixa.appendChild(parágrafo);
        }

    }
}

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