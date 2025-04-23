//1
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = 'false';

for (const key of Object.keys(user)) {
    console.log(`${key}:${user[key]}`);
}

const { name, age, hobby, premium, mood } = user;

function countProps(obj) {
    return Object.entries(obj).length;
}

console.log(countProps({}));
console.log(countProps({ name1: 'Mango', age1: 2 }));
console.log(countProps({ email: 'poly@email.com', isOnline: true, score: 500 }));

const { name1, age1, email, isOnline, score } = countProps;

function findBestEmployee(employees) {
    let bestEmployee = "";
    let tasks = 0;

    for (const employee of Object.entries(employees)) {
        if (employee[1] > tasks) {
            employee[1] = tasks;
            bestEmployee = employee[0];
        }
    }

    return bestEmployee;
}

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
);

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
        stas: 5,
    }),
);

console.log(
    findBestEmployee({
        lux: 147,
        borya: 21,
        kiwi: 19,
        chelsy: 38,
    }),
);

const { ann, david, helen, lorence, poly, mango, ajax, stas, lux, borya, kiwi, chelsy } = findBestEmployee;

function countTotalSalary(employees) {
    let total = 0;
    const salary = Object.values(employees);
    for (let i = 0; i < salary.length; i++) {
        total += salary[i];
    }
    return total;
}

console.log(
    countTotalSalary({
        bet: 100,
        man: 150,
        alfred: 80,
    }),
);

console.log(
    countTotalSalary({
        girl: 200,
        zloy: 50,
        evelon: 150,
    }),
);

const { bet, man, alfred, girl, zloy, evelon } = countTotalSalary;

function getAllPropValues(arr, prop) {
    const values = [];
    for (const item of arr) {
        values.push(item[prop])
    }
    return values;
}

const products1 = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'дроид', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products1, 'name'));
console.log(getAllPropValues(products1, 'price'));
console.log(getAllPropValues(products1, 'quantity'));

function calculateTotalPrice(allProducts, productName) {
    for (const product of allProducts) {
        if (product.name === productName) {
            return product.price * product.quantity;
        }
    }
}

const products = [
    { name2: 'Радар', price: 1300, quantity: 4 },
    { name2: 'Сканер', price: 2700, quantity: 3 },
    { name2: 'дроид', price: 400, quantity: 7 },
    { name2: 'Захоплення', price: 1200, quantity: 2 },
];

const { name2, price, quantity } = products;

console.log(calculateTotalPrice(products, 'Радар'));
console.log(calculateTotalPrice(products, 'Сканер'));
console.log(calculateTotalPrice(products, 'дроид'));
console.log(calculateTotalPrice(products, 'Захоплення'));