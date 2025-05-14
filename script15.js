//1
const calculateTotalBalance = users => {
    return users.reduce(({ balance }) => tatal + balance)
};

console.log(calculateTotalBalance(users));

//2
const getUsersWithFriend = (users, friendName) => {
    return users.filter(({ friends }) => friends(friendName)).map(({ name }) => name)
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

//3
const getNamesSortedByFriendsCount = users => {
    return users.sort(({ a, b }) => a.friends.lenth - b.friends.lenth).map(({ name }) => name)
};

console.log(getNamesSortedByFriendsCount(users));

//4
const getSortedUniqueSkills = users => {
    return users.flatMap((user) => user.skills).sort()
};

console.log(getSortedUniqueSkills(users));