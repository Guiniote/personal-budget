'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Transactions', [
      {
        id: 1,
        userId: 1,
        concept: "Sueldo",
        categoryId: 1,
        amount: 100000.00,
        date: 20220801,
        transactionTypeId: 1
      },
      {
        id: 2,
        userId: 1,
        concept: "Galletitas",
        categoryId: 4,
        amount: 150.00,
        date: 20220802,
        transactionTypeId: 2
      },
      {
        id: 3,
        userId: 1,
        concept: "Coca cola",
        categoryId: 4,
        amount: 200.00,
        date: 20220802,
        transactionTypeId: 2
      },
      {
        id: 4,
        userId: 1,
        concept: "Subte",
        categoryId: 3,
        amount: 40.00,
        date: 20220802,
        transactionTypeId: 2
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transactions', null, {});
  }
};
