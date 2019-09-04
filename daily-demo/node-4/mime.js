const path = require('path')

var getContentType = function(fileName){
    var ext = path.parse(fileName).ext
    switch(ext){
        case '.html':
            return 'text/html'
        case '.css':
            return 'text/css'
        case '.js':
            return 'application/x-javascript'
        case '.png':
            return 'image/png'
    }
}

exports.getContentType = getContentType

// 1. 静态文件处理
// 2. 模块分离