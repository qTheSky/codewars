function countPositivesSumNegatives(input) {
    let positiveNums = 0;
    let negativeSum = 0;
    if (input === null || input.length === 0) {
        return [];
    } else {
        input.forEach((num) => num > 0 ? positiveNums++ : negativeSum += num);
    }
    return [positiveNums , negativeSum];
}