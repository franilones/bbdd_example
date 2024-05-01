const { registerUser, getAllUsers, getUserId } = require('@services/authenticationService');

const createUser = async(req, res) =>{
    try{
        const result = await registerUser(req.body);
        res.status(202).status(201).json(result);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

const getUsers = async(req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
}

const getUserById = async (req, res) => {
    try{
        const user = await getUserId(req.params.id);
        if(user){
            res.status(200).json(user);
        }else{
            res.status(404).json({error: 'User not found'});
        }
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports = { createUser, getUsers, getUserById };