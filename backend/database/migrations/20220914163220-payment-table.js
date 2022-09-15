"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("payment_tables", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userID: {
                type: Sequelize.STRING,
            },
            credit: {
                type: Sequelize.INTEGER
            },
            debit: {
                type: Sequelize.INTEGER
            },
            allClear: {
                type: Sequelize.INTEGER
            },
            status: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
              },
              updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
              }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("payment_tables");
    },
};
