function funcaoDaSorte(numero){
    let num = Math.floor(Math.random() * 10) + 1;
    if(Number(numero) == num){
        console.log("Parabéns! O número sorteado foi o " + num);
    }else{
        console.log("Que pena! O número sorteado foi o " + num);
    }
}