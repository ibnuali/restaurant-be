const { Sequelize } = require('sequelize');
const db = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    dialect: 'sqlite',
    host: './src/database/db.sqlite',
});

module.exports = db;