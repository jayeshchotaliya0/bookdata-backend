var pool = require('../../config/db.config');
const crypto = require('crypto');

// var pool = new Pool()
// var token = uid(12);


var Employee = function(employee)
{
    console.log("gg",employee);
    
    this.vFirstname = employee.vFirstname;
    this.vLastname  = employee.vLastname;
    this.vEmail     = employee.vEmail;
    this.vPassword   = employee.vPassword;
    this.Title      = employee.Title;
    this.Author     = employee.Author;
    this.Price      = employee.Price;
}
// var Book = function(book)
// {
//     console.log("start new Insert data",book);
    
//     this.Title      = book.Title;
//     this.Author     = book.Author;
//     this.Price      = book.Price;
// }


Employee.getAllEmployee = (result) =>{
    pool.query('select * from  book' , (err,res)=>{
         if(err)
         {
             console.log("employee error",err);
             result(null,err)
         }
         else
         {
             console.log("successfully");

             result(null,res);
         } 
     })
}

Employee.getEmployeeById = (id,result) =>{

   pool.query(`select * from book where id = $1`,[id],(err,res)=>
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

Employee.login_process_model = (employeeReqData,result) =>{
   
    const token = crypto.randomBytes(48).toString('hex');
  
    pool.query('SELECT * FROM register WHERE vemail=$1 and vpassword=$2',[employeeReqData.vEmail,employeeReqData.vPassword],(err,res)=>
    {
        if(err)
        {
            console.log('get by login data  errro',err);
            result(null,err);
        }
        else
        {
            console.log('Record get Successfully 88888',res.rows.length);
            // result(null,res)
            if(res.rows.length >0)
            {
                result({status : true, message : 'Login data Successfully 1515',data : res.rows ,Token : token});
            }
            else
            {
                result({status : true, message : 'Email and Password Incorrect!'});
            }
            
        }

    })
}


Employee.createEmployee = (employeeReqData, result) =>
{
    const employeeReqDatas = Object.keys(employeeReqData);

    var j = pool.query('insert into register (vfirstname,vlastname,vemail,vpassword) values ($1, $2, $3, $4)', [employeeReqData.vFirstname, employeeReqData.vLastname, employeeReqData.vEmail, employeeReqData.vPassword], (err, res) => {
        if (err) {
            console.log('data insert time errro  ::', err);
            result(null, err);
        } else {
            console.log('User Register successfully');
            result(null, res)
        }
    })
}
// ********************Create New Book Data*******************
Employee.createbook = (employeeReqData, result) =>
{
    const employeeReqDatas = Object.keys(employeeReqData);

    console.log("8888888888",employeeReqData);
    
    var j = pool.query('insert into book (book_title,book_author,price) values ($1, $2, $3)', [employeeReqData.Title, employeeReqData.Author, employeeReqData.Price], (err, res) => {
        if (err) {
            console.log('data insert time errro  ::', err);
            result(null, err);
        } else {
            console.log('Book Added successfully');
            result(null, res)
        }
    })
}


//Update Employee


Employee.updateEmployee = (id , employeeReqData,result)=>{
    pool.query('update book SET book_title=$1,book_author = $2,price=$3 WHERE id = $4',[
        employeeReqData.Title,
        employeeReqData.Author,
        employeeReqData.Price,
        id
       ],(err,res)=>{
        if(err){
        console.log('error while updating the employee',err);
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
    pool.query('delete from book where id = $1',[id],(err,res)=>{
        if(err)
        {
            console.log('error While deleting the employee',err);
            result(null,err);
        }
        else
        {
            console.log('Book Deleted Successfully!');
            result(null,res);
        }
    })

}


module.exports = Employee;