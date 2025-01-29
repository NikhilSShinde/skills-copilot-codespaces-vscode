//Create web server
//Create a web server that listens to incoming requests and responds with a comment list
//The server should respond with a list of comments in JSON format
//The server should respond with a list of comments in JSON format
//The server should respond with a list of comments in JSON format
//The server should respond with a list of comments in JSON format

const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments));
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

module.exports = server;