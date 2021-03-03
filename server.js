const db=require('./db');
const user = db.user;
const express=require('express');
var app = express();
const bodyParser = require('body-parser');
var http = require('http').Server(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


 //app.use('/', (req,res) => {
    //res.send("Hello World")
 //})

 
app.use('/user', require('./user/controller'));

http.listen(3000,()=>{console.log('server started at port : 3000');})