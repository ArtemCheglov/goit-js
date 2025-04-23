//1
const drink = prompt("что хотите выпить?");
let message;

switch (drink) {
    case "Кава":
        message = "прекрастный выбор!";
        break;

    case "Чай":
        message = "прекрастный выбор!";
        break;

    case "Сік":
        message = "прекрастный выбор!";
        break;

    default:
        message = "такого нет!";
}
console.log(message)

//2
const day = prompt("какой сегодня день?");
let message1;

switch (day) {
    case "понедельник":
    case "вторник":
    case "среда":
    case "четверг":
    case "пятница":
        message1 = "это робочий день!";
        break;

    case "суббота":
    case "воскрксение":
        message1 = "это выходной день!";
        break;

    default:
        message1 = "такого дня нет!";
}
console.log(message1)

//3
const month = prompt("какой сейчас месяц?");
let message2;

switch (month) {
    case "12":
    case "01":
    case "02":
        message2 = "сейчас зима!";
        break;

    case "03":
    case "04":
    case "05":
        message2 = "сейчас весна!";
        break;

    case "06":
    case "07":
    case "08":
        message2 = "сейчас лето!";
        break;

    case "09":
    case "10":
    case "11":
        message2 = "сейчас осень!";
        break;

    default:
        message2 = "такого месяца нет!";
}
console.log(message2)

//4
const color = prompt("какой сейчас цвет?");
let message3;

switch (color) {
    case "червоний":
        message3 = "стоп!";
        break;

    case "жовтий":
        message3 = "чекайти!";
        break;

    case "зелений":
        message3 = "можете йти!";
        break;

    default:
        message3 = "такого цвета нет!";
}
console.log(message3)