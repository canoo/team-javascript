
function factorial_iterative(input) {

    var result = 1;
    var num = Number(input);
    if (input === null || isNaN(num)) {
        return undefined;
    }
    if (num < 0) {
        return undefined;
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    while (num > 1) {
        result = result * num;
        num--;
    }
    return result;
}

function factorial_recursive(input) {

    function innerFactorial(acc, num) {
        if (num === 0 || num === 1) {
            return acc;
        }
        return innerFactorial(acc * num, num -1);
    }

    var num = Number(input);
    if (input === null || isNaN(num)) {
        return undefined;
    }
    if (num < 0) {
        return undefined;
    }
    return innerFactorial(1, num);
}

function factorial_async(input, resultCallback, progressCallback) {

    function innerFactorial(acc, num) {
        if (num === 0 || num === 1) {
            setTimeout(resultCallback.bind(null, acc), 0);
        } else if (num % 100 === 0) { // clear stack every 100 frames
            setTimeout(innerFactorial.bind(null, acc * num, num -1), 0);
        } else {
            innerFactorial(acc * num, num -1);
        }
    }

    var num = Number(input);
    if (input === null || isNaN(num)) {
        setTimeout(resultCallback.bind(null, undefined), 0);
    }
    if (num < 0) {
        setTimeout(resultCallback.bind(null, undefined), 0);
    }
    setTimeout(innerFactorial.bind(null, 1, num), 0);
}