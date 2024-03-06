const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('Users', {
  
  username: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  password: DataTypes.STRING
 
},
{
  timestamps: false,
  tableName: "Users", 
  underscored: true,
});


module.exports = User;
