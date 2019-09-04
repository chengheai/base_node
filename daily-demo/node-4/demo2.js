const http = require('http')
const fs = require('fs')
const path = require('path')

const mime = require('./mime')

const static = './static'

var server = http.createServer(function(req,res){
    //后端路由 和静态文件处理
    // query分析
    console.log(req.url)
    if(req.method.toLowerCase() == 'get'){
        //在遇到一切的请求的时候，先作为静态文件请求
        if(req.url.indexOf('.') > -1){
            var realPath = path.join(static , req.url) //拼凑真正的文件路径
            fs.readFile(realPath,function(err,data){
                if(err && err.code == 'ENOENT'){
                    res.writeHead(404)
                    res.end()
                    return
                }
                res.writeHead(200,{'Content-Type':mime.getContentType(req.url)})
                res.write(data)
                res.end()
            })
        }
        if(req.url == '/'){
            //首页请求
            fs.readFile('./static/index.html',{encoding:'utf-8'},function(err,data){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(data)
                res.end()
            })
            
        }
    }

    // localhost:3000   =>   '/'
    // localhost:3000/index   =>   '/index'
})

server.listen(3000)