//通讯录模型
// ajax
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const MongoControl = require('./demo_1').MongoControl

const contactControl = new MongoControl('test','contact')

app.use(express.static('./public'))


//获取全部联系人
app.get('/getAllContact',(req,res)=>{
    contactControl.find({},function(err,result){
        res.send(result)
    })
})

//搜索
app.get('/serach',(req,res)=>{

})

//添加联系人
app.post('/addContact',jsonParser,(req,res)=>{

})

//修改联系人
app.post('/revise',jsonParser,(req,res)=>{

})

//删除联系人
app.post('/remove',jsonParser,(req,res)=>{

})

app.listen(4001)