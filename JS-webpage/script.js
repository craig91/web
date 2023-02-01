function sayHello() { // this function clearly has a name
    console.log("Hello");
}

sayHello();

var sayBye = function () { // this function doesn't have a name. This is an anonymous function. Its assigned to sayBye so we can reference it via sayBye but otherwise we cannot access this function.
    console.log("Bye");
}

sayBye();

function sing(song) {
    console.log(song);
}
sing("Laaa Dee Daaa");
sing("Heloooooo");
sing("Backstreets back alright");

function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "that's too hard";
    } else {
        return a * b;
    }
}

console.log(multiply(13, 31));