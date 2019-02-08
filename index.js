const express = require('express');
const routes=require('./routes/api');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
var cors = require('cors')

//set express app
const app=express();

//connecting to mongodb
//mongoose.connect("mongodb://localhost:27017/employeedb", { useNewUrlParser: true });
// mongoose.connect("mongodb://Bhargav:Rao@1147@ds049219.mlab.com:49219/employeedb_bhargav"{
//     auth: {
//       user: "Bhargav",
//       password:"Rao@1147"
//     },
//     { useNewUrlParser: true }
//   });

  mongoose.connect("mongodb://Bhargav:Rao1147@ds049219.mlab.com:49219/employeedb_bhargav", {
    auth: {
      user: "Bhargav",
      password: "Rao1147"
    },
    useNewUrlParser: true
  })



mongoose.Promise=global.Promise;

app.use(bodyParser.json());
app.use(cors())
//u used routes here
app.use('/employee',routes);

//Listen for requests from front end
app.listen(process.env.port||8080,function(){
    console.log(`Listening for requests`)
})