"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("ledger_tables", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userID: {
                type: Sequelize.STRING,
            },
            MatchID: {
                type: Sequelize.INTEGER
            },
            matchEarning: {
                type: Sequelize.INTEGER
            },
            commissionEarning: {
                type: Sequelize.INTEGER
            },
            lType: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("ledger_tables");
    },
};
