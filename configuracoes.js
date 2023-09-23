let numeroDeCartas = 1

// o número precisa ser par e entre 4 e 4
while (numeroDeCartas < 4 | numeroDeCartas >14 | numeroDeCartas%2 !== 0){
    numeroDeCartas = parseInt(prompt("Insira um número PAR de cartas (entre 4 e 14)"))
}
