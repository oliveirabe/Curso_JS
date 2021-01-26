 const lista = [10,20,30,40]
 let nome = 'Beatriz'

 if (nome == 'Beatriz'){
    lista.push(50)
    console.log(lista)
} else {
    lista.pop()
    console.log(lista)
}

let pessoa = 'Ana'

if (pessoa == 'Ana'){
    console.log('É mulher!')
}else if (pessoa =='Mario'){
    console.log('É homem!')
}else {
    console.log('neutro')
}

const nota1 = 8
const nota2 = 3
if ((nota1 + nota2)/2 >= 6){
    console.log('APROVADO!')
}else {
    console.log('REPROVADO!')
}

const valor1 = 6
const valor2 = 1
const valor3 = 5
if (valor1>valor2&valor3){
    console.log(valor1)
}else if (valor2>valor1&valor3){
    console.log(valor2)
}else{
    console.log(valor3)
}

const semaforo = 'verde'
if (semaforo == 'verde'){
    console.log('Siga em frente')
}else if (semaforo == 'amarelo'){
    console.log('Atenção!')
}else{
    console.log('Pare!')
}

