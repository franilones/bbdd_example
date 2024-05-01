const router = require('express').Router();
const apiEmployeesRouter = require('./api/employeesRoutes');

router.use('/employees', apiEmployeesRouter);
module.exports = router;