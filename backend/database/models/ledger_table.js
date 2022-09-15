'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ledger_table extends Model {
        static associate(models) {}
    }
    ledger_table.init(
        {
            userID: DataTypes.STRING,
            MatchID: DataTypes.INTEGER,
            matchEarning: DataTypes.INTEGER,
            commissionEarning: DataTypes.INTEGER,
            lType: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
        }, 
        {
            sequelize,
            modelName: 'ledger_table',
        }
    );
    return ledger_table;
};