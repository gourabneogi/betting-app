'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('ledger_tables', [
            {
                userID: "BTAP1209202213300003",
                MatchID: 1,
                matchEarning: 15.0,
                commissionEarning: 25.0,
                lType: "credit",
                status: false,
            },
            {
                userID: "BTAP1209202213300005",
                MatchID: 1,
                matchEarning: 15.0,
                commissionEarning: 2.0,
                lType: "debit",
                status: false,
            },
            {
                userID: "BTAP1209202213300006",
                MatchID: 2,
                matchEarning: 15.0,
                commissionEarning: 0.0,
                lType: "credit",
                status: false,
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('ledger_tables', null, {});
    }
};
