function moveZeros (arr) {
    const zeros = arr.filter((n) => n === 0).length;
    const result = arr.filter((n) => n !== 0);

    for (let i = 0; i < zeros; i ++) {
        result.push(0);
    }

    return result;
}