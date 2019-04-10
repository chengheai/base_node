var querystring = require('querystring')

//parse 解析 查询字符串转化为obj
//get http://skipper.fun/pb/removeContact?_id=4as3d453asd453asd

var qs = 'name=1&age=20' // split ctrl + k  ctrl + `
console.log(querystring.parse(qs))

//stringify get forin
console.log(
    querystring.stringify(querystring.parse(qs))
)

// https://www.baidu.com/s?wd=%E5%90%B4%E4%BA%A6%E5%87%A1
//escape   unescape
// 字符串进行url编码和解码
console.log(
    querystring.unescape('https://www.baidu.com/s?wd=%E5%90%B4%E4%BA%A6%E5%87%A1')
)