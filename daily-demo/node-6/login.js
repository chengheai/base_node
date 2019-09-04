var http = require('http')
var querystring = require('querystring')
var server = http.createServer(function(req,res){
    console.log(req.headers.cookie)
    if(req.method.toLowerCase() == 'post'){
        if(req.url == '/login'){
            var data = ''
            req.on('data',function(chunk){
                data += chunk.toString()
            })
            req.on('end',function(){
                var query = querystring.parse(data)
                var u = query.u
                var p = query.p
                res.setHeader('Set-Cookie','u='+u + '; p=' + p)
                res.writeHead(200)
                res.write('ok')
                res.end()
            })
        }
    }
})
server.listen(4000)