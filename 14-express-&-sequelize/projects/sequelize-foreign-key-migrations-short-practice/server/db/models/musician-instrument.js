'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MusicianInstrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  musician - instrument.init({
    bandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'musician-instrument',
  });
  return musician - instrument;
};
