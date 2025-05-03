//const productName = "Droid";
//const pricePerItem = "2000";

//const productNames = "Repair droid";
//const pricePerItems = "3500";

//console.log(productName);
//console.log(pricePerItem);

//const topSpeed = 160;
//const distance = 617.54;
//const login = "mango935";
//const isOnline = true;
//const isAdmin = false;

//const pricePerItem = 1500;
//const orderedQuantity = 5;
//const totalPrice = pricePerItem + orderedQuantity;
//console.log(totalPrice);

//const productName = "Droid";
//const pricePerItem = 4000;
//const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
//console.log(message);

//const c = 25;
//const d = 30;
//const result = c + d;
//console.log(result);

//const name = "Artem";
//const secondname = "Chehlov";
//const fullname = `${name} ${secondname}`;
//console.log(fullname);
//console.log(fullname.charAt());
//console.log(fullname.indexO(''));

//Використовуючи конструкцію if ..else, напишіть код, 
//що запитує: ‘Яка“ офіційна” назва JavaScript ? ’Якщо відвідувач вводить“ ECMAScript”, 
//виведіть“ Правильно!”, в іншому випадку— виведіть : “Ви не знаєте ? ECMAScript!”

//let question = prompt("Яка офіційна назва JavaScript?").toLowerCase()
//if (question === "ecmascript") {
//alert("Правильно!")
//} else {
//alert("Ви не знаєте ? ECMAScript!")
//}


//Використовуючи if ..else, напишіть код,
//що отримує число з інпуту і потім виводить повідомлення на екран:
//1, якщо значення більше нуля, -1, якщо меньше нуля, 0, якщо дорівнює нулю.

// const result = Number(prompt("Введить чесло!"))
// console.log(typeof result);

// if (result > 0) {
//     alert("Значення більше 0.")
// } else if (result < 0) {
//     alert("Значення менше 0.")
// } else
// if (result === 0) {
//     alert("Значення дорівнює 0.")
// } else {
//     alert("Введіть коректне число!!!")
// }


//Перепишіть конструкцію
//if, використовуючи умовний оператор '?':
// let result;
// if (a + b < 4) {
//     result = 'Нижче';
// } else {
//     result = 'Вище';
// }

// const a = 3;
// const b = 2;
// let result = a + b < 4 ? 'Нижче' : 'Вище'
// console.log(result);


// напиши скрипт входження числа у відрізок зазначений в х1 та х2.
// до х1
// після х1
// від х1 до х2
// до х1 або після х2
// const x1 = 10;
// const x2 = 30;
// const number = 45;


// const x1 = 10;
// const x2 = 30;
// const number = 45;
// if (number < x1) {
//     console.log("До х1")
// } else if (number > x1) {
//     console.log("після х1")
// } else if (number > x1 && number < x2) {
//     console.log("від х1 до х2")
// } else if (number > x1 || number > x2) {
//     console.log("до х1 або після х2")
// } else {
//     console.log("введите коректно значение");
// }


// Напиши скрипт який перевіряє можливість
// відкрити чат з користувачем.Для цього
// користувач має бути: другом онлайн без
// режиму не турбувати


// const isOnline = false;
// const isOnline = true;
// const isDnd = false;

// if (isOnline && isOnline && isDnd) {
//     console.log("чат открыт");
// } else {
//     console.log("друг занят");
// }

// Напишіть код з використанням
// switch, що відповідає наступній конструкції
// if ..else.Результат виведіть на екран

// const title = document.querySelector(".title");

// let browser = "Firefox";

// if (browser == 'Edge') {
//     title.textContent = "You've got the Edge!";
// } else
// if (browser == 'Chrome' ||
//     browser == 'Firefox' ||
//     browser == 'Safari' ||
//     browser == 'Opera') {
//     title.textContent = 'Ми підтримуємо і ці браузери';
// } else {
//     title.textContent = 'Маємо надію, що ця сторінка виглядає добре!';
// }

// switch (browser) {
//     case 'Edge':
//         title.textContent = "You've got the Edge!";
//         breake;

//     case 'Chrome':
//         title.textContent = "You've got the Chrome!";
//         breake;


//     case 'Firefox':
//         title.textContent = "You've got the Firefox!";
//         breake;


//     case 'Safari':
//         title.textContent = "You've got the Safari!";
//         breake;


//     case 'Opera':
//         title.textContent = "You've got the Opera!";
//         breake;


