const person = {
    name: 'Minami',
    age: 35,
    greet()  {
        console.log("Hi, I am " + this.name)
    }
}

// person.greet();

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby)
}

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

const copiedArray = [...hobbies]
console.log(copiedArray)

const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,4));

