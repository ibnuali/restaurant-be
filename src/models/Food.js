const db        = require('../config/db.config');
const Sequelize = require('sequelize');
const Category = require('./Categories');

const Food = db.define("food", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    duration: {
        type: Sequelize.STRING,
        allowNull: true
    },
    price: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports = Food;