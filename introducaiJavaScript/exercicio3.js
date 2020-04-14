function verificarHab(habili) {
    if(habili.find(element => element === "react")){
        return true
    }else {
        return false
    }
}

const habiliades = ["javaScript","react",'grails']

console.log(verificarHab(habiliades))