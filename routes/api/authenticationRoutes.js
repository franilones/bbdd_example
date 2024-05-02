const router = require("express").Router();
const { createUser, getUsers, getUserById, login } = require('@controllers/authenticationController');

router.get('/', getUsers);

router.post('/register', createUser);

router.get('/:id', getUserById);

router.post('/login', login);

module.exports = router;
