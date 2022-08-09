'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'German',
        surname: 'Ghio',
        eMail: 'german@gmail.com',
        password: 'init11',
        avatar: null
      },
      {
        id: 2,
        name: 'Martina',
        surname: 'Schmidt',
        eMail: 'martina@gmail.com',
        password: 'init11',
        avatar: null
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
