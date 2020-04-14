const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}

const resultado = function (endereco) {
    return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro},
    na rua ${endereco.rua} com numero ${endereco.numero}.`
}

console.log(resultado(endereco))