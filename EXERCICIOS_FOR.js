let idades = [18, 5, 12, 29, 26, 23, 50, 7]

for (valor of idades) {
    if (valor >= 18) {
        console.log(`${valor} Maior de Idade`)
    } else {
        console.log(`${valor} Menor de Idade`)
    }
}

let numeros = [12, 5, 7, 32, 72, 15, 1, 9] //Par/Impar

for (valor of numeros) {
    if (valor % 2 == 0) {
        console.log(`${valor} Número par`)
    } else {
        console.log(`${valor} Número Impar`)
    }
}


let medias = [5.5, 6.2, 5.9, 7.2, 6.0, 9.8] //Aprovado/Reprovado

for (nota of medias){
    if (nota >= 6.0) {
        console.log('Aprovado')
    } else if (nota >= 5){
        console.log('Recuperação')
    } else {
        console.log('Reprovado')
    }
}

let nomes = ['Giovanni', 'Beatriz', 'Creide', 'Marcia', 'Manuela', 'Paulo', 'Marquinhos']

for (nome of nomes) {
    if (nome == 'Giovanni' || nome == 'Beatriz' || nome == 'Marquinhos') {
        console.log('Estao na lista')
    } else {
        console.log('Nao estao na lista')
    }
}

// || => Condição OU; Serve para testar as condições. 
// Nesse exemplo => Giovanni OU Beatriz OU Marquinhos