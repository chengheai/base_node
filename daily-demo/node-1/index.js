// 1. node是什么？
// 2. node为什么是这个？
// 3. node可以做什么？
// 4. node和js有什么区别

// node 是一个急于chrome v8引擎的一个js解释器
// 所谓的js其实只是一段文本，经过解释器解释之后才可以被计算机执行

var fs = require('fs') //fileSystem
fs.readFile('./demo.html',function(err,data){
    var html = data.toString()
    html = html.replace('<title>Document</title>','<title>首页</title>')
    console.log(html)
})

var arr = [1, 2, 3, 4, 5]
arr.forEach((e) => {
    console.log(e)
})
// console.log(window) // 浏览器对象 window.document.creatElement

// ctrl + `
let contactList = []
class Contact {
    constructor(name, email, phoneNumber, tel, company, address) {
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
        this.tel = tel
        this.company = company
        this.address = address
        this._id = Math.random().toString()
    }
}
//把联系人添加到联系人列表里
var add = (name, email, phoneNumber, tel, company, address) => {
    var c = new Contact(name, email, phoneNumber, tel, company, address)
    contactList.push(c)
    return true
}
//再列表里把这个联系人删除
var remove = (_id) => {
    for (let i = 0; i < contactList.length; i++) {
        if (contactList[i]._id == _id) {
            contactList.splice(i, 1)
            return true
        }
    }
    return false
}
//搜索符合搜索条件的联系人
var search = (key) => {
    let result = []
    contactList.forEach(e => {
        if (e.name.indexOf(key) > -1 ||
            e.email.indexOf(key) > -1 ||
            e.phoneNumber.indexOf(key) > -1 ||
            e.tel.indexOf(key) > -1 ||
            e.company.indexOf(key) > -1 ||
            e.address.indexOf(key) > -1
        ) {
            result.push(e)
        }
    })
    return result
}
//修改某一联系人
var revise = (_id, property, newValue) => {
    debugger
    if (property == 'name' ||
        property == 'email' ||
        property == 'phoneNumber' ||
        property == 'tel' ||
        property == 'company' ||
        property == 'address'
    ) {

    } else {
        return false
    }
    for (let i = 0; i < contactList.length; i++) {
        if (contactList[i]._id == _id) {
            //修改
            contactList[i][property] = newValue
            return true
        }
    }
    return false
}

add('孙东100', 'sundong666@qq.com', '13713713737', '6666666', '哈尔滨冬天做冰雕有限公司（被雕部门）', '中央大街桥洞第三块到第六快地砖')
console.log(contactList)

/**
 * 
 * png文件 解码？utf-8
 * 
 * NODe 的涉及范围非常的广 脱离了浏览器
 * 制作服务器、服务端渲染、提供api、网站文件上传、网站爬虫程序
 * 设计完整的网站流程、用户管理的程序。。。。
 * 
 * request、cheeryio、socketio....
 * 
 * 11 解释清楚
 * 
*/