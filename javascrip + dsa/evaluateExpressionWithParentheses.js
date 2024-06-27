// Given a valid math expression, evaluate it and return the result.
// The expression doesn’t include parentheses and only use binary operators: +, -, *, /

// Example input: 3+6∗5−1/2.5
// Expected output: 32.6

let arr = [3, '+', 6, '*', 5, '-', 1, '/', 2.5];
function evaluateExpressionWithParentheses(arr) {
    // First pass: Handle division and multiplication
    let intermediate = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '/') {
            let prev = intermediate.pop();
            let next = arr[++i];
            intermediate.push(prev / next);
        } else if (arr[i] === '*') {
            let prev = intermediate.pop();
            let next = arr[++i];
            intermediate.push(prev * next);
        } else {
            intermediate.push(arr[i]);
        }
    }

    // Second pass: Handle addition and subtraction
    let res = intermediate[0];
    for (let i = 1; i < intermediate.length; i += 2) {
        let operator = intermediate[i];
        let operand = intermediate[i + 1];
        switch (operator) {
            case '+':
                res += operand;
                break;
            case '-':
                res -= operand;
                break;
            default:
                break;
        }
    }

    return res;
}

// Example usage:
// let arr = [3, '+', 6, '*', 5, '-', 1, '/', 2.5];
console.log("Expression:", arr.join(' '));
console.log("Result:", evaluateExpressionWithParentheses(arr)); // Output: 32.6
