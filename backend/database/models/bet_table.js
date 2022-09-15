'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class bet_table extends Model {
        static associate(models) {}
    }
    bet_table.init(
        {
            userID: DataTypes.STRING,
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            matchID: DataTypes.INTEGER,
            date: DataTypes.STRING,
            time: DataTypes.STRING,
            type: DataTypes.STRING,
            betAmount: DataTypes.INTEGER,
            runner: DataTypes.INTEGER,
            profitOrLoss: DataTypes.INTEGER,
            active: DataTypes.BOOLEAN,
        }, 
        {
            sequelize,
            modelName: 'bet_table',
        }
    );
    return bet_table;
};