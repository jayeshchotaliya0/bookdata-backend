
const Employee = require('../model/emp_model');
const EmployeeModel = require('../model/emp_model'); 

exports.getEmployeeList = (req,res) =>
{
    // console.log("Employee list");
    EmployeeModel.getAllEmployee((err , employee)=>{
        console.log("we are here");

        if(err)
         res.send(err);
         console.log('Employee' , employee);

        
         res.send(employee);
    })
}

// single id get 
exports.getEmployeeById = (req,res) =>
{

    
    EmployeeModel.getEmployeeById(req.params.id,(err,employee)=>{
        if(err)
        res.send(err);
        console.log('single employee data');
        res.send(employee);
        
    })
}

///Create employee


exports.login_process = (req,res)=>
{
    const employeeReqData = new  EmployeeModel(req.body);
    console.log("5555 ",employeeReqData);

    if(req.body.contructor=== Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : false , message : 'Please fill all Fields'});
    }
    else
    {
      EmployeeModel.login_process_model(employeeReqData,(err,employee)=>{
          if(err)
          {
            res.send(err);
            console.log('Login data error controller');

          }
          else
          {
            res.json({status : true, message : 'Login data Successfully',data : employee });
          }
          
      })
    }

}


exports.createNewEmployee = (req,res)=>
{
    const employeeReqData = new  EmployeeModel(req.body);

    console.log("6666 ",employeeReqData);

    if(req.body.contructor=== Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : false , message : 'Please fill all Fields'});
    }
    else
    {
      EmployeeModel.createEmployee(employeeReqData,(err,employee)=>{
          if(err)
          {
            res.send(err);
            console.log('eeeeeeeeeeeeeeeeeeeeeeeeeee');

          }
          else
          {
            res.json({status : true, message : 'Employee Created Successfully',data : employee });
          }
          
      })
    }

}

// **********Book added *****************
exports.booksave_data = (req,res)=>
{
    const employeeReqData = new  EmployeeModel(req.body);

    // console.log("77777 ",req.body);

    if(req.body.contructor=== Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : false , message : 'Please fill all Fields'});
    }
    else
    {
      EmployeeModel.createbook(employeeReqData,(err,employee)=>{
          if(err)
          {
            res.send(err);
            console.log('eeeeeeeeeeeeeeeeeeeeeeeeeee');

          }
          else
          {
            res.json({status : true, message : 'Employee Created Successfully',data : employee });
          }
          
      })
    }

}

//update employee

exports.updateEmployee = (req,res) =>{
    const employeeReqData = new  EmployeeModel(req.body);

    if(req.body.contructor=== Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : false , message : 'Please fill all Fields'});
    }
    else
    {
      EmployeeModel.updateEmployee(req.params.id,employeeReqData,(err,employee)=>{
          if(err)
            res.send(err);
            res.json({status : true, message : 'Employee Updated Successfully',data : employee });
          
      })
    }
}

//delete employeee
exports.deleteEmployee = (req,res)=>
{
    // const employeeReqData = new  EmployeeModel(req.body);
    // console.log("$$$$$$$$$$$",req.params.id);

    EmployeeModel.deleteEmployee(req.params.id, (err,employee)=>{
        if(err)
        res.send(err);
        res.json({success : true, message : 'deleted successfully' });
        
    })
}



