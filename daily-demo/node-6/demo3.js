var http = require('http')
var querystring = require('querystring')
var fs = require('fs')
var parseCookie = function (req) {
    var cookie = req.headers.cookie
    if (typeof cookie == 'string') {

    } else {
        return req.cookie = {}
    }
    var cookieArr = cookie.split(';')
    var cookieObj = {}
    cookieArr.forEach(function (e, index) {
        if (index == 0) {

        } else {
            e = e.slice(1, e.length)
        }
        var oneCookie = querystring.parse(e)
        var key, value
        key = Object.keys(oneCookie)[0]
        value = oneCookie[key]
        cookieObj[key] = value
    })
    req.cookie = cookieObj
}

var checkUser = function (cookie) {
    if (cookie.u == 'admin' && cookie.p == 'admin') {
        return true
    }
    return false
}

var server = http.createServer(function (req, res) {
    parseCookie(req)
    if (req.method.toLowerCase() == 'get') {
        if (req.url == '/') {
            if (checkUser(req.cookie)) {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write('你处于登陆状态')
                res.end()
            } else {
                res.writeHead(302,{Location : '/login'})
                res.end()
            }
        }
        if (req.url == '/login') {
            if (checkUser(req.cookie)) {
                res.writeHead(302, { Location: '/' })
                res.end()
            } else {
                fs.readFile('./staitc/login.html', { encoding: 'utf-8' }, function (err, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.write(data)
                    res.end()
                })
            }

        }
    }
    if (req.method.toLowerCase() == 'post') {
        if (req.url == '/login') {
            var data = ''
            req.on('data', function (chunk) {
                data += chunk.toString()
            })
            req.on('end', function () {
                var query = querystring.parse(data)
                var u = query.u
                var p = query.p
                console.log(u,p)
                res.setHeader('Set-Cookie', 'u=' + u + '; p=' + p)
                res.writeHead(302, { Location: '/' })
                res.end()
            })
        }
    }
})
server.listen(4000)