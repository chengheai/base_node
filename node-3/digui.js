var  a = 1
var add = function(){
    if(a == 10) return
    a++
    add()
}

add()

// 1. 递归的返回值
// 2. 递归的退出条件