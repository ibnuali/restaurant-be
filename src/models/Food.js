const db        = require('../config/db.config');
const Sequelize = require('sequelize');
// const { Model, DataTypes } = require('sequelize');
const Category = require('./Categories');

// class Food extends Model {}
// Food.init({
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     price: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     categoryId: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     image: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     description: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
// }, {
//     sequelize: db,
//     modelName: 'food',
//     freezeTableName: true
// });

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
    price: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ingredients: {
        type: Sequelize.STRING,
        allowNull: true
    },
},{
    freezeTableName: true,
    timestamps: false
});

// Food.belongsTo(Category, { foreignKey: 'categoryId' });
// Category.hasMany(Food, { foreignKey: 'categoryId' });


module.exports = Food;