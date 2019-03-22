function lippu(a) {
    const result = Number(a);
    console.log(result);
    if(result >= 16 && result <= 25){
        return ("1.5€");
    }
    if(result < 7){
        return ("ilmainen");
    }

    if(result >= 8 && result <= 15){
    return ("1€");
    }
    if(result >= 26 && result <= 64){
        return ("3€");
    }
    if(result >= 65){
        return ("1.5€");
    }
}
    module.exports = lippu;