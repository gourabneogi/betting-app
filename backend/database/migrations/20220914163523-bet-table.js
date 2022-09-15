"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("bet_tables", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userID: {
                type: Sequelize.STRING,
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING
            },
            matchID: {
                type: Sequelize.INTEGER
            },
            date: {
                type: Sequelize.STRING,
            },
            time: {
                type: Sequelize.STRING,
            },
            type: {
                type: Sequelize.STRING
            },
            betAmount: {
                type: Sequelize.INTEGER
            },
            runner: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable("bet_tables");
    },
};
