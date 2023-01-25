const http = require("http");
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Test");
})

app.get('/USERS', (req,res) => {

})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})