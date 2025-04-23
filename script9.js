//1
const array = ['Mango', 'Poly', 'Ajax'];
logItems(array);

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

//2
function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" ");
    return words.length * pricePerWord;
}
console.log(calculateEngravingPrice("привет", 10));

//3
const string = "я вчера покушал";

function findLongestWord(string) {
    const words = string.split(" ");
    let longestWord = "";
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord(string));

//4
function formatString(string) {
    return string.length <= 40 ? string : string.slice(0, 40) + '...';
}

//5
const message = "This is a spam message";

function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}
console.log(checkForSpam(message));

//6
function getNumbersSum() {
    let input;
    const numbers = [];
    let total = 0;
    while (true) {
        input = prompt("Введіть число");
        if (input === null) break;
        if (isNaN(input)) {
            alert("Було введено не число, спробуйте ще раз");
            continue;
        }
        numbers.push(Number(input));
    }
    for (const number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
}