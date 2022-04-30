function squareDigits(num){
    return Math.floor(num.toString().split("").map(elem=>elem*elem).join(""))
   }