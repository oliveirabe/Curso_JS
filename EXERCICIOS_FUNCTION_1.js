function dobro (num){
    return num * 2
}

console.log(dobro(2))

function triplo (num){
    return num * 3
}

console.log(triplo(2))

function metade(num){
    return num / 2
}

console.log(metade(10))

function quinta (num){
    return num * 5
}

console.log(quinta(3))

function nome(){
    return 'Maria'
}

console.log(nome()) // sem parâmetro

function nome2(alguem){
    return alguem
}

console.log(nome2('João')) // com parâmetro

function soma (num1, num2){
    return num1 + num2
}

console.log(soma(10,5))

function media (num1, num2, num3){
    return (num1 + num2 + num3) / 3
}

console.log(media(5,5,10))

function media2 (num1, num2){
    console.log((num1 + num2) / 2)
}

media2(6,4)

function subtracao(num1, num2){
    return num1 - num2
}

console.log(subtracao(10,1))

function anoNascimento(ano){
    return 2021 - ano
}

console.log(anoNascimento(1997))