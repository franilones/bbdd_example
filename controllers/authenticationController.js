const { registerUser, getAllUsers, getUserId, getUserByEmail } = require('@services/authenticationService');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

const login = async(req, res) => {
    try{
        const user = await getUserByEmail(req.body.email);
        if(!user){
            res.status(404).json({error: 'User not found'});
        }
        if(user.password){
            const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
            if(isPasswordValid){
                const token = createToken(user);

                res.status(200).json({message: 'Login successful', token: token});
            }else{
                res.status(401).json({error: 'Invalid password'});
            }
        }
    }catch{
        res.status(500).json(err);
    }
};

const createToken = (user) =>{
    const payload = {user_id: user.id, username: user.username, email: user.email, role: "admin"};
    const options = {expiresIn: '5m'};

    return jwt.sign(payload, process.env.JWT_SECRET_KEY, options);
}
module.exports = { createUser, getUsers, getUserById, login };