'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class match_table extends Model {
        static associate(models) {}
    }
    match_table.init(
        {
            userID: DataTypes.STRING,
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            date: DataTypes.STRING,
            time: DataTypes.STRING,
            type: DataTypes.STRING,
            numberOfBet: DataTypes.INTEGER,
            totalBet: DataTypes.INTEGER,
            wonBy: DataTypes.STRING,
            declared: DataTypes.STRING,
            profitOrLoss: DataTypes.INTEGER,
            active: DataTypes.BOOLEAN,
        }, 
        {
            sequelize,
            modelName: 'match_table',
        }
    );
    return match_table;
};