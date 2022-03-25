var pool = require('../../config/db.config');
const crypto = require('crypto');

var Book = function(book)
{
    this.vFirstname = book.vFirstname;
    this.vLastname  = book.vLastname;
    this.vEmail     = book.vEmail;
    this.vPassword  = book.vPassword;
    this.Title      = book.Title;
    this.Author     = book.Author;
    this.Price      = book.Price;
}

//*************** New User Register *********** */
Book.createUser = (UserReqData, result) =>
{
    const employeeReqDatas = Object.keys(UserReqData);

    var j = pool.query('insert into register (vfirstname,vlastname,vemail,vpassword) values ($1, $2, $3, $4)', [UserReqData.vFirstname, UserReqData.vLastname, UserReqData.vEmail, UserReqData.vPassword], (err, res) => {
        if (err) {
            console.log('New User Register Time Error Show :', err);
            result(null, err);
        } else {
            console.log('User Register successfully');
            result(null, res)
        }
    })
}

//************   Login ******************* */
Book.login_model = (userReqData,result) =>
{
    const token = crypto.randomBytes(48).toString('hex');

    pool.query('SELECT * FROM register WHERE vemail=$1 and vpassword=$2',[userReqData.vEmail,userReqData.vPassword],(err,res)=>
    {
        if(err)
        {
            console.log('Login Time  errro',err);
            result(null,err);
        }
        else
        {
            if(res.rows.length >0)
            {
                result({status : true, message : 'Login data Successfully !',data : res.rows ,Token : token});
            }
            else
            {
                result({status : true, message : 'Email and Password Incorrect!'});
            }
        }
    })
}

//************All Book Get **********/
Book.getAllBook = (result) =>{
    pool.query('select * from  book' , (err,res)=>
    {
        if(err)
        {
            console.log("Book Get Time Error",err);
            result(null,err)
        }
        else
        {
            if(res.rows.length >0)
            {
                console.log("All Book Get successfully",res.rows.length);
                result(null,res.rows);
            }
            else
            {
                result(null,'Record Not Found!');
            }
        } 
    })
}

Book.getBookById = (id,result) =>{
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

// ********************Create New Book Data*******************
Book.createbook = (bookReqData, result) =>
{
    const employeeReqDatas = Object.keys(bookReqData);
    pool.query('insert into book (book_title,book_author,price) values ($1, $2, $3)', [bookReqData.Title, bookReqData.Author, bookReqData.Price], (err, res) => {
        if (err) {
            console.log('Book insert time error :', err);
            result(null, err);
        } else {
            console.log('Book Added successfully');
            result(null, res)
        }
    })
}

//Update Employee
Book.updateEmployee = (id , employeeReqData,result)=>{
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
Book.deleteEmployee = (id,result) =>
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

module.exports = Book;