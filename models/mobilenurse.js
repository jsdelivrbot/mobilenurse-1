var shortid = require('shortid');
// use $ and @ instead of - and _ 
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

module.exports = function(sequelize, DataTypes) {
    var Examiners = sequelize.define('Examiners', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        homeAddress: {
            type: DataTypes.STRING,
            allowNull: true
        },
        homeCity: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        homeZip: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        professionalTitle: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        mobilePhone: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: true
        },
        examinerID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: shortid.generate
        }
    });

    return Examiners;
}