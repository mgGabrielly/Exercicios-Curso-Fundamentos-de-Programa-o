function calcularmedia(arraynum){
    let num = new Array;
    num = arraynum;
    let soma = 0;
    let div = 0;
    for(let i = 0; i < num.length; i++){
        soma += num[i];
        div += 1;
    }
    const media = soma/div;
    return media;
}