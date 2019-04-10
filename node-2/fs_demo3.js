// 文件夹的操作
// readfir 读取文件夹全部文件
// mkdir  创建一个文件夹
// rmdir  移除一个文件夹(不能删除非空文件夹)

const fs =require('fs')
// fs.mkdir('./test2',function(err){
//     if(err){
//         return console.log(err)
//     }
//     console.log('文件夹test2创建完成')
// })
const path = require('path')
//读取文件夹
// fs.readdir('./',function(err,files){
//     if(err){
//         return console.log(err)
//     }
//     files.forEach(function(e){
//         if(path.parse(e).ext == '.js'){
//             console.log(e)
//         }       
//     })
//     // console.log(files)
// })

// fs.rmdir('./test2',function(err){
//     if(err){
//         return console.log(err)
//     }
//     console.log('test删除成功')
// })

fs.readdir('./往日代码',function(err,files){
    fs.stat('')
})

//查找c盘全部的exe文件