const path = require('path')

//parse => 把路径字符串变成对象
var pathObject = path.parse('C:/Users/handsome/Desktop/webn/demo.js')
//format => 把路径对象转化成字符串
var pathString = path.format(pathObject)
// console.log(pathString)

//resolve => 把一堆路径解析成绝对路径

console.log(path.resolve('./','bootstrap-3.3.7-dist','js','../css'))

//join => 把一堆路径解析成相对路径
console.log(
    path.join('./','bootstrap-3.3.7-dist','js','../','css')
)



// console.log(pathObject.ext)
// if(pathObject.ext == '.js'){
//     console.log('这是一个js文件')
// }
// 属性\方法