'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('bet_tables', [
            {
                userID: "BTAP1209202213300003",
                name: "Match Winner_471661",
                description: "Central Punjab 6 Over Last Digit Even Odd",
                matchID: 1,
                date: "14 Sep 2022",
                time: "23:00",
                betAmount: 100,
                runner: 2,
                profitOrLoss: 10.0,
                active: true,
            },
            {
                userID: "BTAP1209202213300006",
                name: "6_471673_even_odd",
                description: "Match Winner",
                matchID: 2,
                date: "14 Sep 2022",
                time: "23:00",
                betAmount: 20,
                runner: 5,
                profitOrLoss: 0.0,
                active: true,
            },
            {
                userID: "BTAP1209202213300005",
                name: "15_471673_ending_digit",
                description: "Central Punjab 15 Over Ending Digit",
                matchID: 1,
                date: "15 Sep 2022",
                time: "20:30",
                type: "T-20",
                betAmount: 150,
                runner: 1,
                profitOrLoss: 29.0,
                active: true,
            },
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('bet_tables', null, {});
    }
};
