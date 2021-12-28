const http = require('http')
const server = http.createServer((request, result)=>{
    if (request.url === '/'){
        result.end('Welcome to our home page')
    }
    if (request.url === '/about'){
        result.end('Here is our short history')
    }
    else {result.end(`
        <h1>Error</h1>
        <p> we can't seem to find the page </p>
        <a href="/">Back home</a>
    `)}
})

server.listen(5000)