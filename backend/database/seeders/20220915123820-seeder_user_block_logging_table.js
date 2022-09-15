'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('user_block_logging_tables', [
            {
                userID: "BTAP1209202213300002",
                profileBlock: true,
                bettingBlock: false,
            },
            {
                userID: "BTAP1209202213300004",
                profileBlock: false,
                bettingBlock: false,
            },
            {
                userID: "BTAP1209202213300005",
                profileBlock: false,
                bettingBlock: false,
            },
            {
                userID: "BTAP1209202213300009",
                profileBlock: false,
                bettingBlock: true,
            },
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('user_block_logging_tables', null, {});
    }
};
