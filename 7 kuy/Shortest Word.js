function findShort(s){
    let array = s.split(' ')
    let result = Infinity
    for(let i = 0;i<array.length;i++){
        result = Math.min(array[i].length,result)
    }
    return result
}