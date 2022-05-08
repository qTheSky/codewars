const squareSum = (n)=>{
    let sum = 0
    for(let i=0;i<n.length;i++){
        sum += n[i]**2
    }
    return sum
}