const { DataTypes } = require('sequelize');
const sequelize = require('../configs/dbConfig.js');
const bcrypt = require('bcryptjs');
const User = sequelize.define( 'User', {
    id: {
        type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    username: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
}, {
    hooks: {
        beforeSave: async (user) =>{
            if(user.password){
                const salt = await bcrypt.genSalt();
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    },
    timestamps: false});

module.exports = User;

