const db = require('../config/db.config');
const Sequelize = require('sequelize');

const { Model, DataTypes } = require('sequelize');
const Food = require('./Food');

// class Category extends Model { }
// Category.init({
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// }, {
//     sequelize: db,
//     modelName: 'category',
//     freezeTableName: true
// });

const Category = db.define("category", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image:{
        type: Sequelize.STRING,
        allowNull: true
    }
},{
    freezeTableName: true,
    timestamps: false
});

Food.belongsTo(Category);
Category.hasMany(Food, { foreignKey: 'categoryId' });

module.exports = Category;