var request = require('request')

request('https://www.baidu.com/',{
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3423.2 Safari/537.36',
    }
},function(err,res,body){
    console.log(body)
})