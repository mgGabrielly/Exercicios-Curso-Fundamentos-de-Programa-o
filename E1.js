function matematica(n1, n2){
    Number(n1);
    Number(n2);
    const mat = new Array(3);
    mat[0] = n1 + n2;
    mat[1] = n1 - n2;
    mat[2] = n1*n2;
    mat[3] = n1/n2;
    return mat;
}