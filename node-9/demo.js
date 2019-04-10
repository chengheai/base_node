const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId

const mongodbUrl = 'mongodb://127.0.0.1:27017'

class MongoControl{
    constructor(dbName,collectionName){
        this.dbName = dbName
        this.collectionName = collectionName
    }
    find(findQuery,callback){
        MongoClient.connect(mongodbUrl,{useNewUrlParser : true},(error,client)=>{
            if(error){
                callback(error)
                return
            }
            var db = client.db(this.dbName)
            db.collection(this.collectionName).find(findQuery).toArray(function(error,result){
                callback(error,result)
                client.close()
            })
        })
    }
    insert(docs,callback){
        MongoClient.connect(mongodbUrl, {useNewUrlParser : true},(error,client)=>{
            if(error){
                callback(error)
                return
            }
            var db = client.db(this.dbName)
            db.collection(this.collectionName).insert(docs,(err,result)=>{
                callback(error,result)
                client.close()
            })
        })
    }
    update(findQuery,newDate,callback){
        MongoClient.connect(mongodbUrl,{useNewUrlParser:true},(error,client)=>{
            if(error){
                callback(error)
                return
            }
            var db = client.db(this.dbName)
            db.collection(this.collectionName).updateMany(findQuery,{$set:newDate},(err,result)=>{
                callback(err,result)
                client.close()
            })
        })
    }
    remove(findQuery,callback){
        MongoClient.connect(mongodbUrl,{useNewUrlParser:true},(error,client)=>{
            if(error){
                callback(error)
                return
            }
            var db = client.db(this.dbName)
            db.collection(this.collectionName).remove(findQuery,(err,result)=>{
                callback(err,result)
                client.close()
            })
        })
    }
}

var user = new MongoControl('test','user')
// user.find({name : "孙东"},function(err,res){
//     console.log(res)
// })

user.remove({name : "随你懂"},function(err,res){
    console.log(res)
})