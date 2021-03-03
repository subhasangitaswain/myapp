const MongoClient = require("mongodb"); 

MongoClient.connect('mongodb://localhost:27017/newdb',{useNewUrlParser:true},(err)=> {if (!err) 
{console.log('mongodb connection successed')}
else{console.log('error in DB' +err)}
});

module.exports = {
  User : require('./model')
}