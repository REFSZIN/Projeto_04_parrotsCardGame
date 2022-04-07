    cartas= ['unicornparrot','unicornparrot', 'tripletsparrot', 'tripletsparrot', 'revertitparrot', 'revertitparrot', 'metalparrot', 'metalparrot', 'fiestaparrot', 'fiestaparrot', 'explodyparrot', 'explodyparrot', 'bobrossparrot','bobrossparrot'];
    qntcards = 0;
    let card = document.querySelector("article.card");
    let front = document.querySelectorAll("article.card > .front");
    let back = document.querySelectorAll("article.card > .back");
    let mesa =  document.querySelector("main > section");
    let config = document.querySelector("main > div")
    let baralho = [];
function configs(){
    qntcards = Number(prompt("Quantas Cartas Deseja ? Em pares (4) a (14)!"));
    while(qntcards %2 !== 0 || qntcards < 4|| qntcards>14){
    qntcards = Number(prompt("Quantas Cartas Deseja ? Em pares (4) a (14)!"));
    }
    mesa.classList.add("selecionado");
    config.classList.add("esconder");
    baralhocartas();
    return qntcards;
}
function baralhocartas(){
    baralho = cartas.slice(0,qntcards);
    console.log(baralho);
    baralhado();
    return baralho;
}
function baralhado(){
    const embaralhado = Math.random() - 0.5;
    embaralhador();
    return embaralhado;
}
function embaralhador(embaralhado){
    const baralhobaralhado = baralho.sort(embaralhado);
    console.log(baralhobaralhado)
    console.log(embaralhado);
    mesapronta(baralhobaralhado);
}
function mesapronta(baralhobaralhado){
    for (let y = 0; y < baralhobaralhado.length; y++){  
        mesa.innerHTML+=`
        <article class="card" onclick="selecionarCard(this)">
            <div class="front"><img src="./assets/front.png" alt="Front Card" title="CORINGA"></div>
            <div class="back esconder"><img src='assets/${baralhobaralhado[y]}.gif' alt="parrot" title="parrot"></div> 
        </article>`}
}
function selecionarCard (cardx){
    document.getElementsByClassName("article.card > .front").classList.add("esconder");
    document.getElementsByClassName("article.card > .back").classList.remove("esconder")
    document.getElementsByClassName("article.card > .back").classList.add("selecionado");
}
