//1
let num = 1;
while (num <= 10) {
    console.log(num);
    num += 1
}

//2
for (let i = 2; i <= 20; i += 1) {
    if (i % 2 !== 0) {
        continue
    }
    console.log(i)
}

//3
for (let a = 1; a <= 10; a++) {
    console.log(`7 * ${a} = ${7 * a}`);
}

//6
let n = 10;
for (let b = 1; b < 20; b++) {
    if (b >= n) {
        break
    }
    console.log(b)
}

//7
let number = 1;
while (number <= 20) {
    if (number % 3 !== 0) {
        continue
    }
    console.log(i)
}