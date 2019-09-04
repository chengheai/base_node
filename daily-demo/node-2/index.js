//1. commandJS
// js规范 

// es Javascript 标准

// var add = require('./math').add
// console.log(add(1,2))


// 2. 单线程异步回调

// var a = function(callback){
//     var c = 1
//     callback(c)
// }
// a((e)=>{
//     console.log(e)
// })

// var fs = require('fs') //File System

// fs.readFile('./math.js',function(err,data){
//     console.log('文件读取完成')
// })
// console.log('程序已到达最后一行')