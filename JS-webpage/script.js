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


var database = [{
    username: "craig",
    password: "1234"
}]

var newsFeed = [
    {
        username: "Tim",
        timeline: "So tired from all of that learning"
    },
    {
        username: "sally",
        timeline: "JavaScript is soo cool"
    }
]

var usernamePrompt = prompt("What's your username? ");
var passwordPrompt = prompt("What's your password? ");
// console.log(usernamePrompt, passwordPrompt)
function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
        console.log(newsFeed)
    } else {
        alert("Sorry wrong username and password!")
    }
}

signIn(usernamePrompt, passwordPrompt);
