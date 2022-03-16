const fs = require('fs');
const http = require('http');

const port = 4000;
const server = http.createServer(function(request, response) {
    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./index.html').pipe(response);
    }

    if (request.url === '/js/main.js') {
        response.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./js/main.js').pipe(response);
    }

    if (request.url === '/css/main.css') {
        response.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('./css/main.css').pipe(response);
    }
});

server.listen(port, function () {
    console.log(`%c
    # # # # # # # # # # # # # # # # # # # # # # # # #
    #                                               #
    #   G O O G L E  P R O F I L E  C A T C H E R   #
    #                                               #
    # # # # # # # # # # # # # # # # # # # # # # # # #
    `, `font-family: monospace`);
    console.log('Server is running on port', port);
});