let numeroDeCartas = 1
let htmlCartas = document.querySelector('section')
let enderecoCartas = ['gifs/bobrossparrot.gif', 
                      'gifs/explodyparrot.gif',
                      'gifs/fiestaparrot.gif', 
                      'gifs/metalparrot.gif',
                      'gifs/revertitparrot.gif', 
                      'gifs/tripletsparrot.gif', 
                      'gifs/unicornparrot.gif']

// o número precisa ser par e entre 4 e 4
while (numeroDeCartas < 4 | numeroDeCartas >14 | numeroDeCartas%2 !== 0){
    numeroDeCartas = parseInt(prompt("Insira um número PAR de cartas (entre 4 e 14)"))
}


function gerarCartas(qtCartas){
    for(let i = 0; i < qtCartas; i++){
        htmlCartas.innerHTML += 
    `<div class="carta">
         <img class="parte-oculta" src="${enderecoCartas[i]} onclick="virarCarta()">
         <img src="icone/front.png" onclick="virarCarta()">
    </div>`
    }
}

gerarCartas(numeroDeCartas)