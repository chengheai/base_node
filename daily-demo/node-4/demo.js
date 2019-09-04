const http = require('http')

var server = http.createServer(function(req,res){

    /**
GET / HTTP/1.1

Host: localhost:3000
Connection: keep-alive
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3423.2 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,;q=0.8
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9

     * 
     */
    req.url
    req.method
    req.headers
    
    /**
     * 
HTTP/1.1 200 OK
Content-Type: text/html
Date: Thu, 02 Aug 2018 06:54:45 GMT
Connection: keep-alive
Transfer-Encoding: chunked
     */

    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('qqqq')
    res.write('qqqq1')
    res.write('qqqq2')
    res.write('qqqq3')
    res.write('qqqq4')
    res.write('qqqq5')
    res.end()
})

server.listen(3000)