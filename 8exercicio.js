function multiplicar(n1, n2){
    Number(n1);
    Number(n2);
    var mult = 0;
    if(n1 == 0 || n2 == 0){
        return 0;
    } else{
        for(let i = 0; i < n2; i++){
            mult += n1;
        }
        return mult;
    }
}