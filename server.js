const express = require('express')
const server = express();
const hostname = '127.0.0.1';
const port = 3000;

//Basic routes
server.get('/', (request, response) => {
    response.send('Home Page');
});

server.get('/about', (request, response) => {
    response.send('About Page')
});

server.get('/health', (request, response) => {
    let health = {
        "status": "UP"
    };
    response.end(JSON.stringify(health));
});

server.get('/env', (request, response) => {
    let env = {
        "systemEnvironment": {
            "environment": process.env.NODE_ENV
        }
    };
    response.end(JSON.stringify(env));
});

//Express error handling middleware
server.use((request, response) => {
    response.type('text/plain');
    response.status(505);
    response.send('Error Page')
});

//Binding to a port
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});