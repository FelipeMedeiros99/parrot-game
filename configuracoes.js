let numeroDeCartas = 1 // variável
let htmlCartas = document.querySelector('section')
let enderecoCartas = ['gifs/bobrossparrot.gif', 
                      'gifs/explodyparrot.gif',
                      'gifs/fiestaparrot.gif', 
                      'gifs/metalparrot.gif',
                      'gifs/revertitparrot.gif', 
                      'gifs/tripletsparrot.gif', 
                      'gifs/unicornparrot.gif']
let paresCartas = [] // recebe cartas embaralhadas
let verificaPar = [] // verificará se cartas são iguais
let permitirSelecionar = true // controle de toque para o usuário

// o número precisa ser par e entre 4 e 4
while (numeroDeCartas < 4 | numeroDeCartas >14 | numeroDeCartas%2 !== 0){
    numeroDeCartas = parseInt(prompt("Insira um número PAR de cartas (entre 4 e 14)"))
}


function gerarCartas(qtCartas){
    // criando lista com cartas duplicadas
    for (let i = 0; i < qtCartas/2; i++){
        paresCartas.push(enderecoCartas[i])
        paresCartas.push(enderecoCartas[i])
    }

    // embaralhando cartas
    paresCartas = embaralharElementos(paresCartas)
    
    for(let i = 0; i < qtCartas; i++){
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
    
    if (permitirSelecionar){
        let lados = carta.querySelectorAll("div")
        let frente = lados[0]
        let verso = lados[1]

        // condição para virar apenas para um lado
        if (verso.classList.contains('virada')){
            lados[0].classList.toggle('virada') // frente 
            lados[1].classList.toggle('virada') // verso
            verificaPar.push(lados)
        }

        verificaAcerto()
    }
}


function verificaAcerto(){
    if (verificaPar.length === 2){
        
        if (verificaPar[0][1].innerHTML === verificaPar[1][1].innerHTML){
            verificaPar =[]
        }
        else{
           setTimeout(desvirarCarta, 1000);
           permitirSelecionar = false

        }
    }
}

function desvirarCarta(){
    verificaPar[0][0].classList.toggle('virada')
    verificaPar[0][1].classList.toggle('virada')
    verificaPar[1][0].classList.toggle('virada')
    verificaPar[1][1].classList.toggle('virada')
    verificaPar =[]
    permitirSelecionar = true
}


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

// function verificaAcerto(){
//     if (clique === 2){


//         if (par[0] === par[1]){
//             alert('acertou')
//             clique = 0
//             par.pop()
//             par.pop()
//         } 

//         else{
//             clique = 0
            
//             par[0].parentNode.classList.remove('virada')
//             par[1].parentNode.classList.remove('virada')

//             par.pop()
//             par.pop()

//         }
//     }
// }


//chamando a função geradora
gerarCartas(numeroDeCartas)