'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.artist.hasMany(models.album, {
        foreignKey: {
          name: 'artist_id',
          allowNull: false
        }
      })
    }
  };
  artist.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'artist',
  });
  return artist;
};