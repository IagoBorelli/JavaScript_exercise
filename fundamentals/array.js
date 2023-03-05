const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

//função push adiciona valores ao array
valores.push({id: 3}, false, null)
console.log(valores)

//função pop deleta a última posição do array
console.log(valores.pop())

//função delete deleta qualquer posição do array, basta você declarar ex: delete array[5]
delete valores[0]
console.log(valores)

//função typeof expõe o tipo da variável
console.log(typeof valores)

const vetor1 = []

vetor1[0] = 2
vetor1[1] = 4
vetor1[2] = 8
vetor1[3] = 10

console.log(vetor1)

