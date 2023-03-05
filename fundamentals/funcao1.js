// Criando uma função sem retorno 
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Passando apenas um parâmetro, a função vai retornar um valor NaN (not a number)
imprimirSoma(2, 5, 4, 6, 7, 8) // Passando mais valores no parâmetro do que o solicitado, o programa vai ignora-lós
imprimirSoma() //não passando nenhum valor, ele tbmm retornarar um NaN

// Função com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3)) // como a função está dando retorno, temos que chama-lá através do console.log()
console.log(soma(2))