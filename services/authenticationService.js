const User = require("@models/usersModel");

const registerUser = async({name, username, email, password }) => {
    try {
        const newUser = new User({name, username, email, password});
        return await newUser.save();
    }catch(err){
        throw err;
    }
}

const getAllUsers = async () =>{
    try{
        return await User.findAll();
    }catch(err){
        throw err;
    }
}

const getUserId = async(id) => {
    try{
        const user = await User.findByPk(id);
        if(!user){
            throw new Error('User not found');
        }
        return user;
    }catch(err){
        throw err;
    }
}


const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({where: {email: email}});
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (err) {
        throw err;
    }
}
module.exports = { registerUser, getAllUsers, getUserById: getUserId, getUserByEmail };