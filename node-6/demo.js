var http = require('http')
var server = http.createServer(function(req,res){
    if(req.method.toLowerCase() == 'get'){
        //提供一个接口给ajax获取数据
        if(req.url == '/getInfo'){
            // 在浏览器可以访问
            // 在ajax可以吗？
            // Not 'Access-Control-Allow-Origin' header presented ....
            res.setHeader('Access-Control-Allow-Origin','*')
            res.writeHead(200,{'Content-Type':'text/json'})
            res.write(JSON.stringify({code : 200}))
            res.end()
        }
    }
})

server.listen(3004)