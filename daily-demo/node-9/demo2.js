const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const MongoControl = require('./demo_1').MongoControl
const userControl = new MongoControl('test', 'user')

app.use(express.static('./static'))

app.post('/login',urlencodedParser,(req,res)=>{
    var username = req.body.username
    var password = req.body.password
    userControl.find({username:username,password:password},(error,result)=>{
        if(error){
            res.status(500).send('服务器错误')
            return
        }
        if(result.length == 0){
            // 找不到对应的账号密码数据
            res.status(403).send('账号密码错误')
        } else{
            res.send('登陆成功')
        }
    })
})

app.post('/register', urlencodedParser, function (req, res) {
    var username = req.body.username
    var password = req.body.password
    if (username.length < 6 || password.length < 6) {
        res.status(403).send('账号名或密码过短')
        return
    }
    userControl.find({ username: username }, function (err, result) {
        if (err) {
            res.status(500).send('服务器错误')
            return
        }
        if (result.length > 0) {
            //能找到这个用户名，不允许重名注册
            res.status(200).send('账户已存在')
        } else {
            //找不到用户名，是新的用户名
            userControl.insert({ username: username, password: password }, (err, result) => {
                if (err) {
                    res.status(500).send('服务器错误')
                    return
                }
                res.send('注册成功')
            })
        }
    })
})

app.post('/changePassword',urlencodedParser,(req,res)=>{
    var {username,oldPassword,newPassword} = req.body
    userControl.find({username:username,password:oldPassword},(error,result)=>{
        if(error){
            res.status(500).send('咱服务器崩了兄弟！')
            return
        }
        if(result.length == 0){
            res.send('旧密码和账号不匹配')
        } else {
            var _id = result[0]._id 
            userControl.updateById(_id,{password:newPassword},(error,result)=>{
                if(error){
                    res.status(500).send('咱服务器崩了兄弟，你的密码没改成，晚点儿再试试吧！')
                    return
                }
                res.send(`你的新账号密码是 ${username} - ${newPassword}`)
            })
        }
    })
})

app.listen(4000)