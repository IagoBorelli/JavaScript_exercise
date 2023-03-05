/* o for tem três partes: declaração de váriavel / condição de repetição / incremento */ /* eles são separados por ; */
for (var i = 0; i < 10; i+=1) {
    console.log(i)
}

/* como var não tem escopo, o i irá ser retornado e terá o valor que o tirou do laço, nesse exemplo, será o valor 10 */
console.log('i=', i)