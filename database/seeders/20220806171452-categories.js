'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        id: 1,
        categoryName: 'Ingresos fijos',      
      },
      {
        id: 2,
        categoryName: 'Ingresos ocasionales',      
      },
      {
        id: 3,
        categoryName: 'Viáticos',      
      },
      {
        id: 4,
        categoryName: 'Alimentos y bebidas',      
      },
      {
        id: 5,
        categoryName: 'Víveres',      
      },
      {
        id: 6,
        categoryName: 'Salidas',      
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
