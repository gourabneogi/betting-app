'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('match_tables', [
            {
                userID: "BTAP1209202213300003",
                name: "England Women vs India Women",
                description: "3rd T20I",
                date: "15 Sep 2022",
                time: "23:00",
                type: "T-20",
                numberOfBet: 2,
                totalBet: 250,
                wonBy: "",
                declared: "No",
                profitOrLoss: 0.0,
                active: false,
            },
            {
                userID: "BTAP1209202213300005",
                name: "Bangladesh Legends vs New Zealand Legends",
                description: "7th Match",
                date: "15 Sep 2022",
                time: "19:30",
                type: "T-20",
                numberOfBet: 1,
                totalBet: 20,
                wonBy: "abandoned",
                declared: "Yes",
                profitOrLoss: 0.0,
                active: false,
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('match_tables', null, {});
    }
};
