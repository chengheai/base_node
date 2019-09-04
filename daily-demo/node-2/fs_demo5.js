//文件监听

// html监听器
const fs = require('fs')

//检测文件的每一个变化
// fs.watch('./index2.html',function(event,filename){
//     console.log(event,filename)
// })

//检测文件名的变化
fs.watchFile('./index2.html',function(curr,prev){
    console.log(curr,prev) // fs.stat => stats
})

// 如果我们的node在监听的话,程序不会停止执行
// 如果我们想停止node的运行 ctrl + c


// http httprequest