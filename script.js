const btnComecar = document.getElementById('btn-comecar');
const telaInicial = document.getElementById('tela-inicial');
const telaJogo = document.getElementById('tela-jogo');
const palpiteElemento = document.getElementById('palpite');
const btnMenor = document.getElementById('btn-menor');
const btnMaior = document.getElementById('btn-maior');
const btnAcertou = document.getElementById('btn-acertou');
const tentativaElemento = document.getElementById('tentativa');

let min = 0;
let max = 1000;
let contadorTentativas = 0;
let palpite;

function reiniciarJogo() {
    min = 0;
    max = 1000;
    contadorTentativas = 0;

    telaJogo.classList.add('escondido');
    telaInicial.classList.remove('escondido');
}

function fazerNovoPalpite() {
    
    if (min > max) {
        alert('Achou mesmo que o GÊNIO, não notária essa furada? Vamos começar do ZERO');
        reiniciarJogo();
        return
    }
    
    palpite = Math.floor((min+max)/2);
    contadorTentativas = contadorTentativas + 1;
    
    palpiteElemento.textContent = palpite;
    tentativaElemento.textContent = contadorTentativas;
}

btnComecar.addEventListener('click', () => {

    fazerNovoPalpite();

    telaJogo.classList.remove('escondido');
    telaInicial.classList.add('escondido');
});

btnAcertou.addEventListener('click', reiniciarJogo);

btnMaior.addEventListener('click', () => {

    min = palpite + 1;
    fazerNovoPalpite();
});

btnMenor.addEventListener('click', () => {

    max = palpite - 1;
    fazerNovoPalpite();
});