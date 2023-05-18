'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class add - bandId - to - musicians extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  add - bandId - to - musicians.init({
    bandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'add-bandId-to-musicians',
  });
  return add - bandId - to - musicians;
};