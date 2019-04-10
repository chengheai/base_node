const url = require('url')
//解析网址/编码网址
// http://skipper.fun:80/pb/getAllContact
console.log(
    url.parse('https://douyu.com/4393948')
    //format
)

console.log(
    url.resolve('https://douyu.com/4393948','asdasd')
    //以浏览器打开超链接的方式拼接url字符串
)

//url => object => querystring.parse( query )