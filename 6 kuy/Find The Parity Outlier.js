function findOutlier(arr){
    let even = arr.filter(a=>a%2!==0)
    let odd = arr.filter(a=>a%2===0)
    if (even.length>=2){
        return odd[0]
    }else{
        return even[0]
    }
}