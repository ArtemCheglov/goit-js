//1
let field1;
let field2;

if (field1 && field2) {
    alert("Обидва поля заповнені")
} else {
    alert("Не всі поля заповнені")
}

//2
let num1;
let num2;

if (num1 + num2 > 10) {
    alert("Сума більша за 10")
} else {
    alert("Сума менша або дорівнює 10")
}

//3
let text;

if (text.includes("JavaScript")) {
    alert("Текст містить слово JavaScript")
} else {
    alert("Текст не містить слово JavaScript")
}

//4
let number;

if (number > 10 && number < 20) {
    alert("Текст містить слово JavaScript")
} else {
    alert("Текст не містить слово JavaScript")
}

//5
let name;
let email;
let password;

if (name.length >= 3 && email.includes("@") && password.length >= 6) {
    //страница
} else {
    alert("Ошибка: проверте правильность заполнення полей!");
}