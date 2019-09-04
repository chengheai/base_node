var http = require('http')
var server = http.createServer((req,res)=>{
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie','name=1')
    res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'})
    res.write('看看你的cookie')
    res.end()
})

server.listen(3000)