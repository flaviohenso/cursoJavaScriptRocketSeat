const usuarios = [
    {
        nome: 'Diego',
        habilidade: ['javaScript', 'React Native', 'grails']
    },
    {
        nome: 'Flavio',
        habilidade: ['java', 'grails', 'Ruby']
    }
]

function descricao(usuarios) {
    return `O ${usuarios[0].nome} possui as habilidades: ${usuarios[0].habilidade} \nO ${usuarios[1].nome} possui as habilidades: ${usuarios[1].habilidade}`
}




console.log(descricao(usuarios))