// Declarando variáveis do tipo number:

const peso1 = 1.0
const peso2 = Number('2.0') 

// Exemplo de código de média

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/ (peso1 + peso2)

console.log(media.toFixed(2)) // .toFixed() serve para escolher quantas casas decimais vão ter!
console.log(media.toString()) // .toString() faz com que o valor retornado seja com string
console.log(media.toString(2)) // transforma em binário
