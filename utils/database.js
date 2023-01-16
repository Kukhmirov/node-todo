const Sequelize = require('sequelize');

const DB_NAME = 'node_test';
const USER_NAME = 'mysql';
const PASSWORD = 'mysql';

const sequelize = new Sequelize(
    DB_NAME,
    USER_NAME,
    PASSWORD,
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }

);

module.exports = sequelize;