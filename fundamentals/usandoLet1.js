var number = 1
{
    let number = 2 /* let tem escopo de bloco, mesmo que não seja uma função */
    console.log('dentro =', number)
}

console.log('fora=', number)

/* o código retonará 2 dentro e 1 fora */