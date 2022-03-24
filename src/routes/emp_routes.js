const express = require("express");


const router = express.Router();

const EmployeeController = require('../controller/emp_controller');

router.get('/all_book',EmployeeController.getEmployeeList);

router.get('/edit/:id',EmployeeController.getEmployeeById);

//create new Employee
router.post('/',EmployeeController.createNewEmployee);

router.post('/login_process',EmployeeController.login_process);
router.post('/booksave',EmployeeController.booksave_data);


// update employee

router.put('/edit/:id',EmployeeController.updateEmployee);

// delete employee

router.delete('/delete/:id',EmployeeController.deleteEmployee);



module.exports =router;