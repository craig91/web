const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const fortune = require('./lib/fortune')
const handlers = require('./lib/handlers')
const port = process.env.port  || 3000;




app.engine('handlebars', engine({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get('/', handlers.home) 
app.get('/about', handlers.about)


app.use(express.static(__dirname + './public'));


app.use(handlers.notFound)
app.use(handlers.serverError)

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` + 
    `press Ctrl-c to terminate.` ))


