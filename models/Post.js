const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Post extends Model {

}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },    
        user_id: {
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        modelName: 'post',
        timestamps: false,
        freezeTableName: true,
    }
)

module.exports = Post;