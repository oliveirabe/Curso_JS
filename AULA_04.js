function cumprimento() {
  return 'Ola'
}

function soma(num1, num2, num3) { // Cabeçalho da Funcao -> Tema da Funçao e a Regra (parametros)
  return num1 + num2 + num3 // Desenvolvimento da Funcao -> O que ela vai fazer com os parametros (se tiver)
}

let somaNum1 = soma(1, 2, 3)
console.log(cumprimento())
console.log(somaNum1)

/*
  1. Parametros Funcao -> Nota1 e Nota2;
  2. Lógica Funcao -> Nota1 + Nota2 / 2;
  3. Retorno Funcao -> let media = calculoMedia
*/

function media(nota1, nota2) {
  const calcMedia = (nota1 + nota2) / 2

  return calcMedia
}

let mediaGeral = media(6, 10)
console.log(mediaGeral)

// Criar uma funcao que retorne o seu nome
// Criar uma funcao que receba um tempo em segundos e transforme em minutos
// Criar uma funcao que receba tres valores e retorne o 3 valores multiplicados
// Criar uma funcao que multiplique todos os numeros de uma lista por 2
// Criar uma funcao que receba uma lista de notas e retorne:
//   1. Se nota maior ou igual a 6 => Aprovado
//   2. Se nota == 5 => Recuperacao
//   3. Nota < 5 => Reprovado

  
function nome (){
  return 'Beatriz'
}
console.log(nome())

function tempo (tempo1){
  const tempoSegundo = (tempo1 / 60)

  return tempoSegundo
}
const tempoMinuto = tempo(132)
console.log(tempoMinuto)


function valores (valor1, valor2, valor3){
  const multiplicados = (valor1 * valor2 * valor3)

  return multiplicados
}
const numeros = valores(2, 8, 2)
console.log(numeros)


function dobro (lista){
  let listaVazia = []

  for (num of lista){
    num = num * 2
    listaVazia.push(num)
  }

  return listaVazia
}

const numLista = dobro([2,3,4,5])
console.log(numLista)

function notas (lista){
    
  for (valor of lista) {
    if (valor >= 6){
      console.log ('Aprovado!')
    } else if (valor === 5){
      console.log('Recuperação!')
    } else {
      console.log('Reprovado!')
    }
  }

  return 'Beatriz Gênia, dessa vez Giovanni errou!'
}

const Medias = notas ([6, 8, 5])
console.log(Medias)

// Função s/ retorno
function imprimirSoma(a, b){
  console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma('Beatriz', 'Sousa')
imprimirSoma(2,8,15,25,2,3)

// Função com retorno
function soma (a,b){
  return a + b
}

console.log(soma(2,3))

// Armazenando uma função em uma variável

const imprimirSoma2 = function (a,b){
  console.log(a + b)
}

imprimirSoma2(2, 8)

// Armazenando uma função arrow em uma variável

const somar = (a,b) => {
  return a + b
}

console.log(somar(2,6))

// Retorno Implícito

const subtracao = (a, b) => a - b
  console.log(subtracao(8,2))

  const imprimir = a => console.log(a)
  imprimir('UAU!')

  function idade (lista){
    
    for (maioridade of lista){
      if (maioridade >= 18) {
        console.log('Maior de idade')}
      else {
        console.log('Menor de idade')
      }
    }
  }

  console.log(idade([12, 22, 26, 2, 18]))
  
  function ano (anoNascimento){
    const calculo = 2021 - anoNascimento

    return calculo
  }

  console.log(ano(1994))