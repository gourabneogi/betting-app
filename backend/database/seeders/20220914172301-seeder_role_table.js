'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('role_tables', [
            {
                name:"Admin",
                active: true
            },
            
            {
                name:"Sub Company",
                active: true
            },
            
            {
                name:"Super Master",
                active: true
            },
            
            {
                name:"Super Stockist",
                active: true
            },
            
            {
                name:"Stockist",
                active: true
            },
            
            {
                name:"Super Agent",
                active: true
            },

            {
                name:"Client",
                active: true
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('role_tables', null, {});
    }
};
