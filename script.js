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
let cardSelecionado;
let qntcards = 0;
let card = document.querySelectorAll("article.card");
let front = document.querySelectorAll("article.card > .front");
let back = document.querySelectorAll("article.card > .back");
let mesa = document.querySelector("main > section");
let config = document.querySelector("main > div");
let recards = document.querySelector("input.recards")
let inicards = document.querySelector("input.inicards")
let baralho = [];
let embaralhado = [];

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function configs() {
    qntcards = Number(prompt("Quantas Cartas Deseja ? Em pares (4) a (14)!"));
    while (qntcards % 2 !== 0 || qntcards < 4 || qntcards > 14) {
    qntcards = Number(prompt("Quantas Cartas Deseja ? Em pares (4) a (14)!"));
    }
    mesa.classList.add("selecionado");
    config.classList.add("esconder");
    baralhocartas();
}
function baralhocartas() {
    baralho = cartas.slice(0, qntcards);
    baralhado();
}
function comparador() {
    return Math.random() - 0.5;
}
function baralhado() {
    embaralhado = baralho.sort(comparador);
    embaralhado.sort(comparador);
    mesapronta(embaralhado);
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
function finalizar(){
    let confqntcards = document.getElementsByClassName("card virar");
    if(qntcards == confqntcards.length){
        console.log(confqntcards)
        document.getElementsByTagName("section").innerHTML= "replaced";
        mesa.classList.remove("selecionado");
        config.classList.add("selecionado");
        recards.classList.add("selecionado");
        inicards.classList.add("esconder");
        reconfig()
        }
    }
function reconfig(){

}