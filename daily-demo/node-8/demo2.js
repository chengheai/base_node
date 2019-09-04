var MongoControl = require('./dbc').MongoCotrol

var user = new MongoControl('test','user')
var contact = new MongoControl('test','contact')

user.insert({name : '测试'},function(err,res){

})

// contact.insert(
//     {phoneNumber : 111,name : 11}
// ,function(err,res){

// })

contact.removeById('5b6bffc5b0eb5a3b8cff158e',function(err,res){
    console.log(res)
})