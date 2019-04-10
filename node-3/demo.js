const http = require('http')

// http.createServer
// http.request

var server = http.createServer(function(req,res){
    //req => IncomingMessage => 浏览器发送的请求
    //res => ServerResponse  => 服务器要返回的结果

    console.log(
        // req.headers,
        // req.method,
        req.url
    )
    if(req.method.toLowerCase() == 'get'){
        if(req.url == '/'){
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write('index<a href="">登陆/login</a>')
            res.end()
        } else if(req.url == '/login'){
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write('login')
            res.end()
        } else {
            res.writeHead(404)
            res.write('Not Found')
            res.end()
        }
    }

    //1. 如果请求来自于浏览器的get请求，并且请求的url是/就返回首页
    //2. 如果请求来自于浏览器的get请求，并且url为/login则返回登陆页

    //根据请求的不同，返回不同的结果

    // res.writeHead(200,{'Content-Type':'text/html'})
    // //年哥 出bug于此 乱码
    // res.write(`
    // <html>
    //     <head>
    //     <meta charset="utf-8">
    //     </head>
    //     <body>
    //         <h1>你好啊！这是来自node的一个文本</h1>
    //     </body>
    // </html>
    // `)
    // res.end()
})

// https://new.qq.com/omn/20180731/20180731A0R9AJ.html

server.listen(3000)
// localhost:3000
// localhost
// 127.0.0.1

//http默认80端口
//https默认443