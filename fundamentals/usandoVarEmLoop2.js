const funcs = []


for (var i = 0; i < 10; i += 1){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[9]()