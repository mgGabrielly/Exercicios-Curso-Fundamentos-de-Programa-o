function basket(valores){
    let pontuacao = valores.split(" ");
    let numberArray = [];    
    for (let i = 0; i < pontuacao.length; i++){
        numberArray.push(parseInt(pontuacao[i]));
    }
    let recorde = numberArray[0];
    let bateurecorde = 0;
    let menorpontuacao = numberArray[0];
    let posicaopiorjogo = 1;
    let pioremelhor = [];
    for(let j = 0; j < numberArray.length; j++){
        if(numberArray[j] > recorde){
            recorde = numberArray[j];
            bateurecorde += 1;
        }
        else if(numberArray[j] < menorpontuacao){
            menorpontuacao = numberArray[j];
            posicaopiorjogo = j+1;
        }
    }
    pioremelhor[0] = bateurecorde;
    pioremelhor[1] = posicaopiorjogo;
    return pioremelhor;
}