const http = require('http')

const server=http.createServer((req,res) => {
    console.log(req);
    res.write('hello there ! have a good night')
    res.end()
})

server.listen(3000,() => console.log("up and running 3000 server"))