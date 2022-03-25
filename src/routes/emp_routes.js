const express = require("express");

const router = express.Router();

const User_Controller = require('../controller/emp_controller');

//****create new User */******* */
router.post('/',User_Controller.createNewUser);

//**** User Login ******* 
router.post('/login',User_Controller.login_process);

//**** Book Added *******
router.post('/booksave',User_Controller.book_add);

//**** All Book ********* 
router.get('/all_book',User_Controller.getBookListing);

//**** All Book Edit ********* 
router.get('/edit/:id',User_Controller.getSingleDataGet);

//***** update Book *********
router.put('/edit/:id',User_Controller.updateEmployee);

//***** delete employee *********
router.delete('/delete/:id',User_Controller.deleteEmployee);


module.exports =router;