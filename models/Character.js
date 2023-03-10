const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class Character extends Model {

}

Character.init (
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
        race: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        character_class: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subclass: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        alignment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hitpoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        experience_points: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        speed: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        constitution: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        wisdom: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        charisma: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        spells: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cantrips: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        proficiencies: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        personality: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ideals: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bonds: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        flaws: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        modelName: 'character',
        timestamps: false,
        freezeTableName: true,
    }
)

module.exports = Character;