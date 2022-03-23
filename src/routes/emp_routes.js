const express = require("express");


const router = express.Router();

const EmployeeController = require('../controller/emp_controller');

router.get('/',EmployeeController.getEmployeeList);

router.get('/:id',EmployeeController.getEmployeeById);

//create new Employee
router.post('/',EmployeeController.createNewEmployee);


// update employee

router.put('/:id',EmployeeController.updateEmployee);

// delete employee

router.delete('/:id',EmployeeController.deleteEmployee);



module.exports =router;