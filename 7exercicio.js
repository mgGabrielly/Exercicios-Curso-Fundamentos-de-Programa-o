function estaentre(num, min, max, inclusivo){
    let mod = new Boolean(inclusivo);
    if(min < num && num < max){
        return true;
    } else if (mod == true){
        return true;
    }else if(min > num || num > max){
        return false;
    } else{
        return false;
    }
}