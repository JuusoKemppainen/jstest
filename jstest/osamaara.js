function maara(a, b) {
    
    if(b == 0){
    throw new Error('Nollalla ei voi jakaa');
    }
    const result = Number(a);
    if(Number.isNaN(result)){
        throw new Error('ei lukuja');
        }

    
    return a / b;
}
    module.exports = maara;