//     default:
//         title.textContent = 'Маємо надію, що ця сторінка виглядає добре!';
// }

// Напиши скрипт вибору готеля по кількості зірок
// 1 - 20 $, 2 - 30 $, 3 - 40 $, 4 - 70 $, 5 - 120 $
// Якщо у змінній stars, крім чисел 1 - 5, є щось інше
// вивести в консоль "Такої кiлькості зірок немає"

// const stars = 2;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;

//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 40;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;

//     default:
//         alert('Такої кiлькості зірок немає')
// }

// напиши скрипт вибору опції доставки товару.Опція
// зберігається у змінній option: 1 - самовивіз, 2 - кур 'єр,
// 3 - пошта.У змінну message записати повідомлення в 
// залежності від опції - "Ви зможете забрати товар завтра
// з 12:00 в нашому офісі" - "Кур'єр доставить замовлення
// завтра з 9:00 до 12:00" - "Посилка буде відправлена 
// сьогодні" - "З Вами зв'яжеться менеджер"

// const option = "самовивіз";
// let massage = "";

// switch (option) {
//     case "самовивіз":
//         massage = "Ви зможете забрати товар завтра з 12: 00 в нашому офісі ";
//         break;

//     case "кур 'єр":
//         massage = "Кур'єр доставить замовлення завтра з 9:00 до 12:00";
//         break;

//     case "пошта":
//         massage = "Посилка буде відправлена сьогодні";
//         break;

//     default:
//         massage = "З Вами зв'яжеться менеджер";
// }
// console.log(massage)

// Перепишіть конструкцію
// if, використовуючи умовний оператор '?':
// let result;
// if (a + b < 4) {
//     result = 'Нижче';
// } else {
//     result = 'Вище';
// }
//let result = a + b < 4 ? 'Нижче' : 'Вище'

// Змінна lang може приймати 4 значення: 'ua', 'en', 'it', 'fr'.За допомогою конструкції
// switch виведи на екран назву місяця в залежності від обраної мови.Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".
// const lang = 'ua', 'en', 'it', 'fr';
// let month;
// switch (lang) {
//     case 'ua':
//         month = "лютий";
//         break;

//     case 'en':
//         month = "january";
//         break;

//     case 'it':
//         month = "Gennaio";
//         break;

//     case 'fr':
//         month = "Janvier";
//         break;

//     default:
//         month = "There no such language";
// }
// console.log(month)

// Написати програму яка перевіряє чи введене число через
// input потрапляє в діапазон від 55 до 99 включно.Якщо
// так, вивести на екран "Число потрапляє в діапазон".
// Якщо ні, вивести "Число не потрапляє в діапазон".

// const a = prompt("Введите число");
// if () {
//     console.log("Число потрапляє в діапазон")
// } else {
//     console.log("Число не потрапляє в діапазон")
// }

//Вивести в консоль числа від 1 до 5 всіма циклами
// let num = 1
// while (num <= 5) {
//     console.log(num);
//     num += 1
// }

// do {
//     console.log(num);
//     num += 1;
// } while (num <= 5);

// for (let i = 1; i <= 5; i += 1) {
//     console.log(i);
// }

// for (let number = 0; number < 5;) {
//     console.log(`Число ${number}`);
// }
// let number = 0;

// while (number <= 5) {
//     console.log(`Число ${number}`)
//     number += 1
// }

// Написати скрипт який буде перевіряти
// середній бал успішності учня.Прервати
// роботу циклу, коли середній бал буде
// меньше 7

// let num = 10;

// while (num >= 7) {
//     console.log(num);
//     num -= 1
// }

// for (let i = 10; i >= 7; i -= 1) {
//     console.log(i);
// }

// for (let i = 1; i <= 20; i += 1) {
//     if (i % 2 !== 0) {
//         continue
//     }
//     console.log(i)
// }

// 1.Оголоси змінну fruits і присвой їй 
// масив фруктів - рядків "apple", 
// "plum", "pear" і "orange".

// const fruits = ["apple ", "plum", "pear", "orange"]

// 2.firstElement перший елемент масиву secondElement другий
// елемент масиву lastElement останній елемент масиву

// const firstElement = fruits[0]
// console.log(firstElement);
// const secondElement = fruits[1]
// console.log(secondElement);
// const lastElement = fruits[3]
// console.log(lastElement);

// console.log(fruits.length - 1);

