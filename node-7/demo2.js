var http = require('http')

// 重定向
var server = http.createServer((req,res)=>{
    res.writeHead(302,{'Location' : 'http://skipper.fun'})
    res.write('302 redirect')
    res.end()
})

//跨域
//cookie
//Set-Cookie


server.listen(3000)