var http = require('http')

var server =  http.createServer(function(req,res){
    // req IncomingMessage
    // get url
    // post body on('data') on('end')
    //
    if(req.url == '/guabi'){
        res.writeHead(302,{Location : 'http://douyu.tv'})
        // res.writeHead(200)
        res.write('123s')
        res.end()
    }
    
})

server.listen(3002)