var http = require('http')
var server = http.createServer(function(req,res){
    console.log(req.headers.cookie)
    if(req.method.toLowerCase() == 'get' && req.url == '/setCookie'){
        res.setHeader('Set-Cookie','a=1')
        res.writeHead(200)
        res.write('ok')
        res.end()
    }
})
server.listen(4000)