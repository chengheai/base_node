var querystring = require('querystring')
var parseCookie = function(req){
    // var cookie = req.headers.cookie 
    //'u=admin; p=admin'
    var cookieArr = cookie.split(';')
    var cookieObj = {}
    cookieArr.forEach(function(e,index){
        if(index == 0){
            
        } else {
            e = e.slice(1,e.length)
        }
        //去头
        // ' p=admin'
        var oneCookie = querystring.parse(e) //{p:'admin'}
        var key,value
        key = Object.keys(oneCookie)[0]
        value = oneCookie[key]
        cookieObj[key] = value
    })
    console.log(cookieObj)
}
parseCookie()
