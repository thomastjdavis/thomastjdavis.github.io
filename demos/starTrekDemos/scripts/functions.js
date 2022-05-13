function range(min,max){
    return Math.floor(Math.random()*(max-min+1) ) + min;
}
function excludeRange(min,max,exclusion){
    num = Math.floor(Math.random()*(max-min+1) ) + min;
    if (exclusion.includes(num)){
       num = excludeRange(min,max,exclusion);
    }
    return num;
}

