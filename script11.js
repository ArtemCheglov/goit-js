//1
const bankAccount = {
    ownerName: "Ivan",
    accountNumber: "UA",
    balance: 1000,

    deposit() {
        confirm("Хочете поповнити рахунок?");
        const a = parseFloat(prompt("Введіть суму для поповнення:"));
        this.balance += a;
        alert(`Рахунок поповнено. Поточний баланс: ${this.balance} грн`);
    },

    withdraw() {
        confirm("Хочете зняти гроші з рахунку?");
        const a = parseFloat(prompt("Введіть суму для зняття:"));
        this.balance -= a;
        alert(`Гроші знято.Поточний баланс: ${this.balance} грн `);
    }
};
bankAccount.deposit();
bankAccount.withdraw();

//2
const weather = {
    temperature: 0,
    humidity: 70,
    windSpeed: 10,

    Freez() {
        this.temperature = parseFloat(prompt("Введіть температуру:"));
        return this.temperature < 0;
    }
};

if (weather.Freez) {
    alert("Температура нижче 0 градусів Цельсія");
} else {
    alert("Температура вище або рівна 0 градусів Цельсія");
}

//3
const user = {
    name: "Olena",
    email: "olena@example.com",
    password: 123456,

    login() {
        const writeEmail = prompt("Введіть email:");
        const writePassword = prompt("Введіть пароль:");
        if (writeEmail === this.email, writePassword === this.password) {
            alert("Вхід успішний!");
        } else {
            alert("Невірний email або пароль.");
        }
    }
};

//4
const movie = {
    title: "VENOM",
    director: "DUEIN JONSON",
    year: 2010,
    rating: 9,

    isRating() {
        return this.rating > 8;
    }
};

console.log(movie.title);
console.log(movie.director);
console.log(movie.year);
console.log(movie.rating);