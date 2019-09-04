var http = require('http')
var fs = require('fs')
//http://fm.shiyunjj.com/small/2018/1429.jpg   => 302 =>location
// http://fm.shiyunjj.com/small/2018/1424.jpg
// http://fm.shiyunjj.com/large/2018/1432.jpg
//http://wx2.sinaimg.cn/mw690/0060lm7Tly1fsalb9k3luj302s028a9w.jpg

//asdasda.com
//
var imgName = 1400
var request_web = function (path,i) {
    var request = http.request({
        protocol: 'http:',
        host: 'fm.shiyunjj.com',
        port: 80,
        method: 'get',
        path: path,
        headers: {
            'Referer': 'http://m.mmjpg.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3423.2 Safari/537.36',
        }
    })
    request.end()
    request.on('response', function (res) {
        console.log('响应被收到')
        var arr = []
        console.log(res.headers)
        res.on('data', function (chunk) {
            arr.push(chunk)
            // 如何把字符串html解析成dom树
        })
        //jpg 文件编码
        res.on('end', function () {
            fs.writeFile('./'+i+'.jpg', Buffer.concat(arr), function (err) {
                console.log('写入完成')
            })
            console.log('服务器响应已经完成')
        })
    })
}

for(var i = 0 ; i < 10 ; i++){
    imgName ++
    var realName = imgName + '.jpg'
    var path = '/large/2018/' + realName
    request_web(path,i)
}