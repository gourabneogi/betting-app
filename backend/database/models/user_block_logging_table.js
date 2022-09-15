'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user_block_logging_table extends Model {
        static associate(models) {}
    }
    user_block_logging_table.init(
        {
            userID: DataTypes.STRING,
            profileBlock: DataTypes.BOOLEAN,
            bettingBlock: DataTypes.BOOLEAN,
        }, 
        {
            sequelize,
            modelName: 'user_block_logging_table',
        }
    );
    return user_block_logging_table;
};