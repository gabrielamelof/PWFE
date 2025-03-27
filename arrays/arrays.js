//variáveis; espaços em memória que armazenam valores
//let = valores variáveis que recebo em meio a execução
//const = valores fixos no código (valor de pi) 
//var = é a primeira forma de declarar uma variável, porém hoje é obsoleta
//
//escopo diz respeito a como vou usar as variáveis criadas
//quando criada uma variável dentro de uma função, ela é usada somente dentro dela
//ainda temos mais um tipo de variável em JS, o Array (conjunto de dados em uma mesma variável) 


//usando os "[]" é possível criar um array, lembrando que ele é indexado, começando em 0
let numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

//para saber os índices do array 
for(let indice in numeros){
    document.write(indice)
}

//para ver os valores armazenados no índice 
for(let valor of numeros){
document.write(`${valor}, `)
}

//foreach é uma função para a manpulação de um array
numeros.forEach(function(valor){
    document.write(`${valor} <p>`)
})
   
//inserir um elemento no final da lista
numeros.push(60)
document.write(`${numeros} <p>`)

//inserir um elemento no inicio da lista
numeros.unshift(0)
document.write(`${numeros} <p>`)

//inserir um elemento no inicio da lista
numeros.pop()
document.write(`${numeros} <p>`)

//funções callback: interage com um array, tratando a informação e guardando em uma nova variável (array)

let numerosDobrados = numeros.map(function(numero){
    return numero * 2
})
document.write(`${numerosDobrados} <p>`)

//Filter: também percorre o array e guarda no array de retorno o valor correspondente a uma condição 
let numerosdiv3 = numeros.filter(function(valor){
    return numeros % 3 === 0
})
document.write(`${numerosdiv3} <p>`)
    
//Find; percorre o array e para assim que encontrar o que está sendo pedido 
let primeiroPar = numeros.find(function(numero){
    return numero % 2 === 0
})
document.write(`${primeiroPar} <p>`)
