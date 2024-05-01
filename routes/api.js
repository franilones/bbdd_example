const router = require('express').Router();
const apiEmployeesRouter = require('./api/employeesRoutes');
const apiAuthRouter = require('./api/authenticationRoutes');

router.use('/employees', apiEmployeesRouter);
router.use('/user', apiAuthRouter);

module.exports = router;