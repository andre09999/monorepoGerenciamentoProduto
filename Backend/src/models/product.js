const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  brand: DataTypes.STRING,
  model: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  color: DataTypes.STRING
},
{
  timestamps: false,
  tableName: "Products",
  underscored: true,
});

module.exports = Product;