// 3.Виконай перевизначення значення елементів з індексами 1 
// і 3. Заміни "plum" на "peach", а "orange" на "banana".

// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits)

// 4.Оголоси змінну fruitsArrayLength і присвой їй довжину
// масиву fruits, використовуючи властивість length.

// let fruitsArrayLenght = fruits.length;

// 5.lastElementIndex Індекс останнього елемента масиву 
// fruits через довжина.масиву - 1 lastElement Значення
// останнього елемента масиву

// let lastElementIndex = fruits.length - 1;
// let lastElement = fruits[lastElementIndex];

// Доповни цикл for таким чином, щоб він логував всі цілі
// числа в діапазоні від start до end включно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i++) {
//     console.log(i)
// }

// for (let i = 0; i <= fruits.length - 1; i++) {
//     console.log(fruits[i]);
// }

// console.log("//")
// for (const fruit of fruits) {
//     console.log(fruit);
// }

// Порахувати загальну суму покупок в корзині

// const carts = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const cart of carts) {
//     // console.log(cart);
//     total = total + cart;
// }
// console.log(total);

// const cartsLenght = carts.length;
// console.log(cartsLenght);

// console.log(carts[cartsLenght]);

// carts[cartsLenght] = 22;

// console.log(carts);

// Напиши скрипт пошуку самого маленького числа в масиві,
// при умові, що числа унікальні(не повторюються).

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = Math.min(...numbers);
// console.log(smallestNumber);
// let smallestNumber = numbers[0]
// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number
//     }
// }
// console.log(`The smallest number is: ${smallestNumber}`);

// Створити масив із п 'яти чисел. 
// Використовуючи метод push(), додати
//  до масиву ще один елемент.

// let fiveNumbers = [1, 21, 15, 67, 83]
// fiveNumbers.push(32);
// console.log(fiveNumbers);

// Створити масив із трьох стрічок.
// Використовуючи метод pop(), видалити
// з масиву останній елемент.

// const words = ["ananas", "banan", "jabloko"]
// words.pop();
// console.log(words);

// Створити масив із десяти чисел.
// Використовуючи метод slice(), 
// створити новий масив, який буде 
// містити перші п 'ять елементів.

// const numbers = [27, 87, 45, 65, 67, 90, 95, 43, 23, 12];
// const deleteNambers = numbers.slice(0, 5)
// console.log(deleteNambers);

// Створити масив із п 'яти чисел. 
// Використовуючи метод indexOf(), 
// знайти індекс елемента зі значенням 3.

// let numbers = [27, 64, 892, 93, 3]
// const indexNambers = numbers.indexOf(3)
// console.log(indexNambers);

// Створити масив із п 'яти стрічок.
// Використовуючи метод join(), 
// створити одну стрічку, яка буде
// містити всі елементи масиву,
// розділені комою.

// const fiveString = ["ananas", "banan", "grusha", "jabloko"]
// const joined = fiveString.join("-")
// console.log(joined);

// Робимо slug в URL з назви статті.
// Заголовок статті складається тільки
// з букв та пропусків -
//     Нормалізуємо рядок -
//     Разбиваємо по словах -
//     Зшиваємо в рядок з розділителями -
//     Ченінг
// Повинно вийти top-10-benefits-of-react-framework.

// const title = 'Top 10 benefits of React framework';
// const titlenorm = title.toLowerCase().split(" ").join("-")
// console.log(titlenorm);

// function checkAge(age) {
//     if (age = 18) {
//         return ("You are an adult")
//     }
//     return "You are a minor"
// }

// console.log(checkAge(15));

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line

//     let message;

//     if (password === ADMIN_PASSWORD) {
//         message = "Welcome!";
//     }

//     return "Access denied, wrong password!";
//     // Change code above this line
// }

// const result = checkPassword("jqueryismyjam");
// console.log(result);

// function checkStorage(available, ordered) {
//     // Change code below this line
//     let message;

//     if (ordered === 0) {
//         return "Your order is empty!";
//     }
//     if (ordered > available) {
//         return "Your order is too large, not enough goods in stock!";
//     }
//     return "The order is accepted, our manager will contact you";

//     // Change code above this line
// }

// const result = checkStorage(5, 4);
// console.log(result);

