function segundoMaior(valores){
    let arraynum = valores.sort(function(a, b) { return b - a; });
    const maiornum = arraynum[1];
    return maiornum;
}