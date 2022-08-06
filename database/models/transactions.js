'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Categories, { as: 'category' });
      Product.belongsTo(models.TransactionTypes, { as: 'transactionType' });
      Product.belongsTo(models.Users, { as: 'user' });
    }
  };
  Transactions.init({
    userId: DataTypes.INTEGER,
    concept: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    date: DataTypes.DATE,
    transactionTypeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};