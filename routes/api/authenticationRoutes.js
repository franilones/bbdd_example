const router = require("express").Router();
const { createUser, getUsers, getUserById } = require('@controllers/authenticationController');

router.get('/', getUsers);

router.post('/register', createUser);

router.get('/:id', getUserById);

module.exports = router;
