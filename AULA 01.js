let cor = 'azul'
const idade = 26

console.log(cor,idade)

const familia = ['pai', 'mae', 'filho', 'cachorro']
let ano = 2021
const frase = 'Feliz ano novo!'
const casa = {
    quartos: 4,
    banheiros: 4,
    garagem: 'sim',
    varanda: 'sim'
}

console.log(familia, ano, frase, casa)
console.log(casa.quartos)

const carro = {
    portas: 4,
    cor: 'azul',
    ano: 2019,
    modelo: 'Hb20',
    flex: 'sim',
    dono: {
        nome: 'Beatriz',
        idade: 26,
        endereco: {
            rua: 'Rua dos bobos',
            numero: 0,
            bairro: 'zerozerozero',
            cidade: 'Bobolândia'
        }
    }
}

console.log(carro)

const estadosBrasil = ['Acre', 'Alagoas', 'Amapa']
console.log(estadosBrasil)

let nome1 = 'Beatriz'
let nome2 = 'Giovanni'
let nome3 = 'Tânia'
let nome4 = 'Nathan'

console.log(`Meu nome é ${nome2}, 
minha namorada é ${nome1}, ${nome3} é minha sogra 
e ${nome4} é meu cunhado.`) 

const familia2 = {
    pai: 'Gilvan',
    mae: 'Tania',
    irmao: 'Nathan',
    noivo: 'Giovanni',
    Cachorro: 'Não',
    Gato: {
        nomeGato: 'Chicó',
        idade: '1 ano',
        donoGato: 'Beatriz'
    }
}

console.log(familia2)
console.log(familia2.noivo)
console.log(familia2.Gato.donoGato)

const nome = familia2.Gato.donoGato
console.log(nome)