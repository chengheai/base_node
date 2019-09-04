var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient
var ObjectId = mongodb.ObjectId
var mongoUrl = 'mongodb://127.0.0.1:27017'

var MongoCotrol = function(dbName,tableName){
    this.dbName = dbName
    this.tableName = tableName
    this.insert = function(data,callback){
        MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,client)=>{
            if(err){
                console.log(err)
                return
            }
            var db = client.db(this.dbName)
            db.collection(this.tableName).insert(data,function(error,res){
                callback(error,res)
                client.close()
            })
        })
    }
    this.removeById = function(_id,callback){
        MongoClient.connect(mongoUrl,{useNewUrlParser : true},(err,client)=>{
            if(err){
                return console.log(err)
            }
            var db = client.db(this.dbName)
            db.collection(this.tableName).remove({_id : ObjectId(_id)},function(error,res){
                callback(error,res)
                client.close()
            })
        })
    }
}


exports.MongoCotrol = MongoCotrol