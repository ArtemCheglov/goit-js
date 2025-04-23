//1
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

//Через for
for (let i = 0; i < friends.length; i++) {
    string += friends[i];
    if (i < friends.length - 1) {
        string += ',';
    }
}
console.log(string);

// Через join()
const joinedString = friends.join(',');
console.log(joinedString);

//2
let cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];

//3
const cardToRemove = 'Карточка-3';
const indexToRemove = cards.indexOf(cardToRemove);
if (indexToRemove !== -1) {
    cards.splice(indexToRemove, 1);
}
console.log(cards);

//4
const cardToInsert = 'Карточка-6';
cards.splice(2, 0, cardToInsert);
console.log(cards);

//5
const cardToUpdate = 'Карточка-4';
const indexToUpdate = cards.indexOf(cardToUpdate);
if (indexToUpdate !== -1) {
    cards[indexToUpdate] = 'Обновленная Карточка-4';
}
console.log(cards);