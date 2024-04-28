const router = require('express').Router();
const apiEmployeesRouter = require('./api/employees');

router.use('/employees', apiEmployeesRouter);
module.exports = router;