'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('commission_tables', [
            {
                userId: "BTAP1209202213300001",
                matchCommission: 1,
                sessionCommission: 1,
                currentLimit: 1000,
                usedLimit: 0,
            },
            {
                userId: "BTAP1209202213300002",
                matchCommission: 2,
                sessionCommission: 2,
                currentLimit: 1000,
                usedLimit: 0,
            },
            {
                userId: "BTAP1209202213300003",
                matchCommission: 2,
                sessionCommission: 2,
                currentLimit: 1000,
                usedLimit: 0,
            },
            {
                userId: "BTAP1209202213300004",
                matchCommission: 2,
                sessionCommission: 2,
                currentLimit: 1000,
                usedLimit: 0,
            },
            {
                userId: "BTAP1209202213300005",
                matchCommission: 2,
                sessionCommission: 1,
                currentLimit: 1000,
                usedLimit: 0,
            },
            {
                userId: "BTAP1209202213300006",
                matchCommission: 1,
                sessionCommission: 1,
                currentLimit: 1000,
                usedLimit: 0,
            },
            {
                userId: "BTAP1209202213300008",
                matchCommission: 1,
                sessionCommission: 2,
                currentLimit: 1000,
                usedLimit: 0,
            },
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('commission_tables', null, {});
    }
};
