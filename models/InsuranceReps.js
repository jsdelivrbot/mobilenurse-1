var shortid = require('shortid');
// use $ and @ instead of - and _ 
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

module.exports = function(sequelize, DataTypes) {
    var InsuranceReps = sequelize.define('InsuranceReps', {
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
            allowNull: true
        },
        firm: {
            type: DataTypes.STRING,
            allowNull: true
        },
        officeAddress: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        repCity: {
            type: DataTypes.STRING,
            allowNull: true
        },
        repState: {
            type: DataTypes.STRING,
            allowNull: true
        },
        repZipCode: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        repOfficePhone: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        repCellPhone: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        assistantEmail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        insuranceRepId: {
            type: DataTypes.STRING,
            allowNull: true,
            primaryKey: true,
            defaultValue: shortid.generate 
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        }
    },{
        //Method to allow Ireps to have many exam requests
    classMethods: {
        associate: function(models) {
            // associating insurance reps with many exams
            models.InsuranceReps.hasMany(models.InsuranceExams, {
                onDelete: "cascade"
            });
            models.InsuranceReps.belongsTo(models.User);
        }
    }
    });

    return InsuranceReps;
};

