const btnSortear = document.querySelector('.sortear');
// btnSortear = ativa o javascript
const textarea = document.querySelector('textarea');
//textarea = '  
const tagResultado = document.querySelector('.resultado p');

const popUpResultado = document.querySelector('.resultado')

function pegarDadosFormulario(){
    const valorCampo = textarea.value;
    const listaNomes = valorCampo.split(",");
    const tamanhoArray = listaNomes.lenght;
    const posicaoNome = gerarNumeroAleatorio(tamanhoArray);
    const nome = listaNomes[posicaoNome];

    mostrarResultado(nome);
    textarea.value = "" ;
}

btnSortear.addEventListener("click",pegarDadosFormulario);

function gerarNumeroAleatorio(tamanhoArray) {
    return Math.floor(Math.random()*(tamanhoArray-0)+0)
}

function mostrarResultado(nome){
    tagResultado.innerHTML = `resultado: ${nome}`
    popUpResultado.classList.add("resultado")
}

