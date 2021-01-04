# VARIÁVEIS

* Let é uma variável que pode ser modificada
* Const é uma variável que não pode ser modificada

```
let nomeVariavel = valor
const nomeVariavel = valor
``` 

# TIPOS DE DADOS

* String é um dado do tipo texto; Define-se com aspas simples 
* Objeto é conjunto de atribuos; Define-se com chave
* Lista é um agrupamento de dados; Define-se com colchetes

```
const cores = ['azul','amarelo', 'verde']

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
            rua: 'Av Poney Club',
            numero: 1823,
            bairro: 'Orquideas',
            cidade: 'São Bernardo do Campo'
        }
    }
}

```

# TEMPLATE STRING

* Template Strings são strings que permitem expressões embutidas.

```
let nome1 = 'João'
let nome2 = 'Maria'
let nome3 = 'Ana'
let nome4 = 'Mateus'

console.log(`Meu nome é ${nome2}, 
meu namorado é ${nome1}, ${nome3} é minha sogra 
e ${nome4} é meu cunhado.`)
```
