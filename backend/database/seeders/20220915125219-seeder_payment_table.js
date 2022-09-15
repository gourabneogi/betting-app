'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('payment_tables', [
            {
                userID: "BTAP1209202213300001",
                credit: 0,
                debit: 0,
                allClear: 0,
                status: true
            },
            {
                userID: "BTAP1209202213300002",
                credit: 0,
                debit: 0,
                allClear: 0,
                status: true
            },
            {
                userID: "BTAP1209202213300003",
                credit: 0,
                debit: 0,
                allClear: 0,
                status: true
            },
            {
                userID: "BTAP1209202213300004",
                credit: 0,
                debit: 0,
                allClear: 0,
                status: true
            },
            {
                userID: "BTAP1209202213300005",
                credit: 0,
                debit: 0,
                allClear: 0,
                status: true
            },
            {
                userID: "BTAP1209202213300006",
                credit: 0,
                debit: 0,
                allClear: 0,
                status: true
            },
            {
                userID: "BTAP1209202213300007",
                credit: 0,
                debit: 0,
                allClear: 0,
                status: true
            },
            {
                userID: "BTAP1209202213300008",
                credit: 0,
                debit: 0,
                allClear: 0,
                status: true
            },
            {
                userID: "BTAP1209202213300010",
                credit: 0,
                debit: 0,
                allClear: 0,
                status: false
            },
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('payment_tables', null, {});
    }
};
