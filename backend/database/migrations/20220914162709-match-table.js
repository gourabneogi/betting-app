"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("match_tables", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userID: {
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.STRING
            },
            time: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.STRING
            },
            numberOfBet: {
                type: Sequelize.INTEGER
            },
            totalBet: {
                type: Sequelize.INTEGER
            },
            wonBy: {
                type: Sequelize.STRING
            },
            declared: {
                type: Sequelize.STRING
            },
            profitOrLoss: {
                type: Sequelize.INTEGER
            },
            active: {
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
        await queryInterface.dropTable("match_tables");
    },
};
