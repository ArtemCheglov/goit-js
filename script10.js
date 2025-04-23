//1
const processArray = (array, callback) => {
    return callback(array);
};

const getSum = arr => arr.reduce((acc, curr) => acc + curr);
const getMin = arr => Math.min(...arr);
const getMax = arr => Math.max(...arr);

//2
const operate = (a, b, callback) => {
    return callback(a, b);
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;