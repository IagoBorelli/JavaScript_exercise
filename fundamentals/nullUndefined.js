let valor  // Essa variável foi declarada, mas não foi inicializada
console.log(valor)

// console.log(valor2) <-- esse comando daria erro pois a variável nem sequer foi declarada no código! is not defined ! undefined

valor = null // ausência de valor

console.log(valor)

// console.log(valor.toString()) Erro! Variáveis null ou undefined não conseguem utilizar algumas propriedades

const produto = {}
console.log(produto.preco) // Como o atributo preco não foi definido no objeto, vai retornar um valor undefined
console.log(produto)

produto.preco = 3.5

console.log(produto.preco)