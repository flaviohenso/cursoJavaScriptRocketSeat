const ulElement = document.querySelector('#app ul')
const inputElement = document.querySelector("#app input")
const btnElement = document.querySelector("#app button")
let listaTodo = JSON.parse(localStorage.getItem('listTodo')) || [] //converte do fromato String para um Array


function criarTodo(){
    //limpar o elemente <ul>
    ulElement.innerHTML = ''

    for (todo of listaTodo) {
        let liElement = document.createElement('li')
        let aElement = document.createElement('a')
        
        aElement.setAttribute('href',`#`)
        aElement.setAttribute('onclick',`delTodo(${listaTodo.indexOf(todo)})`)

        aElement.appendChild(document.createTextNode('Excluir'))
        liElement.appendChild(document.createTextNode(todo))
        ulElement.appendChild(liElement)
        liElement.appendChild(aElement)
    }

}

criarTodo()

function adicionar(){
    listaTodo.push(inputElement.value)
    inputElement.value = ''
    
    criarTodo()
    saveLocalStorage()
}

function delTodo(indice){
    listaTodo.splice(indice,1)
    criarTodo()
    saveLocalStorage()
}

//armazenamento local
function saveLocalStorage(){
    //converte listaTodo para o formato String
    localStorage.setItem('listTodo',JSON.stringify(listaTodo))
}

btnElement.onclick = adicionar