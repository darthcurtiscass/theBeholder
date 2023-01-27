const Sequelsize = require('sequelize');
const { defaultValueSchemable } = require('sequelize/types/utils');
require('dotenv').config();

let sequelize;
if (process.env.JAWSDB_URL) {
sequelize = new Sequelsize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelsize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_URL,
            port: 3306,
            dialect: 'mysql'
        }
    );
}

module.exports = sequelize;

