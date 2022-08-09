'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Transactions, {
        foreignKey: 'userId',
        as: 'transaction',
      });
    }
  };
  Users.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    eMail: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};