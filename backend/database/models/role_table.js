'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class role_table extends Model {
        static associate(models) {}
    }
    role_table.init(
        {
            name: DataTypes.STRING,
            maxShare: DataTypes.INTEGER,
            active: DataTypes.BOOLEAN,
        }, 
        {
            sequelize,
            modelName: 'role_table',
        }
    );
    return role_table;
};