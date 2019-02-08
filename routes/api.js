const express = require('express');
const router=express.Router();
const Employee=require('../models/employee');
//get the list of employees
router.get('/',function(req,res){
    Employee.find({}).then(function(employee){
        console.log("in get");
        res.send(employee);
    });
});


router.get('/:id',function(req,res){
    console.log("find one out");
    let emp_id=req.params.id;
    Employee.findById(emp_id, function (err, employee) {
        console.log("find one");
        res.send(employee);
    });
});

//Add a new employee to database
router.post('/',function(req,res){
//    let employee=new Employee(req.body);
//    employee.save();
    Employee.create(req.body).then(function(employee){
        res.send(
            //type:'POST',
        // name:req.body.name,
        // age:req.body.age,
        // address:req.body.address
        employee
    )
    console.log("in post");
    });
    
})

//update an Employee in database
router.put('/:id',function(req,res){
    console.log("in put");
    Employee.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Employee.findById({_id:req.params.id}).then(function(employee){
            res.send(employee); 
            console.log(employee)   
        })
        
    })
//    res.send({type:'PUT'})
})

//delete a employee from the database
router.delete('/:id',function(req,res){
    console.log("in delete");
    Employee.findByIdAndRemove({_id:req.params.id}).then(function(employee){
        res.send(employee);
    });
//    res.send({type:'DELETE'})
})

//ge only one record based on name
router.get('/:name',function(req,res){
    console.log("in name");
    const emp_name=req.params.name;
    Employee.findOne({"employee_name":emp_name}).then(function(employee){
        res.send(employee);
    });
});




module.exports=router;