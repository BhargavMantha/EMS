const mongoose=require("mongoose");
const Schema=mongoose.Schema;

//creating Employee Schema and model
const EmployeeSchema=new Schema({
    employee_name:{
        type:String,
        required:[true,'Name is required']
    },
    employee_age:{
        type:String
    },
    employee_addr:{
        type:String
    }
});
const Employee=mongoose.model('employees',EmployeeSchema);



//export module
module.exports=Employee;