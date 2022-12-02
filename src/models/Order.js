const db        = require('../config/db.config');
const Sequelize = require('sequelize');
const Food = require('./Food');

const Order = db.define("order", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    orderDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    numberOfTable: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports = Order;