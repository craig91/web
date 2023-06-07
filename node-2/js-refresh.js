const name = 'Craig';
let age = 31;
const hasHobbies = true;


age = 30;

// function summarizeUser(userName, userAge, userHasHobby) {
//     return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
// }

const summarizeUser = (userName, userAge, userHasHobby) => {
    return 'Name is ' + 
    userName + ', age is ' + 
    userAge + ' and the user has hobbies: ' 
    + userHasHobby;
}

const add = (a,b) => a + b;

const addOne = (c) => c + 1;

const addRandom = () => 1 + 2;

console.log(addRandom())
console.log(add(1,2));
console.log(addOne(1));

console.log(summarizeUser(name, age, hasHobbies));






