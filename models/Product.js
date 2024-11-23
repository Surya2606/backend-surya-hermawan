const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');


const Product = sequelize.define('Product', {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    merchantId: { type: DataTypes.INTEGER, allowNull: false },
});

Product.belongsTo(User, { foreignKey: 'merchantId', as: 'merchant' });

module.exports = Product;
