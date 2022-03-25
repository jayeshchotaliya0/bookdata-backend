
// const Employee = require('../model/emp_model');
const UserModel = require('../model/emp_model'); 

exports.getBookListing = (req,res) =>
{
    UserModel.getAllBook((err , book)=>
    {
        if(err)
         res.send(err);
         res.send(book);
    })
}

//******* single Book Get 
exports.getSingleDataGet = (req,res) =>
{ 
    UserModel.getBookById(req.params.id,(err,book)=>{
        if(err)
        res.send(err);
        console.log('Single Book Data Get');
        res.send(book);
    })
}

//************User Login************* */
exports.login_process = (req,res)=>
{
    const userReqData = new  UserModel(req.body);
    console.log("5555 ",userReqData);

    if(req.body.contructor=== Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : false , message : 'Please fill all Fields'});
    }
    else
    {
      UserModel.login_model(userReqData,(err,employee)=>{
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

//*******Create User */
exports.createNewUser = (req,res)=>
{
    const UserReqData = new  UserModel(req.body);

    if(req.body.contructor=== Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : false , message : 'Please fill all Fields'});
    }
    else
    {
      UserModel.createUser(UserReqData,(err,user)=>{
          if(err)
          {
            res.send(err);
            console.log('Error');
          }
          else
          {
            res.json({status : true, message : 'Employee Created Successfully',data : user });
          }
          
      })
    }
}

// **********Book added *****************
exports.book_add = (req,res)=>
{
    const bookReqData = new  UserModel(req.body);

    if(req.body.contructor=== Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : false , message : 'Please fill all Fields'});
    }
    else
    {
      UserModel.createbook(bookReqData,(err,book)=>{
          if(err)
          {
            res.send(err);
            console.log('error ');
          }
          else
          {
            res.json({status : true, message : 'Employee Created Successfully',data : book });
          }
      })
    }
}

//update employee
exports.updateEmployee = (req,res) =>{
    const employeeReqData = new  UserModel(req.body);

    if(req.body.contructor=== Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : false , message : 'Please fill all Fields'});
    }
    else
    {
      UserModel.updateEmployee(req.params.id,employeeReqData,(err,employee)=>{
          if(err)
            res.send(err);
            res.json({status : true, message : 'Employee Updated Successfully',data : employee });
          
      })
    }
}

//delete employeee
exports.deleteEmployee = (req,res)=>
{
    UserModel.deleteEmployee(req.params.id, (err,employee)=>{
        if(err)
        res.send(err);
        res.json({success : true, message : 'deleted successfully' });
        
    })
}



