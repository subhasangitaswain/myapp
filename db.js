const mongoose=require ('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb',{useNewUrlParser:true},(err)=> {if (!err) 
{console.log('mongodb connection successed')}
else{console.log('error in DB' +err)}
});
module.exports={
    user:require('./user/model'),
};