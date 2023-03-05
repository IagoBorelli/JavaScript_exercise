{
    {
        {
            {
                var sera = 'SERÁ???'
                console.log(sera)
            }
        }
    }
}

console.log(sera) // Conseguimos chamar uma variável que está dentro de varios blocos 

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local) // Não conseguimos acessar uma váriavel que está dentro de um bloco de função. 
