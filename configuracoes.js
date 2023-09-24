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
    // criando lista com cartas duplicadas
    let paresCartas = []
    for (let i = 0; i < qtCartas/2; i++){
        paresCartas.push(enderecoCartas[i])
        paresCartas.push(enderecoCartas[i])
    }

    // embaralhando cartas
    paresCartas = embaralharElementos(paresCartas)
    
    console.log(paresCartas)
    
    for(let i = 0; i < qtCartas; i++){
        htmlCartas.innerHTML += 
    `<div class="caixa">
        <div class="frente carta">
            <img src="icone/front.png">
        </div>
        
        <div class="verso carta">
            <img class="parte-oculta" src="${paresCartas[i]}">
        </div>

    </div>`
    }
}

// function virarCarta(carta){
//     let imagens = carta.querySelectorAll('img')
//     imagens[0].classList.toggle('parte-oculta')
//     imagens[1].classList.toggle("parte-oculta")
// }


function embaralharElementos(lista){
    let elementosEmbaralhados = []
    let tamanhoLista = lista.length


    for (let i = 0; i < tamanhoLista; i++){
        //selecionando endereço elemento aleatorio da lista
        let indexDoElementoAleatorio = Math.floor(Math.random()*lista.length)
        
        //adicionando elemento escolhido na lista
        elementosEmbaralhados.push(lista[indexDoElementoAleatorio])

        //removendo elemento escolhido da lista
        lista.splice(indexDoElementoAleatorio, 1)
    }
    
    return elementosEmbaralhados
}


//chamando a função geradora
gerarCartas(numeroDeCartas)