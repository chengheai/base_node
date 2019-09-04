// http
var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')
var querystring = require('querystring')

// get请求
// 请求处理
// 静态文件
// 路由
// 参数处理

// post 请求
// 接受请求体
// 路由
// 解析请求体
// 处理请求头 requestHeader

// ajax 
// setRequestHeader

var server = http.createServer(function(req,res){
    // req,res
    // IncomingMessage //ServerResponse
    // req 路由
    console.log(req.url)
    if(req.method.toLowerCase() == 'get'){
        if(req.url == '/'){
            fs.readFile('./static/index.html',{encoding:'utf-8'},function(err,data){
                if(err){
                    res.writeHead(500)
                    res.end()
                    return
                }
                res.writeHead(200,{'Content-Type' : 'text/html'})
                res.write(data)
                res.end()
            })
        }
        //博客 很多的文章
        var urlObj = url.parse(req.url) // 使用url模块解析请求的url
        if(urlObj.pathname == '/pages'){ //确定请求的接口
            var query = urlObj.query     //提取url里的查询语句
            var page = querystring.parse(query).page   //解析查询语句为对象格式
            var filepath = path.join( './pages' , (page + '.txt')) //拼凑路径字符串
            console.log(filepath)
            fs.readFile(filepath,{encoding:'utf-8'},function(err,data){
                if(err){
                    res.writeHead(404)
                    res.write('你的爱已经找不到了')
                    res.end()
                    return
                }
                res.writeHead(200,{'Content-Type':'text/plain'})
                res.write(data)
                res.end()
            })
        }
    }

    if(req.method.toLowerCase() == 'post'){
        //获取用户名和密码
        console.log(req.url)
        console.log(req.headers["content-type"])
        if(req.url == '/login'){
            //怎么获取账号密码？
            var data = ''
            req.on('data',function(chunk){
                data += chunk.toString()
            })
            req.on('end',function(){
                console.log('请求传输完成',data)
                var query
                if(req.headers["content-type"] == 'text/json'){
                    query = JSON.parse(data)
                } else {
                    query = querystring.parse(data)
                }
                res.writeHead(200)
                res.write('Finish process , welcome ' + query.username)
                res.end()
            })
        }
    }
})

server.listen(3001)