// Напиши функцію яка повертає буль як результат перевірки числа на парність:
// function isEven(num) {
//     if (num % 2 === 0) {
//         return true
//     }
//     return false
// }
// console.log(isEven(4)); // true
// console.log(isEven(3)); // false
// У цій функції ми перевіряємо, чи є передане число парним, повертаючи true якщо так, та false у протилежному випадку.

// function changeCase(word) {
//     const arr1 = word.split("");
//     let result = "";
//     for (const el of arr1) {
//         if (el === el.toLowerCase()) {
//             result += el.toUpperCase();
//         } else {
//             result += el.toLowerCase();
//         }
//     }
//     return result;
// }

// console.log(changeCase("qweRTY")); // QWErty

// Напишіть функцію, яка приймає на вхід
// масив чисел і повертає новий масив, в
// якому кожний елемент є квадратом
// відповідного елементу вхідного масиву.

// const arr = [1, 2, 5]
// const squareNambers = (arr) => {
//     const newArr = [];
//     for (const num of arr) {
//         newArr.push(num * num)
//     }
//     return newArr
// }

// console.log(squareNambers)

// Знайдіть суму елементів масиву з
// використанням колбек - функції

// const arr = [1, 2, 3, 4, 5];

// function sumArray(arr, callback) {
//     let sum = 0
//     for (const num of arr) {
//         sum += num
//     }
//     callback(sum)
// }

// function cb(result) {
//     console.log(`Сумма елементов масива ${result}`);
// }

// sumArray(arr, cb);

// Створіть об'єкт "person" з властивостями
// "name", "age", "gender". Додайте до 
// об'єкту метод, який буде виводити на 
// екран повідомлення про особистість зі 
// значеннями всіх властивостей.

// const person = {
//     name: 'Artem ',
//     age: 15,
//     gender: "male",
//     getInfo() {
//         console.log(`Меня зовут ${this.name}, мне ${this.age} лет, мой гендер ${this.gender}`);
//     }
// }

// Створіть масив об'єктів "students", 
// де кожен об'єкт буде містити 
// властивості "name", "age", "gender" та 
// "grade". Напишіть функцію, яка приймає 
// масив об'єктів "students" і повертає 
// середній бал групи.

// const students = [
//     {
//         name: 'Mango',
//         age: 15,
//         gender: "male",
//         grade: 8,
//     },
//     {
//         name: 'Poly',
//         age: 16,
//         gender: "male",
//         grade: 9,
//     },
//     {
//         name: 'Ajax',
//         age: 17,
//         gender: "femele",
//         grade: 7,
//     }
// ]

// function averageGrades(students) {
//     let result = 0;
//     let total = 0;
//     for (const student of students) {
//         result += student.grade
//     }
//     total = result / students.length
//     return total;
// }

// console.log(averageGrades(students));

// Присвой змінній apartment об 'єкт, 
// який описує квартиру з наступними 
// характеристиками:
// imgUrl - фотографія,
// значення "https://via.placeholder.com/640x480";
// descr - опис, значення 
// "Spacious apartment in the city center";
// rating - рейтинг, значення 4;
// price - ціна, значення 2153;
// tags - метаінформація, масив["premium", 
// "promoted", "top"].
// Доповни об 'єкт квартири властивістю 
// owner, значенням якого буде об'єкт
// з інформацією про власника.Додай йому 
// наступні властивості:
// name - ім 'я власника, значення "Henry";
// phone - телефон, значення "982-126-1588";
// email - пошта, значення "henry.carter@aptmail.com".
// Доповни код, присвоївши оголошеним 
// змінним вирази звернення до відповідних 
// властивостей об 'єкта apartment.
// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// Доповни код, присвоївши оголошеним 
// змінним вирази звернення до відповідних
//  властивостей об 'єкта apartment.
// ownerName - ім 'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів 
// масиву у властивості tags;
// firstTag - перший елемент масиву у 
// властивості tags;
// lastTag - останній елемент масиву у 
// властивості tags.
// Доповни код, оновивши значення 
// властивостей об 'єкта apartment:
// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім 'я власника у вкладеній властивості 
// name на "Henry Sibola";
// масив тегів у властивості tags, додавши
// в кінець рядок "trusted".
// Додай об 'єкту apartment кілька нових властивостей:
// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири,
// об 'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     }
// }

// apartment.price = 5000
// apartment.rating = 4.7
// apartment.owner.name = "Henry Sibola"
// apartment.tags.puch("trusted")
// apartment.area = 60
// apartment.rooms = 3
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// }
// console.log(apartment)

