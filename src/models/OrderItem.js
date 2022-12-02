const db        = require('../config/db.config');
const Sequelize = require('sequelize');
const Food = require('./Food');
const Order = require('./Order');

const OrderItems = db.define("order_items", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    unitPrice: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
},{
    freezeTableName: true,
    timestamps: false
});

Order.belongsToMany(Food, { through: OrderItems });
Food.belongsToMany(Order, { through: OrderItems });

module.exports = OrderItems;