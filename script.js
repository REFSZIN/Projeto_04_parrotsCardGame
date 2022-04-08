const cartas = [
    "unicornparrot",
    "unicornparrot",
    "tripletsparrot",
    "tripletsparrot",
    "revertitparrot",
    "revertitparrot",
    "metalparrot",
    "metalparrot",
    "fiestaparrot",
    "fiestaparrot",
    "explodyparrot",
    "explodyparrot",
    "bobrossparrot",
    "bobrossparrot"
];
let firstcard = 0;
let cronometro;
let cardSelecionado;
let qntcards = 0;
let jogadas = 0;
let segundos = 0;
let minutos = 0;
let segundo = document.getElementById('segundo');
let minuto = document.getElementById('minuto');
let card = document.querySelectorAll("article.card");
let front = document.querySelectorAll("article.card > .front");
let back = document.querySelectorAll("article.card > .back");
let mesa = document.querySelector("main > section");
let config = document.querySelector("main > div.configcards");
let recards = document.querySelector("input.recards");
let inicards = document.querySelector("input.inicards");
let confqntcards = document.getElementsByClassName("card virar");
let musica = document.querySelector("header audio");
let baralho = [];
let embaralhado = [];

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
    
}
function comparador() {
    return Math.random() - 0.5;
    
}
function configs() {
    qntcards = Number(prompt("Quantas Cartas Deseja ? Em pares (4) a (14)!"));
    while (qntcards % 2 !== 0 || qntcards < 4 || qntcards > 14) {
    qntcards = Number(prompt("Quantas Cartas Deseja ? Em pares (4) a (14)!"));
    }
    mesa.classList.add("selecionado");
    config.classList.add("esconder");
    baralho = cartas.slice(0, qntcards);
    embaralhado = baralho.sort(comparador);
    embaralhado.sort(comparador);
    mesapronta(embaralhado);
    cron();
    musica.play()
    musica.currentTime = 30;
}
function mesapronta(baralhobaralhado) {
    for (let y = 0; y < embaralhado.length; y++) {
    mesa.innerHTML += `
        <article class="card" onclick="selecionarCard(this)">
            <div class="front"><img src="./assets/front.png" alt="Front Card" title="CORINGA"></div>
            <div class="back"><img src='assets/${baralhobaralhado[y]}.gif' alt="parrot" title="parrot"></div> 
        </article>`;
    }
}
async function selecionarCard(card) {
    if (firstcard == 0) {
    card.classList.add("virar");
    cardSelecionado = card;
    firstcard++;
    jogadas+=2;
    return;
    }
    if (card != cardSelecionado && firstcard == 1) {
    card.classList.add("virar");
    firstcard++;
    await sleep(500);
    if (card.innerHTML != cardSelecionado.innerHTML) {
        card.classList.remove("virar");
        cardSelecionado.classList.remove("virar");
    }
    firstcard = 0;
    cardSelecionado = undefined;
    }
    finalizar()
}
async function finalizar(){
    let confqntcards = document.getElementsByClassName("card virar");
    if(qntcards == confqntcards.length){
        await sleep(2000);
        mesa.classList.remove("selecionado");
        config.classList.remove("esconder");
        recards.classList.add("selecionado");
        inicards.classList.add("esconder");
        clearInterval(cronometro);
        alert(`Você ganhou em ${jogadas} jogadas!`);
        }
    recards.addEventListener("click", function reconfig(){
        location.reload();
    })
    }
    function cron(){
    function segundo(){
        segundos++;
        if(segundos==60){
        minutos++;
        segundos=0;
        document.getElementById('minuto').innerHTML=minutos;
        }
        document.getElementById('segundo').innerHTML=segundos;
    }
    cronometro = setInterval(function(){ segundo() },1000)
}