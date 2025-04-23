//1
const numbers = [1, 2, 3]
numbers[1] = 10;
console.log(numbers);

//2
const fruits = ["apple ", "plum", "pear"]
fruits.push("orange");
console.log(fruits);

//3
const nums = [2, 4, 6]
let total = 0;
for (const num of nums) {
    total = total + num;
}
console.log(total);

//4
let fiveNumbers = [1, 2, 3, 4, 5]
for (let i = 0; i < fiveNumbers.length; i++) {
    console.log(fiveNumbers[i]);
}

//5
const fiveStrings = ["кот", "автомобиль", "дерево", "солнце", "телефон"]
for (const fiveString of fiveStrings) {
    if (fiveString.length > 5) {
        console.log(fiveString)
    }
}

//6
const tenNumbers = [51, 18, 13, 24, 7, 85, 19, 45, 54, 76]
let maxNumber = Math.max(...tenNumbers);
console.log(maxNumber);

//7
const tenNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i <= tenNumbers1.length; i++) {
    if (i % 2 !== 0) {
        continue
    }
    console.log(tenNumbers1[i]);
}