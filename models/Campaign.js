const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js')

class Campaign extends Model {

}
    
User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quest: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'campaign',
        freezeTableName: true,
    }
)

module.exports = Campaign;