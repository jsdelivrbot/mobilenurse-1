var shortid = require('shortid');
// use $ and @ instead of - and _ 
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

module.exports = function(sequelize, DataTypes) {
    var InsuranceExams = sequelize.define('InsuranceExams', {
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
        clientDOB: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        clientAge: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        clientPhone: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        examLocation: {
            type: DataTypes.STRING,
            allowNull: true
        },
        examStreetAddress:{ 
            type: DataTypes.STRING,
            allowNull: true
        },
        examAptSuite: {
            type: DataTypes.STRING,
            allowNull: true
        },
        examCity: {
            type: DataTypes.STRING,
            allowNull: true
        },
        examState: {
            type: DataTypes.STRING,
            allowNull: true
        },
        examZipCode: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        policyAmount: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        examDate:{
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        examTime: {
            type: DataTypes.TIME,
            allowNull: true
        },
        examType: {
            type: DataTypes.STRING,
            allowNull: true
        },
        examStatus: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Pending Confirmation'
        },
        examid: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: shortid.generate 
        },
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1 
        },
        scheduler: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "none"
        }, 
        tracking: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },
        canceled: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        submitdate: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: true
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        examNotes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        insuranceRepresentative: {
            type: DataTypes.STRING,
            allowNull: true
        },
        insuranceRepresentativeEmail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        insuranceRepresentativeMobile : {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        insuranceRepresentativeOfficePhone: {
            type: DataTypes.BIGINT,
            allowNull: true
        }
      });
  
        return InsuranceExams;
    };