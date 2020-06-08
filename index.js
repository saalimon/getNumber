var fn = require('./functions');

module.exports = (num) => {
    num = String(num);
    var numList = []
    for (i = 0; i < num.length; i++) {
        if(fn.isNumber(num[i])){
            numList.push(num[i])
        }
    }
    var M = 1;
    var result = 0;
    if(numList.length > 0){
        result = Number(numList.join(""))
    }
    else{
        throw new Error('does not have any number in your input');
    }
    
    return result
}