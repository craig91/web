// function sayHello() { // this function clearly has a name
//     console.log("Hello");
// }

// sayHello();

// var sayBye = function () { // this function doesn't have a name. This is an anonymous function. 
//     // It's assigned to sayBye so we can reference it via sayBye but otherwise we cannot access this function.
//     console.log("Bye");
// }

// // sayBye();

// function sing(song) {
//     console.log(song);
// }
// sing("Laaa Dee Daaa");
// sing("Heloooooo");
// sing("Backstreets back alright");

// function multiply(a, b) {
//     return a * b;
// }


// // alert(multiply(3,4));


// var list = ["Tiger", "Cat", "Bear", "Bird"];


// const persons = [
//     {firstname: "Malcom", lastname: "Reynolds"},
//     {firstname: "Minami", lastname: "Tsunoda"},
//     {firstname: "Craig", lastname: "Dejean"}

// ];

// function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
// }

// persons.map(getFullName);


// // return orange from this arrray
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// console.log(array2[1][1]);


var user = {
    name: "John",
    age: 34,
    hobby: "soccer",
    isMarried: false,
    spells: ["abrakadabra", "shazam", "boo"],
    shout: function shout() { console.log("AHHHHH!")}
}

// // a function inside an object is called a method.
var list = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "jess",
        password: "123"
    }
]


var database = [{
    username: "craig",
    password: "1234"
},
{
    username: "sally",
    password: "123"
},
{
    username: "ingrid",
    password: "777"
}
];

var newsFeed = [
    {
        username: "Tim",
        timeline: "So tired from all of that learning"
    },
    {
        username: "sally",
        timeline: "JavaScript is soo cool"
    },
    {
        username: "mitch",
        timeline: "JavaScript is pretty cool"
    }
]

var usernamePrompt = prompt("What's your username? ");
var passwordPrompt = prompt("What's your password? ");
// console.log(usernamePrompt, passwordPrompt)

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}
function signIn(username, password) {

    if (isUserValid(username, password)) {
        console.log(newsFeed)
    } else {
        alert("Sorry wrong username and password!");
    }
}

// signIn(usernamePrompt, passwordPrompt);


// var todos = ["Clean Room", "Brush Teeth", "Exercise", "Study JavaScript", "Eat Healthy"];



for (let i = 0; i < todos.length; i++) {
  todos[i] = todos[i] += "!"
  console.log(i)
}

todos.forEach(function(i) {
  console.log(i)
});

var todosLength = todos.length; // = 5
for (let i = 0; i < todosLength; i++) {
  todos.pop()
}
// // console.log(todos)

var counterOne = 10;
while (counterOne > 0) {
  console.log(counterOne);
  counterOne--
}

var counterTwo = 10;
do {
  console.log(counterTwo)
  counterTwo--;
} while (counterTwo > 0)


// scope

//Root scope (window)

var fun = 5;
function funFunction() {
    // child scope
    var fun = 'hello';
    console.log(1, fun)
}

function funnerFunction() {
    // child scope
    var fun = "Bye";
    console.log(2, fun);
}

function funnestFunction() {
    // child scope
    fun = "AHHHHH";
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funnerFunction();
funnestFunction();



function q1() {
    var a = 5;
    if (a > 1) {
      a = 3
    }
    alert(a);
  }
  
  // q1();
  
  var a = 0;
  function q2() {
    a = 5;
  }
  function q22() {
    console.log(a);
  }
  
  //q2();
  //q22();
  
  
  
  function isUserValid(bool) {
    return bool;
  }
  var answer = isUserValid(true) ? "You may enter" : "Access Denied";
  
  // console.log(answer);
  
  var automatedAnswer = "You account # is " + (isUserValid(true) ? "1234" : "not available")
  
  function condition() {
    if (isUserValid(true)) {
      return "You may enter";
    } else {
      return "Access Denied";
    }
  }
  
  // console.log(automatedAnswer);
  // console.log(condition())
  
  function winBattle(bool) {
    return bool;
  }
  var experiencePoints = winBattle(false) ? "10" : "1"
  
  function experiencePoints() {
    if (winBattle()) {
      return 10;
    } else {
      return 1;
    }
  }
  
  // console.log(experiencePoints);
  
  
  function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
      case "forward":
        whatHappens = "You encounter a monster";
        break;
      case "back":
        whatHappens = "You arrived home";
        break;
      case "right":
        whatHappens = "You found a river";
        break;
      case "left":
        whatHappens = "You run into a troll";
        break;
      default:
        whatHappens = "Please enter a valid direction";
    }
    return whatHappens;
  }
  
  // console.log(moveCommand("forward"));
  // console.log(moveCommand("back"));
  // console.log(moveCommand("left"));
  // console.log(moveCommand("right"));
  // console.log(moveCommand("rubbish"));
  
  function word(vocab) {
    switch(vocab) {
      case 1:
        console.log("This");
        break;
      case 2:
        console.log("That");
        break;
      case 3:
        console.log("The");
        break;
      case 4:
        console.log("Other")
        break;
      default:
        console.log("Please put numbers 1 through 4");
    }
    return 0;
  }
  
  // word(1);
  // word(2);
  // word(3);
  // word(4);
  // word(10);

