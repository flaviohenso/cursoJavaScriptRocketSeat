function checaIdade(idade) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (idade > 18) {
                resolve('É maior de 18.')
            } else {
                reject('É menor de 18')
            }
        }, 2000)
    })
}

checaIdade(33)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })