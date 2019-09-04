// 文件\文件夹通用的操作

const fs = require('fs')

//判断文件\文件夹是否存在
var result = fs.existsSync('./index10.html')

if(result) {
    console.log('文件存在')
}

//检查文件\文件夹状态
// fs.stat('./test',function(err,stats){
//     if(err){
//         return console.log(err)
//     }
//     console.log(stats)
// })

//重命名文件\文件夹
// fs.rename('./index3.html','./index33333.txt',function(err){
//     if(err){
//         return console.log(err)
//     }
//     console.log('文件更名完成')
// })