var http = require('http')
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain;charset=UTF-8'})
    res.write('你好啊！')
    res.end()
})
server.listen(3000)