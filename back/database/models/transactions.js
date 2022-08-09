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
      Transactions.belongsTo(models.Categories, { as: 'category' });
      Transactions.belongsTo(models.TransactionTypes, { as: 'transactionType' });
      Transactions.belongsTo(models.Users, { as: 'user' });
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