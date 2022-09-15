'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class payment_table extends Model {
        static associate(models) {}
    }
    payment_table.init(
        {
            userID: DataTypes.STRING,
            credit: DataTypes.INTEGER,
            debit: DataTypes.INTEGER,
            allClear: DataTypes.INTEGER,
            status: DataTypes.BOOLEAN,
        }, 
        {
            sequelize,
            modelName: 'payment_table',
        }
    );
    return payment_table;
};