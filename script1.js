let age = '15';
console.log(age);
let name = 'Artem';
console.log(name);
let isStudent = 'true';
console.log(isStudent);
const myString = 'чем ближе крах империи, тем безумнее ее законы/черт побери какой же я красавчик';
console.log(myString);
const myNumber = 5;
console.log(myNumber + 10);
const myNull = null;
console.log(myNull);
let userName = prompt("Пж введи имя");
console.log(userName);
let isConfirm = confirm(`Привет ${userName}`);
let isConfirmed = confirm("Ви підтверджуєте дію?");
if (isConfirmed) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}
alert(`Увага! Ця дія може бути небезпечною.`);
let isConfirming = confirm("Ви підтверджуєте дію?");
if (isConfirming) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}