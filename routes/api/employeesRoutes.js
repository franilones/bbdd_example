const router = require('express').Router();
const { getAllEmployees , getEmployeeById, createEmployee, updateEmployeePut, updateEmployeePatch, removeEmployee} = require('@controllers/employeesController');
const authenticateJWTMiddleware = require('@middleware/authenticationJWTMiddleware');

router.get('/', authenticateJWTMiddleware,  getAllEmployees);

router.get('/:employeeId', getEmployeeById);

router.post('/', createEmployee);

router.put('/:employeeId',updateEmployeePut);

router.patch('/:id', updateEmployeePatch);

router.delete('/:employeeId', removeEmployee);




module.exports = router;