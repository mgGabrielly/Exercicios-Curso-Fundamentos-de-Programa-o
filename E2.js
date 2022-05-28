function exponenciacao(n1, n2){
    Number(n1);
    Number(n2);
    var pot = 1;
    for(let i=0; i<n2; i++){
        pot *= n1;
    }
    return pot;
}