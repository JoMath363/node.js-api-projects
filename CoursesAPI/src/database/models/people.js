"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
      People.hasMany(models.Course, {
        foreignKey: "teacher_id"
      });
      People.hasMany(models.Registration, {
        foreignKey: "student_id",
        as: "studentRegistrations"
      });
    }
  }
  People.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "email must have a valid format"
        }
      }},
    cpf: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: "People",
    tableName: "people",
    paranoid: true,
    defaultScope: {
      where: { active: true }
    },
    scopes: {
      all: {
        where: {}
      }
    }
  });
  return People;
};