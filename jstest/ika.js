function ika(a) {
    if (a === undefined || a === null){
        throw new Error('ei parametreja');
    }
    const result = Number(a);
    console.log(result);
    if(Number.isNaN(result)){
    throw new Error('ei lukuja');
    }
    if(result >= 18){
        return true;
    }
    if(result < 18){
        return false;
    }
}
    module.exports = ika;