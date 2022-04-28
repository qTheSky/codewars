function positiveSum(numbers) {
    let negatives = [];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negatives.push(numbers[i]);
        } else {
            sum += numbers[i];
        }
    }
    return sum;
}

