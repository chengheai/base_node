var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient
var ObjectId = mongodb.ObjectId
const mongodbUrl = 'mongodb://127.0.0.1:27017'

MongoClient.connect(mongodbUrl,{useNewUrlParser : true},function(err,client){
    if(err){
        console.log(err)
        return
    }
    var db = client.db('test')
    //查
    // db.collection('user').find({}).toArray(function(error,res){
    //     console.log(res)
    //     client.close
    // })   
    //增加
    // db.collection('user').insert({
    //     name : "无敌小旋风"
    // },function(error,res){
    //     console.log(res)
    //     client.close()
    // })

    //删除
    // db.collection('user').remove({
    //     _id : ObjectId("5b6bfac7ffaf242cd86dd6a1")
    // },function(error,res){
    //     console.log(res.result)
    //     client.close()
    // })

    //更新
    db.collection('user').update({name : '孙东'},{$set : {age : 60}},function(error,res){
        console.log(res.result)
    })
})