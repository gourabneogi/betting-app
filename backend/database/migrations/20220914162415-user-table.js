"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("user_tables", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.STRING,
            },
            name: {
                type: Sequelize.STRING,
            },
            roleID: { 
                type: Sequelize.INTEGER, 
            },
            token: { 
                type: Sequelize.INTEGER 
            },
            maxShare: {
                type: Sequelize.INTEGER,
            },
            myShare: { 
                type: Sequelize.INTEGER 
            },
            email: { 
                type: Sequelize.STRING 
            },
            password: { 
                type: Sequelize.STRING 
            },
            status: { 
                type: Sequelize.BOOLEAN,
                defaultValue: Sequelize.NOW
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
        await queryInterface.dropTable("user_tables");
    },
};
