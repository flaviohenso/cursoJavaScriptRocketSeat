const numeroPares = (x,y) => {
    let i = x
    while (i < y) {
        if ( i % 2 === 0){
            console.log(i)
        }
        i++
    }
}

numeroPares(2,9)