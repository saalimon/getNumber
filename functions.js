module.exports.getNumber = (num) =>{

};
module.exports.isNumber = (num) =>{
    var numberFlag = false;
    if (typeof num === 'number') {
        numberFlag = num - num === 0;
    }
    if (typeof num === 'string' && num.trim() !== '') {
        numberFlag =  Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }
    return numberFlag
}