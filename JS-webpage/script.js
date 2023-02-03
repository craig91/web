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


// var user = {
//     name: "John",
//     age: 34,
//     hobby: "soccer",
//     isMarried: false,
//     spells: ["abrakadabra", "shazam", "boo"],
//     shout: function shout() { console.log("AHHHHH!")}
// }

// // a function inside an object is called a method.
// var list = [
//     {
//         username: "andy",
//         password: "secret"
//     },
//     {
//         username: "jess",
//         password: "123"
//     }
// ]


// var database = [{
//     username: "craig",
//     password: "1234"
// },
// {
//     username: "sally",
//     password: "123"
// },
// {
//     username: "ingrid",
//     password: "777"
// }
// ];

// var newsFeed = [
//     {
//         username: "Tim",
//         timeline: "So tired from all of that learning"
//     },
//     {
//         username: "sally",
//         timeline: "JavaScript is soo cool"
//     },
//     {
//         username: "mitch",
//         timeline: "JavaScript is pretty cool"
//     }
// ]

// var usernamePrompt = prompt("What's your username? ");
// var passwordPrompt = prompt("What's your password? ");
// // console.log(usernamePrompt, passwordPrompt)

// function isUserValid(username, password) {
//     for (var i = 0; i < database.length; i++) {
//         if (database[i].username === username && database[i].password === password) {
//             return true;
//         }
//     }
//     return false;
// }
// function signIn(username, password) {

//     if (isUserValid(username, password)) {
//         console.log(newsFeed)
//     } else {
//         alert("Sorry wrong username and password!");
//     }
// }

// signIn(usernamePrompt, passwordPrompt);


// var todos = ["Clean Room", "Brush Teeth", "Exercise", "Study JavaScript", "Eat Healthy"];



// for (let i = 0; i < todos.length; i++) {
//   todos[i] = todos[i] += "!"
//   console.log(i)
// }

// todos.forEach(function(i) {
//   console.log(i)
// });

// var todosLength = todos.length; // = 5
// // for (let i = 0; i < todosLength; i++) {
// //   todos.pop()
// // }
// // console.log(todos)

// var counterOne = 10;
// while (counterOne > 0) {
//   console.log(counterOne);
//   counterOne--
// }

// var counterTwo = 10;
// do {
//   console.log(counterTwo)
//   counterTwo--;
// } while (counterTwo > 0)


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