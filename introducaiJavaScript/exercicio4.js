console.log((function(anos){
    
        if (anos <= 1){
            return 'Iniciante'
        }else if (anos > 1 && anos <= 3){
            return 'Intermediario'
        }else if (anos > 3 && anos <= 6){
            return 'Avançado'
        } else {
            return 'Jedi Master'
        }
    
})(7))