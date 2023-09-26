let numeroDeCartas = 1                              // variável
let htmlCartas = document.querySelector('section')  // html que ficará na página
let paresCartas = []                                // recebe cartas embaralhadas
let verificaPar = []                                // verificará se cartas são iguais
let permitirSelecionar = true                       // controle de toque para o usuário
let jogadas = 0                                     // qt de jogadas

let enderecoCartas = ['gifs/bobrossparrot.gif', 
                      'gifs/explodyparrot.gif',
                      'gifs/fiestaparrot.gif', 
                      'gifs/metalparrot.gif',
                      'gifs/revertitparrot.gif', 
                      'gifs/tripletsparrot.gif', 
                      'gifs/unicornparrot.gif']     //endereço das cartas


// o número de pares entre 2 e 7
while (numeroDeCartas < 2 | numeroDeCartas >7){
    numeroDeCartas = parseInt(prompt("Insira a quantidade de pares que deseja jogar (entre 2 e 7"))
}


function gerarCartas(){
    // criando lista com cartas duplicadas
    for (let i = 0; i < numeroDeCartas; i++){
        paresCartas.push(enderecoCartas[i])
        paresCartas.push(enderecoCartas[i])
    }

    // embaralhando cartas
    paresCartas = embaralharElementos(paresCartas)
    
    // gerando o html com as cartas inseridas
    for(let i = 0; i < numeroDeCartas*2; i++){
        htmlCartas.innerHTML += 
    `<div class="caixa"  onclick="virarCarta(this)">
        <div class="frente carta">
            <img src="icone/front.png">
        </div>
        
        <div class="verso carta virada">
            <img src="${paresCartas[i]}">
        </div>

    </div>`
    }
}


function virarCarta(carta){
    // virar carta ao ser clicada. 
    if (permitirSelecionar){
        let lados = carta.querySelectorAll("div")
        let verso = lados[1]
        
        // condição para virar apenas para um lado
        if (verso.classList.contains('virada')){
            lados[0].classList.toggle('virada') // frente 
            lados[1].classList.toggle('virada') // verso
            verificaPar.push(lados)
        }

        // verificar se o par está igual
        verificaAcerto()
        verificaSeTodasEstaoViradas()
    }
}


function verificaAcerto(){
    // verifica se o código html das cartas estão iguais
    if (verificaPar.length === 2){
        
        if (verificaPar[0][1].innerHTML === verificaPar[1][1].innerHTML){
            verificaPar =[]
            jogadas ++
        }

        else{
           setTimeout(desvirarCarta, 1000);
           jogadas ++
           permitirSelecionar = false
        }
    }
}


function desvirarCarta(){
    // Desvirar cartas caso estejam erradas
    verificaPar[0][0].classList.toggle('virada')
    verificaPar[0][1].classList.toggle('virada')
    verificaPar[1][0].classList.toggle('virada')
    verificaPar[1][1].classList.toggle('virada')
    verificaPar =[]
    permitirSelecionar = true
}


function embaralharElementos(lista){
    // recebe uma lista qualquer e devolve essa lista de forma embaralhada

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
    
    // devolvendo a lista embaralhada
    return elementosEmbaralhados
}


function verificaSeTodasEstaoViradas(){
    let viradas = document.querySelectorAll('.frente.virada')
    if (viradas.length === paresCartas.length){
        alert(`Você ganhou em ${jogadas} jogadas!`)
    }
    
    // for(let i = 0; i < viradas.length; i++){
    //     console.log(viradas[i])
    // }   

    
    // console.log(viradas)
    // console.log(paresCartas.length)
}


gerarCartas()