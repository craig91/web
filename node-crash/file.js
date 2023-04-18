const fs = require('fs');

// Reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line')


// writing files

// fs.writeFile('./docs/blog1.txt', 'hello world', () => {
//     console.log("File was written");
// })

// fs.writeFile('./docs/blog2.txt', 'hello world', () => {
//     console.log("File was written");
// })

// directories

fs.mkdir('./assets', (err) => {
    if(err) {
        console.log(err);
    }
    console.log( "folder created" );
})

