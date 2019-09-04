var https = require('https')

// https://baidu.com
var request = https.request(
    {
        protocol : 'https:',
        host : 'baidu.com',
        port : 443,
        method : 'get',
        path : '/',
        headers : {}
    }
)
request.end()
request.on('response',function(res){
    console.log('响应被收到')
    res.on('data',function(chunk){
        console.log(chunk.toString())
        // 如何把字符串html解析成dom树
    })
    res.on('end',function(){
        console.log('服务器响应已经完成')
    })
})