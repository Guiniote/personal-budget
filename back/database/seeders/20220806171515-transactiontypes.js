'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TransactionTypes', [
      {
        id: 1,
        transactionTypeName: 'Ingresos',      
      },
      {
        id: 2,
        transactionTypeName: 'Egresos',      
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TransactionTypes', null, {});
  }
};
