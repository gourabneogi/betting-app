"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("user_block_logging_tables", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userID: {
                type: Sequelize.STRING
            },
            profileBlock: {
                type: Sequelize.BOOLEAN
            },
            bettingBlock: {
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
        await queryInterface.dropTable("user_block_logging_tables");
    },
};
