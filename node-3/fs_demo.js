const fs = require('fs')

// fs.stat('./往日代码',function(err,stats){
//     console.log(stats.isDirectory())
// })

//读取路径的方法
fs.readdir('./digui.js',function(err,files){
    if(err && err.code == 'ENOTDIR'){
        console.log(err)
        return
    }
})