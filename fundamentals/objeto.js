//Declarando Objetos

/*Forma 1: 
declarando o objeto vazio e atribuindo seus atributos posteriomente*/
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.80
prod1['Desconto Legal'] = 0.40 //Evitar usar atributos com espaço 

console.log(prod1)

/*Forma 2:
Declarando o objto com os atributos já inseridos */
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.8
}

console.log(prod2)