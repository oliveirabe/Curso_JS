let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let multiplicados = [] 

for ( item of numeros ) {
  item = item * 2
  multiplicados.push(item) 
}

console.log(multiplicados)

const pessoas = ['Maria, João, Andre, Julio, Joao']

let lista1 = [15, 35, 60, 27, 40, 22, 11, 10]
for (item of lista1) {
  if(item % 2 == 0) {
    console.log ('Par')
  } else {
    console.log ('Ímpar')
  }
}

// Sempre que for usar o %:
// numero % divisor == resto
// numero é o numero que voce quer comparar
// divisor é por qual numero voce quer dividir
// resto é pra saber se resta 0 ou algo diferente de 0

// 10 / 2 é igual a 5 e nao resta nada ou seja: CALMA AI 

// O for sempre vai ter uma variavel de apoio (item)
// O item vai salvar o valor de cada elemento da fila por vez

// Se a lista tiver 10 elementos, o item vai salvar o valor de cada um de cada vez
// Entendeu o lance do item?