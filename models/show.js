'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Show.init({
    title: DataTypes.STRING,
    network: DataTypes.STRING,
    imdbRating: DataTypes.FLOAT,
    network_id: DataTypes.INTEGER,
    package_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Show',
  });
  return Show;
};

