function solve(array) {
    let isSmallestNum = function (num, array) {
        let smallestNum = Number.MAX_SAFE_INTEGER;
        for (const item of array) {
            if (smallestNum > item) {
                smallestNum = item;
            }
        }

        return smallestNum === num;
    };

    let isBiggestNum = function (num, array) {
        let biggestNum = Number.MIN_SAFE_INTEGER;
        for (const item of array) {
            if (biggestNum < item) {
                biggestNum = item;
            }
        }

        return biggestNum === num;
    };

    let result = [];

    let isLastAddedBigNum = true;
    while(array.length != 0) {
        for (let i = 0; i < array.length; i++) {
            if (isBiggestNum(array[i], array) && !isLastAddedBigNum) {
                result.push(array[i]);
                array.splice(i, 1);
                isLastAddedBigNum = true;
            }
            else if(isSmallestNum(array[i], array) && isLastAddedBigNum) {
                result.push(array[i]);
                array.splice(i, 1);
                isLastAddedBigNum = false;
            }
        }
    }

    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));