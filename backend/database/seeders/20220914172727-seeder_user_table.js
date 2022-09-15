'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('user_tables', [
            {
                userID: "BTAP1209202213300001",
                roleID: 1,
                token: -1,
                maxShare: 94,
                myShare: 16,
                name: 'Eliot Elderson',
                email:"admin@bettingapp.onion",
                password: "adminadmin",
                status: true,
            },
            {
                userID: "BTAP1209202213300002",
                name: 'Adam Elderson',
                roleID: 2,
                token: 1000,
                maxShare: 79,
                myShare: 15,
                email:"adam@bettingapp.onion",
                password: "password",
                status: true
            },
            {
                userID: "BTAP1209202213300003",
                name: 'Eva Elderson',
                roleID: 3,
                token: 1000,
                maxShare: 65,
                myShare: 14,
                email:"eva@bettingapp.onion",
                password: "password",
                status: true
            },
            {
                userID: "BTAP1209202213300004",
                name: 'John Elderson',
                roleID: 4,
                token: 1000,
                maxShare: 52,
                myShare: 13,
                email:"john@bettingapp.onion",
                password: "password",
                status: true
            },
            {
                userID: "BTAP1209202213300005",
                name: 'Ralf Elderson',
                roleID: 5,
                token: 1000,
                maxShare: 40,
                myShare: 13,
                email:"ralf@bettingapp.onion",
                password: "password",
                status: true
            },
            {
                userID: "BTAP1209202213300006",
                name: 'David Elderson',
                roleID: 6,
                token: 1000,
                maxShare: 28,
                myShare: 13,
                email:"david@bettingapp.onion",
                password: "password",
                status: true
            },
            {
                userID: "BTAP1209202213300007",
                name: 'William Elderson',
                roleID: 7,
                token: 1000,
                maxShare: 16,
                myShare: 13,
                email:"william@bettingapp.onion",
                password: "password",
                status: true
            },
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('user_tables', null, {});
    }
};
