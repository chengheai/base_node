const fs = require('fs')
const path = require('path')

// 读取一个路径的全部子文件夹和文件
var readdir = function(dir){
    //读取传进来的dir的全部文件/文件夹
    fs.readdir(dir,function(err,files){
        //遍历子文件/文件夹
        files.forEach(function(e){
            //计算子文件子文件夹的路径
            var newDir = path.join(dir,e)
            //检查子文件\文件夹的状态
            var stats = fs.statSync(newDir)
            //对子文件\文件夹进行判断是否是目录
            if(stats.isDirectory()){
                //如果是目录，则递归这个子目录
                readdir(newDir)
            }else {
                // 如果不是目录，则打印这个文件
                console.log(newDir)
            }
        })
    })
}
readdir('./bootstrap-3.3.7-dist')
// fs.readdir('./bootstrap-3.3.7-dist',function(err,files){
//     files.forEach(function(e){
//         var stats = fs.statSync(path.join('./bootstrap-3.3.7-dist' , e))
//         if(stats.isDirectory()){
//             //判断子文件夹是目录
//             fs.readdir()
//         } else {

//         }
//     })
// })