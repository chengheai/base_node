var http  = require('http')
var fs = require('fs')
var querystring = require('querystring')
var url = require('url')
var server = http.createServer(function(req,res){
    //带有用户验证的一个网站
    if(req.method.toLowerCase() == 'get'){
        var urlObj = url.parse(req.url)
        if(urlObj.pathname == '/'){
            fs.readFile('./staitc/login.html',{encoding:'utf-8'},function(err,data){
                res.writeHead(200,{'Content-Type' : 'text/html'})
                res.write(data)
                res.end()
            })
        }
        if(urlObj.pathname == '/index'){
            // 
            console.log(urlObj)
            var query = querystring.parse(urlObj.query)
            var username = query.u
            var password = query.p
            if(username == 'admin' && password == 'admin'){
                fs.readFile('./staitc/index2.html',{encoding:'utf-8'},function(err,data){
                    res.writeHead(200,{'Content-Type' : 'text/html'})
                    res.write(data)
                    res.end()
                })
            } else {
                res.writeHead(403)
                res.write('Forbidde')
                res.end()
            }
            
        }
    }

    if(req.method.toLowerCase() == 'post'){
        if(req.url == '/login'){
            var data = ''
            req.on('data',function(chunk){
                data+= chunk.toString()
            })
            req.on('end',function(){
                //query
                var query = querystring.parse(data)
                console.log(query)
                if(query.u == 'admin' && query.p == 'admin'){
                    // 验证通过
                    fs.readFile('./staitc/index2.html',{encoding:'utf-8'},function(err,data){
                        res.writeHead(200,{'Content-Type' : 'text/html'})
                        res.write(data)
                        res.end()
                    })
                } else {
                    res.writeHead(403)
                    res.write('Forbidde')
                    res.end()
                }
            })              
        }
    }
})
server.listen(3009)