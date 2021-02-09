const cores = {
    primarias: ['vermelho', 'azul', 'amarela'],
    secundarias: ['verde', 'laranja','roxo'],
    favoritasB: ['Cinza','Preto','Verde'],
    favoritasG: ['Roxo', 'Vermelho', 'Preto']

}

console.log(cores.primarias, cores.favoritasG)

const bebidas = {
    sucos: ['Laranja', 'Maracujá', 'Acerola',],
    refrigerante: ['Coca-Cola', 'Guaraná', 'Guaraná Jesus'],
    energetico: ['Monster', 'Redbull', 'TNT'],
    cha: ['Hortelã', 'Camomila'],
    agua: ['Tônica', 'H2O', 'Água com Gás']
}

console.log(bebidas.sucos, bebidas.cha)

const restaurante = {
    hamburguer: ['Burguer King','Jerônimo', 'Madero'],
    pizza: ['Pizza Hut', 'Dominos', 'La Madre'],
    frango: ['KRC', 'Popyes', 'Rei do Frango'],
    churrasco: ['Mania de Churrasco', 'Tendal Grill', 'Bufalo Bill']
}

console.log(restaurante.frango, restaurante.churrasco)

const exercicio = {
    aerobico: ['Pular corda', 'Andar de Bicicleta', 'nadar'],
    anaerobico: ['Musculação','Pilates','Agachamentos']
}

console.log(exercicio)

const esportes = {
    individual: ['Atletismo', 'Canoagem','Golfe'],
    coletivo: ['Vôlei', 'Futebol', 'Handebol'],
    arLivre: ['Vôlei de Praia', 'Surf', 'Corrida'],
    lugarFechado: ['Ginástica Artística', 'Ginástica Acrobática'],
    luta: ['Boxe','Judô', 'Caratê'],
    comBola: ['Basquete', 'Handebol', 'Furebol', 'Vôlei'],
    semBola: ['Ciclismo', 'Natação', 'Atletismo']
}

console.log(esportes.arLivre, esportes.semBola, esportes.luta)

const casa = {
    sala: 2,
    quartos: 5,
    banheiros: 3,
    quintal: 'sim',
    garagem: 'sim',
    dono: {
        nome: 'Jose',
        idade: 52,
        filhos: {
            filha: 'Maria',
            filho: 'Joaquim'
        }
    }
}

console.log(casa.quartos, casa.garagem)
console.log(casa.dono)

const smartphone = {
    samsung: ['Samsung Galaxy A10', 'Samsung Galaxy A71'],
    apple: ['Iphone X, Iphone XS'],
    xiaomi: ['Redmi Note 9s', 'Redmi Note 11']
}

console.log(smartphone.apple)