    //GLOBAIS
    // CARTAS 0 A 13 // 14 ITENS
    cartas= ['unicornparrot','unicornparrot', 'tripletsparrot', 'tripletsparrot', 'revertitparrot', 'revertitparrot', 'metalparrot', 'metalparrot', 'fiestaparrot', 'fiestaparrot', 'explodyparrot', 'explodyparrot', 'bobrossparrot','bobrossparrot'];
    qntcards = 0;
    let card = document.querySelector("article.card");
    let front = document.querySelector("article.card > .front");
    let back = document.querySelector("article.card > .back");
    let mesa = document.querySelector("main > section");
    let config = document.querySelector("main > div")
    let baralho = [];
    //VERIFICAR QNT DE CARDS 
    //EMBARALHAR CARDS
    //SELECIONAR CARD AND .FLIP  // CASO SEJA A 1° VIRAR APOS 1 CLIK. /// CASO SEJA 2° IF 1° === 2° MANTEM FRONT NONE // CASO TODAS VIRADAS WIN
function configs(inicards){
    qntcards= Number(prompt("Quantas Cartas Deseja ? Em pares (4) a (14)!"))
    while(qntcards %2 !== 0 || qntcards < 4|| qntcards>14){
        qntcards= Number(prompt("Quantas Cartas Deseja ? Em pares (4) a (14)!"))
    }
    mesa.classList.add("selecionado");
    config.classList.add("esconder")
    console.log(qntcards)
    return (qntcards);
}

function baralhocartas(){
    baralho = cartas.slice(0,qntcards)
    return (baralho);
    console.log(baralho)
}
function baralhado(){
    return Math.random() - 0.5; 
    console.log(baralhado)
}
function embaralhador(){
    baralhobaralhado= baralho.sort(baralhado);
    return baralhobaralhado;
    console.log(baralhobaralhado)
}
function mesapronta(baralhobaralhado){
    for (y = 0; y < baralhobaralhado.length; y++){  
        mesa.innerHTML+=`
        <article class="card" onclick="selecionarCard(this)">
            <div class="front"><img src="./assets/front.png" alt="Front Card" title="CORINGA"></div>
            <div class="back esconder"><img src='assets/${baralhobaralhado[y]}.gif' alt="parrot" title="parrot"></div> 
        </article>`}
}   