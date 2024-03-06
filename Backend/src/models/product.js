const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

  const Product = sequelize.define('Product', {
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
    tableName: "Product",
    underscored: true,
  });
 

module.exports = Product;