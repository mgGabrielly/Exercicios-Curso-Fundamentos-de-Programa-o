function checaranobissexto(ano){
    Number(ano);
    if (ano%4 == 0){
        if (ano%100 != 0){
            console.log("É ano bissexto.");
        }else if(ano%100 == 0 && ano%400 == 0){
            console.log("É ano bissexto.");
        }
    } else {
        console.log("Não é ano bissexto.");
    }
}