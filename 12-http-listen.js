const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our Home Page')
    }
    if(res.url === '/about'){
        req.setEncoding('Here is our short history')
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>We can't seem to find the Page that you are looking for</p>
    `
    )
})

server.listen(5000)