// template strings
const name = "sally";
const age = 34;
const pet = "horse";
const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet}`;


// default arguments

function greet(name = '', age=30, pet="cat") {
    return greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet}`;
}

// symbol
// let sym1 = Symbol();
// let sym2 = Symbol("foo");
// let sym3 = Symbol("foo");


// Closures

// the child scope always has access aka "remembers" what is in the parent scope. This does not work the other way around.
// In belows case, first() creates the variable greet = 'hi', then creates the child function/scope second() which calls the greet variable
// first DOES NOT have access to the scope of second() but second() has access to the scope of first().
const first = () => {
  const greet = 'hi';
  const second = () => {
    console.log(greet);
  }
  return second;
}
const newFunc = first();
newFunc();

 
// Currying
// this is the process of converting a function that takes multiple arguments into a function that takes each argument one at a time.
// *** This is a functional programming concept ***
const multiply = (a,b) => a * b;

// the multiply function above would run simply like this;
// multiply(3, 3) => 9


const curriedMultiply = (a) => (b) => a * b;

// currying is like having a function for each argument.
// so it would be like this: 

curriedMultiply(3); // would return (b) => a * b;
// Where is a? Since I ran curriedMultiply 3, a clearer picture would be this:
// const curriedMultiply = (3) => (b) => 3 * b;
// So what should I do next? this:
curriedMultiply(3)(4); // => 12
// so now the function looks like this:
// const curriedMultiply = (3) => (4) => 3 * 4; => 12
// the oldschool way to curry would look like this:
function multi(a) {
  return (b) => {
    return a * b;
  }
}

// a pretty useful example on how I would use currying is when i would want to 
// multiply numbers by a certain number, lets say 5

const multiplyBy5 = curriedMultiply(5);
multiplyBy5(4); // => 20
multiplyBy5(100); // => 500
multiplyBy5(2); // => 10

// Compose
// the act of putting 2 functions togther to form a third function where 
// the output of one function is the input of the other

const compose = (f, g) => (a) => f(g(a));
// f is a function
// g is also a function
const sum = (num) => num + 1;
// or (es5 used for references purposes)
// function sum2(num) {
//   return num + 1;
// }

compose(sum, sum)(5) 
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10); // => 16
// compose (f = +1, g = +5) => (a = 10) => +1(+5(10))

// So lets break this down.
// when I run compose(sum, sum)(5) lets look at the original compose function:
// const compose = (sum, sum) => (5) => sum(sum(5));
// f and g are replaced with sum 2 times, then a becomes 5
// the sum functon is the num plus one, so sum(sum(5)) sum(5) + 1 = 6 then sum(5) = 7


// Advanced Arrays
//const array = [1,2,10,16];
// const double = [];

// const newArray = array.forEach((num) => {
//   double.push(num * 2);
// }) 

// console.log(double);

// filter 

// const filterArray = array.filter(num => {
//  return num > 5
// })

// or

// const filterArray = array.filter(num => num > 5);
// console.log('filter', filterArray);

// const reduceArray = array.reduce((accumulator, num) => {
//   return accumulator + num;
// }, 5);

// console.log(reduceArray);

const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

const newUserArr = []
const exclamationArray = array.forEach((user) => {
  newUserArr.push(user.username + "!")
});
console.log(newUserArr)

const questionMarkMap = array.map((user) => {
  return user.username + "?";
})
console.log(questionMarkMap);

const redFilter = array.filter(affiliation => affiliation.team === "red");

console.log(redFilter);

const reduceTotalScore = array.reduce((acc, totScore) => {
  return acc + totScore.score;
},0)

console.log(reduceTotalScore);
//console.log(array.length)


const itemOwner = array.map((user) => {
  user.items = user.items.map(item => {
    return item + "!"
  })
  return user;
})

console.log(itemOwner)

class Player {
  constructor(name, type) {
      console.log('player',this)
      this.name = name;
      this.type = type;
  }
  introduce() {
      console.log(`Hi, I am ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
    console.log('wizard', this)
  }
  play() {
    console.log(`weee I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic')


let obj = { a: 'a',
            b: 'b', 
            c: {deep: "try and copy me"} 
          };
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = "hahaha";
console.log("Object.assign clone:", clone)
console.log("spread operator clone:", clone2)
console.log("original object:", obj)
console.log("super clone version to avoid shadow cloning:", superClone)

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this. type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type , color)
  }
  sound() {
    console.log(`I am a cow and my name is ${this.name}, my type is ${this.type}, and my color is ${this.color}, nice to meet you`);
  }
}

const cow1 = new Mamal("Carla", "Milk Cow", "Brown");
