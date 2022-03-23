var pool = require('../../config/db.config');
// var pool = new Pool()


var Employee = function(employee)
{
    console.log("start new Insert data",employee);
    
    this.vFirstname = employee.vFirstname;
    this.vLastname  = employee.vLastname;
    this.vEmail      = employee.vEmail;
    this.vPassword    = employee.vPassword;
}

Employee.getAllEmployee = (result) =>{
    pool.query('select * from  register' , (err,res)=>{
         if(err)
         {
             console.log("employee error",err);
             result(null,err)
         }
         else
         {
             console.log("successfully");

             result(null,res.rows);
         } 
     })
}

//get employee by id
Employee.getEmployeeById = (id,result) =>{

   dbConn.query(`select * from employees where id =?`,id,(err,res)=>
   {
       if(err)
       {
            console.log('get by employee id errro',err);
            result(null,err);
       }
       else
       {
          result(null,res)
       }

   })
}

Employee.createEmployee = (employeeReqData, result) =>
{
    console.log("jkjkkkkkkkk",employeeReqData);
    // const employeeReqDatas = Object.keys(employeeReqData);

    var j = pool.query('insert into register values ($1, $2, $3, $4)',[employeeReqData.vFirstname,employeeReqData.vLastname,employeeReqData.vEmail,employeeReqData.vPassword],(err, res)=>{
        if(err)
        {
            console.log('data insert time errro  ::',err);
            result(null,err);
        }
        else
        {
            console.log('employee insert data successfully');
            result(null,res)
        }
    })


    

    // console.log(j.sql)
}

//Update Employee


Employee.updateEmployee = (id , employeeReqData,result)=>{
    dbConn.query('update employees SET first_name=?,last_name = ?,email=?,phone= ?,organization=?,designation=?,salary=?,status=? WHERE id = ?',[
        employeeReqData.first_name,
        employeeReqData.last_name,
        employeeReqData.email,
        employeeReqData.phone,
        employeeReqData.organization,
        employeeReqData.designation,
        employeeReqData.salary,
        employeeReqData.status,
        id
       ],(err,res)=>{
        if(err){
        console.log('error while updating the employee');
        result(null,err);
        }
        else
        {
            console.log('employee updating Successfully');
            result(null,res);
        }

    });
}

// delete employeee

Employee.deleteEmployee = (id,result) =>
{
    dbConn.query('delete from employees where id=?',[id],(err,res)=>{
        if(err)
        {
            console.log('error While deleting the employee');
            result(null,err);
        }
        else
        {
            result(null,res);
        }
    })
}


module.exports = Employee;