function inverso(valor){
    const v = valor.typeof() ;
    if(v == Boolean){
        if(valor == true){
            return false;
        } else{
            return true;
        }
    } else if(v == Number){
        return v*(-1);
    } else{
        return "booleano ou número esperados, mas o parâmetro é do tipo string";
    }
}