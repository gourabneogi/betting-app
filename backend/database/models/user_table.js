'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user_table extends Model {
        static associate(models) {}
    }
    user_table.init(
        {
            userID: DataTypes.STRING,
            name: DataTypes.STRING,
            roleID: DataTypes.INTEGER,
            token: DataTypes.INTEGER,
            maxShare: DataTypes.INTEGER,
            myShare: DataTypes.INTEGER,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
        }, 
        {
            sequelize,
            modelName: 'user_table',
        }
    );
    return user_table;
};