// const aptRating = apartment.rating
// const aptDescr = apartment.descr
// const aptPrice = apartment.price
// const aptTags = apartment.tags
// const ownerName = apartment.owner.name
// const ownerPhone = apartment.owner.phone
// const ownerEmail = apartment.owner.email
// const numberOfTags = apartment.tags.length
// const firstTag = apartment.tags[0]
// const lastTag = apartment.tags[numberOfTags - 1]

// console.log(aptPrice)

// Створіть об 'єкт "book" з властивостями
// "title", "author", "year" та "genre". 
// Додайте до об'єкту метод, який дозволить
// змінювати значення властивостей.

// const book = {
//     title: "wheb i die, bury me",
//     author: "Taras Shevchenko",
//     year: "1845",
//     genre: "verse",

//     updateBook(newTitle, newAuthor, newYear, newGenre) {
//         this.title = newTitle;
//         this.author = newAuthor;
//         this.year = newYear;
//         this.genre = newGenre;
//     }
// }

// book.updateBook("Wings", "Lina Kostenko", 1958, "verse")
// console.log(book);

// Створіть об 'єкт "restaurant" з 
// властивостями "name", "cuisine", 
// "address" та "rating".Додайте до об'єкту
// метод, який дозволить змінювати 
// значення властивостей "address" та "rating"

// const restaurant = {
//     name: "Kitayka",
//     cuisine: "chinese",
//     address: "Kyiv, Lesya Ukrainka",
//     raiting: 5,

//     updateRestaurant() {
//         this.address = "jdvnjvd"
//         this.raiting = "dsjnjfd"
//     }
// }
// console.log(restaurant);

// Написати функція яка буде отримувати масив та ім’ я друга
// якого потрібно знайти.

// const findFriendByName = (arr, name) => {
//     for (const element of arr) {
//         if (element.name === name) {
//             return `We found ${name}`
//         }
//     }
//     return `We unfortunately didnt find ${name}`
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// Написати функцію яка буде повертати масив всіх імен друзів.

// const getAllNames = (array) => {
//     const names = []
//     for (const element of array) {
//         console.log(element.name);
//         names.push(element.name)
//     }
//     return names
// }

// console.log(getAllNames(friends));

// Написати функцію яка буде повертати масив імен друзів які онлайн.

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
// ];

// const getOnlineFriends = (array) => {
//     const namesOnline = []
//     for (const element of array) {
//         // console.log(element.online);
//         if (element.online) {
//             namesOnline.push(element.name)
//         }
//     }
//     return namesOnline
// }

// console.log(getOnlineFriends(friends));

// const user = {
//     name: 'Jonh',
//     age: 30,
//     email: 'jonh@example.com'
// };
// const { name, age, email } = user;

// Отримати масив імен всіх гравців.
// const playersNames = players.map((player) => player.name);
// console.log(playersNames);

// Отримати масив всіх гравців онлайн.
// const playersOnline = players.filter((player) => player.online);
// console.log(playersOnline);

// Збільшити кількість поінтів кожного гравця на 10% 
// (розпорошуємо старий об 'єкт).
// const pointsUpdate = players.map((player) => {
//     return {
//         ...player,
//         points: Math.round(player.points * 1.1)
//     }
// })
// console.log(pointsUpdate);

// // Знайти гравця по імені.
// const findPlayer = players.find((player) => player.name === "Kiwi");
// console.log(findPlayer);

// function findPlayerByName(arr, name) {
//     return arr.find(player => player.name === name)
// }
// console.log(findPlayerByName(players, "Ajax"));

// Збільшити кількість годин гравця по id.
// function increasePlayerTime(arr, id, time) {
//     return arr.map((el) => {
//         if (id === el.id) {
//             return {
//                 ...el,
//                 timePlayed: el.timePlayed + time
//             }
//         }
//         return el
//     })
// }

// console.log(increasePlayerTime(players, 'player-1', 1000));

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// Перевірити чи всі гравці мають час більше 200

// const playersAbove200 = players.every((player) => player.timePlayed > 200);
// console.log(playersAbove200);

// Отримати масив всіх хардкорних гравців з часом більше 250

// const playersAbove250 = players.filter((player) => player.timePlayed > 250);
// console.log(playersAbove250);

// function getNames(players) {
//     return players.map((player) => players.name);
// };
// console.log(getNames(players));