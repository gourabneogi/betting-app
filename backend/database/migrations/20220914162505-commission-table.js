"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("commission_tables", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.STRING
            },
            matchCommission: {
                type: Sequelize.INTEGER
            },
            sessionCommission: {
                type: Sequelize.INTEGER
            },
            currentLimit: {
                type: Sequelize.INTEGER
            },
            usedLimit: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable("commission_tables");
    },
};
