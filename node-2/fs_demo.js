const fs = require('fs')

// fs => File System

// 1. 简单文件操作
// 2. 复杂文件操作
// 3. 文件夹操作
// 4. 文件\文件夹通用的
// 5. 文件监听
// 6. 文件流

// appendFile    追加到文件 (文件不存在会创建)
// copyFile  复制一个文件到另一个文件
// readFile  读取文件全部内容
// writeFile 写入文件(文件存在则会覆盖)
// unlink    删除文件
//1. 懂得去看函数参数类型和意义
//2. 在fs模块里,一般回调函数的第一个参数都是错误
//3. 同步方法不需要异步回调
// fs.appendFile('./1.txt','性感代码在线敲出来',{encoding:'utf-8'},function(err){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('文件追加完成')
// })

// fs.appendFileSync('./1.txt','这是同步方法进来的',{encoding:'utf-8'})

// console.log('程序读取到最后一行')

// fs.copyFile('./index.html','./test/index2.html',function(err){
//     if(err) return
//     console.log('文件复制成功')
// })


// fs.readFile('./index2.html',{encoding:'utf-8'},function(err,data){
//     if(err) return
//     var fileData = data
//     fs.appendFile('./index2.html',data ,{encoding:'utf-8'},function(err){
//         if(err) return 
//         console.log('添加文件完成')
//     })
// })


// fs.writeFile('./index2.html','<!--只有一行来自node的数据-->',{encoding:'utf-8'},function(err){
//     if(err){
//         return
//     }
//     console.log('文件写入完成')
// })

var copyFile = function(src,dest){
    fs.readFile(src,function(err,data){
        if(err) console.log(err)
        fs.appendFile(dest,data,function(err){
            if(err) console.log(err)
            console.log('文件复制完成')
        })
    })
}
copyFile('./index2.html','./index3.html')