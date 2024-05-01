const router = require('express').Router();
const { getAllEmployees , getEmployeeById, createEmployee, updateEmployeePut, updateEmployeePatch, removeEmployee} = require('@controllers/employeesController');

router.get('/', getAllEmployees);

router.get('/:employeeId', getEmployeeById);

router.post('/', createEmployee);

router.put('/:employeeId',updateEmployeePut);

router.patch('/:id', updateEmployeePatch);

router.delete('/:employeeId', removeEmployee);




module.exports = router;