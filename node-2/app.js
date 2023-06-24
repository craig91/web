const http = require('http');


const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
    const url = req.url;
    if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end()
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    return res.end()
});

server.listen(3000);