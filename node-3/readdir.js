var fs = require('fs')
var path = require('path')

//异步版本
var readDir = function(dir){
    fs.readdir(dir,function(err,files){
        if(err && err.code == 'ENOTDIR'){
            console.log(dir)
            return
        }
        files.forEach(function(e){
            readDir(path.join(dir,e))
        })
    })
}

//同步版本
var result = []
var readDirSync = function (dir) {
    console.log(dir)
    try {
        var files = fs.readdirSync(dir)
        files.forEach(function (e) {
            if(e.indexOf('$') > -1 || e == 'node_modules') return
            readDirSync(path.join(dir, e))
        })
    } catch (e) {
        if(e.code == 'ENOTDIR' && path.parse(dir).base == 'Overwatch.exe'){
            result.push(dir)
        }
    }
}
// E:\守望先锋\Overwatch\Overwatch.exe
readDirSync('e://')
console.log(result)