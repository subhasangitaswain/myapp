//const MongoClient = require("mongodb"); 
mongoose=require('mongoose');
const Schema = mongoose.Schema;

var schema= new Schema({
    firstname:{type:String, require: true},
    lastname:{type:String, require: true},
    email:{type:String, require: true},
    user:{type:String, require: true},
    password:{type:String, require: true}
});
schema.set('toJSON', { virtuals: true});

module.exports = mongoose.model('User', schema);