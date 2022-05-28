function menorNumero(arraynum){
    let ordenados = arraynum.sort(function(a, b) { return a - b; });
    const menornum = arraynum[0];
    return menornum;
}