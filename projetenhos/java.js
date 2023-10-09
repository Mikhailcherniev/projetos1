let jogadorEscolha = 0;
let jogadorPontos = 0;
let computadorEscolha = 0;
let computadorPontos = 0;
let ganhador = -1;

function jogar(escolha) {
jogadorEscolha = escolha;

computadorEscolha = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

// pedra = 1 papel = 2 tezoura = 3
// empate = 0 jogador = 1 computador = 2


if (jogadorEscolha == 1 && computadorEscolha == 1) {
ganhador = 0;
//pedra pedra = empate
} else if (jogadorEscolha == 1 && computadorEscolha == 2) {
ganhador = 2;
//pedra papel = computador
} else if (jogadorEscolha == 1 && computadorEscolha == 3) {
ganhador = 1
//pedra tezoura = jogador
} else if (jogadorEscolha == 2 && computadorEscolha == 1) {
ganhador = 1;
//papel pedra = jogador
} else if (jogadorEscolha == 2 && computadorEscolha == 2) {
ganhador = 0;
//papel papel = empate
} else if (jogadorEscolha == 2 && computadorEscolha == 3) {
ganhador = 2;
//papel tezoura = computador
} else if (jogadorEscolha == 3 && computadorEscolha == 1) {
ganhador = 2;
//tesoura pedra = computador
} else if (jogadorEscolha == 3 && computadorEscolha == 2) {
ganhador = 1;
//tesoura papel = jogador
} else if (jogadorEscolha == 3 && computadorEscolha == 3) {
ganhador = 0
//tesoura tezoura = empate
}


document.getElementById('jogadorEscolha1').classList.remove('selecionado');
document.getElementById('jogadorEscolha2').classList.remove('selecionado');
document.getElementById('jogadorEscolha3').classList.remove('selecionado');
document.getElementById('computadorEscolha1').classList.remove('selecionado');
document.getElementById('computadorEscolha2').classList.remove('selecionado');
document.getElementById('computadorEscolha3').classList.remove('selecionado');

document.getElementById('jogadorEscolha' + jogadorEscolha).classList.add('selecionado');
document.getElementById('computadorEscolha' + computadorEscolha).classList.add('selecionado');

if (ganhador == 0) {
    document.getElementById('mensagem').innerHTML = "EMPATE"
    }
    
    else if (ganhador == 1) {
    document.getElementById('mensagem').innerHTML = " Venceu"
    jogadorPontos++;
    }
    
    else if (ganhador == 2) {
    document.getElementById('mensagem').innerHTML = "Perdeu"
    computadorPontos++;
    }
    
    document.getElementById('jogadorPontos').innerHTML = jogadorPontos;
    document.getElementById('computadorPontos').innerHTML = computadorPontos;
    }
