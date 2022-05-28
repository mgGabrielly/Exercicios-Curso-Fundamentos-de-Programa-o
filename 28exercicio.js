function filtrarPorQuantidadeDeDigitos(numberArray, numdigitos){
    let numeros = []; 
    numeros = numberArray;
    let digitosArray = [];
    for(let i = 0; i < numeros.length; i++){
        if(Number((numeros[0]).toPrecision()) == numdigitos){
            digitosArray [i] = numeros [i];
        }
    }
    return digitosArray;
}