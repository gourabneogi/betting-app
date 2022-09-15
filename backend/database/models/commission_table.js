'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class commission_table extends Model {
        static associate(models) {}
    }
    commission_table.init(
        {
            userId: DataTypes.STRING,
            matchCommission: DataTypes.INTEGER,
            sessionCommission: DataTypes.INTEGER,
            currentLimit: DataTypes.INTEGER,
            usedLimit: DataTypes.INTEGER,
        }, 
        {
            sequelize,
            modelName: 'commission_table',
        }
    );
    return commission_table;
};