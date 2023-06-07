const person = {
    name: 'Craig',
    age: 31,
    greet() {
        console.log(
            'Hi, I am ' + this.name
        )
    }
};

// const printName = (personData) => {
//     console.log(personData.name);
// }
// printName(person);

// Object Destructuring (you pull out by propery name, you don't need to do this with arrays)

const printName = ({name}) => {
    console.log(name);
}

printName(person);

const { name, age } = person;
console.log(name, age)

// Array destructuring
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies
console.log(hobby1, hobby2);